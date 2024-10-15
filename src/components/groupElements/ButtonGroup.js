import React, { useState, useEffect } from "react";
import Button from "../elements/Button.js"
function ButtonGroup(props){
      const [message, setMessage] = useState([{}]);
      const [message1, setMessage1] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/allUsers";
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        setMessage(data.result);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, []);
      
  useEffect(() => {
      const getData = async () => {
        const url = "http://localhost:5000/admin/get/allReservationsDates";
    
        try {
          const resp = await fetch (url);
          const data = await resp.json();
          setMessage1(data.result);
        } catch (err) {
          console.error(err);
        }
      }
    
      getData();
    }, []);
      function Edit(){
            if(props.page==='users')
                  {EditUser()}
            else if(props.page==='reservations'){
                  EditReservation()
            }      
      }
      function Delete(){
            if(props.page==='users')
            {DeleteUser()}
            else if(props.page==='reservations'){
            DeleteReservation()
            }
      }
function Add(){
            if(props.page==='users')
            {AddUser()}
            else if(props.page==='reservations'){
            AddReservation()
            }
      }
      function EditUser() {

            let checkboxes = document.getElementsByName('checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                  let UpdatedUserEmail = prompt("Wprowadź nowy email użytkownika", message[i].email);
                  if (UpdatedUserEmail !== null || UpdatedUserEmail !== "") {
                        fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                    table:"users",
                                    user_email:UpdatedUserEmail,
                                    user_id:message[i].id
                              }),
                            })
                            .then(function (response) {
                              console.log(response);
                        })
                        .catch(function (error) {
                              console.log(error);
                        });
                  
                  }}}}
      function EditReservation(){
            let checkboxes = document.getElementsByName('checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                  let UpdatedReservationDate = prompt("Wprowadź nową datę rezerwacji", message1[i].date_of_reservation);
                  if (UpdatedReservationDate!==null||UpdatedReservationDate!=="") {
                        fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                                    table:"reservations_dates",
                                    reservation_date_date_of_reservation:UpdatedReservationDate,
                                    reservation_date_id:message1[i].id,
                                    reservation_date_reservation_id:message1[i].reservation_id,
                                    reservation_date_status_id:message1[i].status_id
                              }),
                            })
                            .then(function (response) {
                              console.log(response);
                        })
                        .catch(function (error) {
                              console.log(error);
                        });
            
            
            }}}}
      

      function DeleteUser() {
            let checkboxes = document.getElementsByName('checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                  fetch('http://localhost:5000/admin/post/receiveRemoveData', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              table:"users",
                              id:message[i].id
                        }),
                })
                .then(function (response) {
                      console.log(response);
                })
                .catch(function (error) {
                      console.log(error);
                });
            }}}

//Działa
      function DeleteReservation(){
            let checkboxes = document.getElementsByName('checkbox');
            for (var i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) {
                  fetch('http://localhost:5000/admin/post/receiveRemoveData', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              table:"reservations",
                              id:message[i].id
                        }),
                })
                .then(function (response) {
                      console.log(response);
                })
                .catch(function (error) {
                      console.log(error);
                });
            
            }}}

      function AddUser(){
            let NewUserEmail = prompt("Wprowadź email nowego użytkownika", "");
            let NewUserPriority = prompt("Wprowadź priorytet nowego użytkownika", "1");
            console.log({
                  "email":NewUserEmail,
                  "priority_group_id":NewUserPriority
            })
            if (NewUserEmail !== null || NewUserEmail !== ""||NewUserPriority!==null||NewUserPriority!=="") {
                  fetch('http://localhost:5000/admin/post/receiveNewUserData', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                        email:NewUserEmail,
                        priority_group_id:NewUserPriority
                        }),
                        
                })
                  .then(function (response) {
                        console.log(response);
                  })
                  .catch(function (error) {
                        console.log(error);
                  });
            }
          
      }
//Will think about it
      function AddReservation(){
            let NewReservationDate = prompt("Dane ", "");
            let NewReservationMonth = prompt("Dane ", "");
            let NewReservationId = prompt("Dane ", "");

            if (NewReservationDate !== null || NewReservationDate !== ""|| NewReservationDate !== null|| NewReservationMonth !== "") {
                   /*fetch('http://localhost:5000/admin/post/receiveNewReservationData', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                        dates:NewReservationDate,
                        month:NewReservationMonth,
                        id:NewReservationId
                        }),
                })
                .then(function (response) {
                      console.log(response);
                })
                .catch(function (error) {
                      console.log(error);
                });*/
            }
      }
      
        
    return (
          <div className="btn-group">
          <Button name="Dodaj" click={Add}/>
          <Button name="Edytuj" click={Edit}/>
          <Button name="Usuń" click={Delete}/>
          </div>
    );
  }
  
  export default ButtonGroup;
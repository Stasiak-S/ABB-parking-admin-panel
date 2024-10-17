import React, { useState, useEffect } from "react";


function Button(props){
    const [AllUsersData, setMessage] = useState([{}]);
    const [AllReservationsData, setMessage1] = useState([{}]);

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
    function Event(){
      if(props.click==="edit")
            {Edit() }
        else if(props.click==="delete")
            {Delete()}
        else if(props.click==="add")
            {Add()
            }
        else if(props.click==="deleteCheckbox")
            {DeleteCheckbox()}
    }

    function Edit(){
        if(props.page==='users')
              {EditUser()}
        else if(props.page==='reservations'){
              EditReservation()
        }      
  }
  function Delete(){
    if (window.confirm('Czy napewno chcesz usunąć dane?')) {
    if(props.page==='users')
    {DeleteUser()}
    else if(props.page==='reservations'){
    DeleteReservation()
    }
}
}
function Add(){
      console.log("działa")
    if(props.page==='users')
    {AddUser()
    }
    else if(props.page==='reservations'){
    AddReservation()
    }
}
function DeleteCheckbox(){
      if (window.confirm('Czy napewno chcesz usunąć dane?')) {
    if(props.page==='users')
    {DeleteCheckboxUser()}
    else if(props.page==='reservations'){
    DeleteCheckboxReservation()
    }
}
}
//Działa
function EditUser() {
          let UpdatedUserEmail = prompt("Wprowadź nowy email użytkownika", AllUsersData[props.value].email);
          if (UpdatedUserEmail !== null || UpdatedUserEmail !== "") {
                fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                            table:"users",
                            user_email:UpdatedUserEmail,
                            user_id:AllUsersData[props.value].id
                      }),
                    })
          
          }
      }

function EditReservation(){
   
          let UpdatedReservationDate = prompt("Wprowadź nową datę rezerwacji", AllReservationsData[props.value].date_of_reservation);
          if (UpdatedReservationDate!==null||UpdatedReservationDate!=="") {
                fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                            table:"reservations_dates",
                            reservation_date_date_of_reservation:UpdatedReservationDate,
                            reservation_date_id:AllReservationsData[props.value].id,
                            reservation_date_reservation_id:AllReservationsData[props.value].reservation_id,
                            reservation_date_status_id:AllReservationsData[props.value].status_id
                      }),
                    })
    
    }}
    function DeleteUser() {
              fetch('http://localhost:5000/admin/post/receiveRemoveData', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                          table:"users",
                          id:AllUsersData[props.value].id
                    }),
            })
        }
        function DeleteReservation(){
                  fetch('http://localhost:5000/admin/post/receiveRemoveData', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                              table:"reservations",
                              id:AllReservationsData[props.value].id
                        }),
                })
            
            }
            function DeleteCheckboxUser(){
                let checkboxes = document.getElementsByName('checkbox');
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                      fetch('http://localhost:5000/admin/post/receiveRemoveData', {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                  table:"user",
                                  id:AllReservationsData[i].id
                            }),
                    })
                
                }}}
  function DeleteCheckboxReservation(){
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
                          id:AllReservationsData[i].id
                    }),
            })
        
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
            }
          
      }

      function AddReservation(){
            let NewReservationDate = prompt("Dane ", "");
            let NewReservationMonth = prompt("Dane ", "");
            let NewReservationId = prompt("Dane ", "");

            if (NewReservationDate !== null || NewReservationDate !== ""|| NewReservationMonth !== null|| NewReservationMonth !== ""|| NewReservationId !== null|| NewReservationId !== "") {
                   fetch('http://localhost:5000/admin/post/receiveNewReservationData', {
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
            }
      }
    return (<button className="button" onClick={Event} page={props.page} id={props.id} value={props.value}>{props.name}</button>);
}
export default Button;
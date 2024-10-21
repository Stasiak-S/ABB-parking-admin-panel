//nie działa
function AddData(props){
  function ClickEvent(){
    if(props.page==="Users"){
        let NewUserEmail = prompt("Wprowadź email nowego użytkownika", "");
        let NewUserPriority = prompt("Wprowadź priorytet nowego użytkownika", "1");
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
            window.location.reload(); 
        }
    }
    else if(props.page==="ReservationsDates")
      {let NewReservationDate = prompt("Wprowadź datę rezerwacji", "");
        let NewReservationMonth = prompt("Wprowadź miesiąc rezerwacji", "");
        let NewReservationId = prompt("Wprowadź id rezerwacji ", "");

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
            window.location.reload(); 
        }
    }
  }
    return (<button className="button" onClick={ClickEvent} page={props.page} id={props.id} value={props.value}>{props.name}</button>);
  }
    export default AddData


function AddData(page){
    if(page==="Users"){
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
        }
    }
    else{let NewReservationDate = prompt("Dane ", "");
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
  }
    export default AddData


function EditData(page, Data, value){
    let DataTable=""
    if(page==="Users"){
        DataTable="users"
        let UpdatedUserEmail = prompt("Wprowadź nowy email użytkownika", Data[value].email);
        if (UpdatedUserEmail !== null || UpdatedUserEmail !== "") {
              fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                          table:DataTable,
                          user_email:UpdatedUserEmail,
                          user_id:Data[value].id
                    }),
                  })
        
        }
    }
    else{DataTable="reservations_dates"
        let UpdatedReservationDate = prompt("Wprowadź nową datę rezerwacji", Data[value].date_of_reservation);
        if (UpdatedReservationDate !== null || UpdatedReservationDate !== "") {
              fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                          table:DataTable,
                          user_email:UpdatedReservationDate,
                          user_id:Data[value].id
                    }),
                  })
        
        }
    }
  }
    export default EditData

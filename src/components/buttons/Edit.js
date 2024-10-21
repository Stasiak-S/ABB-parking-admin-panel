import GetData from "./GetData";
import Edit from "../images/pencil.svg"
function EditData(props){
  let DataTable=""
  const Data=GetData(props.page)
  
  function ClickEvent(){
    if(props.page==="Users"){
        DataTable="users"
        let UpdatedUserEmail = prompt("Wprowadź nowy email użytkownika", Data[props.value].email);
        if (UpdatedUserEmail !== null || UpdatedUserEmail !== "") {
              fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                          table:DataTable,
                          user_email:UpdatedUserEmail,
                          user_id:Data[props.value].id
                    }),
                  })
                  window.location.reload(); 
        }
    }
    else{
      DataTable="reservations_dates"
        let UpdatedReservationDate = prompt("Wprowadź nową datę rezerwacji", Data[props.value].date_of_reservation);
        if (UpdatedReservationDate !== null || UpdatedReservationDate !== "") {
          fetch('http://localhost:5000/admin/post/receiveUpdateData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                  table:DataTable,
                  reservation_date_id:Data[props.value].id,
                  reservation_date_reservation_id:Data[props.value].reservation_id,
                  reservation_date_status_id:Data[props.value].status_id,
                  reservation_date_date_of_reservation:UpdatedReservationDate
            }),
          })
          window.location.reload();  
        }
    }
  }
  return (<button className="LittleButton"  onClick={ClickEvent} page={props.page} id={props.id} value={props.value}><img src={Edit} alt={props.name}/></button>);
  }
    export default EditData

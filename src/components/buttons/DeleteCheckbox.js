import GetData from "./GetData";
import GetDataRequest from "./GetDataRequest";
function DeleteCheckboxData(props){
  let DataTable=""
  let Data
  if(props.page==="ReservationsDates2"){Data=GetDataRequest("ReservationsDates")}
  else{Data=GetData(props.page)}
  function ClickEvent(){
  
    if(props.page==="Users"){DataTable="users"}
    else{DataTable="reservations"}
    let checkboxes = document.getElementsByName('checkbox');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          fetch('http://localhost:5000/admin/post/receiveRemoveData', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                      table:DataTable,
                      id:Data[i].id
                }),
        })
      }
    }window.location.reload();
   } 
   return (<button className="button" onClick={ClickEvent} page={props.page} id={props.id} value={props.value}>{props.name}</button>);
  }

    export default DeleteCheckboxData

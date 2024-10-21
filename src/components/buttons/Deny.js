import GetDataRequest from "./GetDataRequest";
import X from "../images/x.svg"
function DenyData(props){
      let DataTable="reservations_dates"
      let Data=GetDataRequest("ReservationsDates")
  function ClickEvent(){
        fetch('http://localhost:5000/admin/post/receiveRemoveData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    table:DataTable,
                    id:Data[props.value].reservation_id
              }),
      })
      window.location.reload(); 
}
return (<button className="LittleButton" onClick={ClickEvent} page={props.page} id={props.id} value={props.value}><img src={X} alt={props.name}/></button>);
}
    export default DenyData

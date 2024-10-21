import GetDataRequest from "./GetDataRequest";
import CheckMark from "../images/checkmark.svg"
function AcceptData(props){
    const Data=GetDataRequest("ReservationsDates")
    function ClickEvent(){
      const DataTable="reservations_dates"
                fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                            table:DataTable,
                            reservation_date_id:Data[props.value].id,
                            reservation_date_reservation_id:Data[props.value].reservation_id,
                            reservation_date_status_id:1,
                            reservation_date_date_of_reservation:Data[props.value].date_of_reservation
                      }),
                    })
                    window.location.reload(); 
          
      
    }
    return (<button className="LittleButton" onClick={ClickEvent} page={props.page} id={props.id} value={props.value}><img src={CheckMark} alt={props.name} className="LittleImg"/></button>);
    }
      export default AcceptData
  
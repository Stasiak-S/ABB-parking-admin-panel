import GetDataRequest from "./GetDataRequest";
function AcceptCheckboxData(props){
    const Data=GetDataRequest("ReservationsDates")
    function ClickEvent(){

      const DataTable="reservations_dates"
      let checkboxes = document.getElementsByName('checkbox');
      for (var i = 0; i < checkboxes.length; i++) {
          if (checkboxes[i].checked) {
                fetch('http://localhost:5000/admin/post/receiveUpdateData', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                            table:DataTable,
                            reservation_date_id:Data[i].id,
                            reservation_date_reservation_id:Data[i].reservation_id,
                            reservation_date_status_id:1,
                            reservation_date_date_of_reservation:Data[i].date_of_reservation
                      }),
                    })
                }}
                    window.location.reload(); 
          
      
    }
    return (<button className="button" onClick={ClickEvent} page={props.page} id={props.id} value={props.value}>{props.name}</button>);
    }
export default AcceptCheckboxData
  
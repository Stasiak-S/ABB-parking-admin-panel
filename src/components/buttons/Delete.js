import GetData from "../buttons/GetData";
import TrashCan from "../images/trash.svg"
function DeleteData(props){
      let DataTable=""
let Data=GetData(props.page)
  function ClickEvent(){
    if(props.page==="Users"){DataTable="users"}
    else{DataTable="reservations_dates"}
        fetch('http://localhost:5000/admin/post/receiveRemoveData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    table:DataTable,
                    id:Data[props.value].id
              }),
      })
      window.location.reload(); 
}
return (<button className="LittleButton" onClick={ClickEvent} page={props.page} id={props.id} value={props.value}><img src={TrashCan} alt={props.name}/></button>);
}
    export default DeleteData

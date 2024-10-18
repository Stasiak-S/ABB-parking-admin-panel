
function DeleteData(page, Data, value){
    let DataTable=""
    if(page==="Users"){DataTable="users"}
    else{DataTable="reservations_dates"}
        fetch('http://localhost:5000/admin/post/receiveRemoveData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                    table:DataTable,
                    id:Data[value].reservation_id
              }),
      })
  
}
    export default DeleteData

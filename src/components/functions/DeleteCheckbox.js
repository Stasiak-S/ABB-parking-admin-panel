
function DeleteCheckboxData(page, Data){
    let DataTable=""
    if(page==="Users"){DataTable="users"}
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
    
    }}}
    export default DeleteCheckboxData

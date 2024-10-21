import CheckBox from "../elements/Checkbox";
import DisplayContent from "./DisplayTableContent.js";
import EditData from "../buttons/Edit.js";
import DeleteData from "../buttons/Delete.js";
import DenyData from "../buttons/Deny.js";
import AcceptData from "../buttons/Accept.js";
function NewTable(item, index, name, onChange, page){
  if(page==="ReservationsDates2"){
    return(<tr key={index}>
    <CheckBox name={name} id={`checkbox`} value={index} CheckBoxOnChange={onChange}/>
    {Object.keys(item).map((key) => (
      DisplayContent(key, item, index, page)
    ))}
    <td><DenyData name="Odmów" page={page} id={`button`} value={index}/>
    <AcceptData name="Akceptuj" page={page} id={`button`} value={index}/></td>
    
  </tr> )
  }
    return (
        <tr key={index}>
          <CheckBox name={name} id={`checkbox`} value={index} CheckBoxOnChange={onChange}/>
          {Object.keys(item).map((key) => (
            DisplayContent(key, item, index, page)
          ))}
          <td><DeleteData name="Usuń" page={page} id={`button`} value={index}/>
          <EditData name="Edytuj" page={page} id={`button`} value={index}/></td>
          
        </tr>
      );
  };
  export default NewTable;
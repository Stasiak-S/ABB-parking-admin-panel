import CheckBox from "../elements/Checkbox";
import Button from "../elements/Button.js";
import DisplayContent from "./DisplayTableContent.js";
function NewTable(item, index, name, onChange, page){
    return (
        <tr key={index}>
          <CheckBox name={name} id={`checkbox`} value={index} CheckBoxOnChange={onChange}/>
          {Object.keys(item).map((key) => (
            DisplayContent(key, item, index)
          ))}
          <td><Button name="Usuń" click="delete" page={page} id={`button`} value={index}/>
          <Button name="Edytuj" click="edit" page={page} id={`button`} value={index}/></td>
          
        </tr>
      );
  };
  export default NewTable;
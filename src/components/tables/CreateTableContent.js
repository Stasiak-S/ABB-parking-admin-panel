import CheckBox from "../elements/Checkbox";
function NewTable(item, index, name, onChange){
    return (
        <tr key={index}>
          <CheckBox name={name} id={`checkbox`} value={index} CheckBoxOnChange={onChange}/>
          {Object.keys(item).map((key) => (
            <td key={key} id={index+key}>{item[key]}</td>
          ))}
        </tr>
      );
  };
  export default NewTable;
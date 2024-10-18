import React from "react";
import Error from "../elements/Error.js";
import {useState} from "react";
import ButtonGroup from "../groupElements/ButtonGroup.js";
import CreateTable from "../tables/CreateTable";
 function Pagiton(props){

    const [numbers, setNumbers]=useState(0);
    if(Object.keys(props.PageInfo).length!==0)  
        {
    
     if(numbers<0){setNumbers(0)}
     else if (numbers>(Math.ceil(props.PageInfo.length/props.CountPages))-1){setNumbers(numbers-1)}
     let LoadedTable=props.PageInfo.slice(numbers*props.CountPages, (numbers+1)*props.CountPages);
     let buttons=[];  
     for (let i=0; i<Math.ceil(props.PageInfo.length/props.CountPages);i++)
        { buttons.push(
        <button className="paginationButton" onClick={()=>setNumbers(i)} key={i}>{i+1}</button>
    )};
return (     
        <div>
                
                <CreateTable name={props.name} message={LoadedTable} page={props.Page}/>
                <div className="container">
                <div className="pagination">
                <button className="paginationButton" id="first" onClick={()=>setNumbers(0)}>First</button>
                <button className="paginationButton" id="prev"onClick={()=>setNumbers(numbers-1)}>Previous</button> 
                <div>
                {buttons}       
                </div>
                <button className="paginationButton" id="next"onClick={()=>setNumbers(numbers+1)}>Next</button>       
                <button className="paginationButton" id="last" onClick={()=>setNumbers(Math.ceil(props.PageInfo.length/props.CountPages)-1)}>Last</button>       
                </div>
                <p className="paginationText">Pokazano {LoadedTable.length} z {props.PageInfo.length} rekordów</p>
                <ButtonGroup page={props.Page} isDisabled={false}/>
                </div>
                </div>
                ); }
                else{  return(
                    <div>
                        <Error text="Chwilowo nie ma żadnych rekordów"/>
                        <ButtonGroup page={props.Page} isDisabled={true}/>
                    </div>
                  )}
            }
export default Pagiton
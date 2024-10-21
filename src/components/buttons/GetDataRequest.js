import React, { useState, useEffect } from "react";

function GetDataRequest(page){

const [Data, setMessage] = useState([{}]);
useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/all"+page;
  
      try {
        const resp = await fetch (url);
        var data = await resp.json();
        for (let i = 0; i < Object.keys(data.result).length; i++) 
            {
                if(data.result[i].status==="Accepted"){
                data.result.splice(i, 1)
          }}
          setMessage(data.result);
        
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [page]);
  return Data
}
export default GetDataRequest
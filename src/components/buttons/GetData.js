import React, { useState, useEffect } from "react";

function GetData(page){

const [Data, setMessage] = useState([{}]);
useEffect(() => {
    const getData = async () => {
      const url = "http://localhost:5000/admin/get/all"+page;
  
      try {
        const resp = await fetch (url);
        const data = await resp.json();
        setMessage(data.result);
      } catch (err) {
        console.error(err);
      }
    }
    getData();
  }, [page]);
  return Data
}
export default GetData
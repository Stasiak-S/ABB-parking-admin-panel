function NewHeader(key){
    if(key!=="id"& key!=="reservation_id")
    {const PrettierKey=key[0].toUpperCase()+key.substr(1);
    const PrettiestKey=PrettierKey.replaceAll("_", " ");
    return (
        <th key={key}>{PrettiestKey}</th>
      );}
  };
  export default NewHeader;
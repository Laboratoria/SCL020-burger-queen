function MenuItem({ name }) {
    return (
        <button onClick = {console.log('OK')} className="buttonOptions">{name}</button>
    );
  }
  
  export default MenuItem;
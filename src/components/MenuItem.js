
function MenuItem({ name, creatingOrder }) {
    
    return (
        <button onClick= {() => creatingOrder(name)} className="buttonOptions">{name}</button>
    );
  }
  
  export default MenuItem;
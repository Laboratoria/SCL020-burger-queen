
function MenuItem({ name, creatingOrder, price, id }) {
    
    return (
        <button onClick= {() => creatingOrder(name, price, id)} className="buttonOptions">{name}</button>
    );
  }
  
  export default MenuItem;
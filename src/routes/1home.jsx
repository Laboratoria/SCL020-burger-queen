import {Link} from "react-router-dom";
const Home= () => {
    return (
      <>
      <div class= "home">
        <main>
         
          <div class="title">
            <h1 className="text-3xl font-bold underline">Burger Queen </h1>
            </div>
            <div class="subtitle">
            <p>Food ordering App</p>
            </div>
            
        </main>
        <nav class="btnContinuar">
          <Link to="/login">Continuar</Link>
        </nav>
        </div>
      </>
    );
  }
  export default Home

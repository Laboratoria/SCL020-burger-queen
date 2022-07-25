import {Link} from "react-router-dom";
const Home= () => {
    return (
      <>
        <main>
            <h1 className="text-3xl font-bold underline">Burger Queen </h1>
            <p>Food ordering App</p>
           
        </main>
        <nav>
          <Link to="/login">Continuar</Link>
        </nav>
      </>
    );
  }
  export default Home

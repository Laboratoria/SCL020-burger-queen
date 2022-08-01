import { Link } from "react-router-dom";
// const logo = require.context ('../../assets/img', true);

const Home = () => {
  

  return (
    <>
      <div class="home">
        <main>

          <div class="title">
          {/* <img src={logo (`./lemons.png'`)} /> */}
            <h1 className="text-3xl font-bold underline">Lemon Restaurant </h1>
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
// 
// 
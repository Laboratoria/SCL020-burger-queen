import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/lemons.png';
import { LockClosedIcon } from '@heroicons/react/solid'
const Login = () => {
  return (
    <>
      <main className="login">
        <div class="logo">
          <img src={logo} alt="logo" />
          <h1 className="textLogo">Lemon Restaurant </h1>
        </div>
        <div>
          <h2 className="signIn">Ingresa a tu cuenta</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
              />
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Olvidaste tu contraseña
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {/*  */}
              Sign in
            </button>
          </div>
        </form>
        {/* </div>
      </div> */}
      </main>
      <nav>
        <Link to="/menu">Ingresar</Link>
      </nav>
    </>
  );
}
export default Login

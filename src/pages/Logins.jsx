// import { useState } from "react";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Logins = () => {
  return (
    <div>
      <h2>Se connecter</h2>
      <div>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Adresse email"
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
          />
          |<br />
          <div>
            <input type="submit" value="Se connecter" />
            <br />
            <Link htmlFor="">Pas encore de compte? Inscrit-toi!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logins;

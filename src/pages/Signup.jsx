import { useState } from "react";
// import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [newsletter, setNewsletter] = useState("");

const Signup = () => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "newsletter") {
      setNewsletter(false);
    }
  };
  return (
    <div>
      <h2>S'inscrire</h2>
      <form>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          id="username"
          value={username}
          onChange={(e) => handleInputChange(e)}
        />
        <br />
        <input
          type="email"
          placeholder="Ton email"
          id="email"
          value={email}
          onChange={(e) => handleInputChange(e)}
        />
        <br />
        <input
          type="password"
          placeholder="Ton password"
          id="password"
          value={password}
          onChange={(e) => handleInputChange(e)}
        />
        <br />
        <div>
          <input type="checkbox" id="newsletter" value={newsletter} />
          <label htmlFor="newsletter">S'inscrire à la newsletter</label>
          <br />
          <p>En m'inscrivant blablablabla....</p>
        </div>
        <div>
          <input type="submit" value="S'inscrire" />
          <br />
          <Link to="/login">Tu as déjà un compte? Connecte-toi!</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;

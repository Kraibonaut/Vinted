import "./App.css";
// import { useState } from "react";
import Signup from "./pages/Signup";
import Logins from "./pages/Logins";
import Publish from "./pages/publish";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./pages/Payment";
import { BrowserRouter as Routes, Route } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
    // <Publish />
      <Routes>
        <Route path="/login" element={<Logins />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
    <Route path="/publish" element = {<Publish />}></Route>
    <Route path="/payment" element={<Payment />}></Route>
      </Routes>
  );
}

export default App;

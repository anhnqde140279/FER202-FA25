import React from "react";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import LoginForm from "./components/LoginForm";
import LoginForm2 from "./components/LoginForm2";
import SearchItem from "./components/SearchItem";
import AccountSearch from "./components/AccountSearch";
import RegisterForm from "./components/RegisterForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center mb-4 text-primary">React useState Exercises</h1>
      <CounterComponent />
      <hr />
      <LightSwitch />
      <hr />
      <LoginForm />
      <hr />
      <LoginForm2 />
      <hr />
      <SearchItem />
      <hr />
      <AccountSearch />
      <hr />
      <RegisterForm />
    </div>
  );
}
export default App;

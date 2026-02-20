import { useState } from "react";
import RegisterForm from "./RegisterForm";
import HomePage from "./HomePage";
import "./RegisterForm.css";
import logo from "./assets/logo.jpg";

export default function App() {
  const [page, setPage] = useState("register");

  return (
    <>
      <HomePage />
    </>
  );
}

import RegisterForm from "./RegisterForm";
import "./RegisterForm.css";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <div className="layout">
      <div className="left-side">
        <img src={logo} alt="Логотип AI-платформы" className="logo" />
        <h1>Открой Для Себя Мир AI-Моделей</h1>
        <p>
          Присоединяйтесь к 48,000+ пользователям платформы и начните создавать
          свои AI-модели уже сегодня!
        </p>
      </div>

      <div className="right-side">
        <RegisterForm />
      </div>
    </div>
  );
}

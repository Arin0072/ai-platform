import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-layout">
      <aside className="sidebar">
        <h2 className="brand">Pinky</h2>

        <nav>
          <ul>
            <li className="active">Лента</li>
            <li>Мои модели</li>
            <li>Избранное</li>
            <li>Профиль</li>
          </ul>
        </nav>
      </aside>

      <main className="feed">
        <h1>Лента моделей</h1>

        <div className="post">
          <h3>AI Girl v2.1</h3>
          <p>
            Новая версия модели с улучшенной генерацией изображений и
            эмоциональной адаптацией.
          </p>
        </div>

        <div className="post">
          <h3>Cyber Assistant Pro</h3>
          <p>
            Голосовой AI-помощник с возможностью кастомизации личности и
            поведения.
          </p>
        </div>
      </main>
    </div>
  );
}

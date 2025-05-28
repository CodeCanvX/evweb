// Подключаем все стили в одном месте:
import "./styles/main.scss";

// Импорт компонента (JS)
import Nav from "./components/Nav/Nav.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";

// Находим корневой элемент
const app = document.querySelector("#app");

// Вставляем компонент
app.appendChild(Nav());
app.appendChild(Header());
app.appendChild(Main());

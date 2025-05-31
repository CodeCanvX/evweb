import "./styles/main.scss";

import Nav from "./components/Nav/Nav.js";
import Header from "./components/Header/Header.js";
import Main from "./components/Main/Main.js";
import Footer from "./components/Footer/Footer.js";

const preloadLink = document.createElement("link");
preloadLink.rel = "preload";
preloadLink.as = "image";
preloadLink.href = new URL("./assets/GAZ.webp", import.meta.url).href;
preloadLink.type = "image/webp";
document.head.appendChild(preloadLink);

const app = document.querySelector("#app");

app.appendChild(Nav());
app.appendChild(Header());
app.appendChild(Main());
app.appendChild(Footer());

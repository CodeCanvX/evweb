export default function Header() {
  const header = document.createElement("header");
  header.className = "header";

  const mainHeaderArticle = document.createElement("article");
  mainHeaderArticle.className = "main-header-article";

  // Левая часть
  const leftSection = document.createElement("section");
  leftSection.className = "left-section";

  const firstText = document.createElement("div");
  firstText.className = "first-text";
  firstText.textContent = "Услуги эвакуатора";

  const secondText = document.createElement("div");
  secondText.className = "second-text";
  secondText.textContent =
    "Круглосуточная и безопасная перевозка вашего автомобиля по Луганску и области.";

  const link = document.createElement("a");
  link.href = "tel:+00000000000";
  link.className = "evakuator-button";
  link.textContent = "Вызвать эвакуатор";

  leftSection.append(firstText, secondText, link);

  // Правая часть
  const rightSection = document.createElement("section");
  rightSection.className = "right-section";

  // Находим заранее вставленное изображение
  const headerImage = document.getElementById("header-image");
  if (headerImage) {
    headerImage.style.display = "block"; // показать, если было скрыто
    rightSection.appendChild(headerImage);
  }

  mainHeaderArticle.append(leftSection, rightSection);
  header.appendChild(mainHeaderArticle);

  return header;
}

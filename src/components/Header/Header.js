export default function () {
  const header = document.createElement("header");
  header.className = "header";

  const mainHeaderArticle = document.createElement("article");
  mainHeaderArticle.className = "main-header-article";

  const leftSection = document.createElement("section");
  leftSection.className = "left-section";

  const firstText = document.createElement("div");
  firstText.className = "first-text";
  firstText.textContent = "Услуги эвакуатора";

  const secondText = document.createElement("div");
  secondText.className = "second-text";
  secondText.textContent =
    "Круглосуточная и безопасная перевозка ваше автомобиля по Луганску и области.";

  const link = document.createElement("a");
  link.href = "tel:+00000000000";
  link.textContent = "Вызвать эвакуатор";
  link.className = "evakuator-button";

  const rightSection = document.createElement("section");
  rightSection.className = "right-section";

  const backgroundImage = document.createElement("img");
  backgroundImage.className = "header-image";
  backgroundImage.src = new URL("../../assets/GAZ.png", import.meta.url).href;
  backgroundImage.alt = "Фото эвакуатора";

  leftSection.appendChild(firstText);
  leftSection.appendChild(secondText);
  leftSection.appendChild(link);

  rightSection.appendChild(backgroundImage);

  mainHeaderArticle.appendChild(leftSection);
  mainHeaderArticle.appendChild(rightSection);

  header.appendChild(mainHeaderArticle);

  return header;
}

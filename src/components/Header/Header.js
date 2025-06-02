// export default function Header() {
//   const header = document.createElement("header");
//   header.className = "header";

//   const mainHeaderArticle = document.createElement("article");
//   mainHeaderArticle.className = "main-header-article";

//   // Левая часть
//   const leftSection = document.createElement("section");
//   leftSection.className = "left-section";

//   const firstText = document.createElement("div");
//   firstText.className = "first-text";
//   firstText.textContent = "Услуги эвакуатора";

//   const secondText = document.createElement("div");
//   secondText.className = "second-text";
//   secondText.textContent =
//     "Круглосуточная и безопасная перевозка вашего автомобиля по Луганску и области.";

//   const link = document.createElement("a");
//   link.href = "tel:+00000000000";
//   link.className = "evakuator-button";
//   link.textContent = "Вызвать эвакуатор";

//   leftSection.append(firstText, secondText, link);

//   // Правая часть
//   const rightSection = document.createElement("section");
//   rightSection.className = "right-section";

//   // Элемент picture с WebP и fallback
//   const picture = document.createElement("picture");

//   const source = document.createElement("source");
//   source.srcset = new URL("../../assets/GAZ.webp", import.meta.url).href;
//   source.type = "image/webp";

//   const img = document.createElement("img");
//   img.src = new URL("../../assets/GAZ.jpg", import.meta.url).href;
//   img.alt = "Фото эвакуатора";
//   img.className = "header-image";
//   img.loading = "eager";
//   img.decoding = "async";
//   img.width = 700;
//   img.height = 500;

//   picture.append(source, img);
//   rightSection.appendChild(picture);

//   // Собираем весь header
//   mainHeaderArticle.append(leftSection, rightSection);
//   header.appendChild(mainHeaderArticle);

//   return header;
// }

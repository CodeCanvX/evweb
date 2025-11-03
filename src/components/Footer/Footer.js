export default function Footer() {
  const footer = document.createElement("footer");
  footer.className = "footer";

  const articleFooter = document.createElement("article");
  articleFooter.className = "article-footer";

  const leftSection = document.createElement("section");
  leftSection.className = "left-section";

  const titleLeftSection = document.createElement("div");
  titleLeftSection.className = "title-left-section";
  titleLeftSection.textContent = "КОНТАКТЫ";

  const phoneContainer = document.createElement("div");
  phoneContainer.className = "phone-container container";

  const phoneIcon = document.createElement("img");
  phoneIcon.className = " icon-kontakt";
  phoneIcon.src = new URL(
    "../../assets/solidphoneyel.svg",
    import.meta.url
  ).href;
  phoneIcon.alt = "Phone";

  const phoneLink = document.createElement("a");
  phoneLink.className = "phone-number";
  phoneLink.href = "tel:+00000000000";
  phoneLink.textContent = "+0 (000) 000-00-00";

  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phoneLink);

  const emailContainer = document.createElement("div");
  emailContainer.className = "email-container container";

  const emailIcon = document.createElement("img");
  emailIcon.className = " icon-kontakt";
  emailIcon.src = new URL("../../assets/mail.svg", import.meta.url).href;
  emailIcon.alt = "Mail";

  const emailLink = document.createElement("a");
  emailLink.className = "email";
  emailLink.href = "mailto:info@evokuator181.ru";
  emailLink.textContent = "info@evokuator181.ru";

  emailContainer.appendChild(emailIcon);
  emailContainer.appendChild(emailLink);

  leftSection.appendChild(titleLeftSection);
  leftSection.appendChild(phoneContainer);
  leftSection.appendChild(emailContainer);

  const rightSection = document.createElement("section");
  rightSection.className = "right-section";

  const mapContainer = document.createElement("div");
  mapContainer.id = "map";
  mapContainer.className = "maps";

  rightSection.appendChild(mapContainer);

  articleFooter.append(leftSection, rightSection);
  footer.appendChild(articleFooter);

  // Вставляем footer сразу в DOM
 

  // Подключаем скрипт Яндекс.Карт
  const ymapsScript = document.createElement("script");
  ymapsScript.src =
    "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=5278004d-10ba-462d-bd1b-c827e2d44b97";
  ymapsScript.onload = () => {
    // После загрузки и ready карты
    window.ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: [48.574041, 39.307815],
        zoom: 10,
      });

      const placemark = new ymaps.Placemark([48.574041, 39.307815], {
        hintContent: "Луганск",
        balloonContent: "Мы здесь!",
      });

      map.geoObjects.add(placemark);
    });
  };
  document.head.appendChild(ymapsScript);

  return footer;
}

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

  const phoneIcon = document.createElement("i");
  phoneIcon.className = "fa-solid fa-phone icon-kontakt";

  const phoneLink = document.createElement("a");
  phoneLink.className = "phone-number";
  phoneLink.href = "tel:+00000000000";
  phoneLink.textContent = "+0 (000) 000-00-00";

  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phoneLink);

  const emailContainer = document.createElement("div");
  emailContainer.className = "email-container container";

  const emailIcon = document.createElement("i");
  emailIcon.className = "fa-solid fa-envelope icon-kontakt";

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

  const maps = document.createElement("iframe");
  maps.className = "maps";
  maps.src = "https://yandex.ru/map-widget/v1/?ll=39.3078,48.5740&z=10";
  maps.setAttribute("allowfullscreen", "");
  maps.loading = "lazy";

  rightSection.appendChild(maps);

  articleFooter.appendChild(leftSection);
  articleFooter.appendChild(rightSection);
  footer.appendChild(articleFooter);

  return footer;
}

import Reviews from "./Reviews.js";

export default function Main() {
  const main = document.createElement("main");
  main.className = "main";

  const mainArticle = document.createElement("article");
  mainArticle.className = "main-article";

  const sectionAboutUs = document.createElement("section");
  sectionAboutUs.className = "section-about-us";

  const aboutUsTitle = document.createElement("div");
  aboutUsTitle.className = "about-us-title title-main";
  aboutUsTitle.textContent = "О НАС";

  const aboutUsText = document.createElement("div");
  aboutUsText.className = "about-us-text";
  aboutUsText.textContent =
    "Наша компания предоставляет услуги эвакуации автомобилей в Луганске и области. Работаем круглосуточно, быстро реагируем на вызовы и обеспечиваем безопасность транспортировки. В распоряжении — современный автопарк и опытные водители. Эвакуируем легковые авто, внедорожники и технику до 3 тонн. Работаем с частными и юридическими лицами. С нами — надёжно и вовремя.";

  sectionAboutUs.appendChild(aboutUsTitle);
  sectionAboutUs.appendChild(aboutUsText);

  const sectionServices = document.createElement("section");
  sectionServices.className = "section-services";

  const servicesTitle = document.createElement("div");
  servicesTitle.className = "services-title title-main";
  servicesTitle.textContent = "НАШИ УСЛУГИ";

  const containerServicesList = document.createElement("ul");
  containerServicesList.className = "container-services-list list";

  const createServiceItem = (svgName, text, listClass, txtClass) => {
    const li = document.createElement("li");
    li.className = listClass;

    const icon = document.createElement("img");
    icon.className = "icon-list";
    icon.src = new URL(`../../assets/${svgName}`, import.meta.url).href;
    icon.alt = text;

    const txt = document.createElement("div");
    txt.className = txtClass;
    txt.textContent = text;

    li.appendChild(icon);
    li.appendChild(txt);
    return li;
  };

  containerServicesList.appendChild(
    createServiceItem(
      "clock.svg",
      "РАБОТАЕМ КРУГЛОСУТОЧНО",
      "first-block-list block-list",
      "first-text-list text-list"
    )
  );
  containerServicesList.appendChild(
    createServiceItem(
      "towing.svg",
      "Приедем к вам за 15–30 минут",
      "second-block-list block-list",
      "second-text-list text-list"
    )
  );
  containerServicesList.appendChild(
    createServiceItem(
      "car.svg",
      "Эвакуируем авто до 3,5 тонн",
      "third-block-list block-list",
      "third-text-list text-list"
    )
  );
  containerServicesList.appendChild(
    createServiceItem(
      "wallet.svg",
      "Наличный и безналичный расчёт",
      "fourth-block-list block-list",
      "fourth-text-list text-list"
    )
  );

  sectionServices.appendChild(servicesTitle);
  sectionServices.appendChild(containerServicesList);

  const sectionFoto = document.createElement("section");
  sectionFoto.className = "section-foto";

  const titleFoto = document.createElement("div");
  titleFoto.className = "title-foto title-main";
  titleFoto.textContent = "ВЫПОЛНЯЕМ ЗАКАЗЫ";

  const containerFoto = document.createElement("div");
  containerFoto.className = "container-foto";

  const fotos = [
    { class: "first-foto foto", src: "ev.jpg", alt: "Центр города" },
    { class: "second-foto foto", src: "ev.jpg", alt: "Жилой район" },
    { class: "third-foto foto", src: "ev.jpg", alt: "Трасса" },
    { class: "fourth-foto foto", src: "ev.jpg", alt: "Промзона" },
    { class: "fiveth-foto foto", src: "ev.jpg", alt: "Ночной вызов" },
    { class: "sixth-foto foto", src: "ev.jpg", alt: "Пригород" },
  ];

  fotos.forEach(({ class: className, src, alt }) => {
    const img = document.createElement("img");
    img.className = className;
    img.src = new URL(`../../assets/${src}`, import.meta.url).href;
    img.alt = alt;
    containerFoto.appendChild(img);
  });

  sectionFoto.appendChild(titleFoto);
  sectionFoto.appendChild(containerFoto);

  const sectionStage = document.createElement("section");
  sectionStage.className = "section-stage";

  const stageSectionTitle = document.createElement("div");
  stageSectionTitle.className = "stage-section-title title-main";
  stageSectionTitle.textContent = "ЭТАПЫ ЭВАКУАЦИИ";

  const containerStageList = document.createElement("ul");
  containerStageList.className = "container-stage-list list";

  containerStageList.appendChild(
    createServiceItem(
      "phone.svg",
      "Звонок диспетчеру",
      "first-block-list-stage block-list",
      "first-text-list-stage text-list-stage"
    )
  );
  containerStageList.appendChild(
    createServiceItem(
      "towing.svg",
      "Погрузка автомобиля",
      "second-block-list-stage block-list",
      "second-text-list-stage text-list-stage"
    )
  );
  containerStageList.appendChild(
    createServiceItem(
      "towed.svg",
      "Доставка до места",
      "third-block-list-stage block-list",
      "third-text-list-stage text-list-stage"
    )
  );
  containerStageList.appendChild(
    createServiceItem(
      "check.svg",
      "Оплата услуг",
      "fourth-block-list-stage block-list",
      "fourth-text-list-stage text-list-stage"
    )
  );

  sectionStage.appendChild(stageSectionTitle);
  sectionStage.appendChild(containerStageList);

  const orderSection = document.createElement("section");
  orderSection.className = "order-section";

  const link = document.createElement("a");
  link.href = "tel:+00000000000";
  link.textContent = "Вызвать эвакуатор";
  link.className = "evakuator-button";

  orderSection.appendChild(link);

  const telefonPopUpButton = document.createElement("div");
  telefonPopUpButton.className = "telefon-pop-up-button";

  const iconPopUp = document.createElement("i");
  iconPopUp.className = "fa-solid fa-phone";
  telefonPopUpButton.appendChild(iconPopUp);

  const telefonWindow = document.createElement("div");
  telefonWindow.className = "telefon-window";

  const logoNav = document.createElement("div");
  logoNav.className = "logo-nav";

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "×";

  const logoWindow = document.createElement("div");
  logoWindow.className = "logo-window";
  logoWindow.textContent = "EVACUATOR.181";

  logoNav.appendChild(closeBtn);
  logoNav.appendChild(logoWindow);

  const popupContent = document.createElement("div");
  popupContent.className = "popup-content";
  popupContent.textContent = "Звоните, договоримся!";

  const secondPopupContent = document.createElement("div");
  secondPopupContent.className = "second-popup-content";
  secondPopupContent.textContent = "Или напишите в мессенджер";

  const thirdPopupContent = document.createElement("div");
  thirdPopupContent.className = "third-popup-content";
  thirdPopupContent.textContent = "Наш основной номер";

  const mainNumberBlock = document.createElement("div");
  mainNumberBlock.className = "main-number-block";

  const mainNumberIcon = document.createElement("i");
  mainNumberIcon.className = "fa-solid fa-phone icon-inside";

  const mainNumber = document.createElement("a");
  mainNumber.href = "tel:+00000000000";
  mainNumber.textContent = "+0 (000) 000-00-00";

  mainNumberBlock.appendChild(mainNumberIcon);
  mainNumberBlock.appendChild(mainNumber);

  const fourthPopupContent = document.createElement("div");
  fourthPopupContent.className = "fourth-popup-content";
  fourthPopupContent.textContent = "Наши соц. сети";

  const socialBlock = document.createElement("div");
  socialBlock.className = "social-block";

  const telegramLink = document.createElement("a");
  telegramLink.href = "https://t.me/ваш_username";
  telegramLink.target = "_blank";

  const telegramIcon = document.createElement("img");
  telegramIcon.src = new URL("../../assets/telegram.png", import.meta.url).href;
  telegramIcon.alt = "Telegram";
  telegramIcon.className = "telegram-icon popup-icon";
  telegramLink.appendChild(telegramIcon);

  const whatsappLink = document.createElement("a");
  whatsappLink.href = "https://wa.me/1234567890";
  whatsappLink.target = "_blank";

  const whatsappIcon = document.createElement("img");
  whatsappIcon.src = new URL("../../assets/WhatsApp.png", import.meta.url).href;
  whatsappIcon.alt = "WhatsApp";
  whatsappIcon.className = "whatsapp-icon popup-icon";
  whatsappLink.appendChild(whatsappIcon);

  socialBlock.appendChild(telegramLink);
  socialBlock.appendChild(whatsappLink);

  telefonWindow.appendChild(logoNav);
  telefonWindow.appendChild(popupContent);
  telefonWindow.appendChild(secondPopupContent);
  telefonWindow.appendChild(thirdPopupContent);
  telefonWindow.appendChild(mainNumberBlock);
  telefonWindow.appendChild(fourthPopupContent);
  telefonWindow.appendChild(socialBlock);

  mainArticle.appendChild(sectionAboutUs);
  mainArticle.appendChild(sectionServices);
  mainArticle.appendChild(sectionFoto);
  mainArticle.appendChild(sectionStage);
  mainArticle.appendChild(orderSection);
  mainArticle.appendChild(Reviews());
  mainArticle.appendChild(telefonPopUpButton);
  mainArticle.appendChild(telefonWindow);

  main.appendChild(mainArticle);
  document.body.append(main);

  telefonPopUpButton.addEventListener("click", () => {
    telefonWindow.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    telefonWindow.classList.remove("active");
  });

  return main;
}

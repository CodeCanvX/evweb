export default function Main() {
  const main = document.createElement("main");
  main.className = "main";

  const mainArticle = document.createElement("article");
  mainArticle.className = "main-article";

  const leftSection = document.createElement("section");
  leftSection.className = "left-section";

  const leftSectionText = document.createElement("div");
  leftSectionText.className = "left-section-text";
  leftSectionText.textContent = "Выезд по городу, Луганской области.";

  const leftSectionList = document.createElement("ul");
  leftSectionList.className = "left-section-list";

  // Первый элемент
  const listItem1 = document.createElement("li");
  listItem1.className = "left-section-list-block";

  const icon1 = document.createElement("i");
  icon1.className = "fa-solid fa-phone-volume";

  const text1 = document.createElement("div");
  text1.className = "list-text";
  text1.textContent = "Звоните, мы на связи: 0 (000) 000-00-00.";

  listItem1.appendChild(icon1);
  listItem1.appendChild(text1);

  // Второй элемент
  const listItem2 = document.createElement("li");
  listItem2.className = "left-section-list-block";

  const icon2 = document.createElement("i");
  icon2.className = "fa-regular fa-clock";

  const text2 = document.createElement("div");
  text2.className = "list-text";
  text2.textContent = "Приедем быстро через 15–30 минут.";

  listItem2.appendChild(icon2);
  listItem2.appendChild(text2);

  // Третий элемент
  const listItem3 = document.createElement("li");
  listItem3.className = "left-section-list-block";

  const icon3 = document.createElement("i");
  icon3.className = "fa-solid fa-car";

  const text3 = document.createElement("div");
  text3.className = "list-text";
  text3.textContent = "Перевозка авто и техники до 3 тонн.";

  listItem3.appendChild(icon3);
  listItem3.appendChild(text3);

  // Четвёртый элемент
  const listItem4 = document.createElement("li");
  listItem4.className = "left-section-list-block";

  const icon4 = document.createElement("i");
  icon4.className = "fa-solid fa-wallet";

  const text4 = document.createElement("div");
  text4.className = "list-text";
  text4.textContent = "Наличный и безналичный расчёт.";

  listItem4.appendChild(icon4);
  listItem4.appendChild(text4);

  // Добавляем все li в ul
  leftSectionList.appendChild(listItem1);
  leftSectionList.appendChild(listItem2);
  leftSectionList.appendChild(listItem3);
  leftSectionList.appendChild(listItem4);

  leftSection.appendChild(leftSectionText);
  leftSection.appendChild(leftSectionList);

  // Правая часть
  const rightSection = document.createElement("section");
  rightSection.className = "right-section";

  const photoSection = document.createElement("img");
  photoSection.className = "photo-section";
  photoSection.src = "/2.png";
  photoSection.alt = "Фото эвакуатора";

  // Кнопка вызова
  const telefonPopUpButton = document.createElement("div");
  telefonPopUpButton.className = "telefon-pop-up-button";

  const iconPopUp = document.createElement("i");
  iconPopUp.className = "fa-solid fa-phone";

  telefonPopUpButton.appendChild(iconPopUp);

  // Попап
  const telefonWindow = document.createElement("div");
  telefonWindow.className = "telefon-window";

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.textContent = "×";

  const logoWindow = document.createElement("img");
  logoWindow.className = "logo-window";
  logoWindow.src = "/evakuator_269_49_49_1_557.png";
  logoWindow.alt = "ЭВАКУАТОР 24 НА 7";

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
  mainNumberIcon.className = "fa-solid fa-phone";

  const mainNumber = document.createElement("a");
  mainNumber.href = "tel:+00000000000";
  mainNumber.textContent = "+0 (000) 000-00-00";

  mainNumberBlock.appendChild(mainNumberIcon);
  mainNumberBlock.appendChild(mainNumber);

  const fourthPopupContent = document.createElement("div");
  fourthPopupContent.className = "fourth-popup-content";
  fourthPopupContent.textContent = "Наш второй номер";

  const secondNumberBlock = document.createElement("div");
  secondNumberBlock.className = "main-number-block";

  const secondNumberIcon = document.createElement("i");
  secondNumberIcon.className = "fa-solid fa-phone";

  const secondNumber = document.createElement("a");
  secondNumber.href = "tel:+00000000000";
  secondNumber.textContent = "+0 (000) 000-00-00";

  secondNumberBlock.appendChild(secondNumberIcon);
  secondNumberBlock.appendChild(secondNumber);

  telefonWindow.appendChild(closeBtn);
  telefonWindow.appendChild(logoWindow);
  telefonWindow.appendChild(popupContent);
  telefonWindow.appendChild(secondPopupContent);
  telefonWindow.appendChild(thirdPopupContent);
  telefonWindow.appendChild(mainNumberBlock);
  telefonWindow.appendChild(fourthPopupContent);
  telefonWindow.appendChild(secondNumberBlock);

  // Открытие/закрытие попапа
  telefonPopUpButton.addEventListener("click", () => {
    telefonWindow.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    telefonWindow.classList.remove("open");
  });

  // Финальный DOM
  rightSection.appendChild(photoSection);

  mainArticle.appendChild(leftSection);
  mainArticle.appendChild(rightSection);

  main.appendChild(mainArticle);
  main.appendChild(telefonPopUpButton);
  main.appendChild(telefonWindow);

  return main;
}

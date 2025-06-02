export default function Popup() {
  const telefonPopUpButton = document.createElement("div");
  telefonPopUpButton.className = "telefon-pop-up-button";

  const iconPopUp = document.createElement("img");
  iconPopUp.className = "icon-popup";
  iconPopUp.src = new URL("../../assets/solidphone.svg", import.meta.url).href;
  iconPopUp.alt = "Phone";

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

  const mainNumberIcon = document.createElement("img");
  mainNumberIcon.className = "icon-inside";
  mainNumberIcon.src = new URL(
    "../../assets/solidphone.svg",
    import.meta.url
  ).href;
  mainNumberIcon.alt = "Phone";

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
  telegramIcon.src = new URL(
    "../../assets/telegram.webp",
    import.meta.url
  ).href;
  telegramIcon.alt = "Telegram";
  telegramIcon.className = "telegram-icon popup-icon";
  telegramLink.appendChild(telegramIcon);

  const whatsappLink = document.createElement("a");
  whatsappLink.href = "https://wa.me/1234567890";
  whatsappLink.target = "_blank";

  const whatsappIcon = document.createElement("img");
  whatsappIcon.src = new URL(
    "../../assets/WhatsApp.webp",
    import.meta.url
  ).href;
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

  document.body.appendChild(telefonPopUpButton);
  document.body.appendChild(telefonWindow);

  telefonPopUpButton.addEventListener("click", () => {
    telefonWindow.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    telefonWindow.classList.remove("active");
  });
}

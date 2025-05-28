export default function Nav() {
  const nav = document.createElement("nav");
  nav.className = "nav";

  const articleNav = document.createElement("article");
  articleNav.className = "article-nav";

  const sectionLeft = document.createElement("section");
  sectionLeft.className = "section-left";

  const logo = document.createElement("img");
  logo.className = "logo";

  logo.src = new URL(
    "../../assets/evakuator_269_49_49_1_557.png",
    import.meta.url
  ).href;
  logo.alt = "ЭВАКУАТОР 24 НА 7";

  sectionLeft.appendChild(logo);

  const sectionRight = document.createElement("section");
  sectionRight.className = "section-right";

  const phoneBlock = document.createElement("div");
  phoneBlock.className = "phone-block";

  const phoneIcon = document.createElement("i");
  phoneIcon.className = "fa-solid fa-phone";

  const link = document.createElement("a");
  link.href = "tel:+00000000000";
  link.textContent = "+0 (000) 000-00-00";

  phoneBlock.appendChild(phoneIcon);
  phoneBlock.appendChild(link);

  sectionRight.appendChild(phoneBlock);

  articleNav.appendChild(sectionLeft);
  articleNav.appendChild(sectionRight);
  nav.appendChild(articleNav);

  document.body.prepend(nav);

  return nav;
}

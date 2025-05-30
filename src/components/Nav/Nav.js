export default function Nav() {
  const nav = document.createElement("nav");
  nav.className = "nav";

  const articleNav = document.createElement("article");
  articleNav.className = "article-nav";

  const sectionLeft = document.createElement("section");
  sectionLeft.className = "section-left";

  const logo = document.createElement("div");
  logo.className = "logo";
  logo.textContent = "EVACUATOR.181";

  sectionLeft.appendChild(logo);

  const sectionRight = document.createElement("section");
  sectionRight.className = "section-right";

  const link = document.createElement("a");
  link.className = "link";
  link.href = "tel:+00000000000";
  link.textContent = "+0 (000) 000-00-00";

  sectionRight.appendChild(link);

  articleNav.appendChild(sectionLeft);
  articleNav.appendChild(sectionRight);
  nav.appendChild(articleNav);

  document.body.prepend(nav);

  return nav;
}

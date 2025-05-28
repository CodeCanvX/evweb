export default function () {
  const header = document.createElement("header");
  header.className = "header";

  const articleHeader = document.createElement("article");
  articleHeader.className = "article-header";

  const sectionHeader = document.createElement("section");
  sectionHeader.className = "section-header";

  const headerText = document.createElement("div");
  headerText.className = "header-text";

  const fullText = "Услуги эвакуатора в Луганске - 24 на 7";
  const highlightedWord = "Луганске";

  const highlightedText = fullText.replace(
    highlightedWord,
    `<span class="green">${highlightedWord}</span>`
  );

  headerText.innerHTML = highlightedText;

  sectionHeader.appendChild(headerText);
  articleHeader.appendChild(sectionHeader);
  header.appendChild(articleHeader);

  return header;
}

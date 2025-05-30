export default function Reviews() {
  const section = document.createElement("section");
  section.className = "reviews-section";

  const title = document.createElement("div");
  title.className = "reviews-title";
  title.textContent = "ОТЗЫВЫ НАШИХ КЛИЕНТОВ";

  const slider = document.createElement("div");
  slider.className = "slider";

  const slidesWrapper = document.createElement("div");
  slidesWrapper.className = "slides";

  const reviews = [
    {
      name: "Иван",
      text: "Быстро и профессионально. Благодарим за своевременную транспортировку!",
      avatar: "man.png",
    },
    {
      name: "Анна",
      text: "Очень довольны обслуживанием. Приехали быстро, всё вежливо и чётко.",
      avatar: "women.png",
    },
    {
      name: "Сергей",
      text: "Эвакуировали мою машину ночью, быстро и без проблем. Рекомендую!",
      avatar: "sergej.png",
    },
  ];

  reviews.forEach((review, index) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    if (index === 0) slide.classList.add("active");

    const avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = new URL(`../../assets/${review.avatar}`, import.meta.url).href;
    avatar.alt = review.name;

    const textBlock = document.createElement("div");
    textBlock.className = "review-text";

    const name = document.createElement("strong");
    name.textContent = review.name;

    const text = document.createElement("p");
    text.textContent = review.text;

    textBlock.appendChild(name);
    textBlock.appendChild(text);

    slide.appendChild(avatar);
    slide.appendChild(textBlock);
    slidesWrapper.appendChild(slide);
  });

  // Точки
  const controls = document.createElement("div");
  controls.className = "slider-controls";

  const dots = [];

  reviews.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => showSlide(index));
    dots.push(dot);
    controls.appendChild(dot);
  });

  // Стрелки
  const prevBtn = document.createElement("button");
  prevBtn.className = "arrow prev";
  prevBtn.innerHTML = "❮";
  prevBtn.addEventListener("click", () => {
    let newIndex = (currentSlide - 1 + reviews.length) % reviews.length;
    showSlide(newIndex);
  });

  const nextBtn = document.createElement("button");
  nextBtn.className = "arrow next";
  nextBtn.innerHTML = "❯";
  nextBtn.addEventListener("click", () => {
    let newIndex = (currentSlide + 1) % reviews.length;
    showSlide(newIndex);
  });

  // Сборка
  slider.appendChild(prevBtn);
  slider.appendChild(slidesWrapper);
  slider.appendChild(nextBtn);
  slider.appendChild(controls);

  section.appendChild(title);
  section.appendChild(slider);

  // Логика слайдера
  let currentSlide = 0;
  const slides = slidesWrapper.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
    currentSlide = index;
  }

  // setInterval(() => {
  //   let next = (currentSlide + 1) % slides.length;
  //   showSlide(next);
  // }, 5000);

  return section;
}

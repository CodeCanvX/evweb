// src/js/header.js
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

export default function createHeader() {
  // ====== Создание HTML структуры ======
  const header = document.createElement("header");
  header.className = "header";

  const mainHeaderArticle = document.createElement("article");
  mainHeaderArticle.className = "main-header-article";

  // Левая часть
  const leftSection = document.createElement("section");
  leftSection.className = "left-section";

  const firstText = document.createElement("div");
  firstText.className = "first-text";
  firstText.textContent = "Услуги эвакуатора";

  const secondText = document.createElement("div");
  secondText.className = "second-text";
  secondText.textContent =
    "Круглосуточная и безопасная перевозка вашего автомобиля по Луганску и области.";

  const link = document.createElement("a");
  link.href = "tel:+00000000000";
  link.textContent = "Вызвать эвакуатор";
  link.className = "evakuator-button";

  leftSection.append(firstText, secondText, link);

  // Правая часть (контейнер под three.js)
  const rightSection = document.createElement("section");
  rightSection.className = "right-section";

  const threeContainer = document.createElement("div");
  threeContainer.className = "three-container";
  rightSection.appendChild(threeContainer);

  mainHeaderArticle.append(leftSection, rightSection);
  header.appendChild(mainHeaderArticle);

  // Инициализируем 3D после вставки в DOM
  setTimeout(() => initThree(threeContainer), 0);

  return header;
}

// ====== Three.js часть ======
function initThree(container) {
  // Если контейнер без высоты — задаём
  if (!container.clientHeight) container.style.height = "400px";

  // Сцена и камера
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.01,
    1000
  );
  camera.position.set(0, 0.8, 3);
  camera.lookAt(0, 0, 0);

  // Рендер
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Свет
  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const dir = new THREE.DirectionalLight(0xffffff, 1.0);
  dir.position.set(3, 5, 2);
  scene.add(dir);

  // --- Загрузка STL ---
  const loader = new STLLoader();
  let model = null;

  // ⚠️ Путь к модели — проверь, что реально существует!
  const url = new URL("../../assets/Gazelle_wrecker.stl", import.meta.url).href;
  console.log("STL path:", url);

  loader.load(
    url,
    (geometry) => {
      // STL по умолчанию Z-up, переводим в Y-up
      geometry.rotateX(-Math.PI / 2);
      geometry.computeVertexNormals();
      geometry.center();

      const material = new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        metalness: 0.2,
        roughness: 0.75
      });

      model = new THREE.Mesh(geometry, material);
      scene.add(model);


      // ==== Авто-фрейминг камеры ====
      const sphere = new THREE.Sphere();
      new THREE.Box3().setFromObject(model).getBoundingSphere(sphere);

      const fit = 1.25; // немного воздуха вокруг модели
      const fov = THREE.MathUtils.degToRad(camera.fov);
      const dist = (sphere.radius * fit) / Math.sin(fov / 2);

      camera.position.set(0, sphere.radius * 0.25, dist);
      camera.near = Math.max(dist - sphere.radius * 5, 0.01);
      camera.far  = dist + sphere.radius * 5;
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);

      // Немного повернём, чтобы выглядела эффектнее
      model.rotation.y = Math.PI * 0.25;

      console.log("STL загружен успешно");
    },
    undefined,
    (err) => console.error("Ошибка загрузки STL:", err)
  );

  // Анимация
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const t = clock.getElapsedTime();
    if (model) {
      model.rotation.y += 0.003;
      model.position.y = Math.sin(t * 0.6) * 0.02;
    }
    renderer.render(scene, camera);
  });

  // Ресайз
  const resize = () => {
    const w = Math.max(container.clientWidth, 10);
    const h = Math.max(container.clientHeight, 10);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  };

  window.addEventListener("resize", resize);
  if ("ResizeObserver" in window) {
    new ResizeObserver(resize).observe(container);
  }

  // Для отладки — можешь включить:
  // scene.add(new THREE.GridHelper(5, 10));
  // scene.add(new THREE.AxesHelper(0.5));
}

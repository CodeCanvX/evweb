export default function MapComponent(container) {
  // Подключаем CSS
  const leafletCSS = document.createElement("link");
  leafletCSS.rel = "stylesheet";
  leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
  document.head.appendChild(leafletCSS);

  // Подключаем JS
  const leafletScript = document.createElement("script");
  leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

  leafletScript.onload = () => {
    const mapDiv = document.createElement("div");
    mapDiv.id = "map";
    mapDiv.style.width = "100%";
    mapDiv.style.height = "300px";

    container.appendChild(mapDiv);

    const map = L.map("map").setView([48.567, 39.308], 12);

    L.tileLayer(
      "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=s6PRk3JIbfpKHnc0UWyZ",
      {
        attribution:
          '&copy; <a href="https://www.maptiler.com/">MapTiler</a> & <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      }
    ).addTo(map);

    L.marker([48.567, 39.308]).addTo(map).bindPopup("Мы здесь").openPopup();
  };

  document.body.appendChild(leafletScript);
}

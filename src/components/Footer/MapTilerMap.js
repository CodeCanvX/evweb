import L from "leaflet";

export default function MapTilerMap(containerId = "map") {
  // Создаем контейнер
  const mapContainer = document.createElement("div");
  mapContainer.id = containerId;

  // Добавляем в DOM
  setTimeout(() => {
    const map = L.map(containerId).setView([48.574041, 39.307815], 13); // Луганск

    L.tileLayer(
      "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=s6PRk3JIbfpKHnc0UWyZ&language=ru",
      {
        attribution:
          '&copy; <a href="https://www.maptiler.com/">MapTiler</a> & <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      }
    ).addTo(map);
  }, 0);

  return mapContainer;
}

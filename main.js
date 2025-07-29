//i will simulate fetching for the data from the server

//tab1 data
const bedData = [
  {
    id: 1,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
    {
    id: 2,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
    {
    id: 3,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
  {
    id: 4,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
  {
    id: 5,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
  {
    id: 6,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },

];

//tab2 data
const firmnessData = [
  {
    id: 1,
    name: "Bed A",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
  {
    id: 2,
    name: "Bed B",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
  {
    id: 3,
    name: "Bed C",
    image: "bed.jpg",
    description: "A comfortable bed with a modern design.",
    tags: ["modern", "comfortable", "design"],
  },
  
];

// Function to simulate an API call with a delay 0f 1 sec
const simulateApiCall = (data, delay = 1000) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });

//function to create HTML for each bed item
const createBedItemHTML = (item, suffix) => {
  return `
  <div class="bed-item">
    <div class="image-container">
      <img src="imgs/${item.image}" alt="${item.name}" loading="lazy" />
    </div>
    <h2>
      ${item.name} <span style="color: #185baa;">${suffix}</span>
    </h2>
    <div class="bed-description">
      <div class="description">
        <span>${item.description}</span>
      </div>
      <div class="pill-container">
        ${item.tags.map((tag) => `<span class="pill">${tag}</span>`).join("")}
      </div>
    </div>
  </div>
  `;
};

//function to load data for the active tab
async function loadItems({ gridId, data, delay, suffix }) {
  const grid = document.getElementById(gridId);
  grid.innerHTML =
    '<div class="loading"><img src="/imgs/logo.png" alt="Loading..." /></div>';
  // Simulate fetching data from the server
  try {
    const items = await simulateApiCall(data, delay);
    grid.innerHTML = items
      .map((item) => createBedItemHTML(item, suffix))
      .join("");
    console.log("Data loaded successfully:", items);
  } catch (error) {
    console.error("Error loading data:", error);
    grid.innerHTML =
      '<div class="error">Failed to load data. Please try again later.</div>';
  }
}

//function for tab switching
function showTab(tabId, event) {
  document
    .querySelectorAll(".tab-content")
    .forEach((c) => c.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");

  //if condition for checking which tab is active
  if (event) event.target.classList.add("active");
  
  // Clear both grids first to prevent showing previous content
  document.getElementById("bedGrid").innerHTML = "";
  document.getElementById("firmnessGrid").innerHTML = "";
  
  if (tabId === "tab1") {
    loadItems({
      gridId: "bedGrid",
      data: bedData,
      delay: 1200,
      suffix: "Beds",
    });
  } else {
    loadItems({
      gridId: "firmnessGrid",
      data: firmnessData,
      delay: 1200,
      suffix: "Firmness",
    });
  }
}

// Initialize the first tab
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab-btn").forEach((btn, idx) => {
    btn.onclick = (e) => {
      showTab(idx === 0 ? "tab1" : "tab2", e);
    };
  });
  
  // Load initial data for the first tab
  loadItems({
    gridId: "bedGrid",
    data: bedData,
    delay: 1200,
    suffix: "Beds",
  });
});

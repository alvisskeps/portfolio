// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set menu state
    showMenu = false;
  }
}

// Pie Chart
let myChart = document.getElementById("myChart").getContext("2d");

Chart.defaults.global.defaultFontColor = "#fff";
Chart.defaults.global.defaultFontSize = 15;

let codeChart = new Chart(myChart, {
  type: "pie",
  maintainAspectRatio: false,
  data: {
    labels: ["Java", "PHP", "CSS", "HTML", "JS"],

    datasets: [
      {
        label: "Coding Skill",
        data: [20, 10, 30, 30, 10],
        backgroundColor: [
          "rgba(207, 0, 15, 1)",
          "rgba(115, 101, 152, 1)",
          "rgba(52, 152, 219, 1)",
          "rgba(249, 105, 14, 1)",
          "rgba(254, 241, 96, 1)"
        ],
        borderWidth: 1,
        borderColor: "#efdd15",
        hoverBorderWidth: 3,
        hoverBorderColor: "#efdd15"
      }
    ]
  },
  options: {}
});

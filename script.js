// Hamburger hide and show
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  console.log("clk");

  const menu = document.querySelector("nav");
  menu.style.right = menu.style.right === "0px" ? "-280px" : "0px";
});

// language show hide
const languageBtn = document.querySelector(".languageBtn");
languageBtn.addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
});

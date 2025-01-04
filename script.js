// Hamburger hide and show
const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
  console.log("clk");

  const menu = document.querySelector(".menu");
  menu.style.right = menu.style.right === "40px" ? "-140px" : "40px";
  // if (menu.style.right === "40px") {
  //   document.querySelector("#main").addEventListener("click", () => {
  //     console.log("hi");
  //   });
  }
});

// Array of blog objects
const blogs = [
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img1.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img2.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img3.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img4.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img5.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img6.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img7.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img8.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
  {
    title: "Maximize Team Productivity with Actionable Insights",
    image: "./Assets/blogs/img9.png",
    featuredDescription: "Bebull Sapkota . 6 min . Time Management",
  },
];

// Function to render blogs to HTML
function renderBlogs(blogList) {
  const blogContainer = document.querySelector(".blogsContainer");

  const blogsHTML = blogList
    .map(
      (blog, index) => `
    <div class="blog ${index === 0 ? "first-blog" : ""}">
    <div class="imgContainer">
      <img src="${blog.image}" alt="img1">
      <p class="date">06 FEB</p>
    </div>
                  <div class="titleSection">
                        <p>${blog.title}</p>
                        <div class="arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M0.0700094 10.9789L21.5418 11.1125" stroke="#0A4020" stroke-width="0.611094"/>
  <path d="M13.3115 2.88214L21.5421 11.1128L14.4294 18.2255" stroke="#0A4020" stroke-width="0.611094"/>
</svg>
                        </div>

                  </div>
                  <hr>
                  <p class="featured">${blog.featuredDescription}</p>
    </div>
  `
    )
    .join("");

  // Add blogs to container
  blogContainer.innerHTML = blogsHTML;

  const firstArrow = document.querySelector(".first-blog>.titleSection>.arrow");
  firstArrow.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M1.01721 15.5549L16.2946 0.466553" stroke="#0A4020" stroke-width="0.611094"/>
  <path d="M4.65503 0.466553H16.2949V10.5255" stroke="#0A4020" stroke-width="0.611094"/>
</svg>`;
}

// Call function to display the blogs
renderBlogs(blogs);
// console.log("Hello world");

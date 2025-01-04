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
      (blog) => `
    <div class="blog">
    <div class="imgContainer">
      <img src="${blog.image}" alt="img1">
      <p class="date">06 FEB</p>
    </div>
                  <div class="titleSection">
                        <p>${blog.title}</p>
                        <div class="arrow">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
                                    <path d="M1.01721 15.5549L16.2946 0.466553" stroke="#0A4020"
                                          stroke-width="0.611094" />
                                    <path d="M4.65503 0.466553H16.2949V10.5255" stroke="#0A4020"
                                          stroke-width="0.611094" />
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
}

// Call function to display the blogs
renderBlogs(blogs);
// console.log("Hello world");

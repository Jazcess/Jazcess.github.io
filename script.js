const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

const pages = {
  about: `
    <section class="card">
      <h2>About Me</h2>
      <p>Hello! I'm Jazmin Stewart, a PhD student in Astroparticle Physics at the University of Leicester. I enjoy experimental research, Monte Carlo simulations, and coding in C++/Python. I also love hiking, gaming, reading, and crocheting – and I share it all here.</p>
    </section>
  `,
  work: `
    <section class="card">
      <h2>Professional Background</h2>
      <p>I’m researching novel photodetector configurations for gamma-ray observatories. My work involves small-area PMTs enhanced by WLS plates to boost light capture in water Cherenkov detectors.</p>
    </section>
  `,
  hobbies: `
    <section class="card">
      <h2>Personal Interests</h2>
      <p>When I’m not working, I’m out hiking, crocheting, or gaming. Here’s a glimpse:</p>
      <div class="gallery">
        <img src="images/gallery/hikingPoland.jpg" alt="Hiking Poland">
        <img src="images/gallery/hikingSnowdon.jpg" alt="Hiking Snowdon">
      </div>
    </section>
  `,
  contact: `
    <section class="card">
      <h2>Contact</h2>
      <p><strong>Work:</strong> <a href="mailto:jss55@leicester.ac.uk">jss55@leicester.ac.uk</a></p>
      <p><strong>Personal:</strong> <a href="mailto:jazmin.stewart1234@gmail.com">jazmin.stewart1234@gmail.com</a></p>
      <div class="links">
        <a href="https://www.linkedin.com/in/jazminstewart/" target="_blank">LinkedIn</a>
        <a href="https://le.ac.uk/people/jazmin-stewart" target="_blank">University Page</a>
        <a href="https://github.com/Jazcess" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/jazmin__stewart01/" target="_blank">Instagram</a>
        <a href="https://orcid.org/my-orcid?orcid=0009-0001-8368-7383" target="_blank">ORCiD</a>
      </div>
    </section>
  `
};

function loadPage(page) {
  content.innerHTML = pages[page] || "<section class='card'><h2>404</h2><p>Page not found.</p></section>";
  window.history.pushState({}, "", `#${page}`);
}

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    loadPage(page);
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("load", () => {
  const hash = window.location.hash.replace("#", "") || "home";
  if (pages[hash]) {
    loadPage(hash);
    document.querySelector(`a[data-page="${hash}"]`)?.classList.add("active");
  }
});

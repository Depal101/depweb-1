document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/projects')
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById('project-list');
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <img src="${project.imageUrl}" alt="${project.title}">
                `;
                projectList.appendChild(projectElement);
            });
        });
});
  // Toggle Menu untuk Mobile
  function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}

// Smooth Scrolling saat klik menu
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

        // Tutup menu setelah klik di mobile
        document.querySelector("nav ul").classList.remove("active");
    });
});
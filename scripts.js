document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
    const homeSection = document.getElementById("home");
    const loginSection = document.getElementById("login");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        
        document.getElementById("user").innerText = username;
        loginSection.style.display = "none";
        homeSection.style.display = "none";
        dashboard.style.display = "block";
    });

    // Basic navigation (optional)
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelectorAll("main, section").forEach(sec => sec.style.display = "none");
            document.querySelector(link.getAttribute("href")).style.display = "block";
        });
    });
});

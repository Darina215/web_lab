document.addEventListener("DOMContentLoaded", () => {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll("nav.sidebar a").forEach(link => {
        if (link.getAttribute("href") === current) {
            link.classList.add("active");
        }
    });

    const toTop = document.querySelector(".back-to-top");
    if (toTop) {
        toTop.addEventListener("click", e => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
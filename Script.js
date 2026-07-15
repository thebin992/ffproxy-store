document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            alert("Cảm ơn bạn đã quan tâm!\n\nVui lòng liên hệ Zalo hoặc Telegram để đặt mua.");
        });
    });

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const id = this.getAttribute("href");
            const section = document.querySelector(id);

            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

});
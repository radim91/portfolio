document.addEventListener('DOMContentLoaded', () => {
    gsap.from('.hero-image', {
        opacity: 0.5
    });

    gsap.to('.hero-image', {
        x: -20,
        duration: 1,
        opacity: 1
    });

    document.getElementById("work-link").addEventListener("mouseover", () => {
        linkHover('#work-stick');
    })

    document.getElementById("bison-link").addEventListener("mouseover", () => {
        linkHover('#bison-stick');
    })

    function linkHover(id) {
        let tl = gsap.timeline();
        tl.to(id, { x: 5, y: -5 });
        tl.to(id, { x: 0, y: 0 }, 0.1);
    }
});

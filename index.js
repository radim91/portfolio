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
    });

    document.getElementById("bison-link").addEventListener("mouseover", () => {
        linkHover('#bison-stick');
    });

    document.getElementById("ideabooks-link").addEventListener("mouseover", () => {
        linkHover('#ideabooks-stick');
    });

    document.getElementById("ahoy-link").addEventListener("mouseover", () => {
        linkHover('#ahoy-stick');
    });

    document.getElementById("svet-prace-link").addEventListener("mouseover", () => {
        linkHover('#svet-prace-stick');
    });

    document.getElementById("github-link").addEventListener("mouseover", () => {
        linkHover('#github-stick');
    });

    document.getElementById("linkedin-link").addEventListener("mouseover", () => {
        linkHover('#linkedin-stick');
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY >= 600) { 
            gsap.to('.ping-stick', {
                opacity: 1,
                x: -10,
                rotate: -170,
                delay: 0.1
            });
        } 

        if (window.scrollY >= 1000) {
            gsap.to('.pong-stick', {
                opacity: 1,
                rotate: 15,
                delay: 0.2
            });
        }
    });

    document.querySelectorAll('.work-item').forEach(item => {
        const img = item.querySelector('img');
        const to = {
            opacity: 0.3
        }

        img.addEventListener("mouseenter", () => {
            gsap.to(img, to)
            gsap.to(`#work-link-${img.id}`, { opacity: 1, display: "block" })
        });

        document.getElementById(`work-link-${img.id}`).addEventListener("mouseover", () => {
            gsap.to(img, to)
            gsap.to(`#work-link-${img.id}`, { opacity: 1, display: "block" })
        });

        img.addEventListener("mouseleave", () => {
            gsap.to(img, { opacity: 1 })            
            gsap.to(`#work-link-${img.id}`, { opacity: 0, display: "none" })
        })
    });

    function linkHover(id) {
        let tl = gsap.timeline();
        tl.to(id, { x: 5, y: -5 });
        tl.to(id, { x: 0, y: 0 }, 0.1);
    }
});

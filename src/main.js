const nav_links = document.querySelectorAll('.nav a');

nav_links.forEach(link => {
    link.addEventListener("click", function() {
        const current = document.querySelector('.nav a.selected');
        
        if (current && current !== this) {
            current.classList.remove('selected');
        }

        this.classList.add("selected");
    });
})
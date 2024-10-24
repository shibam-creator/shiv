<script>
// Intersection Observer to watch cards when they enter the viewport
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Add 'show' class when card is in view
                observer.unobserve(entry.target);   // Stop observing once it's visible
            }
        });
    }, { threshold: 0.1 });

    // Apply the observer to each card
    cards.forEach(card => {
        observer.observe(card);
    });
});
</script>

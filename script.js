// Select the element that will follow the mouse
const chaser = document.querySelector('.chaser');

// Listen for mouse movement
document.addEventListener('mousemove', (event) => {
    // Get mouse position
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Set the position of the chaser
    chaser.style.transform = `translate(${mouseX - 20}px, ${mouseY - 20}px)`; // Offset to center
});

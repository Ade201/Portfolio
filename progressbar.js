const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        spans.forEach((span, index) => {
            const percentage = percentages[index];
            if (entry.isIntersecting) {
                span.classList.add('animate');
                percentage.classList.add('animate');
            } else {
                span.classList.remove('animate');
                percentage.classList.remove('animate');
            }
        });
    });
});

const skillContainer = document.querySelector('.skills-container');
const spans = document.querySelectorAll('.bar span');
const percentages = document.querySelectorAll('.percentage');
observer.observe(skillContainer);

function updatePercentagePositions() {
    const barWidth = document.querySelector('.bar').clientWidth;
    percentages.forEach(percentage => {
        const widthPercentage = parseFloat(percentage.textContent) / 100;
        percentage.style.left = `${barWidth * widthPercentage - 12.5}px`;
    });
}

updatePercentagePositions(); // Call initially
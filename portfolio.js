var typed = new Typed(".js", {
  strings: [
    "a Front-end Developer",
    "a Smart Contract Developer",
    "an Automation Specialist",
    "a Back-end Developer",
  ],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const paragraphs = [
  "I’m Adedamola Olapade, a full-stack developer, smart contract engineer, and workflow automation specialist.",
  "My journey into tech started with curiosity, but it quickly grew into a deep interest in how software shapes the world around us. Today, I build everything from responsive websites to decentralized blockchain solutions, and automated workflows that help businesses operate smoothly without stress.",
  "What drives me is improvement. I love learning, experimenting, and turning ideas into real digital products. I’m the type of person who pays attention to details, communicates clearly, and always tries to deliver work that I can be proud of.",
  "Beyond coding, I enjoy exploring new tools, studying systems that scale, and helping brands automate repetitive tasks so they can focus on growth. I believe simplicity, clarity, and functionality should always come first in any project.",
  "My goal is to become a world-class engineer, creating impactful solutions that drive innovation in the tech ecosystem.",
];

let index = 0;
function arrangeParagraphs() {
  if (index < paragraphs.length) {
    const p = document.createElement("p");
    p.style.opacity = "0";
    p.style.transition = "opacity 0.95s ease-in-out";
    p.textContent = paragraphs[index];
    document.getElementById("p").appendChild(p);

    setTimeout(() => {
      p.style.opacity = "1";
    }, 100);

    index++;
    setTimeout(arrangeParagraphs, 1200);
  } else {
    // After all paragraphs have appeared, fade in the button
    const btn = document.getElementById("contactBtn");
    btn.style.display = "inline-block";
    btn.style.visibility = "visible";
    setTimeout(() => {
      btn.style.opacity = "1";
    }, 50);
  }
}

arrangeParagraphs();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    spans.forEach((span, index) => {
      const percentage = percentages[index];
      if (entry.isIntersecting) {
        span.classList.add("animate");
        percentage.classList.add("animate");
      } else {
        span.classList.remove("animate");
        percentage.classList.remove("animate");
      }
    });
  });
});

const skillContainer = document.querySelector(".section4div");
const spans = document.querySelectorAll(".bar span");
const percentages = document.querySelectorAll(".percentage");
observer.observe(skillContainer);

function updatePercentagePositions() {
  const barWidth = document.querySelector(".bar").clientWidth;
  percentages.forEach((percentage) => {
    const widthPercentage = parseFloat(percentage.textContent) / 100;
    percentage.style.left = `${barWidth * widthPercentage - 12.5}px`;
  });
}

updatePercentagePositions(); // Call initially

function animateCircle(container) {
  let percent = container.getAttribute("data-percentage");
  let indicator = container.querySelector(".indicator");
  let label = container.querySelector(".label");

  let current = 0;
  let speed = 15;

  let interval = setInterval(() => {
    if (current >= percent) {
      clearInterval(interval);
    }
    current++;
    indicator.style.strokeDasharray = `${current}, 100`;
    label.textContent = current + "%";
  }, speed);
}

const observe = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        animateCircle(entry.target);
        entry.target.classList.add("animated");
      }
    });
  },
  {
    threshold: 0.4, // trigger when 40% is visible
  }
);

document.querySelectorAll(".progress-container").forEach((circle) => {
  observe.observe(circle);
});

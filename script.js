const buttons = document.querySelectorAll(".read-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const text = button.nextElementSibling;

        if (text.style.display === "block") {
            text.style.display = "none";
            button.innerHTML = "Read More ✨";
        } else {
            text.style.display = "block";
            button.innerHTML = "Hide 🤍";
        }
    });
});

// Little Things I Love Slider

const loveCards = document.querySelectorAll(".love-card");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentLove = 0;

function showLoveCard(index) {
    loveCards.forEach(card => {
        card.classList.remove("active");
    });

    loveCards[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentLove++;

    if (currentLove >= loveCards.length) {
        currentLove = 0;
    }

    showLoveCard(currentLove);
});

prevBtn.addEventListener("click", () => {
    currentLove--;

    if (currentLove < 0) {
        currentLove = loveCards.length - 1;
    }

    showLoveCard(currentLove);
});

// My Skills Slider

const skillCards = document.querySelectorAll(".skill-card");
const skillPrevBtn = document.querySelector(".skill-prev-btn");
const skillNextBtn = document.querySelector(".skill-next-btn");

let currentSkill = 0;

function showSkillCard(index) {
    skillCards.forEach(card => {
        card.classList.remove("skill-active");
    });

    skillCards[index].classList.add("skill-active");
}

skillNextBtn.addEventListener("click", () => {
    currentSkill++;

    if (currentSkill >= skillCards.length) {
        currentSkill = 0;
    }

    showSkillCard(currentSkill);
});

skillPrevBtn.addEventListener("click", () => {
    currentSkill--;

    if (currentSkill < 0) {
        currentSkill = skillCards.length - 1;
    }

    showSkillCard(currentSkill);
});

// My Projects Slider

const projectCards = document.querySelectorAll(".project-card");
const projectPrevBtn = document.querySelector(".project-prev-btn");
const projectNextBtn = document.querySelector(".project-next-btn");

let currentProject = 0;

function showProject(index) {
    projectCards.forEach(card => {
        card.classList.remove("project-active");
    });

    projectCards[index].classList.add("project-active");
}

projectNextBtn.addEventListener("click", () => {
    currentProject++;

    if (currentProject >= projectCards.length) {
        currentProject = 0;
    }

    showProject(currentProject);
});

projectPrevBtn.addEventListener("click", () => {
    currentProject--;

    if (currentProject < 0) {
        currentProject = projectCards.length - 1;
    }

    showProject(currentProject);
});
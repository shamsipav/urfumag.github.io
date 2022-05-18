const toggle = document.getElementById("switch");
const budgetText = document.getElementById("budget");
const contractText = document.getElementById("contract");

const contractEducationContent = document.getElementById("contractEducationContent");
const budgetEducationContent = document.getElementById("budgetEducationContent");

toggle.addEventListener("change", (event) => {
    // Контракт
    if (event.currentTarget.checked) {
        budgetText.classList.remove("checked");
        contractText.classList.add("checked");

        budgetEducationContent.classList.remove("show");
        contractEducationContent.classList.add("show");
    // Бюджет
    } else {
        budgetText.classList.add("checked");
        contractText.classList.remove("checked");

        budgetEducationContent.classList.add("show");
        contractEducationContent.classList.remove("show");
    }
});

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
});

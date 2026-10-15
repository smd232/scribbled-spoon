const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    themeBtn.textContent = isDark ? "☀️" : "🌙";

    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeBtn.setAttribute("aria-label", label);
    themeBtn.title = label;
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const nameInput = document.getElementById("cName");
    const emailInput = document.getElementById("cEmail");
    const messageInput = document.getElementById("cMessage");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");
    const counter = document.getElementById("counter");

    messageInput.addEventListener("input", () => {
        counter.textContent = messageInput.value.length + " / 200";
    });

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    let valid = true;

    // clear old messages first
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formSuccess.textContent = "";

    if (name.length < 3) {
        nameError.textContent = "Please enter your full name.";
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email.";
        valid = false;
    }

    if (message.length < 10) {
        messageError.textContent = "Tell us a little more (10+ characters).";
        valid = false;
    }

    if (valid) {
    formSuccess.textContent = "Thank you, " + name + "! We got your message. Taking you back to the home page...";
    contactForm.reset();
    counter.textContent = "0 / 200";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
}
})};
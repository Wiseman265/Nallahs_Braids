// JavaScript for smooth scrolling and alert for booking

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Alert for Book Now Button
document.querySelector(".book-now-btn").addEventListener("click", function () {
    alert("Thank you for choosing Nallah's Braiding Corner & Beauty! Please fill out the contact form to complete your booking.");
});

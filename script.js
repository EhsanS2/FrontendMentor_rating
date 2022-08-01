const circles = document.querySelectorAll(".circle");
const submit = document.querySelector(".submit");
let selected = "";

circles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
        circles.forEach((c) => {
            c.classList.remove("active");
        });
        e.target.classList.add("active");
        selected = e.target.innerText;
    });
});

submit.addEventListener("click", thankYou);

function thankYou() {
    if (selected === "") {
        alert("PLease choose a number as score");
    } else {
        document.querySelector(".rating").style.display = "none";
        document.querySelector(".thanks").style.display = "flex";
        const showRate = document.querySelector(".show-rate");
        showRate.innerText = `You Selected ${selected} out of 5`;
    }
}

let btn = document.getElementById("btn");
let err = document.getElementById("error");

btn.addEventListener("click", () => { 
    err.textContent = "Something went wrong, please try again!";
});
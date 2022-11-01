ele = document.getElementById("ele1")

function pintar() {
    ele.style.backgroundColor = "green"
}

ele.addEventListener("click", function () {
    pintar('yellow')
});

// ---ultimo punto del desafio--- //


select = document.getElementById("select")
click1 = document.getElementById("click1")
click2 = document.getElementById("click2")
click3 = document.getElementById("click3")

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        select.innerHTML = "A"
        select.style.backgroundColor = "rgb(174, 137, 243)"
        color = "rgb(174, 137, 243)"
    }else if (event.key === 's') {
        select.innerHTML = "S"
        select.style.backgroundColor = "rgb(214, 149, 95)"
        color = "rgb(214, 149, 95)"
    }
    else if (event.key === 'd') {
        select.innerHTML = "D"
        select.style.backgroundColor = "rgb(84, 177, 107)"
        color = "rgb(84, 177, 107)"
    }
})

click1.addEventListener("click", () => click1.style.backgroundColor= color);
click2.addEventListener("click", () => click2.style.backgroundColor= color);
click3.addEventListener("click", () => click3.style.backgroundColor= color);

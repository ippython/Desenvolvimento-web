let currentColor = "black";

document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener('click', colorClick)
})

function colorClick(e){
    let color = e.target.getAttribute('data-color')
    currentColor = color;

    document.querySelector('.color.active').classList.remove("active")
    e.target.classList.add("active");
}
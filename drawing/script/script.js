let currentColor = "black";

document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener('click', colorClick)
})

function colorClick(e){
    let color = e.target.getAttribute('data-color')
    console.log(color)
}
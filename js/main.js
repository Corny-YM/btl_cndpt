const take_one = document.querySelector.bind(document);
const take_all = document.querySelectorAll.bind(document);

const home_content = take_one(".home_content");
const dropdown_item = take_all(".dropdown-item");
const informations = take_all(".info");
const video = take_one(".video");

console.log(dropdown_item)

home_content.addEventListener("click", function() {
    var active_item = take_one(".body_content.active");
    if(active_item) {
        active_item.classList.remove("active");
    }
    video.classList.add("active");
})

dropdown_item.forEach(function(e, index) {
    e.addEventListener("click", function() {
        console.log(informations[index]);
        var active_item = take_one(".body_content.active");
        if(active_item) {
            active_item.classList.remove("active");
        }
        informations[index].classList.add("active");
        if(index == 1) {
        } else if(index == 2) {

        } else if(index == 3) {

        } else if(index == 4) {

        }
    })
})
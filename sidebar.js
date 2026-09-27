
addEventListener("load", init);

function init() {
    let nav_items = [["main page", "index.html"], ["works", "works.html"], ["#myposts", "blog.html"], ["links", "links.html"]];
    let nav_elem = document.querySelector(".auto_nav");

    for (let i = 0; i < nav_items.length; i++) {
        let temp_nav_item = document.createElement("button");
        console.log(nav_items);
        temp_nav_item.classList.add("link_nav");
        //temp_nav_item.addEventListener("click", )
        temp_nav_item.setAttribute("onclick", "window.location.href = '" + nav_items[i][1] + "';");
        temp_nav_item.innerHTML = nav_items[i][0];

        nav_elem.appendChild(temp_nav_item);
    }
}
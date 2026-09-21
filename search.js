

addEventListener("load", init); // Run init(); on page load

// Initializer function, runs on page load.
function init() {
    let tags = []; // Full list of tags between all items
    let link_cont = document.getElementById("all_links"); // The container with all the link items
    let search_input = document.getElementById("search-input"); // The search bar
    search_input.addEventListener('input', search); // Make sure the function "search" runs when the search bar is updated.

    // Create all the items
    tags = create_item(tags, link_cont, "https://petrapixel.neocities.org/indiewebdb/widgets", "PetraPixel's Indie Web Database", ["indie_web", "widgets", "resource"], "A collection of pre-made indie web widgets!");
    //console.log(tags);
}

// Automatically populate the items list given the parameters
function create_item(all_tags, container, url, title, tags, text) {
    let new_link = document.createElement('article'); // Make a new HTML item
    new_link.classList.add("link_item"); // Add the link_item class to it

    // Iterate through each tag passed and add it to the item's classlist if it's new
    for (let i = 0; i < tags.length; i++) {
        new_link.classList.add(tags[i]);

        if (!all_tags.includes(tags[i])) {
            all_tags.push(tags[i]);
        }
    }

    // Populate the new_link item with the relevant info
    new_link.innerHTML = "<a href=" + url + ">\n" +
        "<h3>" + title + "</h3>\n" +
        "                </a>\n" +
        "                <p>" + text + "</p>";

    container.appendChild(new_link); // Add it to the list/display it

    return all_tags;
}

// Updates the page based on the search query
function search() {
    let link_children = document.getElementById("all_links").children; // List of all links
    let search_input = document.getElementById("search-input"); // The search bar

    let query = search_input.value.trim(); // Get the query from the search bar

    // Iterate through each link, check if the query is contained inside. Show if yes, hide if no.
    for (i = 0; i < link_children.length; i++) {
        if (!link_children[i].classList.value.includes(query)) {
            link_children[i].style.visibility = "hidden";
        } else {
            link_children[i].style.visibility = "visible";
        }
    }
}
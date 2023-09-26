
let introSection = document.querySelector("#intro")
// introSection.style.backgroundColor = "#ff0"

introSection.className = "redback"

let heading = document.createElement("h2");
let headingText = document.createTextNode("Community Impacts");
heading.appendChild(headingText);
document.body.appendChild(heading);
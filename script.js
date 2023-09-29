
// a function to be used on an element with onClick or any event listener you like
function moveDown(e){
  e.dataset.clicks ++
  console.log(e.dataset.clicks)
  let clicks = e.dataset.clicks
  let dist = e.dataset.distance
  e.style.marginTop = (dist * clicks)+'px'
}

let moveBoxes = document.querySelectorAll(".moveBox")
// console.log(moveBoxes)

// a familiar way to perform operations on every element in an array
// for(i=0; i<moveBoxes.length; i++){
//   moveBoxes[i].addEventListener("click", function(e){
//     moveDown(this)
//   })
// }
// OR a better/simpler way
// no iterator variable required if we want to do the same thing to every element
moveBoxes.forEach( (element) => {
  // console.log(element)
  element.addEventListener("click", (event) => {moveDown(element)})
})

// ---- Week 9 lecture
// let introSection = document.querySelector("#intro")
// introSection.style.backgroundColor = "#ff0"
// introSection.className = "redback"

// let heading = document.createElement("h2");
// let headingText = document.createTextNode("Community Impacts");
// heading.appendChild(headingText);
// document.body.appendChild(heading);
// ----
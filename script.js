// ---- Week 11 lecture

// seek through a video on scroll
let dur;
let container = document.querySelector("#scrollvid")
let vid = document.querySelector(".container-vid video")
vid.addEventListener("durationchange", (event) => {
  dur = vid.duration
  h = container.scrollHeight
  // console.log(h)
  let distanceToTop = scrollY + vid.getBoundingClientRect().top
  //console.log(distanceToTop)
  let norm = dur / ((document.body.scrollHeight) - distanceToTop)
  document.addEventListener("scroll", (event) => {
    if(scrollY >= distanceToTop && scrollY <=  distanceToTop + (h - window.innerHeight)){
      if(vid.readyState == 4){
        vid.currentTime = ((scrollY-distanceToTop) * norm)
        // need to smooth this
      }
    }
  })
});


// ---- Week 10 workshop

// hide/show header on click
// let header = document.querySelector("header")
// header.addEventListener("click", (event) => {
//   console.log(header)
//   let op = header.style.opacity
//   if(op == "1"){
//     header.style.opacity = "0"
//   }else{
//     header.style.opacity = "1"
//   }
// });

// global vars
var lastScroll

// a generic listener, triggers when the page is scrolled
document.addEventListener("scroll", (event) => {
  // let's see where we are
  // console.log("scroll y: " + scrollY)

  // and add some logic to make this event useful
  
  // if we're scrolling up the page
  if(scrollY < lastScroll){
    document.querySelector("header").style.opacity = '1'
  // or down
  }else{
    document.querySelector("header").style.opacity = '0'
  }

  // a global variable storing the position 
  // of the scrollbar when scrolling stops
  lastScroll = scrollY
});

// ---- Week 9 workshop
// a function to be used on an element with onClick or any event listener you like
function moveDown(e){
  e.dataset.clicks ++
  // console.log(e.dataset.clicks)
  let clicks = e.dataset.clicks
  let dist = e.dataset.distance
  e.style.marginTop = (dist * clicks) + 'px'
}

let moveBoxes = document.querySelectorAll(".moveBox")
console.log(moveBoxes)

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
  element.addEventListener("click", (event) => { moveDown(element) })
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
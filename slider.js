let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

function showslide(val1, val2) {
    // console.log("frjbfrhbf")
    val1.style.display = "none";
    val2.style.display = "none";
}
function showAll() {
    img1.style.display = "block";
    img2.style.display = "block";
    img3.style.display = "block";

}






let slides = document.querySelectorAll(".slide")
let counter = 0;
console.log(slides);
slides.forEach(function (slide, index)
 { 
    slide.style.left = `${index * 100}%`
 }
)

function slideImage(counter) {
    slides.forEach(function (slide)
     { 
        slide.style.transform = `translateX(-${counter * 100}%)`
     }
    )
}
function gonext() {
    console.log(slides);
    counter++;
    // alert();
    slideImage(counter)
}
function goprev() {
    counter--
    // alert();
    slideImage(counter)
}


//guideline window.open








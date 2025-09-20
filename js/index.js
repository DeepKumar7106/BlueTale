const nextBtn = document.getElementById("nextChange");
const allCards = document.querySelectorAll(".testimonialCard");
let reviewIndex = 0;
document.getElementById("cardOne").style.display = "flex";




nextBtn.addEventListener("click", () => {
    // changes the card
    // reviewIndex = checkIndex();

    if(reviewIndex > allCards.length-2) {
        reviewIndex=0;
    }
    else{
        reviewIndex++;
    }
    
        allCards.forEach(card => {
        card.style.display = "none";
    });
    allCards[reviewIndex].style.display = "flex";


    // changes the state of nav buttons
    const allNav = document.querySelectorAll(".navButtons");
    allNav.forEach(nav => {
        nav.classList.remove("currentNav");
    })
    allNav[reviewIndex].classList.add("currentNav");
    
    
});

const prevBtn = document.getElementById("previousChange");
prevBtn.addEventListener("click", () => {
    // changes the card
    // reviewIndex = checkIndex();
    if(reviewIndex < 1) {
        reviewIndex=allCards.length-1;
    }
    else{
        reviewIndex--;
    }
    

    allCards.forEach(card => {
        card.style.display = "none";
    });
    allCards[reviewIndex].style.display = "flex";


    // changes the state of nav buttons
    const allNav = document.querySelectorAll(".navButtons");
    allNav.forEach(nav => {
        nav.classList.remove("currentNav");
    })
    allNav[reviewIndex].classList.add("currentNav");
    console.log(reviewIndex);
});


// const btn = document.querySelectorAll(".linkBtn");
// btn.addEventListener("click", ()=> {
//     window.location.href = "../html/buy.html";
// });

function btnChng() {
    window.location.href = "../html/buy.html";
}

    //put everyhing into object
//     const imagePath = [
//         "../html/images/bottleEnvironment.png",
//         "../html/images/bottleFamily.jpg",
//         "../html/images/bottleGym.png",
//         "../html/images/bottleVirat.png",
//     ]

//     const title = [
//         "Natural",
//         "Family",
//         "Workout",
//         "King"
//     ]

//     const description = [
//         "Natural friendly bottle",
//         "Have it at your dinning table",
//         "Never give up",
//         "Vyraat kohli!!!!!!!!"
//     ]

//     const imgData = imagePath.map((path, index) => ({
//             image: path,
//             title: title[index],
//             description: description[index],

//         }
//     ))
// console.log(imgData);

// let imgIndex = 0;

// const imgOne = document.querySelectorAll(".imgOne");
// const imgTwo = document.querySelectorAll(".imgTwo");
// const imgThree = document.querySelectorAll(".imgThree");

// function imgAnimation() {
//     imgOne.src = imgData[imgIndex].image;
//     imgIndex = (imgIndex + 1) % imgData.length;
// }

// // imgAnimation();
// // setInterval(imgAnimation, 1000);

// const imgWrap = document.querySelectorAll(".imageCorousel");

// let wrapIndex = 0;
// imgWrap.forEach(() => {
//     animateLeft();
//     // setInterval(animateLeft, 2000);
    
//     imgWrap[wrapIndex].children[1].style.display = "none";
//     wrapIndex = (wrapIndex + 1) % imgWrap.length;
//     imgWrap[wrapIndex].classList.add("center");
//     wrapIndex = (wrapIndex + 1) % imgWrap.length;
//     imgWrap[wrapIndex].children[1].style.display = "none";

//     playAnimation();
// }); 

// function animateLeft() {
//     let i = 0
//     imgWrap.forEach(() => {
//         imgWrap[i].style.animationPlayState = "paused";
//     });
    
// }

// function playAnimation() {
//     let i = 0
//     imgWrap.forEach(() => {
//         imgWrap[i].style.animationPlayState = "running";
//     });
// }

// const imgWrap = document.querySelectorAll(".imageCorousel");

// let loopIndex = 0;

// function animateLeft() {
//     // if(loopIndex > imgWrap.length) {
//     //     loopIndex=0;
//     // }
//     // else{
//     //     loopIndex++;
//     // }
    
//     loopIndex = (loopIndex + 1) % 3;
//     console.log(imgWrap.length);

//     imgWrap.forEach(card => {
//         card.style.display = "none";
//     });
//     imgWrap[loopIndex].style.display = "flex";
// }

// animateLeft();
// setInterval(animateLeft, 2000);

// function loop() {
//     console.log("hello");
// }
// loop();
// setInterval(loop, 2000);

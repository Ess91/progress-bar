const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle') //More than one, so will bring it as a Node list which 
//is similar to an array

let currentActive = 1 // Set to 1 by default (The active one)

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()

})
//Line 9 - Listen for a click, when it clicks, run a function
//Line 10 - Whichever the current active is, we increment it by 1
//Line 12-14 - If statement, so that it does not go pass 4 (number of circles)



prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()

})

//Line 29 - Set it at one, so it does not go below 1 

function update() {
    circles.forEach((circle, index) => {
        if(index < currentActive) {                   // Check to see if each circle is less than the Current Active
            circle.classList.add('active')            //If true, take that particular circle and add to that particular circle
        } else {
            circle.classList.remove('active')          //If not, remove that particular circle
        }
    })

    const actives = document.querySelectorAll('.active')   //Active cicrles

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'  //Allow the lines to light up when going to each one
//Allowing to show as percentages
// Subtracting 1 will give us a lower percentage technically but in presentation it will show how percentage will actually look like


    if (currentActive === 1) {
        prev.disabled = true    // If the current active is equal to 1, the previous button should be disabled
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


//Function update -
//circles.forEach - Loops through each circle and index


//Line 56 - If current Active is equal to the length of circles which is 4 in this case,
//then the next button should be disabled
//else (Line59 & 60) - Neither buttons should be disabled
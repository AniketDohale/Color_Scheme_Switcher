const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector("body")

// console.log(body)

// const h1 = document.getElementsByTagName("h1")

// function colorChange(color) {
//     for (var i = 0; i < h1.length; i++) {
//         h1[i].style.color = color
//     }
// }

buttons.forEach(function (button) {
    // console.log(button)
    button.addEventListener('click', function (e) {
        // console.log(e)
        // console.log(e.target)

        if (e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id
            // colorChange(e.target.id)
        }

        if (e.target.id == 'white') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == 'brown') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == 'green') {
            body.style.backgroundColor = e.target.id
        }

        if (e.target.id == 'aqua') {
            body.style.backgroundColor = e.target.id
        }
    })
})
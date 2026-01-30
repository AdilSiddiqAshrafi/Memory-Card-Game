let imgs = ["crown", "cake", "tree", "smile", "R", "leaf", "code", "corn"];
let allcards = document.querySelectorAll(".img");

//create pairs for 16 cards
let shuffleImgs = [...imgs, ...imgs];

// easy shuffle
shuffleImgs.sort(() => Math.random() - 0.5);

// set img in div innerhtml
for (let i = 0; i < 16; i++) {
    allcards[i].innerHTML = `
        <img class="d-none" src="./${shuffleImgs[i]}.jpg"
        style="width: 70%; height: 70%; object-fit: cover;">
    `;
}

// // set img in div innerhtml
// for (let i = 0; i < 16; i++) {
//     allcards[i].innerHTML = `<img class="d-none" src="./${imgs[i % 8]}.jpg"
//      style="width: 70%; height: 70%; object-fit: cover;">`;
// }

let firstcard = '';
let secondcard = '';

document.querySelectorAll(".img").forEach(e => {
    e.addEventListener("click", () => {

        // if firstcard and second card is empty then store src in first card
        if (firstcard == '' && secondcard == '') {
            e.children[0].classList.remove("d-none");
            firstcard = e;

        // if firstcard have src and second card is empty then store src in second card
        } else if (firstcard && secondcard == '') {
            e.children[0].classList.remove("d-none");
            secondcard = e;

            // if first and second card src not matched then hide them again
            if (firstcard.children[0].src !== secondcard.children[0].src) {
                setTimeout(() => {
                    firstcard.children[0].classList.add("d-none");
                    secondcard.children[0].classList.add("d-none");

                    // Reset
                    firstcard = '';
                    secondcard = '';
                }, 1000);
            } else {
                // If match, keep visible
                firstcard = '';
                secondcard = '';
            }
        }

        let iswin = win();
        if (iswin) {
            window.location = "won.html";
        }
    });
});

// check if all card match display won message
function win() {
    let allmatch = true;
    document.querySelectorAll(".img").forEach(e => {
        if (e.children[0].classList.contains("d-none")) {
            allmatch = false;
        }
    });
    return allmatch;
}

// Restart game
document.querySelector(".btn").addEventListener("click", () => {
    window.location = "index.html";
});

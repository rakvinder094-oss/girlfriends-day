/* ==========================================
   PREMIUM GIRLFRIEND DAY WEBSITE
   Part 1
========================================== */

const loader = document.getElementById("loader");
const storybook = document.getElementById("storybook");
const book = document.querySelector(".book");
const mainContent = document.getElementById("mainContent");

const openLetterBtn = document.getElementById("openLetter");
const letter = document.getElementById("letter");

const giftBox = document.getElementById("giftBox");
const openGiftBtn = document.getElementById("openGift");
const finalMessage = document.getElementById("finalMessage");

/* ==========================
   Loading Screen
========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2500);

});


/* ==========================
   Storybook Opening
========================== */

book.addEventListener("click", () => {

    if (book.classList.contains("open")) return;

    book.classList.add("open");

    setTimeout(() => {

        storybook.style.display = "none";
        mainContent.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


/* ==========================
   Love Letter
========================== */

openLetterBtn.addEventListener("click", () => {

    if (letter.classList.contains("hidden")) {

        letter.classList.remove("hidden");

        letter.style.animation = "fadeUp 0.8s";

        openLetterBtn.textContent = "Close Letter 💌";

        setTimeout(() => {

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 200);

    } else {

        letter.classList.add("hidden");

        openLetterBtn.textContent = "Open Letter 💌";

    }/* ==========================================
   PART 2
   Gift Animation + Blooming Tulips
========================================== */

function createFlower() {

    const flower = document.createElement("div");

    flower.className = "bloom";

    flower.textContent = "🌷";

    const x = (Math.random() * 220 - 110) + "px";
    const r = (Math.random() * 180 - 90) + "deg";

    flower.style.setProperty("--x", x);
    flower.style.setProperty("--r", r);

    flower.style.left = "50%";
    flower.style.bottom = "80px";

    giftBox.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 2200);

}


/* ==========================
   Open Gift
========================== */

openGiftBtn.addEventListener("click", () => {

    if (giftBox.classList.contains("open")) return;

    giftBox.classList.add("open");

    openGiftBtn.disabled = true;

    openGiftBtn.textContent = "Opening...";

    /* Bloom lots of tulips */

    let blooms = 0;

    const interval = setInterval(() => {

        createFlower();

        blooms++;

        if (blooms >= 20) {

            clearInterval(interval);

        }

    }, 150);


    /* Reveal final message */

    setTimeout(() => {

        finalMessage.classList.remove("hidden");

        finalMessage.scrollIntoView({

            behavior: "smooth"

        });

    }, 2600);

});

});

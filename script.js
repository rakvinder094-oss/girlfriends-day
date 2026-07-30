/* ==========================================
   PREMIUM GIRLFRIEND DAY WEBSITE
   Version 2 JavaScript
   Rohit ❤️ Sukanya
========================================== */


/* ==========================
   Elements
========================== */

const loader = document.getElementById("loader");
const storybook = document.getElementById("storybook");
const book = document.getElementById("book");
const cover = document.getElementById("cover");

const website = document.getElementById("website");

const startLetter = document.getElementById("startLetter");
const letterSection = document.getElementById("letterSection");

const gift = document.getElementById("gift");
const openGift = document.getElementById("openGift");

const ending = document.getElementById("ending");



/* ==========================
   Loading Screen
========================== */

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.style.opacity="0";

        setTimeout(()=>{

            loader.style.display="none";

        },1000);


    },2500);

});



/* ==========================
   Storybook Opening
========================== */

book.addEventListener("click",()=>{


    book.classList.add("opened");


    setTimeout(()=>{


        storybook.style.display="none";

        website.style.display="block";


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    },1200);



});




/* ==========================
   Love Letter Reveal
========================== */


startLetter.addEventListener("click",()=>{


    letterSection.classList.toggle("hidden");


    if(!letterSection.classList.contains("hidden")){


        startLetter.innerHTML="Close Letter 💌";


        setTimeout(()=>{

            letterSection.scrollIntoView({

                behavior:"smooth",

                block:"center"

            });


        },200);



    }

    else{


        startLetter.innerHTML="Open Letter 💌";


    }



});




/* ==========================
   Gift Opening
========================== */


openGift.addEventListener("click",()=>{


    gift.classList.add("opened");


    openGift.innerHTML="A surprise for you 🌷";


    createTulips();


    setTimeout(()=>{


        ending.classList.remove("hidden");


        ending.scrollIntoView({

            behavior:"smooth"

        });


    },3000);



});





/* ==========================
   Blooming Tulips
========================== */


function createTulips(){


    for(let i=0;i<12;i++){


        let tulip=document.createElement("div");


        tulip.className="bloomTulip";


        tulip.innerHTML="🌷";


        tulip.style.left="50%";


        tulip.style.setProperty(

            "--moveX",

            `${Math.random()*300-150}px`

        );


        tulip.style.setProperty(

            "--rotate",

            `${Math.random()*90-45}deg`

        );



        gift.appendChild(tulip);



        setTimeout(()=>{

            tulip.remove();

        },4000);



    }


}





/* ==========================
   Floating Petals
========================== */


function createPetal(){


    const petal=document.createElement("div");


    petal.className="petal";


    petal.innerHTML="🌸";


    petal.style.left=Math.random()*100+"vw";


    petal.style.animationDuration=

    (5+Math.random()*6)+"s";



    document.body.appendChild(petal);



    setTimeout(()=>{


        petal.remove();


    },11000);



}


setInterval(createPetal,1200);





/* ==========================
   Scroll Reveal
========================== */


const cards=document.querySelectorAll(".glass");


const observer=new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform=

            "translateY(0)";


        }


    });


},{threshold:.2});



cards.forEach(card=>{


    card.style.opacity="0";


    card.style.transform=

    "translateY(40px)";


    card.style.transition=

    "1s ease";


    observer.observe(card);


});





/* ==========================
   Final Heart Animation
========================== */


const finalText=document.querySelector("#ending h1");


if(finalText){


setInterval(()=>{


    finalText.style.transform="scale(1.05)";


    setTimeout(()=>{


        finalText.style.transform="scale(1)";


    },500);



},3000);


}

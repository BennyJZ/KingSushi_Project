
var scrolltop = 0;
window.addEventListener("scroll", ()=>{
    let scrolly = window.scrollY;
     if (scrolly > 50){
        if (scrolly > scrolltop){
            document.querySelector(".navBar").classList.add("active");
        } else {
            document.querySelector(".navBar").classList.remove("active");
     }
    }
     scrolltop = scrolly;
});
//////////////////////////////////////////////////

// CAROUSEL

const buttons = document.querySelectorAll("[data-caroBtn]");


x = 0;

invisIndex = [14, 13, 12 , 11, 10, 9, 8, 7, 6]
visIndex = [1, 2, 3, 4, 5]

buttons.forEach ((button) =>{
    button.addEventListener("click", ()=>{
        const index = (button.dataset.carobtn === "next" ?  -1 : 1);

        if (0<index){ // That Way <--
            //remove and add first element
            visIndex.unshift(invisIndex.shift()); 
            //remove and add last element
            invisIndex.push(visIndex.pop());
            
            
        }
        if (0>index){
            invisIndex.unshift(visIndex.shift()); 
            visIndex.push(invisIndex.pop());
            console.log(visIndex);
        }

        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

        for (let i=0; i<slides.children.length; i++){
            slides.children[i].setAttribute("src", "images/Restaurant/Ideal4Menu/img"+ visIndex[i] +".JPG");
        }


    });
});


// Animations//

gsap.from('#revolution', {duration: 1, x: '-10vw', opacity: 0});
gsap.from(['.article-wrap', '.nav-top'], {duration: 1.5, opacity: 0});
gsap.from('.epoch-heading', {duration: 1, x: '10vw', opacity:0});

// Observer//



// Selectors //

const topbar = document.querySelector('.topbar');
const epochs = document.getElementById('epochs');
const author = document.getElementById('author');
const responsive = document.querySelector('.additional-nav');
const clickable = [document.querySelector('.article-wrap'), document.querySelector('.epoch-heading'), document.querySelector('.logo'), document.querySelector('.repertoire-link'), author];
const cloud1 = document.querySelectorAll('.cloud');
const cloud2 = document.querySelectorAll('#cloud');
const hoverCloud = [document.querySelector('iframe'), document.querySelector('video')];
const micro = document.querySelector('#microheader');
const macro = document.querySelector('#macroheader');
const microArticle = document.querySelector('.micro');
const macroArticle = document.querySelector('.macro');
const slideShow = document.querySelector('.slide-show');
const sliderImages = document.querySelectorAll('.slide-show img');
const navLinks = document.querySelectorAll('.page-links-list a');
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('section');
const formButton = document.querySelector('.custom-recomm button');
const textarea = document.querySelector('#extra');
const viewport = window.innerHeight;
const swipeTabs = document.querySelectorAll('.slide')

const burgerSwitchElements = [document.querySelector('.burger'), author, document.querySelector('.repertoire-link')];

// Aux Functions

let microStyle = window.getComputedStyle(micro);
let macroStyle = window.getComputedStyle(macro);
lightBackg = microStyle.getPropertyValue('background');
darkBackg = macroStyle.getPropertyValue('background');

const hoverEffect = (element) => {
    const mouseOver = () => {
        element.style.background = lightBackg;
    };
    const mouseOut = () => {
        element.style.background = darkBackg;
    };
    const removeHover = () => {
        element.removeEventListener('mouseover', mouseOver);
        element.removeEventListener('mouseout', mouseOut);
    };
    element.addEventListener('mouseover', mouseOver);
    element.addEventListener('mouseout', mouseOut);
    
    element.addEventListener('click', removeHover)
};

const scrollAnimation = (target, duration) => {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    
    let startTime = null;

    function smoothScroll(currentTime){
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(smoothScroll);

    };

    function ease(t, b, c, d) {
        t /= d/2;
	    if (t < 1) return c/2*t*t + b;
	    t--;
	    return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(smoothScroll);
};



// EventListeners

burgerSwitchElements.forEach(el => {
    el.addEventListener('click', ()=> {
        document.getElementById('top').classList.toggle('top-active');
        document.getElementById('middle').classList.toggle('middle-active');
        document.getElementById('bottom').classList.toggle('bottom-active');  
        document.querySelector('.nav-top').classList.toggle('nav-top-active');
    })
    
} )


// document.querySelector('.burger').addEventListener('click', ()=> {
//     document.getElementById('top').classList.toggle('top-active');
//     document.getElementById('middle').classList.toggle('middle-active');
//     document.getElementById('bottom').classList.toggle('bottom-active');  
//     document.querySelector('.nav-top').classList.toggle('nav-top-active');

// })


window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        topbar.classList.add('shadow');
        responsive.classList.add('shadow')
    } else {
        topbar.classList.remove('shadow');
        responsive.classList.remove('shadow');
    };
    
    
    if(window.scrollY > (viewport * 2.4)) {
        document.querySelector('.innovations').classList.remove('innovations-before');
        document.querySelector('.style').classList.remove('style-before');
    } else {
        document.querySelector('.innovations').classList.add('innovations-before');
        document.querySelector('.style').classList.add('style-before');
    };

    if(document.querySelector('body').clientWidth > 400) {
        if(window.scrollY > (viewport * 0.5) && window.scrollY < (viewport * 1.5)) {
            dots[1].classList.add('dot-active');
            dots[2].classList.remove('dot-active');
            dots[0].classList.remove('dot-active');
            dots.forEach(el => {
                el.style.opacity = 1;
            })
        } else if(window.scrollY > (viewport * 1.5) && window.scrollY < (viewport * 2.5)) {
            dots[2].classList.add('dot-active');
            dots[1].classList.remove('dot-active');
            dots[3].classList.remove('dot-active');
            dots[4].classList.remove('dot-active');
        } else if(window.scrollY > (viewport * 2.5) && window.scrollY < (viewport * 3.4)) {
            dots[3].classList.add('dot-active');
            dots[2].classList.remove('dot-active');
            dots[1].classList.remove('dot-active');
            dots[4].classList.remove('dot-active');
        }   else if(window.scrollY > (viewport * 3.5)) {
            dots[4].classList.add('dot-active');
            dots[3].classList.remove('dot-active');
            dots[0].classList.remove('dot-active');
        } else if(window.scrollY < (viewport * 0.5)) {
            dots[0].classList.add('dot-active');
            dots[3].classList.remove('dot-active');
            dots[1].classList.remove('dot-active');
            dots[4].classList.remove('dot-active');
        };
    }

    if(window.scrollY > (viewport * 3.5)) {
        let i = 1; 
        do {
            document.querySelectorAll(`.row${CSS.escape(i)}`).forEach(td => {
                td.classList.add('row-visible')    
            });
            i += 1;
        } while(i < 11);
        
    };
    
});

dots.forEach(dot => {
    dot.addEventListener('mouseover', ()=> {
        dot.style.background = 'radial-gradient(circle, rgb(255, 228, 163) 10%, rgb(40, 40, 40) 70%)';
    })
    dot.addEventListener('mouseout', ()=> {
        dot.style.background = 'rgb(40, 40, 40)'
    })
});

if(document.querySelector('body').clientWidth > 400) {
    epochs.addEventListener('click', () => {
        epochs.classList.toggle('button-active');
        responsive.classList.toggle('additional-nav-visible');
    });
}


author.addEventListener('click', ()=> {
    author.classList.toggle('button-active')
});

for(let i = 0; i < clickable.length; i++) {
    clickable[i].addEventListener('click', () =>{    
        responsive.classList.remove('additional-nav-visible');
        epochs.classList.remove('button-active');
        author.classList.remove('button-active')
    })
};

for(let i = 0; i < hoverCloud.length; i++) {
    hoverCloud[i].addEventListener('mouseover', ()=> {
        cloud1[0].classList.add('cloud-visible');
        cloud1[1].classList.add('cloud-visible');
        cloud1[1].style.transform = 'translate(144%, 0%)';
        cloud1[1].style.width = '30vw';
        cloud2[0].classList.add('cloud-visible');
        cloud2[1].classList.add('cloud-visible');
        cloud2[1].style.transform = 'translate(98%, 25%)'
    });
    hoverCloud[i].addEventListener('mouseout', ()=> {
        cloud1[0].classList.remove('cloud-visible');
        cloud1[1].classList.remove('cloud-visible');
        cloud2[0].classList.remove('cloud-visible');
        cloud2[1].classList.remove('cloud-visible');
    });
};    

micro.addEventListener('click', ()=> {
    microArticle.style.transform = 'translateX(0%)';
    macroArticle.style.transform = 'translateX(120%)';
    micro.style.background = lightBackg
    macro.style.background = darkBackg;
    hoverEffect(macro);
    
});
macro.addEventListener('click', ()=> {
    macroArticle.style.transform = 'translateX(0%)';
    microArticle.style.transform = 'translateX(-120%)';
    macro.style.background = lightBackg;
    micro.style.background = darkBackg;
    hoverEffect(micro);
    
});

dots[0].addEventListener('click', function() {
    scrollAnimation(('#intro'), 1000)
});

[navLinks[0], dots[1]].forEach(el => {
    el.addEventListener('click', function() {
    scrollAnimation(('#structure'), 1000)
    })
});
[navLinks[1], dots[2]].forEach(el => {
    el.addEventListener('click', function() {
    scrollAnimation(('#harmony'), 1500)
    })
});
[navLinks[2], dots[3]].forEach(el => {
    el.addEventListener('click', function() {
    scrollAnimation(('.Interpretation'), 2000)
    })
});
[clickable[3], dots[4]].forEach(el => {
    el.addEventListener('click', function() {
        scrollAnimation(('#repertoire'), 2000)
    })
});

document.querySelector('#genre').addEventListener('focus', () => {
    document.querySelector('.options').classList.add('options-visible')
});
document.querySelector('#genre').addEventListener('blur', () => {
    document.querySelector('.options').classList.remove('options-visible')
});

document.querySelectorAll('.options p').forEach(p => {
    p.addEventListener('mouseover', ()=> {
        p.style.color = 'rgb(40,40,40)'     
    });
    p.addEventListener('mouseout', ()=> {
        p.style.color = 'rgb(94,94,94)'; 
    })
    p.addEventListener('click', ()=> {
        document.querySelector('#genre').value = p.innerHTML;
    })
});

formButton.addEventListener('click', ()=> {
    document.querySelector('form').classList.add('form-active');
    document.querySelector('.container').style.opacity = '0.7'
});
document.querySelector('.x').addEventListener('click', ()=> {
    document.querySelector('form').classList.remove('form-active');
    document.querySelector('.container').style.opacity = '1'
});
textarea.addEventListener('keydown', ()=> {
    if(textarea.value.length > 0) {    
        textarea.style.borderWidth = '2px';
        textarea.style.height = '13vh'
    }
});

author.addEventListener('click', ()=> {
    document.querySelector('.author').classList.add('author-active');
    sections.forEach(sec =>{
        sec.style.opacity = '0.7';
    });
    topbar.style.opacity = '0.7';
    topbar.classList.add('shadow');
});
document.querySelector('.exit-author').addEventListener('click', ()=> {
    document.querySelector('.author').classList.remove('author-active');
    sections.forEach(sec =>{
        sec.style.opacity = '1';
        topbar.style.opacity = '1';
    })
});

  // touch sensitive functionality 
swipeTabs.forEach(tab => {
    tab.addEventListener('touchstart', handleTouchStart, false);
})        
swipeTabs.forEach(tab => {
    tab.addEventListener('touchmove', handleTouchMove, false);
})

var xDown = null;                                                        
// var yDown = null;

function getTouches(evt) {
  return evt.touches
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    // yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    // var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    // var yDiff = yDown - yUp;

    if ( xDiff > 10 ) {
        

        macroArticle.style.transform = 'translateX(0%)';
        microArticle.style.transform = 'translateX(-120%)';
        macro.style.background = lightBackg;
        micro.style.background = darkBackg;
        hoverEffect(micro);

    } else if(xDiff < -10) {

        /* left swipe */
        microArticle.style.transform = 'translateX(0%)';
        macroArticle.style.transform = 'translateX(120%)';
        micro.style.background = lightBackg
        macro.style.background = darkBackg;
        hoverEffect(macro);
       
    }   
    xDown = null;    
                                                                         
    // if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                       
    // } else {
    //     if ( yDiff > 0 ) {
    //         /* down swipe */ 
    //     } else { 
    //         /* up swipe */
    //     }                                                                 
    // }
    /* reset values */
    
    // yDown = null;                                             
};



// Other

const Slider = () => {
    if(document.querySelector('body').clientWidth > 400) {    
        slideShow.style.animation = 'slide 14s ease-in-out 1s infinite';
        slideShow.style.animationFillMode = 'forwards';
    } else {
        slideShow.style.animation = 'slide-portrait 14s ease-in-out 1s infinite';
        slideShow.style.animationFillMode = 'forwards';
    }
    
    for(let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].addEventListener('mouseover', ()=> {
            slideShow.style.animationPlayState = 'paused';
        });
        sliderImages[i].addEventListener('mouseout', ()=> {
            slideShow.style.animationPlayState = 'running';
        });
    }
};
Slider();
/*
function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    if(numberOfLineBreaks > 0){    
        let newHeight = (window.innerHeight / 10) + numberOfLineBreaks * 20 + (window.innerHeight / 19.5) + 2;
        return newHeight;
    }
};
  
let textarea = document.querySelector("#extra");
  textarea.addEventListener("keyup", () => {
    textarea.style.height = calcHeight(textarea.value) + "px";
    if(calcHeight(textarea.value) > (window.innerHeight / 9)) {
        textarea.style.top = '0vh';
    } else if(calcHeight(textarea.value) > (window.innerHeight / 6)) {
        textarea.style.top = '5vh';
    }
});

textarea.addEventListener('focus', () => {
      textarea.style.borderBottom = '2px solid rgb(40, 40, 40)';

      
})
*/

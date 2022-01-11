

// gsap.to('#logo', { duration: 2, width:'7vh', height:'7vh', top: '1.2vh', position: 'absolute', x: '-20vw', delay: 1, ease:'power2.out'});

// gsap.from('#banner', {duration: 1.9, delay: 1, x: '32vw', y:'35vh', fontSize: '54px', ease: 'power2.out'});
// gsap.to('.slider', {delay: 1, opacity: 0, duration: 1, zIndex: -1});
// gsap.from(['#logo-backg', '.nav-top', 'a', '#text', 'footer'], {opacity: 0, delay: 1, duration: 2, ease: 'power1.in'});
if(document.querySelector('body').clientWidth > 400) {
    
    gsap.from('.logo-front', { duration: 2, width:'21vh', height:'21vh', top: '30vh', position: 'absolute', x: '24vw', delay: 1, ease:'power2.out'});
    gsap.from('.logotype', {duration: 1.9, delay: 1, x: '32vw', y:'35vh', fontSize: '54px', ease: 'power2.out'});
    gsap.to('.slider', {delay: 1, opacity: 0, duration: 1, zIndex: -1});
    gsap.from(['.logo-back', '.nav-top', 'a', '.main-heading', 'footer'], {opacity: 0, delay: 1, duration: 2, ease: 'power1.in'}); 
} else { 
    
    gsap.from('.logo-front', { duration: 2, width:'14vh', height:'14vh', top: '30vh', position: 'absolute', x: '30vw', delay: 1, ease:'power2.out'});
    gsap.from('.logotype', {duration: 1.9, delay: 1, x: '-18vw', y:'50vh', fontSize: '54px', ease: 'power2.out'});
    gsap.to('.slider', {delay: 1, opacity: 0, duration: 1, zIndex: -1});
    gsap.from(['.logo-back', '.nav-top', 'a', '.main-heading', 'footer'], {opacity: 0, delay: 1, duration: 2, ease: 'power1.in'}); 
}
const body = [document.querySelector('main'), document.querySelector('header')];

document.querySelector('.author-button').addEventListener('click', ()=> {
    document.querySelector('.author').classList.add('author-active');
    body.forEach(el =>{
        el.style.opacity = '0.7';
    })
    
});
document.querySelector('.exit-author').addEventListener('click', ()=> {
    document.querySelector('.author').classList.remove('author-active');
    body.forEach(el =>{
        el.style.opacity = '1';
    })
});

console.log(document.querySelector('body').clientWidth)

document.querySelector('.burger').addEventListener('click', ()=> {
    document.getElementById('top').classList.toggle('top-active');
    document.getElementById('middle').classList.toggle('middle-active');
    document.getElementById('bottom').classList.toggle('bottom-active');  
    document.querySelector('.nav-top').classList.toggle('nav-top-active');

})

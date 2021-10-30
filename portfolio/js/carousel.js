'use strict';

{
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const ul = document.querySelector('ul');
    const slides = ul.children;
    const dots = [];
    let currentInde = 0;

    function updateButtons() {
        prev.classList.remove('hidden');
        next.classList.remove('hidden');

        if (currentInde === 0) {
            prev.classList.add('hidden');
        }
        if (currentInde === slides.length - 1) {
            next.classList.add('hidden');
        }
    }


    function moveSlides() {
        const slidewidth = slides[0].getBoundingClientRect().width;
        ul.style.transform = `translateX(${-1 * slidewidth * currentInde}px)`;
    }

}
import { renderPage } from "./js_handler.js";

let index = 0;
let num = 0;
let opacity = 1;
let speed = 100;
let cursor_index = 0;
let width;
let height;
let border = 0;

// const schoolLogo = document.getElementById('school_logo');

const title = document.getElementById('title');
const div_photo_pro = document.getElementById('div_photo_pro');
const scroll_text = document.getElementById('scroll_text');

// This is to update the current width and current height of the window for css

function updateDivSize()
{
    const closeDiv = document.getElementById("closeLanding");
    const borderTop = parseInt(closeDiv.borderTopWidth, 10);
    width = window.innerWidth - borderTop;
    height = window.innerHeight - borderTop;

    // Update the size of the div to match the window dimensions
    closeDiv.style.width = `${width}px`;
    closeDiv.style.height = `${height}px`;
}

function handleScroll()
{
    window.removeEventListener('wheel', handleScroll);
    const closeDiv = document.getElementById("closeLanding");
    const opacityInterval = setInterval(() => 
    {
        title.style.opacity = opacity;
        div_photo_pro.style.opacity = opacity;
        scroll_text.style.opacity = opacity;
        document.getElementsByClassName('cursor')[cursor_index].style.opacity = opacity;

        // This is the animation of the div closing itself

        if (border < window.innerHeight / 2)
        {
            border += 5;
            closeDiv.style.border = `${border}px #000 solid`;
        }
        if (opacity > -0.3)
            opacity -= 0.015;
        else if (opacity <= -0.3 && border >= window.innerHeight / 2)
        {
            // if the previous page is not showing anymore, removing all elements, going to the next page

            clearInterval(opacityInterval);
            const body = document.getElementById("body");
            document.getElementById("landing").style.display = "none";
            body.style.backgroundColor = "#000";
            renderPage(1);
        }
    }, 20);
}

// typeWriter takes a string as argument and writes it to the div at the num position of an array of typeWriter classed elements

export function typeWriter(text, num, cursorBool, index)
{
    const typewriterElement = document.getElementsByClassName("typewriter")[num];
    if (index < text.length)
    {
        // Add the current character and the cursor span
        if (cursorBool == false)
            typewriterElement.textContent = "./" + text.substring(0, index + 1);
        else
        typewriterElement.textContent = text.substring(0, index + 1);
        if (cursorBool == true)
            typewriterElement.innerHTML += '<span id="cursor" class="cursor"></span>';
        index++;
        setTimeout(() => 
        {
            typeWriter(text, num, cursorBool, index);
        }, speed); // Continue typing
    }
    else if (cursorBool == true)
    {
        typewriterElement.innerHTML = text + '<span id="cursor" class="cursor"></span>';
        index = 0;
    }
}

// Rendering the landing page, adding a listener of the scroll to go to the next page

export function renderLanding()
{
    typeWriter("Téo Rimize", 0, true, index);

    window.addEventListener('wheel', handleScroll);

    // Adjusting the closing div for the correct screen size

    updateDivSize();

    // Recalculate the div size whenever the window is resized

    window.addEventListener('resize', updateDivSize);

    // If you want to account for full-screen changes, you could also listen for fullscreen events

    document.addEventListener('fullscreenchange', updateDivSize);
    document.addEventListener('webkitfullscreenchange', updateDivSize);  // For WebKit-based browsers like Safari
}


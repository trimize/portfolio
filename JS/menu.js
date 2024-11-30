import { renderPage } from "./js_handler.js";

// Animation for the options 

function showBox()
{
    const boxes = document.getElementsByClassName("box");
    let opacity = 0;
    Array.from(boxes).forEach(box =>
    {
        const opInterval = setInterval(() =>
        {
            box.style.display = "flex";
            opacity += 0.008;
            box.style.opacity = `${opacity}`;
            if (opacity >= 1)
                clearInterval(opInterval);
        }, 20);
    });
}

// rendering the menu page

export function renderMenu()
{
    const menu = document.getElementById("menu");
    menu.style.display = "grid";
    showBox();
    document.getElementById("schoolImg").addEventListener('click', () =>
    {
        renderPage(2);
    });
}
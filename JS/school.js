import { typeWriter } from "./landing.js";

// opening animation

let index = 0;
let arrowIndex = 1;

function opening ()
{
    const openChoiceDiv = document.getElementById("openChoiceDiv");
    const openDetailsDiv = document.getElementById("openDetailsDiv");
    const line = document.getElementById("lineAnimation");
    const menu = document.getElementById("menu");
    const school = document.getElementById("school");
    const texts = ["What_is_42?", "transcendence", "webserv", "inception", "minishell", "cub3d", "fractol"]

    openChoiceDiv.style.display = "block";
    openDetailsDiv.style.display = "block";

    // setting a timeout to let the browser understand the display is now block before

    setTimeout(function()
    {
        openChoiceDiv.style.left = '0vw';
        openDetailsDiv.style.right = '0vw';
    }, 10);

    openChoiceDiv.addEventListener('transitionend', () =>
    {
        menu.style.display = "none";
        line.style.display = "block";
        setTimeout(function()
        {
            line.classList.add('grow');
        }, 10);
    });

    line.addEventListener('transitionend', (event) =>
    {
        if (event.propertyName === 'height')
        {
            school.style.display = "flex";
            line.style.width = "10px";
            line.style.opacity = "0";
            openChoiceDiv.style.display = "none";
            openChoiceDiv.style.left = "-35vw";
            openDetailsDiv.style.display = "none";
            openDetailsDiv.style.right = "-65vw";
        }
        if (event.propertyName === 'opacity')
        {
            for(let i = 1; i < 8; i++)
                typeWriter(texts[i - 1], i, false, index);
            handleArrow();
            handleHoverChoices();
            handleKeyboard();
            line.style.display = "none";
            line.style.width = "5px";
            line.style.opacity = "1";
            line.classList.remove('grow');
        }
    });
}

function renderAbout()
{
    console.log("42's");
}

function renderTransc()
{
    console.log("transcendence");
}

function renderWebserv()
{
    console.log("webserv");
}

function renderInception()
{
    console.log("inception");
}

function renderMinishell()
{
    console.log("minishell");
}

function renderCub3d()
{
    console.log("cub3d");
}

function renderFractol()
{
    console.log("fractol");
}

function handleKeyboard()
{
    document.addEventListener("keydown", function(event) {
        if (event.key == "ArrowDown" && arrowIndex < 7)
        {
            arrowIndex++;
            switch(arrowIndex)
            {
                case 1:
                    renderAbout();
                    break;
                case 2:
                    renderTransc();
                    break;
                case 3:
                    renderWebserv();
                    break;
                case 4:
                    renderInception();
                    break;
                case 5:
                    renderMinishell();
                    break;
                case 6:
                    renderCub3d();
                    break;
                case 7:
                    renderFractol();
                    break;
            }
        }
        else if (event.key == "ArrowUp" && arrowIndex > 1)
        {
            arrowIndex--;
            switch(arrowIndex)
            {
                case 1:
                    renderAbout();
                    break;
                case 2:
                    renderTransc();
                    break;
                case 3:
                    renderWebserv();
                    break;
                case 4:
                    renderInception();
                    break;
                case 5:
                    renderMinishell();
                    break;
                case 6:
                    renderCub3d();
                    break;
                case 7:
                    renderFractol();
                    break;
            }
        }
        
        handleArrow();
    });
}

function handleHoverChoices()
{
    const choice = document.getElementsByClassName("typewriter");
    for (let i = 1; i < choice.length; i++) {
        choice[i].addEventListener("mouseover", () =>
        {
            arrowIndex = i;
            handleArrow();
            switch(arrowIndex)
            {
                case 1:
                    renderAbout();
                    break;
                case 2:
                    renderTransc();
                    break;
                case 3:
                    renderWebserv();
                    break;
                case 4:
                    renderInception();
                    break;
                case 5:
                    renderMinishell();
                    break;
                case 6:
                    renderCub3d();
                    break;
                case 7:
                    renderFractol();
                    break;
            }
        });
    }
}

function handleArrow()
{
    const infoText = document.getElementsByClassName("typewriter")[arrowIndex].getBoundingClientRect();
    const arrow = document.getElementById("choiceArrow");
    arrow.style.display = "block";
    arrow.style.top = `${infoText.top}px`
}

export function renderSchool()
{
    opening();
    window.addEventListener('resize', handleArrow);
}
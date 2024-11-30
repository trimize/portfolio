import { renderLanding } from "./landing.js";
import { renderMenu } from "./menu.js";
import { renderSchool } from "./school.js";

// This function render the page depending on the index given

export function renderPage(index)
{
    switch(index)
    {
        case 0:
            renderLanding();
            break;
        case 1:
            renderMenu();
            break;
        case 2:
            renderSchool();
            break;
        default:
            renderLanding();
            break;
    }
}

renderPage(0);

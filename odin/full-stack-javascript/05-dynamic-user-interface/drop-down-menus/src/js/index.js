import "../../../variables.css";
import "../../../common.css";
import "../css/index.css";

let dropDownMenu = document.querySelector(".drop-down-header");
let dropDownList = document.querySelector(".drop-down-list");

dropDownMenu.addEventListener('click', () => toggleDropDown(dropDownList))

function toggleDropDown(target) {
    target.classList.toggle("shown");
}


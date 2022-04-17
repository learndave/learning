import _ from 'lodash';
import "./style.css";
import Icon from './icon.png';
import TVShows from "./tv_shows.csv";
import Note from "./tv_shows.xml";

 function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  console.log(TVShows);
  console.log(Note);

  return element;
}

 document.body.appendChild(component());
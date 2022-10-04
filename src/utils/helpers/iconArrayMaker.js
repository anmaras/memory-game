import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCoffee,
  faShieldHalved,
  faPoo,
  faPhone,
  faHippo,
  faBold,
  faRocket,
  faGift,
  faAnchor,
  faBug,
  faCar,
  faFlask,
  faFutbol,
  faHandSpock,
  faLiraSign,
  faMoon,
  faSnowflake,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

const iconArr6x6 = [
  faCoffee,
  faShieldHalved,
  faPoo,
  faPhone,
  faHippo,
  faBold,
  faRocket,
  faGift,
  faAnchor,
  faBug,
  faCar,
  faFlask,
  faFutbol,
  faHandSpock,
  faLiraSign,
  faMoon,
  faSnowflake,
  faSun,
];
const iconArr4x4 = [
  faCoffee,
  faShieldHalved,
  faPoo,
  faPhone,
  faHippo,
  faBold,
  faRocket,
  faGift,
];

/* Fisher-Yates Shuffle  */
function shuffle(c) {
  let arr = '';
  for (let i = c.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    arr = c[j];
    c[j] = c[i];
    c[i] = arr;
  }
  return c;
}

const iconArray = (size) => {
  let newArray = [];
  size === 6 ? (newArray = iconArr6x6) : (newArray = iconArr4x4);
  return shuffle(newArray.concat(newArray)).map((item) => (
    <FontAwesomeIcon icon={item} />
  ));
};

const numberArray = (size) => {
  let num = '';
  size === 6 ? (num = 18) : (num = 8);
  return shuffle([...Array(num).keys(), ...Array(num).keys()]);
};

export { iconArray, numberArray };

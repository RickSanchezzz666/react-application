import React, { useState, useEffect } from 'react';
import './style.css';

// const a = [1, 2, 3, 4, 5, 6];
// const all = a; // all => [1, 2, 3, 4, 5, 6]
// const [first] = a; // first => 1
// const [a1, a2] = a;// a1 => 1, a2 => 2
// const [b1, ...other] = a; // b1 => 1, other => [2, 3, 4, 5, 6]
// const [b1, b2, ...other] = a; // b1 => 1, b2 => 2, other => [3, 4, 5, 6]

function Card (props) {
  // let likes = 15;
  // const like = () => {
  //  likes += 1;
  // };
  // const dislike = () => {
  //  likes -= 1;
  // };

  useEffect(
    // function that must be executed
    () => {
      console.log('Component was loaded', props.id);
      // || -- logical OR
      const value = localStorage.getItem(props.id) || props.likes;
      // alternative
      // let value = localStorage.getItem(props.id);
      // if (!value) {
      //   value = props.likes;
      // }
      setLikes(parseInt(value, 10));
    },
    // dependencies that must be watched
    []
  );




  const saveToLocalStorage = (likes) => {
    localStorage.setItem(props.id, likes);
  };

  const [likes, setLikes] = useState(props.likes); // => [currentValue, () => { ... }]
  const like = () => {
    const value = likes + 1;
    setLikes(value);
    saveToLocalStorage(value);
  };
  const dislike = () => {
    const value = likes - 1;
    setLikes(value);
    saveToLocalStorage(value);
  };
  const [opacity, setOpacity] = useState(1);
  const opacityFunc = () => {
    if (opacity === 1) {
      setOpacity(0.5);
    } else {
      setOpacity(1);
    }
    // opacity === '1' ? setOpacity('0.5'): setOpacity('1');
  };
  useEffect(() => {
    if (opacity < 0.5) {
      console.log('Opacity was changed', opacity);
    }
  }, [opacity]);
  return (
    <div className="card" style={{ backgroundColor: props.backgroundColor }}>
      <img src={props.imageSrc}
        style={{ opacity: opacity }} />
      <div className='likes'>
        <button onClick={dislike}>Dislike</button>
        <span>{likes}</span>
        <button onClick={like}>Like</button>
      </div>
      <div onClick={opacityFunc}>Opacity</div>
      <input type="range" min="0" max="100"
        onChange={(event) => {
          setOpacity(event.target.value / 100);
        }} />
    </div>
  );
}

export default Card;

// const a = [1, 23, 4, 5];
// const b = a.map((e) => {
//   return e * 2;
// }); // => [1 * 2, 23 * 2, 4 * 2, 5 * 2]
// console.log('a:', a);
// console.log('b:', b); // [2,46,8,10]

// const d = a.map((e) => {
// 	return e / 2;
// }); // [0.5, 11.5, 2, 2.5]

// const f = a.map(el => {
// 	return "This is element value:" + el
// });
// //[
// //  "This is element value:1",
// //  "This is element value:23",
// //  "This is element value:4",
// //  "This is element value:5",
// //]

// a.forEach((e) => {
//  	console.log('el:', e)
// })

// /* const c = b.filter((el) => el > 5) */
// const c = b.filter((el) => {
//  return el > 5;
// })
// console.log('c:', c);

// const value = b.find(el => el == 8);
// console.log('value:', value);

// console.log('res:', b.find(el => el == 56))

// const cards = [
// 	{ text: 'abcd', value: 454},	{ text: 'freg', value: 123},
// ];

// const card = cards.find(e => e.value == 78);
// if (card) {
// 	console.log('card', card)
// } else {
//  console.log('no card')
// }

// // map, forEach, find, filter

// const todoItems = document.getElementsByClassName('todoItem');

// for(const item of todoItems) {
// 	if (item.innerText !== 'XYZ') {
//   	item.style.display = "none"
//   }
// }

// const todos = localStorage.getItem('todos');// => string
// const a = JSON.parse(todos); // => Array
// JSON.stringify(a); // => string
// localStorage.setitem('todos', JSON.stringify(a));
// Math.random() // => 0.5671122

// const id = new Date().getTimestamp(); // => 454578216 
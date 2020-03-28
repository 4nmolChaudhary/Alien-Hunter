const cursor = document.querySelector('.cursor');
const alien = document.querySelectorAll('.alien');


// document.addEventListener('mousemove', e => {
//     if (aim) cursor.setAttribute("style", `position:absolute; top:${e.pageY - 64}px; left:${e.pageX - 64}px;`);
// })
// document.addEventListener('click', e => {
//     cursor.setAttribute("style", `position:absolute; top:${e.pageY - 64}px; left:${e.pageX - 64}px; transform:scale(1.3);transition: 50ms ease; `);
//     setTimeout(() => cursor.setAttribute("style", ` position:absolute; top:${e.pageY - 64}px; left:${e.pageX - 64}px; transform:scale(1);`), 50)
// })

// const randomTime = (min, max) => {
//     return Math.round(Math.random() * (max - min) + min);
// }
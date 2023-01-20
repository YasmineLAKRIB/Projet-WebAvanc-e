let cards = document.getElementsByClassName('cards')[0];


let poster = document.getElementById('poster');
let title = document.getElementById('title');
let text = document.getElementById('text');

Array.from(document.getElementsByClassName('card')).forEach((ele,i) => {
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h4')[0].innerText;
        text.innerText = ele.getElementsByTagName('p')[0].innerText;
    })
})
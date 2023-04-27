let question1 = prompt('Виберіть фон для сторінки');
document.body.style.backgroundColor = question1;

let question2 = prompt('Виберіть тип шрифта для сторінки');
document.body.style.fontFamily = question2;

let question3 = prompt('Виберіть вирівнювання для заголовка');
document.querySelector('h1').style.textAlign = question3;

let question4 = prompt('Виберіть фон для параграфу з посиланням');
document.querySelector('p').style.backgroundColor = question4;

let question5 = prompt('Виберіть колір тексту у параграфі з посиланнями');
document.querySelector('p').style.color = question5;

let question6 = prompt('Виберіть колір тексту для посилань');
let link = document.getElementsByTagName('a');
for(let i = 0; i<link.length;i++ ){
    link[i].style.color = question6;
}

let question7 = prompt('Виберіть колір тексту для інформації для вивчення');
let question8 = prompt('Виберіть розмір тексту для інформації для вивчення');
let question9 = prompt('Виберіть товщину тексту для інформації для вивчення');

let divElements = document.querySelectorAll('div','div>h2');
for(let elem of divElements){
    elem.style.color = question7;
    elem.style.fontSize = question8;
    elem.style.fontWeight = question9;
}

let question10 = prompt('Виберіть тип маркеру для списку');
document.querySelector('ul').style.listStyleType = question10;

let links = document.querySelectorAll('a');
for (let i = 0; i< links.length; i++){
    let linksNew = prompt(`Введіть посилання на ваш ${i+1} сайт`);
    document.querySelectorAll('a')[i].textContent = linksNew;
    document.querySelectorAll('a')[i].href = 'https://'+ linksNew;
    document.querySelectorAll('a')[i].target = '_blank';
}
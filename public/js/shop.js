
const shop = [{
    img:"/images/book.png",
    alt:'livre',
    prix:"199,90",
},{
    img:"/images/book.png",
    alt:'livre',
    prix:"199,90",
},{
    img:"/images/apple.png",
    alt:'pomme',
    prix:"1999999,90",
}]

const div_flex=document.querySelector('.flex');

for(let i = 0; i < shop.length; i++) {
    const div = document.createElement('div');
    div.className='article';
    div_flex.appendChild(div);
    const img = document.createElement('img');
    img.src=shop[i].img;
    img.alt=shop[i].alt;
    div.appendChild(img);
    const p = document.createElement('p');
    p.textContent='prix : ';
    div.appendChild(p);
    const span = document.createElement('span');
    span.textContent=shop[i].prix;
    span.className='red';
    p.appendChild(span);

}

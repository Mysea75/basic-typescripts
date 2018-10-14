import { Hero } from './hero';

let hero = new Hero('krunal');
hero.id = 15;
console.log(hero.myName());
console.log(hero);

let d = new Date;
window.onload = ()=>{
    document.getElementById("currentDateTime").textContent = d.toString();
}
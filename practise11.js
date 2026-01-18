// h1= document.querySelector("h1");

// setTimeout(()=> {
//     h1.style.color ="red";
// },2000);
// setTimeout(()=> {
//     h1.style.color ="orange";
// },3000);
// setTimeout(()=> {
//     h1.style.color ="green";
// },5000);
h1= document.querySelector("h1");
function changeColor(color,delay){
    setTimeout(() =>{
        h1.style.color = color;
    },delay);
}
changeColor("red",1000);
changeColor("green",2000);
changeColor("blue",3000);
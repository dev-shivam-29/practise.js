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
// h1= document.querySelector("h1");
// function changeColor(color,delay){
//     setTimeout(() =>{
//         h1.style.color = colo3r;
//     },delay);
// }
// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("blue",3000);
// h1= document.querySelector("h1");
// setTimeout(()=> {
//     h1.style.color ="red";
// },1000);
// setTimeout(()=> {
//     h1.style.color ="green";
// },2000);
// setTimeout(()=> {
//     h1.style.color ="yellow";
// },4000);
// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();{
//         }
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000);
//     });
// });
// function savetoDb(data){
//     let internetspeed =Math.floor(Math.random() *10)+1;
//     if(internetspeed >4){
//         console.log("your data was saved:",data);
//     }else{
//         console.log("weak connection. data not saved");
//     }
// }
async function greet(){
    // return "hello world";
    console.log ("hello world");
}
greet();
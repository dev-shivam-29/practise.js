
//function print(el){
   // console.log(el);
//}
//arr.forEach(print);
//arr.forEach(function(el){
  //  console.log(el);
//}//)
//console.log([1,2,3,4].some((el) => el % 2 == 0));
//console.log([2,3,4].every((el) => el % 2 == 0));

//let nums =[1,2,3,4];
//let finalVal =nums.reduce((res, el) =>res+el);
//console.log(finalVal);
let nums = [2,3,4,5,3,4,7,8];
let result = nums.reduce( (max ,  el)=>{
  if(el > max){
    return el;

  } else{
    return max;
  }
});
console.log(result);
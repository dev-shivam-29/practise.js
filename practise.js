let student =[
      {
            name:"aman",
            marks:95,
      },
       {
            name:"shivam",
            marks:92,
      },
       {
            name:"shiva",
            marks:93,
      },
];

let gpa = student.map((el)=>{
      return el.marks/10;
});

console.log(gpa);
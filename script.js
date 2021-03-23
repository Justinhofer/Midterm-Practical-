var wrapperEle = document.body.querySelector(".wrapper");
var numberEle = document.body.querySelector(".number");
var increaseEle= document.body.querySelector(".increase");
var number= 5;
numberEle.innerHTML=number;
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];
for (var i=0; i < list.length; i++){
  var ele = document.createElement("div");
  ele.innerHTML = list[i].name + " " + list[i].age;
  ele.style.color = list[i].color;
  
  if(list[i].age>25){
    ele.style.color="green"
  } 
  
  wrapperEle.appendChild(ele);
}

function increase(num, color){
  number= number+num;
  numberEle.innerHTML=number;
  numberEle.style.color=color;
}

increaseEle.addEventListener("click", function(){
  increase(1);
})
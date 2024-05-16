let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");

var field=document.querySelectorAll(".hidden");

const btn=document.querySelector(".button");

btn.addEventListener("click",()=>{
    var today=new Date();
    let dv=day.value;
    let mv=month.value;
    let yv=year.value;
    if(dv==null || mv==null || yv==null){
        field.innerHTML="This field is required";
        field.style.color="red";
    }
    let presentDay=today.getDate();
    let presentMonth=today.getMonth()+1;
    let presentYear=today.getFullYear();
    let age=presentYear-yv;
    let m=presentMonth-mv;
    if(m<0 || (m===0 && presentDay < day.value)){
        age=age-1;
        m+=12;
    }
    let d=presentDay-dv;
    if(d<0){
        const daysInPreviousMonth = new Date(presentYear, presentMonth - 1, 0).getDate();
        m=m-1;
        d+=daysInPreviousMonth;
    }
    document.getElementById("y").innerHTML=age;
    document.getElementById("m").innerHTML=m;
    document.getElementById("d").innerHTML=d;
})
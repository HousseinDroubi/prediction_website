const image=document.getElementById("dog_image");
const btn_fetch=document.getElementById("btn_fetch");
const fetch_gender=document.getElementById("fetch_gender");
const fetch_age=document.getElementById("fetch_age");
const fetch_nationality=document.getElementById("fetch_nationality");
const input_name=document.getElementById("input_name");

let removeError=(e)=>{
    input_name.placeholder='Enter your name';
    input_name.classList.remove('wrong-input');
}
let fetchdata = (e) =>{
    if(input_name.innerText.trim.length==0){
        input_name.placeholder='Required !!';
        input_name.classList.add('wrong-input');
    }
}
btn_fetch.addEventListener('click',fetchdata);
input_name.addEventListener('click',removeError);

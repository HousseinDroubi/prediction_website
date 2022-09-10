const dog_image=document.getElementById("dog_image");
const btn_fetch=document.getElementById("btn_fetch");
const fetch_gender=document.getElementById("fetch_gender");
const fetch_age=document.getElementById("fetch_age");
const fetch_nationality=document.getElementById("fetch_nationality");
const input_name=document.getElementById("input_name");


fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    let image_content=Object.values(data)[0];
    console.log(image_content)
    dog_image.innerHTML='<img src= "'+image_content+'"/>';
  });

let removeError=(e)=>{
    input_name.placeholder='Enter your name';
    input_name.classList.remove('wrong-input');
}

let catchError = (e)=>{
    if(input_name.value.length==0){
        input_name.placeholder='Required !!';
        input_name.classList.add('wrong-input');
    }
    else{
        removeError();
    }
}
btn_fetch.addEventListener('click',catchError);
input_name.addEventListener('click',removeError);

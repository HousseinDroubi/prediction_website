const image=document.getElementById("dog_image");
const btn_fetch=document.getElementById("btn_fetch");
const fetch_gender=document.getElementById("fetch_gender");
const fetch_age=document.getElementById("fetch_age");
const fetch_nationality=document.getElementById("fetch_nationality");
const input_name=document.getElementById("input_name");


fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    console.log(Object.values(data)[0])
    let image=Object.values(data)[0];
    console.log(image)
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
    //     removeError();
    //     // console.log('sadsad')
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then(response => {
    //     // response=response.json();
    //     console.log(response.body)
    // })
    // .catch(error => {
    //     // handle the error
    // });  
    //     // .then((response) => response.json())
    //     // .then((data) =>console.log(Object.values(data)[0]))
    //     // .then(re=>{
    //     //      image.innerHTML="<img src='${Object.values(re)[0]}'/>"
    //     //  })
        
    fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
    }
}
btn_fetch.addEventListener('click',catchError);
input_name.addEventListener('click',removeError);

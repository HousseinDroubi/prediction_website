const dog_image=document.getElementById("dog_image");
const btn_fetch=document.getElementById("btn_fetch");
const fetch_gender=document.getElementById("fetch_gender");
const fetch_age=document.getElementById("fetch_age");
const fetch_nationality=document.getElementById("fetch_nationality");
const input_name=document.getElementById("input_name");

// Get the json request from url and fill image
fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((data) => {
    let image_content=Object.values(data)[0];
    dog_image.innerHTML='<img src= "'+image_content+'"/>';
  });
// Return input text to inital case
let removeError=(e)=>{
    input_name.placeholder='Enter your name';
    input_name.classList.remove('wrong-input');
}
// Catch if the text is empt
let catchError = (e)=>{
    if(input_name.value.length==0){
        input_name.placeholder='Required !!';
        input_name.classList.add('wrong-input');
    }
    else{
        removeError();
        // Fetch gender
        let gender_url='https://api.genderize.io/?name=';
        gender_url=gender_url.concat(input_name.value)
        // console.log(gender_url)
        fetch(gender_url)
          .then((response) => response.json())
          .then((data) => {
          let fetched_gender=Object.values(data)[1];
        //   fetch_gender.innerText=fetched_gender;
        const div = document.createElement('div');
        div.innerText=fetched_gender;
        fetch_gender.appendChild(div);

          

  })
    }
}
btn_fetch.addEventListener('click',catchError);
input_name.addEventListener('click',removeError);

const dog_image=document.getElementById("dog_image");
const btn_fetch=document.getElementById("btn_fetch");
const fetch_gender=document.getElementById("fetch_gender");
const fetch_age=document.getElementById("fetch_age");
const fetch_nationality=document.getElementById("fetch_nationality");
const input_name=document.getElementById("input_name");
const fetch_name=document.getElementById("fetch_name");
// Get the json request from url and fill image
fetch('https://dog.ceo/api/breeds/image/random')
.then((response) => response.json())
.then((data) => {
    let image_content=Object.values(data)[0];
    dog_image.innerHTML='<img src= "'+image_content+'"/>';
  });
// Return input text to its inital state
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
        // Fetch age
        let gender_url='https://api.genderize.io/?name=';
        gender_url=gender_url.concat(input_name.value)
        // console.log(gender_url)
        fetch(gender_url)
          .then((response) => response.json())
          .then((data) => {
          let fetched_gender=Object.values(data)[1];
        const div_gender = document.createElement('div');
        div_gender.innerText=fetched_gender;
        fetch_gender.appendChild(div_gender);})

  // Fetch age
  let age_url='https://api.agify.io/?name=';
  age_url=age_url.concat(input_name.value)
  fetch(age_url)
    .then((response) => response.json())
    .then((data) => {
    let fetched_age=Object.values(data)[1];
    const div_age = document.createElement('div');
    div_age.innerText=fetched_age;
    fetch_age.appendChild(div_age);})
// Fetch Nationality
  let Nationality_url='https://api.nationalize.io/?name=';
  Nationality_url=Nationality_url.concat(input_name.value)
  fetch(Nationality_url)
    .then((response) => response.json())
    .then((data) => {
    let fetched_nationality=Object.values(data)[1];
    let nationalities='';
    for (let i=0;i<fetched_nationality.length;i++){
        let list1=Object.values(fetched_nationality)[i];
        let list2 = Object.values(list1)[0];
        console.log(list2)
        nationalities=nationalities.concat(list2)+',';
    }
    const div_nationality= document.createElement('div');
    div_nationality.innerText=nationalities;
    fetch_nationality.appendChild(div_nationality);

    const div_name=document.createElement('div');
    div_name.innerText=input_name.value;

    fetch_name.appendChild(div_name)
    
    
})
    }

    
}
btn_fetch.addEventListener('click',catchError);
input_name.addEventListener('click',removeError);

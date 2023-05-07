const f_name = document.querySelector('#fname') || null;
const l_name = document.querySelector('#lname');
const adventurer_id = document.querySelector('#adventurerID');
const sex = document.querySelector('#gender');
const sex_value = sex.options[sex.selectedIndex.innerText];
const age = document.querySelector('#age');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submitBtn = document.querySelector('#submit-btn');
const sign_Up_Form = document.querySelector('#sign-up-form');




submitBtn.addEventListener('click',() => {
    fetch('/Sign-Up',{
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({
            f_name: f_name.value.trim().length > 0 ? f_name.value : null,
            l_name: l_name.value.trim().length > 0 ? l_name.value : null,
            adventurer_id: adventurer_id.value.trim().length > 0 ? adventurer_id.value : null,
            sex: sex.value,
            age: age.value.trim().length > 0 ? age.value : null,
            username: username.value.trim().length > 0 ? username.value : null,
            password: password.value.trim().length > 0 ? password.value : null
        })
    })
    .then(res => res.json())
    .then(data =>{
        if(data.name){
            alert('registration successful');
        }
    })
});
const form = document.getElementById('form');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const alertMessage = document.querySelector('.alertMessage');
const alertTitle = document.getElementById('alertTitle');


let isValid = false;
let passwordMacth = false;

function validateForm(){
    isValid = form.checkValidity();
    if(!isValid){
        alertMessage.style.backgroundColor="red";
        return;
    }

    if(password.value === repassword.value){
        passwordMacth=true;
        password.style.borderBlockColor='green';
        repassword.style.borderBlockColor='green';
    }else{
        passwordMacth=false;
        alertTitle.textContent= 'şifreleriniz eşleşmiyor!';
        alertMessage.style.backgroundColor= "red";
        password.style.borderBlockColor='red';
        repassword.style.borderBlockColor='red';
        return;
    }

    if(isValid && passwordMacth){
        alertTitle.textContent= 'Kayıt Olundu!';
        alertMessage.style.backgroundColor= "green";
    }
}

function takeFormInformation(){
    const user ={
        name:form.name.value,
        surname:form.surname.value,
        email:form.email.value,
        phone:form.phone.value,
        password:form.password.value,
        address:form.address.value
    };

    console.log(user);
    
}

function submitForm(e){
    e.preventDefault();
    validateForm();

    if(isValid && passwordMacth){
        takeFormInformation();
    }
}

form.addEventListener('submit', submitForm);
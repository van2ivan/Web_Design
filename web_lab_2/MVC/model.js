function validate_name(fname,lname){
    if(fname.length <=0  ||  lname <=0 ){
        alert("Input name...");
        return false;
    }
    return true;
}

function validate_password(password){
    if(password.length<=3 || password.length > 9){
        alert("Incorect password input");
        return false;
    }
    return true;
}

function validate_email(email){
    if(email.indexOf("@")== -1){
        alert("Incorect email input");
        return false;
    }
    return true;
}

class Model{
    constructor(){
        this.currentPersonIndex = localStorage.getItem("currentPersonIndex");
        this.allPersons  =JSON.parse(localStorage.getItem("allPersons"));
    }
}

  loginProfile = () => {
    let currentAcc = -1;
    let currentAccIndex = -1;
    const LoginEmail = document.getElementById("logEmail");
    const LoginPassword = document.getElementById("logPassword");
    currentAcc = this.allPersons.find((acc)=>{
      acc.email === LoginEmail.value;
    })
    if (typeof currentAcc === "undefined") {
      alert("Acc with this email dosen't exist ");
      return;
    }else {
      currentAccIndex = this.allPersons.findIndex((acc) => acc.email === LoginEmail.value);
        if (currentAcc.password === LoginPassword.value) {
          localStorage.setItem("currentUserIndex", currentAccIndex);
          document.location.href = "./index.html";
        } else {
          alert("Wrong password");
          LoginPassword.value = "";
          return;
        }
      }
  };

  registrProfile = () => {
    const RegisterEmail = document.getElementById("reg-email");
    const RegisterPassword = document.getElementById("u-password");
    const FirstName = document.getElementById("fName");
    const LastName = document.getElementById("sName");
    const RegisterMale = document.getElementById("inlineRadio1");
    const RegisterFemale = document.getElementById("inlineRadio2");
    const newProfile = {};
    
    const checked = (RegisterMale.checked || RegisterFemale.checked) ? true : false ;

    if(validate_email(RegisterEmail)&&validate_password(RegisterPassword)&&validate_name(FirstName,LastName)&&checked){
      newProfile.email = RegisterEmail.value;
      newProfile.fname = FirstName.value;
      newProfile.lname = LastName.value;
      newProfile.password = RegisterPassword.value;
      newProfile.gender = RegisterMale.checked ? "male" : "female";
      this.allUsers.push(newProfile);
      localStorage.setItem("allPersons", JSON.stringify(this.allUsers));
      document.location.href = "./index.html";
    }

  };
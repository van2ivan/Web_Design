class View{
    constructor(){
        this.firstName = document.getElementById('fName');
        this.lastName =  document.getElementById('lName');
        this.email = document.getElementById('address_email');
        this.password = document.getElementById('u_password');
        this.gender = document.getElementById('inlineRadio1');
    }

    showProfile = (currentUserPosition, allPersonsView) => {
        if (+currentUserIndexView === -1) {
          return;
        } else {
          this.profileName.forEach((element) => element.innerHTML = allUsersView[currentUserPosition].firstName + " " + allUsersView[currentUserPosition].lastName)
          this.profileEmail.innerHTML = allUsersView[currentUserPosition].email;
          this.profileGender.innerHTML = allUsersView[currentUserPosition].gender;
          this.profileId.innerHTML = allUsersView[currentUserPosition].userId;
        }
      };

}

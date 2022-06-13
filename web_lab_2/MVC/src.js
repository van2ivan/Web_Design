'use strict';
myApp.view.showProfile(myApp.model.currentUserIndex, myApp.model.allUsers);
myApp.profileRegisterHandler();
localStorage.setItem('currentUserIndex', -1);
myApp.profileLoginHandler();
class Controller {
    constructor() {
      this.view = new View();
      this.model = new Model();
    }
    
    profileRegisterHandler = () => {
      const RegBtn = document.querySelector('.reg-button');
      RegBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('here');
        this.model.registrProfile();
      });
    };
  
    profileLoginHandler = () => {
      const LogBtn = document.querySelector('.log-button');
      LogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.model.loginProfile();
      });
    };
  
  }
  
  const myApp = new Controller();
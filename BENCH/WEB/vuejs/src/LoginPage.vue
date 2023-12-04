<template>
    <div class="mainContainer">
      <img alt="Vue logo" src="./assets/Logo_AREA.png" class="logo">
      <div class="inputContainer">
          <input class="inputText" v-model="email" placeholder="Email" />
          <input type="password" class="inputText" v-model="password" placeholder="Password" />
      </div>
      <div class="forgotPwd">
        <a class="forgotPwdButton" @click="forgotPwd">Forgot password ?</a>
      </div>
      <button class="buttonLogin" @click="login">Login</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log(`Email: ${this.email}, Password: ${this.password}`);
        this.$router.push('/home');
      },
      forgotPwd() {
        this.$router.push('/forgot-password');
      },
    },
  };
  </script>
  
  <style>
  .mainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-direction: column;
  }
  
  .inputContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .inputText {
    width: 400px;
    border-radius: 5px;
    border: 1px solid #363636;
    margin: 10px;
    padding: 10px;
  }
  
  .logo {
    height: 150px;
    pointer-events: none;
  }
  
  .buttonLogin {
    width: 200px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    background-color: #0000FF;
    color: white;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }
  
  .forgotPwd {
    width: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  
  .forgotPwdButton {
    color: #0000FF;
    text-decoration: none;
    padding: 10px;
  }
  
  </style>
  
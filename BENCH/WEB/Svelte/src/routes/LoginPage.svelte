<script>
	import { navigate } from 'svelte-routing';
    let email = '';
    let password = '';
  
    const login = () => {
      console.log(`Email: ${email}, Password: ${password}`);
	  navigate('/home')
    };
  
    const forgotPwd = () => {
      navigate('/forgotPassword')
    };
  
  </script>


  <main class="main">
    <img alt="AREA logo" src="./Logo_AREA.png" class="logo">
    <div class="inputContainer">
      <input bind:value={email} class="inputText" placeholder="Email" />
      <input type="password" bind:value={password} class="inputText" placeholder="Password" />
    </div>
    <div class="forgotPwd">
      <!-- <a class="forgotPwdButton" on:click={forgotPwd}>Forgot password ?</a> -->
	  <button on:click={forgotPwd} class="forgotPwdButton">
		<span>Forgot password ?</span>
	</button>
    </div>
    <button on:click={login} class="buttonLogin">Login</button>
      </main>




  <style>
    .main {
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
    cursor: pointer;
	border: none;
	background: none;
  }
  .forgotPwdButton:hover {
    text-decoration: underline;
  }
  
  </style>
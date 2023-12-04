<script>
  export let name;
  import { onMount } from 'svelte';
  import { navigate, Router, Route} from 'svelte-routing';
  import LoginPage from './routes/LoginPage.svelte';
  import HomePage from './routes/HomePage.svelte';
  import ForgotPassword from './routes/ForgotPassword.svelte'

  onMount(() => {
    navigate('/');
  });
</script>

<Router>
  <Route path="/" component={LoginPage} />
  <Route path="/home" component={HomePage}/>
  <Route path="/forgotPassword" component={ForgotPassword}/>
</Router>
import './App.css';
function App() {
 
  return (
    <div className='log_main'>
      
      <h2 className='head'>Login Your Account</h2>
      <form>
        <input className='inpt1' id="u_name" type='text' placeholder='Email Id'></input>
        <p></p>
        <input className='inpt1' type='password' placeholder='Password'></input>
        <p></p>
        <button className='btn1' type='button'>Login</button>
        <p></p>
        <a href="http://192.168.15.1:3000"><button className='btn1' type='button'>Sign Up</button></a>
        <p></p>
        <a className='link' href="www.google.com">Forgot password?</a>
       
      </form>
    </div>
  );
}

export default App;
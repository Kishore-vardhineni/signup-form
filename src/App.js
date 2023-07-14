import {useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({
     userName: '',
     email: '',
     password: '',
     confirmPassword: ''
  })

  const {userName, email, password, confirmPassword } = data;

  const changeHandler = e => {
    setData({...data,[e.target.name]: e.target.value});
  }

  const submitHandler =  e => {
    e.preventDefault();
    axios.post('https://signup-form-d89d0-default-rtdb.firebaseio.com/register.json', data).then(() => alert("submitted successfully"));
    if(userName.length < 5) {
      alert('username atleaset must be 5 characters');
    } else if(password !== confirmPassword) {
      alert('password are not matched');
    } else {
      console.log(data);
    }
  
    this.getData = () => {
      axios.get('https://signup-form-d89d0-default-rtdb.firebaseio.com/register.json').then((response => console.log(response.json)))
    }
    
  }

  return (
    <div className="App">
      <center>
        <form autoComplete='off' onSubmit={submitHandler}>
         <input type="text" name="userName" value={userName} onChange={changeHandler}/><br/>
         <input type="email" name="email" value={email} onChange={changeHandler}/><br/>
         <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
         <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler}/><br/>
         {password !== confirmPassword ? <p style={{color: "red"}}>passwords are not matching</p>: null}
         <input type="submit" />
        </form>
      </center>
    </div>
  );
} 

export default App;

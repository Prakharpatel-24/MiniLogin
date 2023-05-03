import { useState } from 'react';
import './register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post('http://localhost:5000/register', user).then((res) => {
        alert(res.data.message);
        Navigate('/login');
      });
    } else {
      alert('invlid input');
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your Name"
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        onChange={handleChange}
        placeholder="Re enter your Password"
      ></input>
      <div className="button" onClick={register}>
        Register
      </div>
      <div>or</div>
      <div className="button" onClick={() => Navigate('/login')}>
        Login
      </div>
    </div>
  );
};

export default Register;

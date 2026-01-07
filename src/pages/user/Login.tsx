import { useState, type FormEvent } from 'react';
import api from '../../api';

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('/login', { user: { email: email, password: password } });
      alert("Logged in successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Login failed!");
      console.error('Login failed', error);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

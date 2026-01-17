import { useState, type FormEvent } from 'react';
import api from '../../api';
import FormInput from './FormInput';

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
    <section>
      <header className="form-header">
        <h1>Login</h1>
        <h2>Enter your email and password</h2>
      </header>
      <article className="card">
        <form className="login" onSubmit={handleSubmit}>
          {FormInput("email", "Email", "email", "jaysmith@example.com", email, setEmail, true)}
          {FormInput("password", "Password", "password", "type password here", password, setPassword, true)}
          <button type="submit" className="site-button">
            Login
          </button>
        </form>
      </article>
    </section>
  );
};

export default Login;

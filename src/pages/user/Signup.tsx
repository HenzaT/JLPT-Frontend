import { useState, type FormEvent } from 'react';
import api from '../../api';
import FormInput from './FormInput';

const Signup = () => {
  const [ firstname, setFirstname ] = useState("");
  const [ lastname, setLastname ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await api.post('/signup', {
        user: { firstname: firstname, lastname: lastname, email: email, password: password }
      });
      alert("Signed up successfully!");
      console.log(response.data);
    } catch (error) {
      alert("Signup failed!");
      console.error('Signup failed', error);
    }
  };

  return (
    <section className='form'>
      <header className="form-header">
        <h1>Sign up</h1>
        <h2>Enter your name, email and password</h2>
      </header>
      <article className="card">
        <form className="signup" onSubmit={handleSubmit}>
          {FormInput("firstname", "First Name", "text", "Jay", firstname, setFirstname, true)}
          {FormInput("lastname", "Last Name", "text", "Smith", lastname, setLastname, false)}
          {FormInput("email", "Email", "email", "jaysmith@example.com", email, setEmail, true)}
          {FormInput("password", "Password", "password", "type password here", password, setPassword, true)}
          <button type="submit" className="site-button">
            Signup
          </button>
        </form>
      </article>
    </section>
  );
};

export default Signup;

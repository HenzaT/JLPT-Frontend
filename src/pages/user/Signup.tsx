import { useState, type FormEvent } from 'react';
import api from '../../api';

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
    <form className="signup" onSubmit={handleSubmit}>
      <input
        type="firstname"
        name="firstname"
        id="firstname"
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
      />
      <input
        type="lastname"
        name="lastname"
        id="lastname"
        value={lastname}
        onChange={e => setLastname(e.target.value)}
      />
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
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;

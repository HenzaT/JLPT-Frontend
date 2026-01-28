import { useState, type FormEvent } from 'react';
import api from '../../api';
import FormInput from './FormInput';
import eyeSvg from '../../../public/icons/eye-slash.svg';
import closedEyeSvg from '../../../public/icons/eye.svg';


const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isClicked, setIsClicked ] = useState<boolean>(false);

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

  const togglePasswordView = () => {
    setIsClicked(prev => !prev)
    console.log(isClicked)
  }

  return (
    <section className='form'>
      <header className="form-header">
        <h1>Login</h1>
        <h2>Enter your email and password</h2>
      </header>
      <article className="card">
        <form className="login" onSubmit={handleSubmit}>
          {FormInput("email", "Email", "email", "jaysmith@example.com", email, setEmail, true)}
          <div className="label-input">
            <label htmlFor="password">Password</label>
            <span className="password-input">
              <input
                type={isClicked ? "text" : "password"}
                name="password"
                placeholder="type password here"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="button" className='show-hide-pwd' onClick={togglePasswordView}>
                <img src={isClicked ? closedEyeSvg : eyeSvg} alt="" />
              </button>
            </span>
          </div>
          <button type="submit" className="site-button">
            Login
          </button>
        </form>
      </article>
    </section>
  );
};

export default Login;

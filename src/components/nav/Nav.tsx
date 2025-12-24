import { Link } from 'react-router-dom';

export default function Nav() {
  console.log('hello nav')
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/jlpt5">Jlpt-5</Link>
    </nav>
  )
}

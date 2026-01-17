import mainNav from '../../content/mainNav.json';
import UserModal from '../user-modal/UserModal';
import { Link } from 'react-router-dom';

export default function MainNav() {
  return (
    <nav id="main-nav">
      <Link to="/">{mainNav.title}</Link>
      {UserModal()}
    </nav>
  )
}

import header from '../../content/header.json';
import UserModal from '../../components/user-modal/UserModal';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">{header.title}</Link>
        {UserModal()}
      </nav>
    </header>
  )
}

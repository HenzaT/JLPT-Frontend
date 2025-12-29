import { Link } from 'react-router-dom';

export default function Nav() {
  const LinkToJlpt = (linkTo: string, svg: string, number: number) => (
    <Link to={linkTo}>
      <img src={`/public/icons/${svg}`} alt={`number ${number} icon`} className="icon" />
    </Link>
  )

  return (
    <nav>
      <Link to="/"><img src="/public/icons/house.svg" alt="house icon" className="icon" /></Link>
      {LinkToJlpt("/jlpt5", "5-circle.svg", 5)}
      {LinkToJlpt("/jlpt4", "4-circle.svg", 4)}
      {LinkToJlpt("/jlpt3", "3-circle.svg", 3)}
      {LinkToJlpt("/jlpt2", "2-circle.svg", 2)}
      {LinkToJlpt("/jlpt1", "1-circle.svg", 1)}
    </nav>
  )
}

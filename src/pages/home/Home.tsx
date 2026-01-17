import home from '../../content/home.json';
import { Link } from 'react-router-dom';
import { useKanjiCount } from '../../contexts/KanjiCountContext';

export default function Home() {
  const { getCounts, loading } = useKanjiCount();

  if (loading) return null;

  const linkCard = (linkTo: string, linkH2: string, count: number) => (
    <Link to={linkTo} className='link-card'>
      <article className='link-card-body'>
        <h2>{linkH2}</h2>
        <p>{count}</p>
      </article>
    </Link>
  )

  return (
    <section className="home">
      <nav className="link-cards">
        {linkCard('/n5', home['link-title-N5'], getCounts(5))}
        {linkCard('/n4', home['link-title-N4'], getCounts(4))}
        {linkCard('/n3', home['link-title-N3'], getCounts(3))}
        {linkCard('/n2', home['link-title-N2'], getCounts(2))}
        {linkCard('/n1', home['link-title-N1'], getCounts(1))}
      </nav>
    </section>
  )
}

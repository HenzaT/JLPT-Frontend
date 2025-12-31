import { Link } from 'react-router-dom';
import home from '../../content/home.json';
import { useKanji } from '../../contexts/KanjiContext';

export default function Home() {
  const { getCounts, loading } = useKanji();

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
      <h1>{home.title}</h1>
      <nav className="link-cards">
        {linkCard('/N5', home['link-title-N5'], getCounts(5))}
        {linkCard('/N4', home['link-title-N4'], getCounts(4))}
        {linkCard('/N3', home['link-title-N3'], getCounts(3))}
        {linkCard('/N2', home['link-title-N2'], getCounts(2))}
        {linkCard('/N1', home['link-title-N1'], getCounts(1))}
      </nav>
    </section>
  )
}

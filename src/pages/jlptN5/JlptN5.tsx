import { Link } from 'react-router-dom';

import jlpt5 from '../../content/jlpt5.json';
import Card from '../../components/card/Card';
import LoadingElement from '../../components/loading-element/LoadingElement';
import shuffleSvg from '../../../public/icons/shuffle.svg';

import { useKanjiRandom } from '../../contexts/KanjiRandomContext';
import { useKanjiCount } from '../../contexts/KanjiCountContext';
import { useKanji } from '../../contexts/KanjiContext';

export default function Jlpt_5() {
  const { getCounts } = useKanjiCount();
  const { kanji } = useKanjiRandom()
  const { loading } = useKanji()

  return (
    <section className="n5-index">
      {loading ? (
        <LoadingElement />
      ) : (
      <>
        <header className="top-text">
          <h1>{jlpt5.title}</h1>
          <h2>{kanji.id} / {getCounts(5)}</h2>
        </header>
        <div className="main-content">
          {<Card
            kanjiObj={kanji}
            isMainPage={true}
          />}
          <div className="buttons">
            <Link to="/n5/revise" className="site-button">revise</Link>
            <button onClick={useKanjiRandom} className="site-button round">
              <img src={shuffleSvg} alt="shuffle arrows icon" className='shuffle' />
            </button>
          </div>
        </div>
      </>
      )}
    </section>
  )
}

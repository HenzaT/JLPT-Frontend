import { DividingLine } from "../dividing-line/DividingLine";

interface CardType {
  kanjiObj: any
  isMainPage: boolean
}

export default function Card(props: CardType) {
  const { kanjiObj, isMainPage } = props;

  const splitArray = (array: string[]) => {
    if (array.length > 1) {
      return (<p>{array.join(" • ")}</p>)
    }
    if (array.length === 1) {
      return (<p>{array}</p>)
    }
  }

  return (
    <article className="card">
      <div className="card-body">
        <h3>{kanjiObj.kanji}</h3>
        {isMainPage && (
        <>
          <span className="row-text">
            {splitArray(kanjiObj.kun_readings)}
          </span>
          {DividingLine()}
          <span className="row-text">
            {splitArray(kanjiObj.on_readings)}
          </span>
          {DividingLine()}
          <span className="row-text">
            {splitArray(kanjiObj.meanings)}
          </span>
        </>
        )}
      </div>
    </article>
  )
}

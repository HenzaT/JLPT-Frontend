interface CardType {
  kanjiObj: any
}

export default function Card(props: CardType) {
  const { kanjiObj } = props;

  const kunReadings = () => {
    if (kanjiObj.kun_readings.length >= 1) {
      return (
        kanjiObj.kun_readings.map((reading: string, i: number) => (
          <>
            <p key={i}>{reading}</p>
            <p>•</p>
          </>
        ))
      )
    } else {
      return (
        <p>{kanjiObj.kun_readings}</p>
      )
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3>{kanjiObj.kanji}</h3>
        <span className="row-text">
          {kunReadings()}
        </span>
        <p>{kanjiObj.on_readings}</p>
        <p>{kanjiObj.meanings}</p>
      </div>
    </div>
  )
}

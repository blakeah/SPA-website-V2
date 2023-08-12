function Card(props) {

  return (
    <div className="col-6 cards">
    <h2>{props.h2}</h2>
    <h3>{props.h3}</h3>
    </div>
  )
}

export default Card;

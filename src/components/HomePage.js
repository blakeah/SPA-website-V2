import Card from '../components/Card.js'

function HomePage(props) {
  return(
    <div>
    <h1>This Page Shows a set of custom cards using props </h1>
    <Card h2="First card's h2" h3="First card's h3"/>
    <Card h2="Second card's h2" h3="Second card's h3"/>
    <Card h2="Third card's h2" h3="Third card's h3"/>
    </div>
  )
}

export default HomePage;

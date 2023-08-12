import React from "react";
import Fruits from '../components/Fruits.js'
import FruitsCounter from '../components/FruitsCounter.js'
import Btn from '../components/Btn.js'
import Btn2 from '../components/Btn2.js'

function AboutMe(props) {
  const [fruits] = React.useState([
          {fruitName: 'apple', id: 1},
          {fruitName: 'apple', id: 2},
          {fruitName: 'plum', id: 3},
          {fruitName: 'pear', id: 4},
      ]);
  return(
    <div>
    <h1>This page shows some data manipulation</h1>
    <Fruits fruits={fruits}/>
    <FruitsCounter fruits={fruits}/>
    <Btn />
    <Btn2 />
    </div>
  )
}

export default AboutMe;

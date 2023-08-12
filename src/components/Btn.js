import Card from './Card.js'
function Btn(){
  var obj = {
    isClicked: true
  }
  const clickHandler = function(){
    console.log(obj.isClicked)
    if (obj.isClicked == true) {
      obj.isClicked = false
    }
    else {obj.isClicked = true}
  }
  return (
    <div className="col-6">
    <button onClick={clickHandler}>True False Toggler</button>
    </div>
  )
}

export default Btn;

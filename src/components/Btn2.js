import Button from './Btn2.js'
function Btn2(){
  const handleClick = function(){
    let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userInput = prompt('type a number'); 
        alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div className="col-6">
    <button onClick={handleClick}>Guess the number</button>
    </div>
  )

}
export default Btn2;

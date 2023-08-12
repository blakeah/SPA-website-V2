
function Header(props) {
  console.log(props)
  return <h1 className="col-6">
    Name: {props.name},
    Color: {props.color}
    </h1>
};

export default Header;

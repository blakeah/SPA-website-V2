function Itemslist(){
  const data = () => {
      const todaysItems = [
        {id: "1", name: "Tomato", calories: "22" },
        {id: "2", name: "Bread", calories: "165" },
        {id: "3", name: "Cheddar Cheese", calories: "113" },
        {id: "4", name: "Mayonaise", calories: "94" },
        {id: "5", name: "Mustard", calories: "3" },
        {id: "6", name: "Turkey Slice", calories: "31" },
      ]
  }

  const [items, setItems] = useState(todaysItems);

}

export default Itemslist;

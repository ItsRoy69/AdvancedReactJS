const data = [
  {
    id: "1",
    title: "Tiramisu",
    description : "The best tiramisu in Town",
    image: "https://picsum.photos/200/300/?random",
    price : "5.00",
  },
  {
    id: "2",
    title: "Lemon Ice Cream",
    description : "The best Ice Cream in the World",
    image: "https://picsum.photos/200/300/?random",
    price : "50.00",
  },{
    id: "3",
    title: "Chocolate mousse",
    description : "The best Chocolate mousse in the Universe",
    image: "https://picsum.photos/200/300/?random",
    price : "500.00",
  }

]

// ----------------------------------------------

// Mapping the data using javascript
// ----------------------------------------------

// const topDesserts = data.map((dessert) => {
//   return {
//     content: `${dessert.title} - ${dessert.price}`,
//     price: dessert.price,
//   }
// });

// export default function App(){
//   console.log(topDesserts);
//   return <h1>Excamine the console output</h1>;
// }

// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------

// Mapping the data using React JSX


function ListMapping() {
  const listItems = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`
    return <li>{itemText}</li>
  })

  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default ListMapping;

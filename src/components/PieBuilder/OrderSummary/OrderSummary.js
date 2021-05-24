import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    applePie: "Apple Pie",
    cherryPie: "Cherry Pie",
    fruitCake:"Fruit Pie",
    nutPie:"Nut Pie ",
    bun:"Bun",
    pumpkinPie:"Pumpkin Pie",
  };

  const results = Object.keys(ingredients)
    .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);
  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>

     
      <strong>Total price: {price} som</strong>
    </div>
  );
}

export default OrderSummary;


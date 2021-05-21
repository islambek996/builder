import classes from "./OrderSummary.module.css";

const OrderSummary = ({ ingredients, price }) => {
  const labels = {
    tomato: "Pie",
    salami: "Pie",
    greenOlive: "Pie",
    blackOlive: "Pie",
    redPepper: "Pie ",
    yellowPepper: "Pie",
  }
  // const results = Object.keys(ingredients)
  //   .map(type => <li key={type}>{labels[type]}: {ingredients[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {/* {results} */}
      </ul>
      <strong>Total price: {price} som</strong>
    </div>
  );
}

export default OrderSummary;
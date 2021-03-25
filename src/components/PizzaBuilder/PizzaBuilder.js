import PizzaPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";

import classes from "./PizzaBuilder.module.css";
import { useState } from "react";

const PizzaBuilder = () => {
  const [ingredients, setIngredients] = useState({
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
  });

  return (
    <div className={classes.PizzaBuilder}>
      <PizzaPreview ingredients={ingredients} />
      <PizzaControls ingredients={ingredients} />
    </div>
  );
}

export default PizzaBuilder;
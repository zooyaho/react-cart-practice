import { useEffect, useState } from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      // setIsLoading(true);
      try {
        const res = await fetch(
          "https://react-http-f49f3-default-rtdb.firebaseio.com/meals.json"
        );
        // if (!res.OK) {
        //   throw new Error("not Data");
        // }
        const data = await res.json();
        console.log(data);
        const loadedMeals = [];

        for (let key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch (error) {}
      // setIsLoading(false);
    };
    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      itemPrice={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

import React,{ useState, useEffect } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import axios from 'axios';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(()=>{
    const fetchMeals = async () => {
      try{
      const response = await axios.get('https://react-http-ac094-default-rtdb.firebaseio.com/meals.json');

        const loadedData = [];

        for(const key in response.data)
        {
          loadedData.push({
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price
          })
        }

        setMeals(loadedData);
        setIsLoading(false);

      }
      catch(error){
        console.log(error);
        setIsLoading(false);
        setHttpError(true);
      }
    }
  
    fetchMeals();
    
  
  }, []);

  if(httpError){
    return <section className={classes.mealsError}>
      <p>Something Went Wrong...</p>
    </section>
  }

  if(isLoading){
    return <section className={classes.mealsLoading}>
      <p>Lodaing...</p>
    </section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

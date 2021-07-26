import Card from "../UI/Card";
import DishItem from "./DishItem";

const DishList = [
  {
    id: 1,
    title: "Burger",
    details: "Crunchy Burger filled with secret sauces",
    price: 8,
  },
  {
    id: 2,
    title: "Pizza",
    details: "Fresh hand-tossed pizza direct from oven to your plate",
    price: 15,
  },
  {
    id: 3,
    title: "Tacos",
    details: "Tacos serverd with fresh Garlic sauce",
    price: 10,
  },
  {
    id: 4,
    title: "Veggie Wrap",
    details:
      "Golden wheat wrap wrapped around delicious fresh Veggies with mustard sauce",
    price: 15,
  },
];

const Dishes = (props) => {
  //const [Dishes, setDishes] = useState(DishList);
  //console.log(Dishes);

  const AddDishHandler = (newItem) => {
    const { id, title, price } = newItem;
    props.onAddCart({ id, title, price, quantity: 1, totalPrice: price * 1 });
  };
  return (
    <Card className="">
      <ul>
        {DishList.map((i) => {
          return (
            <DishItem
              key={i.id}
              id={i.id}
              title={i.title}
              detail={i.details}
              price={i.price}
              onAddClick={AddDishHandler}
            />
          );
        })}
      </ul>
    </Card>
  );
};
export default Dishes;

import RestaurantDetails from "../components/RestaurantDetails";
import RestaurantProducts from "../components/RestaurantProducts";
const Restaurant = () => {
  return (
    <div>
      <div className="shadow">
        <div className="container">
          <RestaurantDetails />
        </div>
      </div>
      <div className="container">
        <RestaurantProducts />
      </div>
    </div>
  );
};

export default Restaurant;

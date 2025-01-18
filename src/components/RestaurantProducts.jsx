import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import api from "../utils/api";
import ProductCard from "./ProductCard";

const RestaurantProducts = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/products?restaurantId=${id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => setError(error.message));
  }, []);

  return (
    <div>
      {error ? (
        <Error info={error.message} />
      ) : !products ? (
        <Loader />
      ) : products.length === 0 ? (
        <p>Restoran servis saatleri dışındadır</p>
      ) : (
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaFire className="text-red-500" />
            Popüler{" "}
          </h2>

          <p className="text-gray-600">
            Restoranların en çok tercih edilen ürünleri
          </p>

          <div className="grid lg:grid-cols-2 gap-5 mt-4">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantProducts;

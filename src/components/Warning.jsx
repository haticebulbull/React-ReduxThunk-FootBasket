import { Link } from "react-router-dom";

const Warning = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      Sepette herhangi bir ürün yok
      <Link to="/" className="border p-2 shadow rounded hover:bg-gray-100">
        Ürünlere gözat
      </Link>
    </div>
  );
};

export default Warning;

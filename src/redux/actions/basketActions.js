import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";
import { useDispatch } from "react-redux";

// asenkron thunk aksiyonu (fn içinde fn tanımlama)
// sepet verilerini api'dan alıp reducer'a dispatch ile haber gönderecek

export const getCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });

  api
    .get("/cart")
    .then((res) =>
      dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err }));
};

// ürünü api'a kaydettikten sonra reducer'a ekleneceğinin haberini gönder
export const createItem = (item) => (dispatch) => {
  // sepete eklenecek olan ürünün bilgilerini belirler
  const newItem = {
    id: v4(),
    productId: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    photo: item.photo,
    amount: 1,
  };
  // api'a sepete eklemek için istek at
  api
    .post("/cart", newItem)
    // istek başarılı olursa reducer'a haber ver
    .then(() => dispatch({ type: ActionTypes.CREATE_ITEM, payload: newItem }));
};

// ürünün api'daki miktarını güncelledikten sonra reducer'a güncellendiğinin haberini gönder
export const updateItem = (id, newAmount) => (dispatch) => {
  // api'a güncelleme isteği at
  api
    .patch(`/cart/${id}`, { amount: newAmount })
    //istek başarılı olursa reducer'a haber gönder
    .then((res) =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
    );
};

// ürünü api'dan silip sonra reducer'a kaldırılması için haber gönder
export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ActionTypes.DELETE_ITEM, payload: id }));
};

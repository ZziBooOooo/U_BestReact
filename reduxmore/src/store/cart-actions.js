import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

/*
여기서 action은 Redux 액션 객체입니다. Redux 스토어의 dispatch 함수를 호출할 때에는 액션 객체를 전달하면, Redux는 리듀서(reducer)에게 해당 액션을 처리하도록 지시하고, 리듀서는 액션에 따라 상태를 업데이트합니다.

fetchCartData 함수 내부에서 return async (dispatch) => { ... }로 정의된 함수는 Redux 스토어의 dispatch 함수를 인수로 받아와서, 내부에서 비동기 작업을 처리하고 액션을 디스패치합니다.

즉, fetchCartData 함수를 호출하면 해당 함수가 반환하는 내부 함수가 실행되고, 그 내부 함수는 비동기 작업을 수행하고 dispatch 함수를 사용하여 Redux 액션을 디스패치합니다. 이를 통해 Redux 스토어의 상태를 업데이트합니다.
*/
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://food-order-lecture-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  // dispatch함수를 인수로 받는 함수
  return async (dispatch) => {
    // 수행하려는 실제 작업
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://food-order-lecture-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Sending cart data successfully",
        })
      );
    } catch (error) {
      // sendCartData는 비동기 함수이기 때문에
      // promise를 반환하므로 catch를 사용할 수 있다.
      // 발생할 수 있는 모든 오류를 여기에서 포착함

      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error...",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

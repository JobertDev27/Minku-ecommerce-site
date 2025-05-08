type CartItems = {
    title: string;
    price: number;
    thumbnail: string;
}

type Props = {
    cartItems : CartItems;
}

const saveCartData = (cartItems : Props) => 
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
const getCartData = (): CartItems[] => 
    JSON.parse(localStorage.getItem("cartItems") || "[]") as CartItems[];

export {saveCartData, getCartData};
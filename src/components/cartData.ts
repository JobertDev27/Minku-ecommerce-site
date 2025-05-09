type CartItem = {
    title: string;
    price: number;
    thumbnail: string;
    amount: number;
  };

  const getCartData = (): CartItem[] => {
    const data = JSON.parse(localStorage.getItem("cartItems") || "[]");
    return Array.isArray(data) ? data : [];
  };
  
  const saveCartData = (item: CartItem, incrementOnly: boolean = false): void => {
    const existing = getCartData();
    const dataIndex = existing.findIndex((i) => i.title === item.title);
  
    if (dataIndex !== -1) {

      existing[dataIndex].amount = incrementOnly 
        ? existing[dataIndex].amount + 1 
        : item.amount;
    } else {

      existing.push({
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        amount: incrementOnly ? 1 : item.amount
      });
    }
  
    localStorage.setItem("cartItems", JSON.stringify(existing));
  };

  const handleAddToCart = (product : CartItem) => {
    saveCartData({
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      amount: 1
    }, true);
  };
  
  export { saveCartData, getCartData, handleAddToCart };
export const getDataCartsFromLS = () => JSON.parse(localStorage.getItem('cart'));

export const addNewProductToCartToLS = newProduct => {
  const oldLS = getDataCartsFromLS();
  localStorage.setItem('cart', JSON.stringify([...oldLS, { ...newProduct }]));
};

export const removeProductFromDataCartsFromLSById = ProductIdRemovedProduct => {
  const id = getDataCartsFromLS().reduce((acc, product) => {
    if (ProductIdRemovedProduct === product.productId) {
      acc = product.id;
    }
    return acc;
  }, '');

  if (id) {
    const newDataCartToLS = getDataCartsFromLS().filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify([...newDataCartToLS]));
  }
};

export const removeAllDataCartsFromLS = () => localStorage.setItem('cart', JSON.stringify([]));

if (!getDataCartsFromLS()) {
  localStorage.setItem('cart', JSON.stringify([]));
}

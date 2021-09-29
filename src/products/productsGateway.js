const baseUrl = 'https://615435732473940017efacc6.mockapi.io/api/v1/Products';

export const fetchProducts = () =>
  fetch(baseUrl).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Failed to get products');
  });

export const postNewProduct = (toPost) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(toPost),
  });

export const deleteProduct = (id) =>
  fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });

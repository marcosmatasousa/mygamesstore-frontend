const API_URL = import.meta.env.VITE_API_URL;

export async function fetchGamesAPI(page, searchTerm = "", itemsPerPage = 12) {
  const URL =
    searchTerm !== ""
      ? `${API_URL}/games/${searchTerm}?page=${page}&count=${itemsPerPage}`
      : `${API_URL}/games?page=${page}&count=${itemsPerPage}`;

  try {
    console.log(API_URL);
    const response = await fetch(URL, { credentials: "include" });
    return await response.json();
  } catch (err) {
    return err;
  }
}

export async function fetchGamesCountAPI() {
  try {
    const response = await fetch(`${API_URL}/games/count`, {
      credentials: "include",
    });
    if (!response.ok)
      throw new Error(`Request failed with status ${response.status}`);
    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function getCartSizeAPI() {
  try {
    console.log("chamou eu");
    const request = new Request(`${API_URL}/cart/count`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetch(request);
    if (response.status === 200) return await response.json();
    return { items: 0 };
  } catch (error) {
    console.log(error);
  }
}

export async function addToCartAPI(productId) {
  try {
    const request = new Request(`${API_URL}/cart`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: productId,
      }),
    });
    await fetch(request);
  } catch (err) {
    return err;
  }
}

export async function getCartAPI() {
  try {
    const request = new Request(`${API_URL}/cart`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetch(request);
    if (response.status === 200) return await response.json();
    return [];
  } catch (err) {
    return err;
  }
}

export async function removeProductAPI(productId) {
  const request = new Request(`${API_URL}/cart/${productId}`, {
    method: "DELETE",
    credentials: "include",
  });
  await fetch(request);
}

export async function removeAllProductsAPI() {
  const request = new Request(`${API_URL}/cart`, {
    method: "DELETE",
    credentials: "include",
  });
  await fetch(request);
}

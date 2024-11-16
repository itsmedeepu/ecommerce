async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("Something went bad.../ check the api url");
    }
    const repData = await response.json();
    return repData;
  } catch (error) {
    throw new Error(error);
  }
}
export default fetchData;

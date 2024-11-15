async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("No internet connection");
    }
    const repData = await response.json();
    return repData;
  } catch (error) {
    console.log("something went bad at server" + { message: error });
  }
}
export default fetchData;

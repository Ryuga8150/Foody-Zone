const BASE_URL = "http://localhost:9000/";
export async function getFoodItems() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log("Problem in fetching data from api");
    console.log(err);
  }
}

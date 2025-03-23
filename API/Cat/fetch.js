const URL = "https://catfact.ninja/fact";
const IMG_URL = "https://api.thecatapi.com/v1/images/search";

const getCatFact = async () => {
  const response = await fetch(URL); // Fetching the cat fact
  const data = await response.json(); // Converting the response to JSON
  return data.fact;
};

const getCatImg = async () => {
  const response = await fetch(IMG_URL); // Fetching the cat image
  const data = await response.json(); // Converting the response to JSON
  return data[0].url; // Extracting image URL
};

document.getElementById("getCat").addEventListener("click", async () => {
  try {
    let fact = await getCatFact();
    let img = await getCatImg();
    document.getElementById("result").innerText = fact;
    document.getElementById("catimg").src = img;
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("result").innerText = "Failed to load cat fact.";
  }
});

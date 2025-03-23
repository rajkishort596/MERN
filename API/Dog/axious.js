const URL = "https://dogapi.dog/api/v2/facts";
const IMG_URL = "https://dog.ceo/api/breeds/image/random";

const getDogFact = async () => {
  try {
    const response = await axios.get(URL);
    console.log(response);
    const fact = response.data.data[0].attributes.body; // Extracting a single fact
    return fact;
  } catch (error) {
    console.error("Error fetching dog facts:", error);
  }
};

// Get a random dog image using Axios
const getDogImg = async () => {
  try {
    const response = await axios.get(IMG_URL);
    return response.data.message; // Extracting the image URL
  } catch (error) {
    console.error("Error fetching dog image:", error);
    return ""; // Return empty string if error
  }
};

// Event listener for button click
document.getElementById("getDog").addEventListener("click", async () => {
  let fact = await getDogFact();
  let img = await getDogImg();
  document.getElementById("result").innerText = fact;
  document.getElementById("dogimg").src = img;
});

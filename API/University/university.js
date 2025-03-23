const URL = "http://universities.hipolabs.com/search?country=";

const SearchUniversity = document.querySelector("button");
const UniversityResult = document.querySelector(".UniversityResult");

// Event listener for search button
SearchUniversity.addEventListener("click", (e) => {
  e.preventDefault();
  let country = document.getElementById("Country_name").value;
  let state = document.getElementById("State_name").value;
  getUniversities(country, state);
});

// Function to show universities
const ShowUniversity = (universities, state) => {
  UniversityResult.innerHTML = "";

  let filtered;
  if (state != "") {
    filtered = universities.filter((uni) => uni["state-province"] === state);
  } else {
    filtered = universities;
  }

  if (filtered.length > 0) {
    filtered.forEach((uni) => {
      const uniName = document.createElement("a");
      uniName.textContent = uni.name;
      uniName.href = uni.web_pages[0];
      uniName.target = "_blank";
      UniversityResult.appendChild(uniName);
      UniversityResult.appendChild(document.createElement("br"));
    });
  } else {
    UniversityResult.innerHTML = "No universities found";
    console.log(`No universities found in ${state}`);
  }
};

// Function to get universities
const getUniversities = async (country, state) => {
  try {
    UniversityResult.innerHTML = "Universities data is loading...";
    const response = await axios.get(URL + country);
    const universities = response.data;
    ShowUniversity(universities, state);
  } catch (error) {
    console.error("Error fetching data:", error);
    UniversityResult.innerHTML = "Error fetching data: " + error;
  }
};

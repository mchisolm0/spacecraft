/**
 * Fetches data from the SWAPI API
 * @returns {Promis<Object>} A promise that resolves to the JSON response from SWAPI
 */
export const fetchStarships = async () => {
  try {
    const response = await fetch("https://swapi.py4e.com/api/starships/");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Something bad happened with the api: " + error);
  }
}


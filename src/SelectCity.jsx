import { useState } from "react";

const countries = [
  {
    name: "India",
    continent: "Asia",
    population: 1393409038,
    area: 3287263, // in square kilometers
    cities: [
      { name: "Mumbai", population: 20667656, area: 603.4 },
      { name: "Delhi", population: 31870000, area: 1484 },
      { name: "Bangalore", population: 12705000, area: 709 },
    ],
  },
  {
    name: "United States",
    continent: "North America",
    population: 331002651,
    area: 9833520,
    cities: [
      { name: "New York City", population: 8419600, area: 783.8 },
      { name: "Los Angeles", population: 3980400, area: 1214 },
      { name: "Chicago", population: 2716000, area: 606.1 },
    ],
  },
  {
    name: "Germany",
    continent: "Europe",
    population: 83166711,
    area: 357022,
    cities: [
      { name: "Berlin", population: 3769495, area: 891.8 },
      { name: "Hamburg", population: 1845229, area: 755.2 },
      { name: "Munich", population: 1488202, area: 310.7 },
    ],
  },
  {
    name: "Brazil",
    continent: "South America",
    population: 212559417,
    area: 8515767,
    cities: [
      { name: "São Paulo", population: 12325232, area: 1521 },
      { name: "Rio de Janeiro", population: 6748000, area: 1200 },
      { name: "Brasília", population: 3055149, area: 5802 },
    ],
  },
];

export default function SelectCity() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  function handleCountrySelect(e) {
    const country = JSON.parse(e.target.value);
    setSelectedCountry(() => country);
    console.log(selectedCountry);
    setCities(country.cities);
  }

  function handleSelectCity(e) {
    setSelectedCity(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="h-screen bg-gray-800 pl-8">
      <h3 className="mb-14 pt-16 text-2xl font-bold text-white">
        Choose your city:
      </h3>
      <select
        className="mb-8 mr-4 h-10 w-52 rounded-full bg-gray-600 px-4 text-white"
        value={selectedCountry ? JSON.stringify(selectedCountry) : "default"}
        onChange={(e) => handleCountrySelect(e)}
      >
        <option disabled value="default">
          Choose Country
        </option>
        {countries.map((c, i) => (
          <option key={i} value={JSON.stringify(c)}>
            {c.name}
          </option>
        ))}
      </select>

      <select
        className="mb-8 mr-4 h-10 w-52 rounded-full bg-gray-600 px-4 text-white"
        id=""
        value={selectedCity ? selectedCity : "default"}
        onChange={(e) => handleSelectCity(e)}
      >
        <option disabled value="default">
          Choose City
        </option>
        {cities.map((c, i) => (
          <option key={i} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div className="text-2xl text-white">
          <h1>Selected Country:</h1>
          <p className="mb-8 mt-4 w-fit rounded-full bg-gray-950 px-6 py-2 text-lg font-semibold text-white">
            {selectedCountry.name}
          </p>
        </div>
      )}

      {selectedCity && (
        <div className="text-2xl text-white">
          <h1>Selected City:</h1>
          <p className="mb-8 mt-4 w-fit rounded-full bg-gray-950 px-6 py-2 text-lg font-semibold text-white">
            {selectedCity}
          </p>
        </div>
      )}
    </div>
  );
}

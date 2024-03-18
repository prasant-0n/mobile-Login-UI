import React, { useState, useEffect } from "react";
import axios from "axios";
import "tailwindcss/tailwind.css";

const PhoneNumberInput = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCodes, setCountryCodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const response = await axios.get(
          "https://api.first.org/data/v1/countries"
        );
        const codes = Object.entries(response.data.data).map(
          ([code, { country }]) => ({
            code: `+${code}`,
            name: country,
          })
        );
        setCountryCodes(codes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country codes:", error);
        // Handle the error (e.g., show an error message to the user)
        setLoading(false);
      }
    };

    fetchCountryCodes();
  }, []);

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Country Code:", countryCode);
    console.log("Phone Number:", phoneNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="countryCode" className="block text-gray-700">
            Country Code:
          </label>
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={handleCountryCodeChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Country Code</option>
            {loading ? (
              <option disabled>Loading...</option>
            ) : (
              countryCodes.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name} ({code})
                </option>
              ))
            )}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter your phone number"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PhoneNumberInput;

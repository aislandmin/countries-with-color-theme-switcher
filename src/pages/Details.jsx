import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { requestCountriesByCountry } from "../api/CountryService";
import { MyButton } from "../components/MyButton";
import { IoArrowBack } from "react-icons/io5";
import { CountryInfo } from "../components/CountryInfo";

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountryByName = async (name) => {
      const countriesArr = await requestCountriesByCountry(name);
      setCountry(countriesArr[0]);
      console.log("countriesArr[0]: ", countriesArr[0]);
    };

    getCountryByName(name);
  }, [name]);

  return (
    <div>
      <MyButton onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </MyButton>

      {country && <CountryInfo navigate={navigate} {...country} />}
    </div>
  );
};

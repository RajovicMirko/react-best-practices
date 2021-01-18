import { useState, useEffect } from "react";
import useApi from "hooks/useApi";
import {
  COUNTRIES_API_ENDPOINT,
  COUNTRIES_BY_REGION_API_ENDPOINT,
  COUNTRIES_BY_3_CODE_API_ENDPOINT,
} from "utils/constants";

const _INIT_ERROR = {
  is: false,
  message: "",
};

function useCountries() {
  //#region Hooks
  const { http, getCountriesQueryUrl } = useApi();
  //#endregion Hooks

  //#region State
  const [_countries, _setCountries] = useState([]);
  const [_searchValue, setSearchValue] = useState("");
  const [_regionFilterValue, setRegionFilterValue] = useState("");

  const [isLoading, _setIsLoading] = useState(false);
  const [error, _setError] = useState(_INIT_ERROR);
  const [country, _setCountry] = useState({});
  const [borderCountries, _setBorderCountries] = useState([]);
  const [filteredCountries, _setFilteredCountries] = useState([]);
  const [regionOptions, _setRegionOptions] = useState([]);
  //#endregion State

  //#region Private functions
  const _startWork = () => {
    _setIsLoading(true);
    _setError(_INIT_ERROR);

    return true;
  };

  const _endWork = (error = null) => {
    _setIsLoading(false);

    if (error) {
      _setError({
        ..._INIT_ERROR,
        is: true,
        message: error.message,
      });

      return false;
    }

    return true;
  };

  const _setInitState = (data) => {
    _setCountries(data);
    _setFilteredCountries(data);
  };

  const _fetchBorderCountries = async () => {
    _startWork();
    if (!country.borders || !country.borders.length) {
      return _endWork();
    }

    try {
      const query = {
        codes: country.borders.join(";"),
      };
      const url = getCountriesQueryUrl(COUNTRIES_BY_3_CODE_API_ENDPOINT, query);

      const result = await http.get(url);
      _setBorderCountries(result.data);
      return _endWork();
    } catch (error) {
      return _endWork(error);
    }
  };
  // When country is changed call _fetchBorderCountries
  useEffect(() => _fetchBorderCountries(), [country]);

  const _prepareRegionOptions = (allCountries) => {
    const regionsUnique = [
      ...new Set(allCountries.map((country) => country.region)),
    ].filter((region) => !!region);

    const optionsArray = regionsUnique.map((region) => ({
      key: region.toLowerCase(),
      value: region,
    }));

    _setRegionOptions(optionsArray);
  };

  // Filter logic ///////////////////////////////////////////////////
  const _fetchRegion = async () => {
    _startWork();
    if (!_regionFilterValue) {
      return _endWork();
    }

    const url = `${COUNTRIES_BY_REGION_API_ENDPOINT}/${_regionFilterValue}`;
    const result = await http.get(url);
    _setInitState(result.data);
    _endWork();
  };
  // When _regionFilterValue is changed call _fetchRegion
  useEffect(() => _fetchRegion(), [_regionFilterValue]);

  // Search logic //////////////////////////////////////////////////
  const _searchCountries = () => {
    if (!_searchValue) _setFilteredCountries(_countries);

    const pattern = /^(<|<=|>|>=)[0-9]+$/;
    const lowerSearchValue = _searchValue.trim().toLowerCase();
    const filterResult = _countries.filter((country) => {
      return (
        country.name.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
        country.capital.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
        country.region.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
        (pattern.test(_searchValue) &&
          eval(country.population + _searchValue) &&
          country.population > 0)
      );
    });

    _setFilteredCountries(filterResult);
  };
  // When _searchValue is changed call _searchCountries
  useEffect(() => _searchCountries(), [_searchValue]);
  //#endregion Private functions

  //#region Public functions
  const fetchCountries = async () => {
    _startWork();
    const result = await http.get(COUNTRIES_API_ENDPOINT);
    _prepareRegionOptions(result.data);
    _setInitState(result.data);
    _endWork();
  };

  const fetchByAlpha3Code = async (code3char) => {
    _startWork();
    const url = `${COUNTRIES_BY_3_CODE_API_ENDPOINT}/${code3char}`;
    const result = await http.get(url);
    _setCountry(result.data);
    _endWork();
  };
  //#endregion Public functions

  //#region useApi result
  return {
    isLoading,
    error,
    countries: filteredCountries,
    country,
    borderCountries,
    regionOptions,
    setSearchValue,
    setRegionFilterValue,
    regionFilterValue: _regionFilterValue,
    fetchCountries,
    fetchByAlpha3Code,
  };
  //#endregion useApi result
}

export default useCountries;

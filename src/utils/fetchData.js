export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c1199fe87emsh21d5edfc4920355p18a9a4jsn7c37e917aaea",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

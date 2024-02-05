const params = {
  limit: "50",
};

export const getQueryString = (params) => {
  return Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");
};

const queryString = getQueryString(params);

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c1199fe87emsh21d5edfc4920355p18a9a4jsn7c37e917aaea",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options, addLimit) => {
  if (addLimit) {
    url = `${url}?${queryString}`;
  }
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

const params = {
  limit: "50",
};

const X_RAPID_API_KEY = "4e841855cbmshc7720ac42863df1p1bfa6cjsndfd3ad0e5ad7"

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
    "X-RapidAPI-Key": X_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": X_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
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

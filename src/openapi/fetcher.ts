const fetcher = () => {
  return fetch(url).then((response) => response.json());
};

export default fetcher;

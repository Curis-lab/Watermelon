//this function is only use for get request
//I need to create for use CRUD operation

const fetcher = () => {
  return fetch(url).then((response) => response.json());
};

export default fetcher;

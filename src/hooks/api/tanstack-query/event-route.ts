import axios from "axios";

const baseRoute = 'http://localhost:3000/api/events'

export const getEventInfoAndAuthorProfileById = async (id: string) => {
  const response = await axios.get(`${baseRoute}/${id}`);
  return response;
};

export const getAllEvents = async ({
  page,
  date,
  search,
  location,
  limit,
}: {
  page: number;
  date: string | Date;
  search: string;
  location: string;
  limit: number;
}) => {

  console.log(date);
  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    // date: date.toISOString(),
    ...(search && { search }),
    ...(location && { location }),
  });
  const url = `${baseRoute}?${queryParams.toString()}`;
  const response = await axios.get(url);
  return response.data.results;
};

import axios from "axios";

const api = axios.create({
  baseURL: "https://picsum.photos",
});

// Fetch the data
export const fetchData = async () => {
  try {
    const res = await api.get("/v2/list");
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// Fetch data with pagination
export const fetchDataWithPagination = async (pageNumber) => {
  try {
    const res = await api.get(`/v2/list?page=${pageNumber}&limit=4`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.log(error);
  }
};

// delete the data
export const deleteData = (id) => {
  return api.delete(`https://picsum.photos/id/${id}/info`);
};

// update the data
export const updateData = (id) => {
  return api.patch(`https://picsum.photos/id/${id}/info`, {
    author: "Hello World",
  });
};

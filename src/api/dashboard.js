import axios from "axios";

export const getDashboard = async () => {
  const { data } = await axios.get(
    "http://localhost:5000/api/dashboard",
    {
      withCredentials: true,
    }
  );

  return data;
};
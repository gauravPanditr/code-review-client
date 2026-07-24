import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;


export const getDashboard = async () => {
  const { data } = await axios.get(`${BASE_URL}/dashboard`, {
    withCredentials: true,
  });

  return data;
};

export const getContribution = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/dashboard/contribution`,
    {
      withCredentials: true,
    }
  );

  return data;
};

export const getMonthlyActivity = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/dashboard/activity`,
    {
      withCredentials: true,
    }
  );

  return data;
};
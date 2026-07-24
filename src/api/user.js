import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getUserProfile = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/user/profile`,
    {
      withCredentials: true,
    }
  );

  return data;
};

export const updateUserProfile = async ({ name, email }) => {
  const { data } = await axios.patch(
    `${BASE_URL}/user/profile/update`,
    {
      name,
      email,
    },
    {
      withCredentials: true,
    }
  );

  return data;
};
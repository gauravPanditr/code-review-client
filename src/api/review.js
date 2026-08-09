
const BASE_URL = import.meta.env.VITE_API_URL;
export const getReviews = async () => {
  
  try {
    const { data } = await axios.get(
      `${BASE_URL}/review`,
      {
        withCredentials: true,
      }
    );
    console.log(data);
    
    return data;
  } catch (error) {
    console.error("Failed to fetch repositories", error);
    throw error;
  }
};
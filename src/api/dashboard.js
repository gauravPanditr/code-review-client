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

export const getContribution=async()=>{
    const {data}=await axios.get( "http://localhost:5000/api/contribution",{
        withCredentials:true,
    });
    return data;
};
export const getMonthlyActivity = async () => {
  const { data } = await axios.get("http://localhost:5000/api/activity/monthly", {
    withCredentials: true,
  });
  return data;
};
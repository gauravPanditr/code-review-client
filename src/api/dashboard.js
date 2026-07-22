import axios from "axios";


const BASE_URL = "http://localhost:5000/api";
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
    const {data}=await axios.get( "http://localhost:5000/api/dashboard/contribution",{
        withCredentials:true,
    });
    console.log(data);
    
    return data;
};
export const getMonthlyActivity = async () => {
  const { data } = await axios.get("http://localhost:5000/api/dashboard/activity", {
    withCredentials: true,
  });
  return data;
};


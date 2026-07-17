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

export const getRepositories = async (
  pageNumber = 1,
  perPage = 10
) => {
  const { data } = await axios.get(
    "http://localhost:5000/api/repository",
    {
      params: {
        pageNumber,
        perPage,
      },
      withCredentials: true,
    }
  );

  console.log(data);

  return data;
};
export const connectRepository = async ({
  owner,
  repo,
  githubId,
}) => {
  const { data } = await axios.post(
    "http://localhost:5000/api/connectrespo",
    {
      owner,
      repo,
      githubId,
    },
    {
      withCredentials: true,
    }
  );

  return data;
};
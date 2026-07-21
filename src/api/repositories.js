import axios from "axios";

export const getRepositories = async (
  pageNumber = 1,
  perPage = 10
) => {
  const { data } = await axios.get(
    "http://localhost:5000/api/repositories",
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
    "http://localhost:5000/api/repositories/connect",
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
export const getConnectedRepository=async()=>{
    const {data}=await axios.get("http://localhost:5000/api/repositories/connected",{
        withCredentials:true,
    });
   
    
    return data;

}

export const deleteConnectedRepository = async (
  repositoryId
) => {
  const { data } = await axios.delete(
    "http://localhost:5000/api/repositories/disconnect",
    {
      data: {
        repositoryId,
      },
      withCredentials: true,
    }
  );

  return data;
};
export const deleteAllConnectedRepository=async()=>{
    const {data}=await await axios.delete(
    "http://localhost:5000/api/repositories/disconnect=all",{
        withCredentials:true,
    });
    return data;
}
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;


export const getRepositories = async (
  page = 1,
  perPage = 10
) => {
  const { data } = await axios.get(
    `${BASE_URL}/repositories`,
    {
      params: {
        page,
        perPage,
      },
      withCredentials: true,
    }
  );

  return data;
};

export const connectRepository = async ({
  owner,
  repo,
  githubId,
}) => {
  const { data } = await axios.post(
    `${BASE_URL}/repositories/connect`,
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

export const getConnectedRepository = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/repositories/connected`,
    {
      withCredentials: true,
    }
  );

  return data;
};

export const deleteConnectedRepository = async (
  repositoryId
) => {
  const { data } = await axios.delete(
    `${BASE_URL}/repositories/disconnect`,
    {
      data: {
        repositoryId,
      },
      withCredentials: true,
    }
  );

  return data;
};

export const deleteAllConnectedRepository = async () => {
  const { data } = await axios.delete(
    `${BASE_URL}/repositories/disconnect-all`,
    {
      withCredentials: true,
    }
  );

  return data;
};
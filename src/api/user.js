import axios from "axios";

export const getUserProfile=async()=>{
    const {data}=await axios.get( "http://localhost:5000/api/user/profile",{
        withCredentials:true,
    });
    return data;
};

export const updateUserProfile = async ({name, email}) => {

  const {data} = await axios.patch(
    "http://localhost:5000/api/user/profile/update",
    {
      name,
      email
    },
    {
      withCredentials: true
    }
  );

  return data;
};
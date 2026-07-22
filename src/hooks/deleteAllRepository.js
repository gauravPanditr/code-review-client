import { QueryClient, useMutation } from "@tanstack/react-query"
import { deleteAllConnectedRepository } from "../api/repositories";

export const useDeleteAllConnectedRepo=()=>{
    const queryClient=new QueryClient();

    return useMutation({
      mutationFn:async()=>{
        return await deleteAllConnectedRepository();
      }, 
      onSuccess:()=>{
        
        queryClient.invalidateQueries({queryKey:["connected-repositorie"]});
      },
      onError:(error)=>{
         console.error(error);
      } 

    })

}
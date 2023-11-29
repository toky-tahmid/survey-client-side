import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useApplied = () => {
    const axiosPublic = useAxiosPublic()
    const { data: applied = [],refetch } = useQuery({
        queryKey: ["applied"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/pendingSurvey?pending=unPublish`)
            return res.data
        }
    })
    return [applied,refetch]
};

export default useApplied;
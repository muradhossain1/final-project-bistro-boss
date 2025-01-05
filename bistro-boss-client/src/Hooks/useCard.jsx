import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query"


const useCard = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCard;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useManu = () => {
    // const [manu, setManu] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-pro.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setManu(data);
    //             setLoading(false)
    //         })
    // }, [])
    const axiosSecure = useAxiosSecure();

    const {data: manu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu')
            return res.data; 
        }
    })
    return [manu, loading, refetch]
};

export default useManu;
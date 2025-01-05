
import SectionTitle from "../../Components/SectionTitle";
import ManuItem from "../shared/ManuItem";
import useManu from "../../Hooks/useManu";


const PopularManu = () => {

    const [ manu ] = useManu();
    const popular = manu.filter(item => item.category === 'popular'); 

    // const [manu, setManu] = useState([])

    // useEffect(() => {
    //     fetch('manu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setManu(popularItems);
    //         })
    // }, [])
    return (
        <div>
            <section>
                <SectionTitle
                    subHeading="Popular Items"
                    heading="From Our Manu"></SectionTitle>
            </section>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <ManuItem item={item} key={item._id}></ManuItem>)
                }
            </div>
            <div className="flex items-center justify-center">
                <button className="btn btn-outline mt-8 border-0 border-b-4">View Full Manu</button>
            </div>
        </div>
    );
};

export default PopularManu;
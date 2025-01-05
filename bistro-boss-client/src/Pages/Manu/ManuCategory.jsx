import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import ManuItem from "../shared/ManuItem";


const ManuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="mt-12">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
                {
                    items.map(item => <ManuItem item={item} key={item._id}></ManuItem>)
                }
            </div>
            <div className="flex justify-center items-center mt-8">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default ManuCategory;
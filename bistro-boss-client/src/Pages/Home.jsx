import { Helmet } from "react-helmet-async";
import Banner from "./home/Banner";
import Category from "./home/Category";
import Featured from "./home/Featured";
import PopularManu from "./home/PopularManu";
import Testimonials from "./home/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularManu></PopularManu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
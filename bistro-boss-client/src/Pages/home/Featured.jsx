import SectionTitle from "../../Components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed pb-20 pt-10 px-36 mt-16">
            <section>
                <SectionTitle heading='Featured Items' subHeading='Check it out'></SectionTitle>
            </section>
            <div className="flex justify-center items-center gap-4 mt-10 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad veritatis facere consectetur eaque vel veniam tempore fugiat dignissimos animi tempora reprehenderit, voluptas, perferendis iusto, magnam voluptatum inventore exercitationem eum. Necessitatibus?</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
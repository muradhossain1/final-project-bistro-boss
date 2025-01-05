import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover';
import manuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import useManu from '../../Hooks/useManu';
import SectionTitle from '../../Components/SectionTitle';
import ManuCategory from './ManuCategory';


const Manu = () => {
    const [ manu ] = useManu();
    const desserts = manu.filter(item => item.category === 'dessert');
    const soup = manu.filter(item => item.category === 'soup');
    const salad = manu.filter(item => item.category === 'salad');
    const pizza = manu.filter(item => item.category === 'pizza');
    const offered = manu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Manu</title>
            </Helmet>
            <Cover img={manuImg} title='Our Manu'></Cover>
            {/* main cover */}
            <SectionTitle heading="Today's Offer" subHeading="Dont't Miss"></SectionTitle>
            {/* offered */}
            <ManuCategory items={offered}></ManuCategory>
            {/* desserts */}
            <ManuCategory items={desserts} title='dessert' coverImg={dessertImg}></ManuCategory>
            {/* pizza */}
            <ManuCategory items={pizza} title='pizza' coverImg={pizzaImg}></ManuCategory>
            {/* salad */}
            <ManuCategory items={salad} title='salad' coverImg={saladImg}></ManuCategory>
            {/* salad */}
            <ManuCategory items={soup} title='soup' coverImg={soupImg}></ManuCategory>
        </div>
    );
};

export default Manu;
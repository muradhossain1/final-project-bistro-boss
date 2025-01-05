

const ManuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div >
                <h2 className="uppercase">{name} ---------------</h2>
                <p>{recipe}</p>
            </div>
            <h2 className="text-yellow-600">${price}</h2>
        </div>
    );
};

export default ManuItem;
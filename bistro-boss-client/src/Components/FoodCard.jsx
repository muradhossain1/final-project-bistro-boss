import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCard from "../Hooks/useCard";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCard();

    const handleAddTCart = food => {
        console.log(food)
        if (user && user.email) {
            const cartItem = {
                manuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: `${name} Add to cart successful!!`,
                            text: 'Added',
                            icon: 'success',
                            confirmButtonText: 'Done'
                        })
                    }

                    refetch();
                })
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please Login add to the cart!!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-8 border">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 rounded-xl bg-slate-900 text-white ">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end ">
                    <button
                        onClick={() => handleAddTCart(item)}
                        className="btn btn-outline border-0 border-b-4 uppercase border-orange-500 bg-slate-200">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, category, price, recipe, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic()

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the manu item data to the server with the img url
            const manuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const manuRes = await axiosSecure.patch(`/manu/${_id}`, manuItem)
            console.log(manuRes.data)
            if (manuRes.data.modifiedCount > 0) {
                // show toast
                reset()
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${data.name} is updated the menu item`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <SectionTitle heading='Update an item' subHeading='Refresh info'></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6 ">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register("name", { required: true })}
                            defaultValue={name}
                            type="text" placeholder="Recipe Name" className="input input-bordered w-full " />
                    </label>
                    <div className="flex gap-6 ">
                        {/* category */}
                        <label className="form-control w-full  ">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select {...register("category", { required: true })} className="select select-bordered w-full" defaultValue={category}>
                                <option disabled value='default'>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register("price", { required: true })}
                                defaultValue={price}
                                type="number" placeholder="Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control mt-6">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe")} defaultValue={recipe} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>
                    <div className="form-control w-full my-6 ">
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs " />
                    </div>
                    <button className="btn bg-gray-300">Update manu Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
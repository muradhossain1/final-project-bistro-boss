import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";



const SingUp = () => {
    const { register, handleSubmit,reset, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    Swal.fire({
                        title: 'success!',
                        text: 'Sign up successful!!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    reset()
                    navigate('/')
                })
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="photo" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {/* {errors.photoURL && <span className="text-red-600">Photo URL is required</span>} */}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    //  pattern : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 character</p>
                                )}
                                {/* {errors.password?.type === "pattern" && (
                                <p className="text-red-600">Password must be 6 character</p>
                            )} */}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="SingUp" />
                            </div>
                        </form>
                        <p><small>Already Have an account? <Link to='/login'>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingUp;
import { FaGoogle } from 'react-icons/fa'
import UseAuth from '../Hooks/UseAuth'
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }
            axiosPublic.post('/users', userInfo )
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className='divider'></div>
            <div className='p-8'>
                <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle></FaGoogle>
                    Google login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
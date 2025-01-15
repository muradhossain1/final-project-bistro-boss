import SectionTitle from "../../Components/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutForm from "../../Components/CheckOutForm";

// todo:
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {

    return (
        <div>
            <SectionTitle heading='Payment' subHeading='Please Pay To Eat'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
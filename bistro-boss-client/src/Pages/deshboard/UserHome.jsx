import UseAuth from "../../Hooks/UseAuth";


const UserHome = () => {
    const { user } = UseAuth();
    return (
        <div>
            <h2 className="text-2xl"><span>Hi welcome</span> {user?.displayName ? user?.displayName : 'Back' }</h2>
        </div>
    );
};

export default UserHome;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const User = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="flex items-center space-x-2 mr-4">
            <img src={user?.photoURL} alt="Image of the user" className="lg:h-12 ml-4 lg:w-12 h-8 w-8 rounded-full object-cover" />
            <p className="font-medium dark:text-white text-sm lg:text-lg">{user?.displayName}</p>
        </div>
    );
};

export default User;
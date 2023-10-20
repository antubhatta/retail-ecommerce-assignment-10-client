import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const MyCart = () => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/carts/${user.uid}`);
            const dt = await res.json()

            setData(dt)
        }

        fetchData()
    }, [user.uid])

    const onDelete = async(id) => {
        try {
            await fetch(`http://localhost:3000/carts/${id}`, {
                method: 'DELETE'
            });

            alert('Item removed form the cart')
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <h3>This is a myCarts section</h3>
            {data.map(item => <div key={item._id} className="flex items-center gap-x-8">
                <h1 >{item.product.name}</h1>
                
                <button onClick={() => onDelete(item._id)}>X</button>
            </div>)}
        </div>
    );
};

export default MyCart;
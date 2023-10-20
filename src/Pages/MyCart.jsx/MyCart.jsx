import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItem from "./CartItem";


const MyCart = () => {
    const [data, setData] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://retail-ecommerce-assgnment-10-server.vercel.app/carts/${user.uid}`);
            const dt = await res.json()

            setData(dt)
        }

        fetchData()
    }, [user.uid])

    const onDelete = async(id) => {
        try {
            await fetch(`https://retail-ecommerce-assgnment-10-server.vercel.app/carts/${id}`, {
                method: 'DELETE'
            });

            toast('Item removed form the cart')
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
<>
      <div
        style={{ minHeight: "calc(100vh - 80px - 377px)" }}
        className="max-w-2xl  container mx-auto px-4 md:px-0 mt-10 space-y-4"
      >
        {!!data.length &&
          data.map((item) => (
            <CartItem key={item?._id} item={item.product} onDelete={onDelete} id={item?._id} />
          ))}
      </div>
      {!data.length && <p className="text-gray-600 text-lg font-xl text-center">No products found.</p>}
      <ToastContainer></ToastContainer>
    </>
    );
};

export default MyCart;



{/* <div className="container mx-auto ">
{data.map(item => <div key={item._id} className="flex items-center justify-between gap-x-8">
   <img className="h-[80px] w-[80px] rounded-lg mt-10 object-cover" src={item.product.image} alt="" />
    <h1 className="text-base lg:text-xl font-bold">{item.product.name}</h1>
    <h2 className="text-base lg:text-xl font-bold">{item.product.brand}</h2>
    <h2 className="text-base lg:text-xl font-bold">{item.product.price}</h2>
    <h2 className="text-base lg:text-xl font-bold">{item.product.rating}</h2>
    <button className="bg-gradient-to-r mb-12 from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold py-2 lg:py-3 px-6 rounded" onClick={() => onDelete(item._id)}>Delete</button>
</div>)}
</div> */}
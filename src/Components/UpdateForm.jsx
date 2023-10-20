import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from 'react-router-dom';


const UpdateForm = ( ) => {
    const product=useLoaderData()

    if(!product) return <p>Product not found</p>

    const handleAddProduct=e=>{
        e.preventDefault()
        const form = e.target;
        const image = form.photo.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const productType = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const addProduct={
            image,
            name,
            brandName,
            productType,
            price,
            description,
            rating
        }
        fetch(
            `https://retail-ecommerce-assgnment-10-server.vercel.app/products/${product._id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addProduct),
            }
          )
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                toast('products updated successfully')
            }
            form.reset()
          })
    }

  return (
    <div className=" bg-gradient-to-b from-gray-500 to-gray-300">
      <h3 className="container mx-auto text-white text-xl md:text-3xl pt-10 mb-6 text-center">
        {`Update for ${product.name}`}
      </h3>

      <form onSubmit={handleAddProduct} className="container mx-auto p-6 lg:p-0">
        <div className="form-control md:w-full mb-4">
          <label className="label">
            <span className="label-text text-base md:text-xl">Image:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
              defaultValue={product.image}
              placeholder="photo url"
              className="input input-bordered w-full rounded-lg"
            />
          </label>
        </div>
        <div className="form-control md:w-full mb-4">
          <label className="label">
            <span className="label-text text-base md:text-xl">Name:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={product.name}
              className="input input-bordered w-full rounded-lg"
            />
          </label>
        </div>
        <div className="form-control md:w-full mb-4">
          <label className="label">
            <span className="label-text text-base md:text-xl">Brand Name:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="brandName"
              placeholder="Brand Name"
              defaultValue={product.brand}
              className="input input-bordered w-full rounded-lg"
            />
          </label>
        </div>
        <div className="form-control md:w-full mb-4">
          <label className="label">
            <span className="label-text text-base md:text-xl">Product Type:</span>
          </label>
          <label className="input-group">
            <select
              name="type"
              defaultValue={product.type}
              className="input input-bordered w-full rounded-lg"
            >
            
              <option value="Apparel">Fashion and Apparel</option>
              <option value="Walmart">Electronics and Gadgets</option>
              <option value="Furniture">Home and Furniture</option>
              <option value="beauty">Beauty and Personal Care</option>
              <option value="sports">Sports and Outdoor</option>
              <option value="grocery">Food and Grocery</option>
            </select>
          </label>
        </div>
        <div className="form-control md:w-full mb-4">
            <label className="label">
              <span className="label-text text-base md:text-xl">Product Price:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                defaultValue={product.price}
                placeholder="Price"
                className="input input-bordered w-full rounded-lg"
              />
            </label>
          </div>
          <div className="form-control md:w-full mb-4">
            <label className="label">
              <span className="label-text text-base md:text-xl">Description:</span>
            </label>
            <label className="input-group">
              <textarea name="description" defaultValue={product.description} className="input input-bordered w-full rounded-lg"></textarea>
            </label>
          </div>
          <div className="form-control md:w-full mb-4">
            <label className="label">
              <span className="label-text text-base md:text-xl">Rating:</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                defaultValue={product.rating}
                placeholder="Rating"
                className="input input-bordered w-full rounded-lg"
              />
            </label>
          </div>
          <input
          type="submit"
          value="Update Product"
          className="btn mt-8 btn-block px-5 py-4 mb-14 bg-gradient-to-b from-blue-500 to-blue-300"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default UpdateForm;

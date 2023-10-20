import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
    const handleAddProduct=e=>{
        e.preventDefault()
        const form = e.target;
        const image = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const addProduct={
            image,
            name,
            brand,
            type,
            price,
            description,
            rating
        }
        console.log(addProduct)
        fetch(
            " http://localhost:3000/products",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(addProduct),
            }
          )
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.insertedId){
                toast('products added successfully')
            }
            form.reset()
          })
    }

  return (
    <div className=" bg-gradient-to-b from-gray-500 to-gray-300">
      <h3 className="container mx-auto text-xl md:text-3xl pt-10 mb-6 text-center">
        Add New Product
      </h3>

      <form onSubmit={handleAddProduct} className="container mx-auto">
        <div className="form-control md:w-full mb-4">
          <label className="label">
            <span className="label-text text-base md:text-xl">Image:</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="photo"
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
              name="brand"
              placeholder="Brand Name"
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
              <span className="label-text text-base md:text-xl">Brand Name:</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
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
              <textarea name="description" className="input input-bordered w-full rounded-lg"></textarea>
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
                placeholder="Rating"
                className="input input-bordered w-full rounded-lg"
              />
            </label>
          </div>
          <input
          type="submit"
          value="Add Product"
          className="btn mt-8 btn-block px-5 py-4 mb-14 bg-gradient-to-b from-blue-500 to-blue-300"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;

const AddProduct = () => {
  return (
    <div className=" bg-gradient-to-b from-gray-500 to-gray-300">
      <h3 className="container mx-auto text-xl md:text-3xl pt-10 mb-6 text-center">
        Add New Product
      </h3>

      <form className="container mx-auto">
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
              name="brand name"
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
            <option value="" disabled selected>Product Type</option>
              <option value="Amazon">Amazon</option>
              <option value="Walmart">Walmart</option>
              <option value="Alibaba">Alibaba</option>
              <option value="eBay">eBay</option>
              <option value="Target">Target</option>
              <option value="Best Buy">Best Buy</option>
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
          className="btn mt-8 btn-block px-5 py-4 mb-14 bg-[#D2B48C]"
        />
      </form>
    </div>
  );
};

export default AddProduct;

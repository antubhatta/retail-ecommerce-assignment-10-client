

const CartItem = ({ item, onDelete, id }) => {
    return (
        <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="h-20 w-20 rounded-sm bg-white"
          src={item.image}
          alt={`Image of ${item.name}`}
        />
        <h4 className="text-lg font-medium">{item.name}</h4>
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <p className="text-lg font-medium">{item.type}</p>
        <p className="text-lg font-medium">{item.price}</p>
      </div>
      <button className="text-lg font-medium" onClick={() => onDelete(id)}>X</button>
    </div>
    );
};

export default CartItem;
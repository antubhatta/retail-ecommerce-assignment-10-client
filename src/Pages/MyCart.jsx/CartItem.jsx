

const CartItem = ({ item, onDelete, id }) => {
    return (
        <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="h-10 w-10 rounded-sm bg-white"
          src={item.image}
          alt={`Image of ${item.name}`}
        />
        <h4 className="text-lg font-medium">{item.name}</h4>
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <p>{item.type}</p>
        <p>{item.price}</p>
      </div>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
    );
};

export default CartItem;
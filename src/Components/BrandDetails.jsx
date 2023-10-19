import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";


const BrandDetails = () => {
    const { brandName } = useParams()
    const loaderData=useLoaderData()
    const data = [loaderData]

    const products = data[0].data.filter(detail => detail.brand === brandName)
    console.log(data[0].data)
    return (
        <div>
            <h3 className="text-xl md:text-4xl font-bold text-center mt-9 mb-7">Our Feature Products</h3>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                
                {
                    products.map((product,idx)=><ProductCard key={idx} products={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;
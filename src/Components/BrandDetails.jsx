import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { BrandDetailsBanner } from "./BrandDetailsBanner";
import { useState } from "react";
import { useEffect } from "react";


const BrandDetails = () => {
    const [brandData, setBrandData] = useState([])
    const { brandName } = useParams()
    const loaderData=useLoaderData()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/brands/${brandName}`);
            const data = await res.json()
            setBrandData(data)
            setLoading(false)
        }

        fetchData()
    }, [brandName])

    if(loading) return <p>Loading...</p>

    console.log(brandData)


    const products = loaderData?.filter(detail => detail.brand === brandName)

    return (
        <div>
            <BrandDetailsBanner advertisements={brandData.advertisement}/>
            <h3 className="text-xl md:text-4xl font-bold text-center mt-9 mb-7">Our Feature Products</h3>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                
                {
                    products?.map((product,idx)=><ProductCard key={idx} products={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default BrandDetails;
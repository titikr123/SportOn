import Image from "next/image";
import Link from "next/link";

const productList = [
    {
        name: "SportsOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl: "product-1.png",
    },
    {
        name: "SportsOn Rockets Tennis",
        category: "Tennis",
        price: 999000,
        imgUrl: "product-2.png",
    },
    {
        name: "SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl: "product-3.png",
    },
    {
        name: "SportsOn HyperSoccer v2",
        category: "Football",
        price: 458000,
        imgUrl: "product-4.png",
    },
    {
        name: "SportsOn HyperSoccer v2",
        category: "Basketball",
        price: 458000,
        imgUrl: "product-5.png",
    },
    {
        name: "SportsOn Slowlivin",
        category: "Running",
        price: 119000,
        imgUrl: "product-6.png",
    },
    {
        name: "SportsOn Hyperfast Shoes",
        category: "Running",
        price: 329000,
        imgUrl: "product-7.png",
    },
    {
        name: "SportsOn Rockets Tennis",
        category: "Tennis",
        price: 999000,
        imgUrl: "product-8.png",
    },
]

const ProductsSection = () => {
    return (
        <section id="products-section" className="container mx-auto mt-32">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">OUR </span>PRODUCTS
            </h2>
            <div className="grid grid-cols-4 gap-6">
                {productList.map((product, index) => (
                    <Link href="#" key={index} className="p-1.5 ">
                    <div className="bg-primary-light aspect-square w-full flex justify-center items-center">
                        <Image src={`/images/products/${product.imgUrl}`}
                        width={300}
                        height={300}
                        alt={product.name}
                        className="aspect-square object-contain"
                        />
                    </div>
                    <h3 className="font-medium text-lg mb-1.5 mt-6">{product.name}</h3>
                    <div className="flex justify-between">
                        <div className="text-gray-500">{product.category}</div>
                        <div className="font-medium text-primary">
                            {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                maximumFractionDigits: 0,
                            }).format(product.price)}
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default ProductsSection;
import Image from "next/image";
import Link from "next/link";
import {FiSearch, FiShoppingBag} from "react-icons/fi";

const Header = () => {
    return <header>
        <div className="flex justify-between gap-10 container mx-auto py-7">
            <Image
            src="images/logo.svg"
            alt= "SportOn Logo"
            width={127}
            height={36}
            />
            <nav className="flex gap-20 font-medium">
                <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-1 after:w-7 after:absolute after:left-3 ">Home</Link>
                <Link href="#">Category</Link>
                <Link href="#">Explore Products</Link>
            </nav>
            <div className="flex gap-5">
                <FiSearch size={24} />
                <div className="relative w-10 h-10">
                    <FiShoppingBag size={24} />
                    <div className="bg-primary absolute -top-1 left-4 w-3.5 h-3.5 rounded-full text-white text-[10px] text-center">
                        <span>3</span>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
}

export default Header;
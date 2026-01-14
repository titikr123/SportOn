import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
    return (<section id="hero-section" className="flex container mx-auto h-screen">
        <div className="relative self-center">
            <Image
            src="/images/img-basketball.png" 
            width={432}
            height={423}
            alt="Image Basketball"
            className="grayscale absolute left-0 -mt-15"
            />
            <div className="relative ml-40 w-full">
                <div className="text-primary italic">Friday Sale, 50%</div>
                <h1 className="font-extrabold text-[80px] italic bg-gradient-to-b leading-tight from-black to-[#979797D1] bg-clip-text text-transparent">
                    WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
                </h1>
                <p className="w-1/2 mt-10 leading/loose">
                    Engineered for endurance and designed for speed. Experience gear
                    that moves as fast as you do. Premium fabrics. Unmatched comfort.
                    Limitless motion.
                </p>
                <div className="flex gap-5">
                    <Button>View More</Button>
                </div>
            </div>
            <Image
            src="/images/img-hero.png"
            width={700}
            height={950}
            alt="Image SportOn Hero"
            className="absolute right-2 -mt-40 -translate-y-1/2"
            />
        </div>
        <Image 
        src="/images/img-ornament-hero.svg"
        width={420}
        height={420}
        alt="Image Ornament"
        className="absolute -right-[200px] top-2/3 -translate-y-1/2"
        />
    </section> );
}

export default HeroSection;
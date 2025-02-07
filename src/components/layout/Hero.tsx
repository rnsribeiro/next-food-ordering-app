import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="grid grid-cols-2">
            <div className="py-12">
               <h1 className="text-4xl font-semibold">Everything is better with a pizza</h1>
                <p className="my-4 text-gray-500">Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life</p> 
            </div>            
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} objectFit="contain" alt={'pizza'}  />
            </div>
            <div className="flex gap-4 text-sm">
                <button 
                    className="bg-primary items-center uppercase flex gap-2 text-white px-4 py-2 rounded-full"
                >
                    Order Now
                    <Right />
                </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                    Learn More
                    <Right />
                </button>
            </div>
        </section>
    );
}
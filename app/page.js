import { logo } from "@/public/assets/images";
import ProductCard from "./components/ProductCard";
import data from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-screen max-w-[1440px] min-h-screen bg-blue-50 px-5 lg:px-20">
      <div className="relative w-full flex flex-col gap-14 h-fit m-0 py-12">
        <Image src={logo} height={80} alt="logo-image.png" /> 
        <h1 className="font-poppins font-semibold text-3xl lg:text-7xl text-blue-500 uppercase tracking-wider">
          Unlocking the Power of Premium Names for Your Pharmaceutical Ventures
        </h1>
      </div>
      <div className="relative w-full h-auto flex flex-col-reverse lg:flex-row py-6 gap-8">
        <div className="relative h-auto flex flex-wrap flex-1 gap-[40px]">
          {data.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
            />
          ))}
        </div>
        <div className="h-fit flex flex-1 w-full lg:max-w-[365px]">
          <p className="relative font-poppins text-blue-600 text-sm lg:text-base tracking-wider">
            Explore our curated collection of premium domain names meticulously
            selected to elevate your pharma brand. Each domain is a unique
            gateway to enhancing visibility, credibility, and customer trust.
            Scroll down to discover the perfect online identity that will set
            your pharmaceutical venture apart in the digital landscape.
          </p>
        </div>
      </div>
    </main>
  );
}

import ProductCard from "./components/ProductCard";
import data from "./data";

export default function Home() {
  return (
    <main className="relative w-screen max-w-[1440px] min-h-screen bg-blue-50 pt-[60px] lg:pt-20">
      <div className="relative w-full h-fit m-0 bg-header bg-cover bg-center">
        <div className="relative w-full h-full flex flex-col lg:flex-row lg:items-end gap-7 lg:gap-14 bg-black bg-opacity-40 py-6 lg:py-12 px-5 md:px-12 lg:px-20">
          <h1 className="font-poppins font-semibold text-3xl md:text-5xl lg:text-5xl md:max-w-[800px] lg:max-w-none text-white uppercase tracking-wider">
            Unlocking the Power of Premium Names for Your Pharmaceutical Ventures
          </h1>
          <p className="font-poppins text-white text-sm lg:text-base tracking-wider max-w-[400px]">
            Explore our curated collection of premium domain names meticulously
            selected to elevate your pharma brand. Each domain is a unique
            gateway to enhancing visibility, credibility, and customer trust.
          </p>
        </div>
      </div>
      <div className="relative w-full h-auto flex lg:flex-row py-10 gap-8">
        <div className="relative w-full h-auto flex flex-wrap gap-[40px] justify-center px-5 md:px-12 lg:px-20">
          {data.map((product) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
            />
          ))}
        </div>
        {/* <div className="h-fit flex flex-1 w-full md:max-w-[500px] lg:max-w-[365px]">
          
        </div> */}
      </div>
    </main>
  );
}

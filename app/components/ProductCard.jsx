import Image from "next/image";

const ProductCard = (props) => {
  const { image, title } = props;
  return (
    <a
      href="/product"
      className="relative w-[340px] min-w-[340px] h-[170px] min-h-[170px] bg-white flex flex-col items-center rounded-3xl pt-5 overflow-hidden justify-between cursor-pointer hover:scale-110 transition-all shadow-xl"
    >
      <div className=" relative h-[100px] w-[250px] overflow-hidden flex justify-center items-center">
        <Image src={image} height={100} alt="product-image" />
      </div>
      <div className="flex justify-center items-center w-full h-10 bg-blue-400 font-poppins text-base font-light tracking-widest text-white">
        {title}
      </div>
    </a>
  );
};

export default ProductCard;

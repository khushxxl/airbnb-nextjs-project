import Image from "next/image";

function Medium({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out ">
      <div className="relative  h-80 w-80">
        <Image src={img} layout="fill" />
      </div>
      <h3 className="mt-3 text-2xl">{title}</h3>
    </div> 
  );
}

export default Medium;

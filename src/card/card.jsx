const Card = ({ title, image, price }) => {


    
  return (
    <div className="flex flex-col items-center  bg-[#16a34a] border-spacing-1 m-7 w-40 p-0.5">
      <span className="text-xs font-bold text-black">{title}</span>
      <img className="w-14 h-14 border-radius: 50%" src={image} alt="" />
      <span className="text-xs font-bold text-black">{price}</span>
    </div>
  );
};

export default Card;

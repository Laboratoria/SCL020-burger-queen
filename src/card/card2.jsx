const Card2 = ({ image, item }) => {
  return (
    <div>
      <img className="w-14 h-14 border-radius: 50%" src={image} alt="" />
      <span className="text-xs font-bold text-black">{item}</span>
      <span className="text-xs font-bold text-black">{item}</span>
    </div>
  );
};
export default Card2;

const Button = ({ label, color }) => {
    
    return (
      <div>
        <button
          
          // className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#F6F650]
          // hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 margin:5px `}
        >
          {" "}
          {label}
          
        </button>
      </div>
    );
  };
  
  export default Button;

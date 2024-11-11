import React from "react";
import { MdDelete } from "react-icons/md";

const Wish = ({ p,handleDelete}) => {
  const { title, image, description,product_id,price } = p;
  console.log(p);  

  return (
    <div className="collapse bg-base-100 border mt-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-5">
            <img src={image } className="w-28 rounded-lg" alt={title} />
          </div>
          <div className="space-y-1">
            <h1 className="font-bold">{title}</h1>
            <p>{description}</p>
            <p className="font-semibold">Price:{price}</p>
          </div>
        </div>
        <div className="mr-5">
          <button onClick={()=>handleDelete(product_id)} className="btn text-red-500">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wish;

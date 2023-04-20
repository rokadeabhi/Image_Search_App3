import { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";

const Images = () => {
  const { response } = useContext(ImageContext);

  return (
    <>
      <div className="container">
      <div className="row justify-content-start align-items-start ">
    
        {response.map((data, key) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-xs-12 col-12 ">
          <Image key={key} data={data} />
          </div>
        ))}
      </div>
     
      </div>
     
    </>
  );
};

export default Images;

import React from 'react';
import "./Work.css";
const Image = ({ data }) => {
  console.log(data);
  return (
    <>
    
        <div className="container ">
          
                  <div className="card" style={{ width: "18rem",height:"700px" }} >
                    <img
                      className="img-fluid img-thumbnail d-block mb-4 h-100"
                      src={data.urls.small}
                      alt=""
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{data.description}</h5>
                      <p className="card-text mb-4">{data.alt_description}</p>
                      <a
                        href={data.urls.regular}
                        className="btn btn-primary text-white mt-auto align-self-start"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
             
         
    </>

  )
}

export default Image
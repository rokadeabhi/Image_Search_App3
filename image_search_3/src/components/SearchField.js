import { useContext, useState } from "react"
import { ImageContext } from "../App";
// const API_KEY = process.env.REACT_APP_API_KEY;

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  const handleButtonSearch = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`)
    setSearchValue("");
    setSearchImage(searchValue);
  }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_API_KEY}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <>
    
<div className="container text-center my-5 header border-bottom px-4">
        <div className="form-group row">
          <div className="col-xs-12">
            <label htmlFor="exampleInput" className="form-label  ">
              <h3 className="fs-1">
                Enter Images to <span className="text-primary">search</span>
              </h3>
            </label>
            <input
              type="text"
              placeholder="Enter image to search"
              className="form-control "
              value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
            />
            <button
              type="submit"
              onClick={handleButtonSearch}
              disabled={!searchValue}
              className="btn btn-primary my-2"
            >
              Get Photo
            </button>
          </div>
        </div>
      </div>
      </>
  )
}

export default SearchField
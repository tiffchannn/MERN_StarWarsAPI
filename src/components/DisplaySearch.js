import React from 'react';
import Search from './Search';

const DisplaySearch = ({result}) => {
  if (result === null) return null
  // const {result} = props.result;
  const resultTitleArr = Object.keys(result)
  // console.log("Results Array:", resultTitleArr);


  return (
    <>
      {/* <Search /> */}
      <div className="search-results">
        {
          Object.keys(result).map((key, i) => (
            <p key={i} className="result">
              <span className="name">{key} </span>: {result[key]}
            </p>
          ))
        }

        {/* <h2>{result.name}</h2>
        <h5>Height: {result.height}</h5>
        <h5>Mass: {result.mass}</h5>
        <h5>Hair Color: {result.hair_color}</h5>
        <h5>Skin Color:{result.skin_color}</h5> */}
      </div>

    </>
  );
};

export default DisplaySearch;

// For displaying all results from the API Call
{/* {resultTitleArr}

    {Object.keys(result).map((item, i) => (
        <h2 key={i}>
          {result[item]}
        </h2>
    ))} */}
import React from 'react'


function Result  ({result, openPopup})  {
    return (
        <div className="Result" onClick={() =>openPopup(result.imdbID)}>
            <img src={result.Poster} alt='poster-img'></img>
            <h3>{result.Title}</h3>
        </div>
    )
}
export default Result;
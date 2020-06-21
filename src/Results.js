import React from 'react';
import isEmpty from 'lodash/isEmpty'
import Result from "./Result";

function Results ({results, openPopup})  {
    return (
       <section className="results">
           {!isEmpty(results) && results.map(result => (
               <Result result={result}
               key= {result.imdbID}
               openPopup = {openPopup} />
           ))}
       </section>
    )
}
export default  Results;
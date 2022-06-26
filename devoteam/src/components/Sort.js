import React, {useState} from 'react'
import '../App.css'

function Sort( {name} ) {

    function sortByAscending() {
        const asc = [{name}].this.state;

        asc.sort((a, b) => {
            return a.name - b.name;
          });
        console.log(asc); 
      }

      function sortByDescending() {

        const des = [{name}];

        des.sort((a, b) => {
            return b.name - a.name;
          });
        console.log(des); 
      }

  return (
    <>
    
    </>
  )
}

export default Sort
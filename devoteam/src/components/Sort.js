import React from 'react'

function Sort({firstName}) {

    function sortByAscending() {
        const asc = [{firstName}];

        asc.sort((a, b) => {
            return a.name - b.name;
          });
        console.log(asc); 
      }

      function sortByDescending() {

        const des = [{firstName}];

        des.sort((a, b) => {
            return b.firstName - a.firstName;
          });
        console.log(des); 
      }

  return (
    <>
    <button className='sort1' onClick={sortByAscending}>ASC</button>
    <button className='sort2' onClick={sortByDescending}>DESC</button>
    </>
  )
}

export default Sort
import React from 'react'
import '../App.css'

function Sort({firstName}) {

    function sortByAscending() {
        const asc = [{firstName}].this.state;

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
    <button className='sort' onClick={sortByAscending}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24">
        <path d="M12 0l8 9h-6v15h-4v-15h-6z"/>
        </svg>
    </button>
    <button className='sort' onClick={sortByDescending}>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24">
        <path d="M12 24l-8-9h6v-15h4v15h6z"/>
        </svg>
    </button>
    </>
  )
}

export default Sort
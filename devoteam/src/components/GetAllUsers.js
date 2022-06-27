import React, {useState, useEffect, Suspense} from 'react';
import axios from 'axios';
import '../App.css'
const UserCard = React.lazy(() => import("./UserCard"));


function GetAllUsers() {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fecthUsers= async()=>{
           const response = await axios.get(`https://randomuser.me/api/?results=50`)
           console.log(response)

           setUsers(response.data.results)
        }

        fecthUsers();
        
    }, [])

    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== ''){
            const filteredData = users.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setSearchResults(filteredData)
        }
        else{
            setSearchResults(users)
        }
        //show all results if search input is empty
    }
    

  return (
    <>
    <div className='menu'>
        <button className='sort' >
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path d="M12 0l8 9h-6v15h-4v-15h-6z"/>
            </svg>
        </button>
        <button className='sort'>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path d="M12 24l-8-9h6v-15h4v15h6z"/>
            </svg>
        </button>
        <svg className='search-icon'
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24">
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
        </svg>
        <input className="search" icon='search' onChange={(e) => searchItems(e.target.value)}></input>
    </div>
    
    <div className='grid'>
            
        <Suspense
            fallback={ //fallback while waiting on the users to load
            <div className="loading">
                Loading...
            </div>
            }
        >  
        {searchInput.length > 1 ? (
                    searchResults.map((item) => {
                        return (
                            <UserCard 
                                key={item.id} 
                                firstName={item.name.first} 
                                lastName={item.name.last} 
                                city={item.location.city} 
                                image={item.picture.medium} 
                            />
                        )
                    })
                ) : ( //conditional rendering to show either serached user or all users
                users.map((user) =>{
                    return(
                        <UserCard 
                            key={user.id} 
                            firstName={user.name.first} 
                            lastName={user.name.last} 
                            city={user.location.city} 
                            image={user.picture.medium} />
                    )
                })
            )}
         
        </Suspense>
    </div>
    </>
  )
}

export default GetAllUsers
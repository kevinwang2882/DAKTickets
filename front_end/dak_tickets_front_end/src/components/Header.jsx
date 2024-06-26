
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'
import '../styles/Template.css'
import { Link,  } from 'react-router-dom';
export default function Header() {
    
    const navigate = useNavigate()

    const handleSearch = () => {
        const searchQuery = document.getElementById('home_Search_inputs').value 
        navigate(`/searchresult/${searchQuery}`)
    } 


    return (
        <div className="header-container">
            
            <div className="logo-container">
            
                {/* <h1>DAK TICKETS</h1> */}
                <img className="active-member animations" src='/src/assets/Active-Members.png' style={{ width: '150px', height: '100px', border: 'none' }}></img>
               
                <Link to="/">
                <img className="logo-iframe animations" src="/src/assets/DAK-Logo-A-1.gif"
                    // src="/src/assets/Logo.gif" 
                    style={{ width: '150px', height: '100px', border: 'none' }} 
                    title="Project Logo" 
                />
                </Link>
                <img className="promotion animations" src='/src/assets/Promotion.gif' style={{ width: '150px', height: '100px', border: 'none' }} alt="" />
               
            </div>
            <div className="nav-container">
                <Nav />
            </div>
            <div className="search-container">
                <input className='home-search-inputs' 
                    id='home_Search_inputs'
                    type="text"
                    placeholder='Search by Venue, Sports Team or Artist' />
                <button className='search-button'
                    id='home_search_button'
                    type="button"
                    onClick={handleSearch}>
                    SEARCH
                </button>
            </div>
        </div>
    )
}

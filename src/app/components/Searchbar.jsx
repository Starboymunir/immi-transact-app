import React, { useState } from 'react';
import { searchUsers } from './utils/Search'; // Adjust the path based on your project structure
import ProfileCardFrame from '../dashboard/ProfileCardFrame'; // Adjust the path based on your project structure

const Searchbar = ({ onClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Handle search logic
    const handleSearch = async () => {
        try {
            const users = await searchUsers(searchTerm);
            setSearchResults(users);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    return (
        <div className="search-container">
            <div className="button">

                <img className="material-symbols material-symbols-light-close" src="material-symbols-light-close.svg" onClick={onClose}>

                </img>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search for Attorneys"
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {/* Trigger search on button click */}
                <button onClick={handleSearch}>Search</button>

            </div>
            <h2>Search Results</h2>

            {/* Render search results */}
            {searchResults.length > 0 && (
                <div className='profeel'>

                    {searchResults.map((user) => (
                        <ProfileCardFrame
                            key={user.id}
                            username={user.username}
                            maskGroup={user.imageUrl}
                            rating={user.rating}
                            shortProfile={user.shortProfile}
                            buttonTextClassName="profile-card-frame-instance"

                            userEmail={user.email}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Searchbar;

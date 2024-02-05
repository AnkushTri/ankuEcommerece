import React, { useState } from 'react';
import styled from 'styled-components';

const Location = () => {
  const locations = [
    { id: 1, name: 'Mohali' },
    { id: 2, name: 'Delhi' },
    { id: 3, name: 'Noida' },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showAllLocations, setShowAllLocations] = useState(true);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setShowAllLocations(false);
  };

  const handleSelectClick = () => {
    setSelectedLocation(null);
    setShowAllLocations((prevShowAll) => !prevShowAll);
  };

  return (
    <Wrapper>
      <div className="selectable-location">
        <div className="select-header" onClick={handleSelectClick}>
          <h3>{selectedLocation ? selectedLocation.name : 'Select Location'}</h3>
          <span className={`arrow ${showAllLocations ? 'up' : 'down'}`}></span>
        </div>
        {showAllLocations && (
          <ul className="location-list">
            {locations.map((location) => (
              <li
                key={location.id}
                onClick={() => handleLocationClick(location)}
                className={`location-item ${selectedLocation && selectedLocation.id === location.id ? 'selected' : ''}`}
              >
                {location.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper=styled.div`
padding-top:0.4rem;
font-size:1rem;
.selectable-location {
  position: relative;
  max-width: 200px;
}

.select-header {
  // font-size:1rem;
  margin-top:0.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:2px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.arrow {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 0;
  margin-left: 8px;
}

.arrow.down {
  border-color: #000 transparent transparent transparent;
}

.arrow.up {
  border-color: transparent transparent #000 transparent;
}

.location-list {
  list-style: none;
  padding: 0;
  margin-top:0rem;
  
  // max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.location-item {
  cursor: pointer;
  padding:1px 10px;
  border-bottom: 1px solid #ccc;
}

.location-item:last-child {
  border-bottom: none;
}

.location-item.selected {
  background-color: #f0f0f0;
}

`

export default Location

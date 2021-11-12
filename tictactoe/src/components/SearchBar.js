import React, { useState } from "react";
import { Input } from "antd";
import "../App.css";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      var full_name = value.first_name + " " + value.last_name;
      return full_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div>
      <div className="search">
        <div className="search-inputs">
          <Search
            size="large"
            bordered={false}
            className="search-bar"
            placeholder={placeholder}
            allowClear
            onSearch={onSearch}
            style={{ width: 400 }}
            onChange={handleFilter}
            value={wordEntered}
          />
        </div>
        {filteredData.length !== 0 && (
          <div className="data-result">
            {filteredData.slice(0, 20).map((value, key) => {
              return (
                <a className="data-item" href="">
                  <div className="player-name">
                    {value.first_name + " " + value.last_name}
                  </div>
                  {/* need to have the same thing which is showed in the player list */}
                  <div className="player-status">player status</div>
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

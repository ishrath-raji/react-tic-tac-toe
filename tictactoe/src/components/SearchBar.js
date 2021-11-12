import React, { useState } from "react";
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../App.css";
import JSONDATA from "../MOCK_DATA.json";

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBar = ({ placeholder, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      {/* <Search
        size="large"
        bordered={false}
        className="search-bar"
        placeholder="Search Colleague"
        allowClear
        onSearch={onSearch}
        style={{ width: 300 }}
      /> */}
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          //   return val;
        } else if (
          val.first_name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            {val.first_name}
          </div>
        );
      })}
      {/* <div className="search">
        <div className="search-inputs">
          <input
            className="search-bar"
            type="text"
            placeholder={placeholder}
          ></input>
          <div className="search-icon">
            <SearchOutlined style={{ fontSize: "25px" }} />
          </div>
        </div>
        <div className="data-result">
          {data.map((value, key) => {
            return <div>{value.first_name}</div>;
          })}
        </div>
      </div> */}
    </div>
  );
};

export default SearchBar;

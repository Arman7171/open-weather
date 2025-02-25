import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCity } from "@/features/weatherSlice";
import { ReactSVG } from "react-svg";
import SearchIcon from "/images/Search.svg";
import "./styles.css";

const Input = () => {
  const dispatch = useDispatch()
  const [isOpenSearchInput, setIsOpenSearchInput] = useState(false);
  const [text, setText] = useState('')

  return (
    <div className={`input-container`}>
      <input
      value={text}
      onChange={(e) => setText(e.target.value)}
        className='input'
      />
      <ReactSVG
        src={SearchIcon}
        className="input-search-icon"
        onClick={() => setIsOpenSearchInput((prev) => !prev)}
      />
      <button className="search-btn" onClick={() => dispatch(changeCity(text))}>Search city</button>
    </div>
  );
};

export default Input;

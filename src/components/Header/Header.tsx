import React, { useState, useEffect } from "react";
import "./styles.css";
import Input from "@/components/Input/Input";
import { RootState } from "@/store/store";
import { useSelector, useDispatch } from "react-redux";
import { changeTemp } from "@/features/weatherSlice";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [text, setText] = useState('')
  const { showTempWith } = useSelector((state: RootState) => state.weather);
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <Input />
      <div className="temp-btn" onClick={() => {dispatch(changeTemp())}}>
        <div className="btn-item">
          <input type="radio" name="temp" id="" checked={showTempWith==='c'} />
          <div>°C</div>
        </div>
        <div className="btn-item">
          <input type="radio" name="temp" id="" checked={showTempWith === 'f'} />
          <div>°F</div>
        </div>
      </div>
    </header>
  );
}

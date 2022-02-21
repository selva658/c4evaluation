import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
export const LandingPage = () => {
    const [search, setsearch] = useState([]);
    const [result,setresult]=useState([])
  const handlechange = (e) => {
    setsearch(e.target.value);
  };

  const d=useSelector((store)=>store.data)
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqktx3t7wEsbTzrKS6kkTDPtcAvzBovxFvnENE86zAhAQqkMeCG-6ufa0xFe4Zmzd4W3Y&usqp=CAU"></img>
      <input
        className="search-box"
        style={{ width: "80%", height: "40px", borderRadius: "50px" }}
        onChange={handlechange}
        onKeyUp={(e) => {
            if (e.keyCode === 13) {
                axios.get(`https://fast-reef-22226.herokuapp.com/data?q=${search}`).then((res) => setresult(res.data))
             
          }
        }}
          ></input>
          
  
        {result.map((e) => {
          return <p key={e.id}><Link to={`/search/${e.id}`}>{ e.title}</Link></p>
          })}
        
    </div>
  );
};

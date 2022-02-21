import "./searchpage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const SearchResult = () => {
  const [para, setpara] = useState([]);
  const [search, setsearch] = useState([]);
  const [result, setresult] = useState([]);
  const { id } = useParams();

  const handlechange = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://fast-reef-22226.herokuapp.com/data/${id}`)
      .then((res) => {
        setpara(res.data);
      });
  }, []);
  return (
    <div>
      <div id="navbar" className="navbar">
        <img
          style={{ height: "40px", width: "100px" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqktx3t7wEsbTzrKS6kkTDPtcAvzBovxFvnENE86zAhAQqkMeCG-6ufa0xFe4Zmzd4W3Y&usqp=CAU"
        ></img>

        <input
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              axios
                .get(`https://fast-reef-22226.herokuapp.com/data?q=${search}`)
                .then((res) => setresult(res.data));
            }
          }}
          className="s1"
          onChange={handlechange}
        ></input>
        <button
          className="search"
          onClick={() => {
            axios
              .get(`https://fast-reef-22226.herokuapp.com/data?q=${search}`)
              .then((res) => {
                setresult(res.data);
              });
          }}
        >
          search
        </button>
      </div>
      <div className="sort">
        <button
          className="sortbtn"
          onClick={() => {
            axios
              .get(
                "https://fast-reef-22226.herokuapp.com/data?_sort=title&_order=asc"
              )
              .then((res) => {
                setresult(res.data), console.log(res.data);
              });
          }}
        >
          Sort A_Z
        </button>
        <button
          className="sortbtn"
          onClick={() => {
            axios
              .get(
                "https://fast-reef-22226.herokuapp.com/data?_sort=title&_order=desc"
              )
              .then((res) => {
                setresult(res.data), console.log(res.data);
              });
          }}
        >
          Sort Z_A
        </button>
        <button
          className="sortbtn"
          onClick={() => {
            axios
              .get(
                "https://fast-reef-22226.herokuapp.com/data?_sort=title&_order=desc"
              )
              .then((res) => {
                setresult(res.data), console.log(res.data);
              });
          }}
        >
          Sort by Date(ASC)
        </button>
        <button
          className="sortbtn"
          onClick={() => {
            axios
              .get(
                "https://fast-reef-22226.herokuapp.com/data?_sort=title&_order=desc"
              )
              .then((res) => {
                setresult(res.data), console.log(res.data);
              });
          }}
        >
          Sort by Date(DES)
        </button>
        <button
          className="sortbtn"
          onClick={() => {
            axios
              .get(
                "https://fast-reef-22226.herokuapp.com/data?_sort=quality&_order=asc"
              )
              .then((res) => {
                setresult(res.data), console.log(res.data);
              });
          }}
        >
          Sort by Quantity(ASC)
        </button>
        <button
          className="sortbtn"
          onClick={() => {
            axios
              .get(
                "https://fast-reef-22226.herokuapp.com/data?_sort=quality&_order=desc"
              )
              .then((res) => {
                setresult(res.data), console.log(res.data);
              });
          }}
        >
          Sort by Quantity(DES)
        </button>
        <button className="sortbtn">Filter</button>
      </div>
      <div className="lpd">
        <span>
          <b>Title : </b>
          {para.title}
        </span>
        <span>
          <b>URL : </b>
          {para.url}
        </span>
        <p>
          <b>description :</b>
          {para.description}
        </p>
        {/* <p><b>author</b>{para.author}</p> */}
        <p>
          <b>creation_date</b>
          {para.creation_date}
        </p>
        <span>
          <b>explicit</b>
          {para.explicit}
        </span>
        <span>
          <b>quality</b>
          {para.quality}
        </span>
      </div>

      {result.map((e) => {
        return (
          <div key={e.id} className="lpd">
            <span>
              <b>Title : </b>
              <Link to={"/"}>{e.title}</Link>
            </span>
            <span>
              <b>URL : </b>
              <Link to={`${e.url}`}> {e.url}</Link>
            </span>
            <p>
              <b>description :</b>
              {e.description}
            </p>
            {/* <p><b>author</b>{para.author}</p> */}
            <p>
              <b>creation_date</b>
              {e.creation_date}
            </p>
            <span>
              <b>explicit</b>
              {e.explicit}
            </span>
            <span>
              <b>quality</b>
              {e.quality}
            </span>
          </div>
        );
      })}
    </div>
  );
};

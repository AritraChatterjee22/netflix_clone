import axios from "axios";
import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(()=>{
    const getRandomLists = async ()=>{
      try {
        const res = await axios.get(
          `lists${type ? "?type="+ type : ""}${genre ? "&genre="+genre: ""}`,
          {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWVjYzRkZmNmZTEyMmM5MmM5YzYzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODkwMzk0MiwiZXhwIjoxNjg5MzM1OTQyfQ.ArHTiNX3-ZLG_HoRYpF_sh6U0cI-4A12_1W2-RdGLJU"
          },
        }
        );
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  },[type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type}/>
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

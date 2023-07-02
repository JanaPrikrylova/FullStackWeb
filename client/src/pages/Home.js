import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPOsts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      //console.log(response.data);
      setListOfPOsts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="post"
            onClick={() => {
              navigate.push(`/post/${value.id}`);
            }}
          >
            <div>{value.id}</div>
            <div className="title" key="uniqueId1">
              {value.title}
            </div>
            <div className="body" key="uniqueId2">
              {value.postText}
            </div>
            <div className="footer" key="uniqueId3">
              {value.username}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;

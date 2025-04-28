import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const BoardContainer = styled.div`
  padding: 20px;
`;

const PostItem = styled.div`
  padding:10px;
  border:1px solid #ddd;
  margin-bottom:10px;
  border-radius:8px;
  background-color:#fff;
  cursor:pointer;
`;

const Button = styled.button`
  padding:10px;
  background-color:#4CAF50;
`;

function Freeboard(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return(
    <BoardContainer>
      <h1>자유게시판</h1>
      <Button>
        <Link to="/write" style={{color:'white', textDecoration:'none'}}>게시글 작성</Link>
      </Button>
      {posts.map(post=>(
        <PostItem key={post.id}>
          <Link to={`freeboard/${post.id}`} style={{color:'black', textDecoration:'none'}}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </Link>
        </PostItem>
      ))}
    </BoardContainer>
  );
}



export default Freeboard; 
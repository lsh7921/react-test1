import React, { useEffect } from 'react';

function FreeBoard() {
  useEffect(() => {
    document.title = "자유게시판 | MySite";
  }, []);

  return (
    <div>
      <h1>자유게시판</h1>
    </div>
  );
}

export default FreeBoard;
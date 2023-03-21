import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography } from '@mui/material';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
    .then(res=>{
        console.log(res.data.posts)
        setPosts(res.data.posts)
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>Available Posts</Typography>
      {posts.map(post => (
        <Card key={post.id} sx={{ maxWidth: 500, marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h2">{post.title}</Typography>
            <Typography variant="body1">{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
};

export default Posts;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Posts = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://dummyjson.com/posts")
//       .then((res) => {
//         console.log(res.data.posts);
//         setPosts(res.data.posts);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         marginTop: "4",
//       }}
//     >
//       <div style={{ fontSize:'30px' }}> Available Posts Here</div>
//       {posts.map((post) => (
//         <div class="card w-50 mt-2">
//           <div class="card-body">
//             <h5 class="card-title">{post.title}</h5>
//             <p class="card-text">{post.body}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Posts;

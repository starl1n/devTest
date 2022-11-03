import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Markup } from 'interweave';
import './App.css';


function App() {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
     fetch('http://localhost:8080/getData')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
   }, []);

   const [query, setQuery] = useState("")

   Array.from(posts).filter(posts => {
   if (query === "") {
     //if searchterm is empty
     return posts;
   } else if (
         posts.title.toLowerCase().includes(query.toLowerCase()) ||
         posts.link.toLowerCase().includes(query.toLowerCase()) ||
         posts.content.toLowerCase().includes(query.toLowerCase()) ) 
   {
     //returns filtered posts
     console.log("filtrado", posts)
     return posts;
   }
  });

  return (
   <div className="App">

      <h1>Exchange App</h1>

      <div>
         <input placeholder="Search Posts" className='searchBar' onChange={event => setQuery(event.target.value)} />
      </div>

      {Array.from(posts).map((post) => {
         const dt = new Date(post.date)
         return (
            <div className='App-header' key={post.id}>
               <Card style={{ width: '60rem'}} className='box'>
                  <Card.Body>
                     <Card.Title>
                        {post.title}
                     </Card.Title>
                     <Card.Subtitle className="mb-2 text-muted date">
                        {dt.toLocaleString()}
                     </Card.Subtitle>
                     <Card.Text>
                        <Markup content={post.content} className='content'/>
                     </Card.Text>
                     <Card.Link href={post.link} target="_blank">
                        Conocer mas
                     </Card.Link>
                  </Card.Body>
               </Card>
            </div>  
         )
      })}
      <footer>Made by Visquel De los Santos</footer>
   </div>
  );
}

export default App;

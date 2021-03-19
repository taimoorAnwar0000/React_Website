

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
   image:'/image/p1.jpeg',
    title: "DreamHouse#1",
  
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
   image:'/image/p2.jpeg',
    title: "DreamHouse#2",
   
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
   image:'/image/p3.jpeg',
    title: "DreamHouse#3",
   
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
   image:'/image/p4.jpeg',
    title: "DreamHouse#4",
  
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
   image:'/image/p5.jpeg',
    title: "DreamHouse#5",
   
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
   image:'/image/p6.jpeg',
    title: "DreamHouse#6",
   
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
   image:'/image/p7.jpeg',
    title: "DreamHouse#7",
   
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
   image:'/image/p1.jpeg',
    title: "DreamHouse#8",
    
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
   image:'/image/p1.jpeg',
    title: "DreamHouse#9",
  
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.image = movie.image;
  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

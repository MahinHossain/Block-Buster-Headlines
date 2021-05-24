// function App() {
//   const [posts, setposts] = useState([]);
//   const [loading, setloading] = useState(false);
//   const [Currentpage, setCurrentpage] = useState(1);
//   const [postsPerPage, setpostsPerPage] = useState(15);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setloading(true);
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

//       setposts(res.data);
//       setloading(false);
//     };
//     fetchPosts();
//   }, []);

//   const indexofLastpost = Currentpage * postsPerPage;
//   const indexofFirstpost = indexofLastpost - postsPerPage;
//   const currentpost = posts.slice(indexofFirstpost, indexofLastpost);

//   const paginate = (number) => {
//     setCurrentpage(number);
//   };
//   return (
//     <div>
//       <Posts loading={loading} posts={currentpost} />
//       <Paginationss
//         postsPerPage={postsPerPage}
//         totalPost={posts.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// }

// export default App;

// function Paginationss({ postsPerPage, totalPost, paginate }) {
//   const pagenumber = [];
//   for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
//     pagenumber.push(i);
//   }
//   return (
//     <nav aria-label="Page navigation example">
//       <ul class="pagination">
//         {pagenumber.map((number) => (
//           <li class="page-item">
//             <a onClick={() => paginate(number)} class="page-link" href="#">
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// function Posts({ posts, loading }) {
//   if (loading) {
//     return <h3>Loading......</h3>;
//   }

//   return (
//     <ul className="list-group mb-4">
//       {posts.map((item) => (
//         <li className="list-group-item" key={item.id}>
//           {" "}
//           {item.title}
//         </li>
//       ))}
//     </ul>
//   );
// }

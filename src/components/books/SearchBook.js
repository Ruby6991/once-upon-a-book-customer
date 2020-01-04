// render(){
//     console.log(this.props);
//     //4.
//     const { posts } = this.props;
//     //const { posts } =this.state;
//     const postList=posts.length? (
//         posts.map((post) => {
//             return (
//                 <div className="post card" key={post.id}>
//                     <img src={Pokeball} alt="A pokeball"/>
//                     <div className="card-content">
//                         <Link to={'/'+post.id}>
//                             <span className="card-title red-text">{post.title}</span>
//                         </Link>
//                         <p>{post.body}</p>
//                     </div>
//                 </div>
//             )
//         })
//     ) : (
//         <div className="center">No posts yet</div>
//     )
//     return (
//         <div className="container">
//             <h4 className="center">Home</h4>
//             {postList}
//         </div>

//     )
// }
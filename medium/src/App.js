// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Component/Navbar';
// import RecommendedPost from './Component/RecommendedPost';
// import List from './Component/List';
// import RightContainer from './Component/Rightcontainer';


// function App() {
//   return (
//     <div>
//      <Navbar/>
//      <RecommendedPost/>
//      <List/>
//      <List/>
//      <List/>
//      <List/>
//      <RightContainer/>
//     </div>
//   );
// }

// export default App;



import Navbar from './Component/Navbar';
import RecommendedPost from './Component/RecommendedPost';
import List from './Component/List';
import Rightcontainer from './Component/Rightcontainer';


function App() {
  return (
    <>
    <div>
        <Navbar />
        <RecommendedPost  />
        <div className='content'>
        <div className='left-container'>
        <List />
        <List/>
        <List />
        <List />
      </div>
      <div className="right-container">
        <Rightcontainer/>
       </div>
      </div>
      </div>
    </>
  );
}

export default App;







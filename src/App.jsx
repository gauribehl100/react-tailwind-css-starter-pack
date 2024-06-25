// import React, { useEffect } from "react";
// import Navbar from "../react-tailwind-css-starter-pack/src/Shopp/Navbar"
// import Filter from "../react-tailwind-css-starter-pack/src/Shopp/Filter"
// import Cards from "../react-tailwind-css-starter-pack/src/Shopp/Cards"
// import {apiUrl, filterData, /*fit*/}  from "../react-tailwind-css-starter-pack/src/Shopp/Data";
// import {/*ToastContainer*/toast} from 'react-toastify';
// import { useState } from "react";

// const App = () => {
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const [category, setCategory] = useState(filterData[0].title) 

//   async function fetchData(){
//     setLoading(true);
//     try{
//       let response = await fetch(apiUrl);
//       let output = await response.json();
//       setCourses(output.data);
//     }
//     catch(error) {
//       toast.error("Network has no issues"); 
//     }
//     setLoading(false);
//   }
//   useEffect(() => {
//     fetchData();
//   },[])

//   return (
//   <div className="min-h-screen flex flex-col">
//     <div>
//       <Navbar/>
//     </div>
//     <div className="bg-[#002B5B]">
//       <div>
//         <Filter
//           filterData = {filterData}
//           // category={category} 
//           // setCategory={setCategory} 
//         />
//       </div>
//       <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center item-center min-h[50vh]">
//         {
//           loading?(<spinner/>) : (<Cards courses = {courses} /* category={category} *//>)
//         }
//       </div>
//     </div>
//   </div>
// )};

// export default App;


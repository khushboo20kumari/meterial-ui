// // import DialogForm from './DialogForm';
// import './App.css';
// import SetItem from './LocalStorage/SetItem';
// function App() {
//   return (
//     <div className="App">
//       {/* <DialogForm/> */}
//       <SetItem/>
     
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// const App = () => {

//    const [name, setName] = useState('');
//    const [pwd, setPwd] = useState('');

//    const handle = () => {
//       localStorage.setItem('Name', name);
//       localStorage.setItem('Password', pwd);
//    };
//    const remove = () => {
//       localStorage.removeItem('Name');
//       localStorage.removeItem('Password');
//    };
//    return (
//       <div className="App">
//          <h1>Name of the user:</h1>
//          <input
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//          />
//          <h1>Password of the user:</h1>
//          <input
//             type="password"
//             placeholder="Password"
//             value={pwd}
//             onChange={(e) => setPwd(e.target.value)}
//          />
//          <div>
//             <button onClick={handle}>Done</button>
//          </div>
//          {localStorage.getItem('Name') && (
//             <div>
//                Name: <p>{localStorage.getItem('Name')}</p>
//             </div>
//          )}
//          {localStorage.getItem('Password') && (
//             <div>
//                Password: <p>{localStorage.getItem('Password')}</p>
//             </div>
//          )}
//          <div>
//             <button onClick={remove}>Remove</button>
//          </div>
//       </div>
//    );
// };
// export default App;

// import Selectoption from "./Select";
// import SelectArray from "./SelectArray";
// import DialogForm from "./DialogForm";


// import TextField from "@mui/material";
// import SelectArray from "./SelectArray";
// import MapMethod from "./MapMethod";
// import SearchBar from "./SearchBar";
// import DropDown from "./DropDown";
// import MediaQuere from "./MediaQuere";
// function App(){
//    return(
//       <>
//       <MediaQuere/>
//       {/* <DropDown/> */}
//       {/* <MapMethod/> */}
//       {/* <SearchBar></SearchBar> */}
//       {/* <SelectArray/> */}
//       {/* <DialogForm/> */}
//       {/* <Selectoption/> */}
//       {/* <SelectArray/> */}
//       </>
//    )
// }
// export default App;



// import Child from "./Child";
// function App(){
//    return(
//       <div className="App">
//          <Child/>

//       </div>
//    )
// }
// export default App;


// import React, { useState } from 'react';
// import Child from './Child';




// const App = () => {
//   let name = '';
//   let age = '';

//   const handleChildData = (childName, childAge) => {
//     name = childName;
//     age = childAge;
//   };

//   return (
//     <div className='App'>
//       <Child onData={handleChildData} />
      
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

// export default App;



import React, { useState } from 'react';
import Child from './Child';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleChildData = (childName, childAge) => {
    setName(childName);
    setAge(childAge);
  };

  return (
    <div className='App'>
      <Child onData={handleChildData} />
      
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default App;

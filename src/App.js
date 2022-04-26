import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Homepage from "./component/Homepage";
import Student2020MT93502 from "./component/Student2020MT93502";
import Student2020MT93585 from "./component/Student2020MT93585";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/profile/2020MT93502" element={<Student2020MT93502 />} />
      <Route path="/profile/2020MT93585" element={<Student2020MT93585 />} />
    </Routes>
  );
}

export default App;

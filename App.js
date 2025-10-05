import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import Dash from "./Dash";
import Info from './Info.jsx';


function App() {
  const [userData, setUserData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data) => {
    setUserData(data);
    setIsSubmitted(true);
  };

  const handleBackToForm = () => setIsSubmitted(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            !isSubmitted ? (
              <UserForm onSubmitData={handleFormSubmit} />
            ) : (
              <Dash userData={userData} onAddData={handleBackToForm} />
            )
          }
        />
        <Route path="/learn" element={<Info />} />
      </Routes>
    </Router>
  );
}

export default App;

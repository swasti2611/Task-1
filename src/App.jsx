import React from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import PostContent from "./Components/PostContent";
import Artboard from "./Components/Artboard";

function App() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "60px",
          marginTop: "-90px",
        }}
      >
        <Sidebar />
        <PostContent />
        <Artboard />
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Feeds from "./Component/Feeds";
import InputFeeds from "./Component/InputFeeds";
import View from "./Component/View";
import EditFeed from "./Component/EditFeed";
import DeleteFeed from "./Component/DeleteFeed";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Feeds />} />
        <Route path="/input" element={<InputFeeds />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<EditFeed />} />
        <Route path="/delete/:id" element={<DeleteFeed />} />
      </Routes>
    </>
  );
};

export default App;

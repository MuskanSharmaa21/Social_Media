import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import Header from './components/Header';
import Footer from "./components/Footer";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Postliststore from "./store/Post-list-store";


function App() {
  const [selectedTab, setSelectedTab] = useState('Home');

  return (
    <>
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className="container">
        <Header />
        {selectedTab === 'Home' ? (
          <PostList />
        ) : (
          <CreatePost />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;

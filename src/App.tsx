// This app uses React 18/19's `useTransition` to switch between tabs ("Home", "Posts", "Contact").
// `startTransition` tells React the state update (changing tabs) is non-urgent,
// so React can keep the UI responsive. While the transition is pending, "loading..." is shown,
// and once finished the correct component (Home, Posts, or Contact) renders.

import { useState, useTransition } from "react";
import Home from "./React-19/useTransition/Home";
import Posts from "./React-19/useTransition/Posts";
import Contact from "./React-19/useTransition/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab) => {
    startTransition(() => {
      setActiveTab(tab);
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;

      case "posts":
        return <Posts />;

      case "contact":
        return <Contact />;

      default:
        return <Home />;
    }
  };

  return (
    <>
      <div>
        <div className="tabs">
          <button onClick={() => handleTabChange("home")}>Home</button>
          <button onClick={() => handleTabChange("posts")}>Posts</button>
          <button onClick={() => handleTabChange("contact")}>Contacts</button>
        </div>

        {isPending && <p>loading...</p>}

        <div className="content">{renderContent()}</div>
      </div>
    </>
  );
}

export default App;

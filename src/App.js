import "./App.css";
import LoginPage from "./Login/LoginPage";
import NewPost from "./Posts/NewPost";
import PostList from "./Posts/PostList";
import { useState } from "react";
import Signup from "./Signup/Signup";

const expenses = [
  {
    name: "Lakshay Gupta",
    content:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    posted: "5mins ago",
    comments: "16 comments",
  },
  {
    name: "Naman Sukhija",
    content:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    posted: "1hour ago",
    comments: "24 comments",
  },
  {
    name: "William Harris",
    content:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    posted: "3mins ago",
    comments: "29 comments",
  },
];

function App() {
  const [isLoggedIn, setLogin] = useState(false);

  const submitLoginHandler = () => {
    setLogin(!isLoggedIn);
  };

  const [registerIsShown, setRegisterIsShown] = useState(false);

  const showRegisterHandler = () => {
    setRegisterIsShown(true);

  };


  const hideRegisterHandler = () => {

    setRegisterIsShown(false);
  };

  console.log(registerIsShown);

  return (
    <div className="App">
      {!isLoggedIn && (
        <LoginPage onSubmitLogin={submitLoginHandler}></LoginPage>
      )}
      {isLoggedIn && (
        <div className="posts-area">
          { registerIsShown && <Signup onCloseRegister={hideRegisterHandler} ></Signup>} 
          <NewPost onShowRegister={showRegisterHandler} ></NewPost>
          <PostList items={expenses}></PostList>{" "}
        </div>
      )}
    </div>
  );
}

export default App;

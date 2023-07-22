import React, { createContext, useState, PropsWithChildren } from "react";
import { MainContextInterface, PostInterface } from "../types";

export const MainContext = createContext<MainContextInterface | null>(null);


interface PropsInterface extends PropsWithChildren {
   a?: number,
   
}

export const MainContextProvider = ({a, children}: PropsInterface) => {
  console.log(children, a, "!!!");
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [maxUserNumbers, setMaxUserNumbers] = useState<number>(users.length);

  

  const renderPosts = () => {
    return (
      <div className="posts">
        {posts.map((post) => (
          <div key={post.title}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    );
  };

  
  

  return (
    <MainContext.Provider
      value={{
        posts: posts,
        setPosts: setPosts,
        renderPosts: renderPosts,
        setMaxUserNumbers: setMaxUserNumbers,
        maxUserNumbers: maxUserNumbers,
        users: users,
        setUsers: setUsers
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/xChristianCRX.png",
      name: "Christian Ricci",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Oi, eu sou o Christian!",
      },
      {
        type: "paragraph",
        content: "Lorem ipsumassumenda aut similique, est natrum, earum ab?",
      },
      { type: "link", content: "https://github.com/xChristianCRX" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jhennyy.png",
      name: "Jhennifer Stefany",
      role: "Data Scientist",
    },
    content: [
      {
        type: "paragraph",
        content: "Hello, world!",
      },
      {
        type: "paragraph",
        content: "Eu sou a Jhenny",
      },
      { type: "link", content: "https://github.com/jhennyy" },
    ],
    publishedAt: new Date("2023-02-15 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
            <Post 
              key={post.id}
              post={post}
            />
            );
          })}
        </main>
      </div>
    </div>
  );
}

import "./App.css";
import { useState } from "react";
import Header from "./Component/Header/Header";
import Form from "./Component/Form/Form";
import ThoughtList from "./Component/Form/ThoughtList/ThoughtList";
import Footer from "./Component/Footer/Footer";

const dummyThoughts = [
  {
    id: "un05",
    username: "@miximtoon",
    thinking:
      "Playing Bon Iver on late night drives. My window, moon, and fireflies. Holding onto moments that we found. Even when the sun goes down.",
  },
  {
    id: "un04",
    username: "@jennsenn",
    thinking: "today, i've decided to be bad vibes and read spoilers wheew",
  },
  {
    id: "un03",
    username: "@yonce444",
    thinking:
      "Your love is bright as ever. Even in the shadows. Baby kiss me. Before they turn the lights out.",
  },
  {
    id: "un02",
    username: "@thanos_drip",
    thinking:
      "In time, you will know what its like to lose, to feel so desprately that you're right yet to fail all the same. It's frightening, turns the legs to jelly. To what end? dread it, run from it, destiny still arrives all the same.",
  },
  {
    id: "un01",
    username: "@george",
    thinking:
      "Trying to get a hang of React as i practice component and React hooks. It's going well so far :).",
  },
];

function App() {
  const [thoughtsPost, setThoughtsPost] = useState(dummyThoughts);

  const formData = (data) => {
    setThoughtsPost((previousThought) => {
      return [data, ...previousThought];
    });
  };

  const deleteThoughtHandler = (thoughtId) => {
    setThoughtsPost((previousThought) => {
      const updatedThoughtPost = previousThought.filter(
        (thought) => thought.id !== thoughtId
      );
      return updatedThoughtPost;
    });
  };

  return (
    <>
      <Header />
      <Form onSubmitFormHandler={formData} />
      <ThoughtList
        items={thoughtsPost}
        onDeleteThought={deleteThoughtHandler}
      />
      <Footer />
    </>
  );
}

export default App;

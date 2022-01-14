import React, { useState } from "react";
import DatePicker from "../../Form Components/DatePicker";
import Prompt from "../../Form Components/Prompt";

const Home = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [input, setInput] = useState({});

  return (
    <>
      <Prompt
        onClose={() => setDisplayModal(false)}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        input={input}
        setInput={setInput}
      />
      <DatePicker
        onClose={() => setDisplayModal(false)}
        displayModal={displayModal}
        input={input}
        setInput={setInput}
      />
    </>
  );
};

export default Home;

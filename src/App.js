import React, { useState } from "react";
import "./App.css";
import styledComponents from "styled-components";
import { MarkdownInput } from "./components/mdInput";
import { ConvertedMD } from "./components/convertedMD";
import ConverterContext from "./convertContext";

const MainContainer = styledComponents.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styledComponents.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Arial", sans-serif;
  margin-bottom: 1em;
`;

const MDConvertContainer = styledComponents.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {
  const [markdownText, setMarkdownText] = useState("");

  const contextValue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <ConverterContext.Provider value={contextValue}>
      <MainContainer>
        <Title>MarkDown Editor</Title>
        <MDConvertContainer>
          <MarkdownInput />
          <ConvertedMD />
        </MDConvertContainer>
      </MainContainer>
    </ConverterContext.Provider>
  );
}

export default App;

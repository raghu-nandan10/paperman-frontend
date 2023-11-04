import React from "react";

import LanguageSelector from "./LanguageSelector";
import CodeEditor from "./CodeEditor";
const CodeEditorWithLanguage = ({
  handleLanguageChange,
  index,
  content,
  handleCodeEditor,
}) => {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <LanguageSelector
        handleLanguageChange={handleLanguageChange}
        index={index}
        content={content}
      />
      <CodeEditor
        content={content}
        index={index}
        handleCodeEditor={handleCodeEditor}
      />
    </div>
  );
};

export default CodeEditorWithLanguage;

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import React, { useState } from "react";
import { BsFillClipboardFill } from "react-icons/bs";
import { MdDone } from "react-icons/md";

import "./ReadOnlyEditor.css";

const ReadOnlyEditor = ({ code, language }) => {
  const [copy, setCopy] = useState(false);

  return (
    <>
      <div className="reader-container">
        <div className="code-header">
          <p className="code-topic">Code</p>
          {copy ? (
            <button className="clipboard-button">
              <span>
                <MdDone />
              </span>
              Copied!
            </button>
          ) : (
            <button
              className="clipboard-button"
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 3000);
              }}
            >
              <span>
                <BsFillClipboardFill />
              </span>
              Copy code
            </button>
          )}
        </div>

        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            width: "100%",
            padding: "10px",
            fontSize: "15px",
          }}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default ReadOnlyEditor;

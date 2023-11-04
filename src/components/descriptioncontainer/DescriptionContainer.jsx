import React,{useState,useRef,useEffect} from "react";

import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";

import "./DescriptionContainer.css";
const DescriptionContainer = ({value}) => {
    const [editorState, setEditorState] = useState(
        EditorState.createWithContent(
          convertFromRaw(JSON.parse(value)))
      );
      const editor = useRef(null);

      console.log(JSON.parse(value))
    
      const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          setEditorState(newState);
          return true;
        }
        return false;
      };
    
      // FOR INLINE STYLESs
      const styleMap = {
        CODE: {
          fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
          fontSize: 18,
          padding: 2,
        },
        HIGHLIGHT: {
          color: "rgb(13 148 136)",
        },
        UPPERCASE: {
          textTransform: "uppercase",
        },
        LOWERCASE: {
          textTransform: "lowercase",
        },
        CODEBLOCK: {
          fontFamily: '"fira-code", "monospace"',
          fontSize: "inherit",
          background: "rgb(31 41 55)",
    
          color: "white",
          lineHeight: 1.6,
          padding: "0.3rem 0.5rem",
          borderRadius: " 0.4rem",
        },
        SUPERSCRIPT: {
          verticalAlign: "super",
          fontSize: "80%",
        },
        SUBSCRIPT: {
          verticalAlign: "sub",
          fontSize: "80%",
        },
      };
    
      // FOR BLOCK LEVEL STYLES(Returns CSS Class From DraftEditor.css)
      const myBlockStyleFn = (contentBlock) => {
        const type = contentBlock.getType();
        switch (type) {
          case "blockQuote":
            return "superFancyBlockquote";
          case "leftAlign":
            return "leftAlign";
          case "rightAlign":
            return "rightAlign";
          case "centerAlign":
            return "centerAlign";
          case "justifyAlign":
            return "justifyAlign";
          case "header-one":
            return "headerOne";
          case "header-two":
            return "headerTwo";
          case "header-three":
            return "headerThree";
          case "header-four":
            return "headerFour";
          case "header-five":
            return "headerFive";
          case "header-six":
            return "headerSix";
          case "ordered-list-item":
            return "orderedListItem";
          case "unordered-list-item":
            return "unorderedListItem";
          default:
            break;
        }
      };
  return (
    <div className="editor-container">
      <Editor
        ref={editor}
        placeholder="Write Here"
        handleKeyCommand={handleKeyCommand}
        editorState={editorState}
        customStyleMap={styleMap}
        blockStyleFn={myBlockStyleFn}
        readOnly="true"
      />
    </div>
  );
};

export default DescriptionContainer;

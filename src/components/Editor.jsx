import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css";

function Editor({ index, handleEditorContent, content }) {
  // console.log(value);

  return (
    <ReactQuill
      className=" font-customFont font-thin "
      value={content[index]?.data}
      onChange={(html) => handleEditorContent(html, index)}
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          [{ font: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          [{ align: [] }],
          [{ color: [] }, { background: [] }],
          ["link", "image", "video"],
        ],
        clipboard: {
          matchVisual: true,
        },
      }}
      formats={[
        "header",
        "font",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "blockquote",
        "code-block",
        "align",
        "color",
        "background",
        "link",
        "image",
        "video",
      ]}
      placeholder="Write something..."
      readOnly={false}
      // bounds=".editor-container"
      style={{
        height: "fit-content",
        width: "90vw",

        fontFamily: "inherit",
        fontSize: "30px",
        border: "0px",
        marginTop: "50px",
      }}
      preserveWhitespace={true}
    />
  );
}

export default Editor;

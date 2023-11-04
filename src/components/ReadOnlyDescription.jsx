import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css";

function ReadOnlyDescription({ value }) {
  // console.log(value);

  return (
    <ReactQuill
      className="  text-white "
      value={value}
      modules={{
        toolbar: false,
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
      readOnly={true}
      style={{
        height: "fit-content",
        width: "100vw",

        fontFamily: "inherit",
        fontSize: "30px",
        border: "0px",
      }}
      preserveWhitespace={true}
    />
  );
}

export default ReadOnlyDescription;

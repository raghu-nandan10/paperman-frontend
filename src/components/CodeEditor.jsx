import React, { useState } from "react";
import Editor from "@monaco-editor/react";
const CodeEditor = ({ content, index, handleCodeEditor }) => {
  return (
    <Editor
      height="40vh"
      width="100%"
      onChange={(codeString) => {
        handleCodeEditor(codeString, index);
      }}
      defaultLanguage="javascript"
      language={content[index].lang}
      defaultValue="//write here"
      value={content[index]?.data}
      theme="vs-dark"
      className="bg-black  text-purple-600 "
      options={{
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: "on",
        accessibilitySupport: "auto",
        autoIndent: true,
        dragAndDrop: true,
        fontSize: 18,
        automaticLayout: true,
        codeLens: true,
        colorDecorators: true,
        contextmenu: true,
        cursorBlinking: "blink",
        cursorSmoothCaretAnimation: true,
        cursorStyle: "blink",
        disableLayerHinting: true,
        disableMonospaceOptimizations: false,
        dragAndDrop: true,
        fixedOverflowWidgets: true,
        folding: true,
        foldingStrategy: "auto",
        fontLigatures: true,
        formatOnPaste: true,
        formatOnType: true,
        hideCursorInOverviewRuler: true,
        highlightActiveIndentGuide: true,
        links: true,
        mouseWheelZoom: true,
        multiCursorMergeOverlapping: true,
        multiCursorModifier: "alt",
        overviewRulerBorder: true,
        overviewRulerLanes: 2,
        quickSuggestions: true,
        quickSuggestionsDelay: 0,
        readOnly: false,
        renderControlCharacters: true,
        renderFinalNewline: true,
        renderIndentGuides: true,
        renderLineHighlight: "all",
        renderWhitespace: "all",
        revealHorizontalRightPadding: 0,
        roundedSelection: true,
        rulers: [],
        scrollBeyondLastColumn: 10,
        scrollBeyondLastLine: true,
        selectOnLineNumbers: true,
        selectionClipboard: true,
        selectionHighlight: true,
        showFoldingControls: "mouseover",
        smoothScrolling: true,
        suggestOnTriggerCharacters: true,
        wordBasedSuggestions: true,
        wordSeparators: "~!@#$%^&*()-=+[{]}|;:'\",.<>/?",
        wordWrap: "on",
        wordWrapBreakAfterCharacters: "\t})]?|&,;",
        wordWrapBreakBeforeCharacters: "{([+",
        wordWrapBreakObtrusiveCharacters: ".",
        wordWrapColumn: 80,
        wordWrapMinified: true,
        wrappingIndent: "none",
      }}
    />
  );
};

export default CodeEditor;

import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";

function CodeEditors({ language, displayName, value, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }
  const [expand, setExpand] = useState(true);
  const expandShrink = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div
      className={` bg-zinc-800 m-2 text-white rounded-md flex ${
        expand ? "flex-grow" : "flex-grow-0"
      } flex-col basis-0 min-w-24`}
    >
      <div className="editorTitle flex justify-between items-center p-2 bg-zinc-950 rounded-t-md">
        <h2>{displayName}</h2>
        <span onClick={expandShrink} className="cursor-pointer">
          {expand ? (
            <img className="w-8" src="src\assets\shrink.svg" alt="" />
          ) : (
            <img className="w-8" src="src\assets\expand.svg" alt="" />
          )}
        </span>
      </div>
      <CodeMirror
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
        onBeforeChange={handleChange}
        className="h-[50vh] flex-grow rounded-b-md overflow-hidden "
      />
    </div>
  );
}

export default CodeEditors;

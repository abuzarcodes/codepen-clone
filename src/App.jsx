import React, { useEffect, useState } from "react";
import CodeEditors from "./components/CodeEditors";

function App() {
  const [Html, setHtml] = useState("");
  const [Css, setCss] = useState("");
  const [Js, setJs] = useState("");
  const [Srcdoc, setSrcdoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcdoc(
        `
        <html>
        <body>${Html}</body>
        <style>${Css}</style>
        <script>${Js}</script>
        </html>
       `
      );
      return () => clearTimeout(timeout);
    }, 250);
  }, [Html, Css, Js]);

  const srcDoc = Srcdoc;
  return (
    <>
      <div className="Top-panel dark:bg-zinc-900 pb-2 flex">
        <CodeEditors
          language="xml"
          displayName="Html"
          value={Html}
          onChange={setHtml}
        />
        <CodeEditors
          language="css"
          displayName="Css"
          value={Css}
          onChange={setCss}
        />
        <CodeEditors
          language="javascript"
          displayName="Javascript"
          value={Js}
          onChange={setJs}
        />
      </div>
      <div className="bottom-panel h-[50vh] flex ">
        <iframe
          srcDoc={srcDoc}
          frameBorder="0"
          height="100%"
          width="100%"
          title="output"
        ></iframe>
      </div>
    </>
  );
}

export default App;

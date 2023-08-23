import { useState } from "react";
import * as FlexLayout from "flexlayout-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/ext-language_tools";
import ReactMarkdown from "react-markdown";
import layout from "./layout.json";

function App() {
    const [model, setModel] = useState(FlexLayout.Model.fromJson(layout));

    const factory = (node) => {
        var component = node.getComponent();
        if (component === "editor") {
            return (
                <div className="tab_content">
                    <AceEditor
                        mode="markdown"
                        theme="cloud9_day"
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        width="100%"
                        height="100%"
                    />
                </div>
            );
        } else if (component === "preview") {
            return (
                <div className="tab_content">
                    <ReactMarkdown># Hello, *world*!</ReactMarkdown>
                </div>
            );
        }
    };

    return <FlexLayout.Layout model={model} factory={factory} />;
}

export default App;

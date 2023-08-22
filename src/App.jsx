import { useState } from "react";
import * as FlexLayout from "flexlayout-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-cloud9_day";
import "ace-builds/src-noconflict/ext-language_tools";

var json = {
    global: { tabEnableClose: false },
    borders: [
        {
            type: "border",
            location: "left",
            size: 100,
            children: [
                {
                    type: "tab",
                    name: "five",
                    component: "panel",
                },
            ],
        },
        {
            type: "border",
            location: "bottom",
            size: 100,
            children: [
                {
                    type: "tab",
                    name: "four",
                    component: "panel",
                },
            ],
        },
    ],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "tabset",
                weight: 50,
                selected: 0,
                children: [
                    {
                        type: "tab",
                        name: "One",
                        component: "panel",
                    },
                ],
            },
            {
                type: "tabset",
                weight: 50,
                selected: 0,
                children: [
                    {
                        type: "tab",
                        name: "Two",
                        component: "panel",
                    },
                    {
                        type: "tab",
                        name: "Three",
                        component: "panel",
                    },
                ],
            },
        ],
    },
};

function App() {
    const [model, setModel] = useState(FlexLayout.Model.fromJson(json));

    const factory = (node) => {
        var component = node.getComponent();
        if (component === "panel") {
            return (
                <div className="tab_content">
                    <AceEditor
                        mode="python"
                        theme="cloud9_day"
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        width="100%"
                        height="100%"
                    />
                </div>
            );
        }
    };

    return <FlexLayout.Layout model={model} factory={factory} />;
}

export default App;

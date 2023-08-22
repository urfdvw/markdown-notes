import { useState } from "react";
import * as FlexLayout from "flexlayout-react";

var json = {
    global: {},
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
                ],
            },
            {
                type: "tabset",
                weight: 50,
                selected: 0,
                children: [
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
            return <div className="tab_content">{node.getName()}</div>;
        }
    };

    return <FlexLayout.Layout model={model} factory={factory} />;
}

export default App;

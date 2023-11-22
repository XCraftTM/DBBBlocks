module.exports = {
    name: "Get Component Info",

    description: "The Component information from buttons or menus. This Block is made by @EXCORDO",

    category: "Component Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "component",
            "name": "Component",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The menu to get the information.",
            "types": ["object", "unspecified"],
            "required": true
        }
    ],

    options: [
        {
            "id": "component_info",
            "name": "Component Info",
            "description": "Description: The Component information from buttons or menus.",
            "type": "SELECT",
            "options": {
                1: "The custom event id [Text]",
                2: "The list of values from a menu [List]",
                3: "The component guild [Server]",
                4: "The component channel [Channel]",
                5: "The component clicker [User]",
                6: "The component clicker [Member]",
                7: "The component message [Message]"
            }
        }
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "result",
            "name": "Result",
            "description": "Type: Unspecified\n\nDescription: The information obtained from the component.",
            "types": ["unspecified"]
        }
    ],

    code(cache) {
        const component = this.GetInputValue("component", cache);
        const component_info = parseInt(this.GetOptionValue("component_info", cache));

        let result;
        switch(component_info) {
            case 1:
                result = component.id;
                break;
            case 2:
                result = component.values;
                break;
            case 3:
                result = component.guild;
                break;
            case 4:
                result = component.channel;
                break;
            case 5:
                result = component.clicker.user;
                break;
            case 6:
                result = component.clicker.member;
                break;
            case 7:
                result = component.message;
                break;
        }
        this.StoreOutputValue(result, "result", cache);
        this.RunNextBlock("action", cache);
    }
}
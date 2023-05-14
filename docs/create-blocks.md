# Creating Blocks

## Blocks are the Action Tools of your Bot.

They are created with NodeJS and a Basic Structure for `name`, `inputs`, `options`,`output` and the `code` Part.

## How to Submit to DBB

Its easy if you want to use them only by yourself just Place the JS file in your Bot Directry and go on. If everything is ok with the file its getting loaded instand without restarting DBB.

If you want to make your Block Public send it into the Blocks Channel on the Discord Server.

## The Line Types

If you worked with DBB already you know that there are some different Colors for lines. These are to make it easier for you to see what can be connected **is the same type of Var** and not only for the Style.

The different types are: `unspecified, undefined, null, object, boolean, number, text, list, date, action`

How to use them we'll see later.

## The Basic Structure

## 1. The default Structure:

This Structure is the Block that get showed in the DBB-Editor, there you can place Stuff like Name, Description, Category and more. Please make sure that you aren't using the same Name for two Blocks!

```javascript
  module.exports = {
    name: "",

    description: "",

    category: "",

    auto_execute: false/true,
    // This will make your Block run at Startup, for Event Blocks

    inputs: [],

    options: [],

    outputs: [],

    code(cache) {

    }
};
```

## 2. The Inputs and Outputs:

These are The Inputs and Outputs of your Block showen in DBB-Editor. _If you Update something here please restart the DBB-Editor to see it._

```javascript
    inputs/outputs: [
      {
        "id": "",
        "name": "",
        "description": "",
        "types": []
      }
    ]
    // types : unspecified, undefined, null, object, boolean, number, text, list, date, action
```

In the `id` field gets the Name of the Variable used in the code section. Please make shure that the IDs are Unique for the File.

`name` is the Name how its shown in DBB-Editor itself.

`description` is the Text that Pops up if you hover on the Connectionpoint in DBB-Editor. Helpfull to Describe the Types here.

`types` is an Array of Types that can be Connected here. If you want only one Type to be connected use `[ "yourtype" ]`. If you need more, use a comma seperated list inside the `[]` like this `[ "unspecified", "undefined", "null", "object" ]`.

The `inputs` field is an Array of Objects. That mean you can add as many Inputs you need by cloning the Object and add it again. To make it valid, **between** the Objects **needs** to be a `,`. That's for all fields from type Array or Object!!!

Example:

```javascript
      inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Number, Text, List\n\nDescription: ",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "number", "text", "list"]
        }
      ]

      ...

      outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes blocks.",
            "types": ["action"]
        }
      ]
```

## 3. The Options:

These are the Options of your Block showed in the DBB-Editor. _If you Update something here please restart the DBB-Editor to see it._

### Basic Options

```javascript
    options: [
      {
        "id": "",
        "name": "",
        "description": "",
        "type": ""
      }
    ]
```

### The Option Types

`type` supports `SELECT, TEXT, COLOR, NUMBER`

By `type` =&gt; `COLOR` it will appere the Color-Picker to select a Color.

By `type` =&gt; `TEXT` or `NUMBER` a Field to type your Value in shows on the Block in DBB.

By `type` =&gt; `SELECT` a Dropdown Menu will be shown in DBB.

If you use any other then `SELECT` you are fine with this Options Structure. If using `SELECT` you need to add the `options` field to the `options` Object. The new `options` filed is an Array of Items.

```javascript
  /** value for code => */ 1 : "Option to Select" /** <= Shown in DBB */
```

#### The `options` in `options` array Example:

```javascript
    options:[
      {
        "id": "",
        "name": "",
        "description": "",
        "type": "SELECT",
        "options": {
          1 : "Option to Select 1",
          2 : "Option to Select 2",
          3 : "etc."
        }
      }
    ]
```

## 4. The Code:

The One and the only part that do something in your Bot. _All above is just to show it in the DBB Editor right._

For this Stuff you need some knowledge in Javascript. You can do mostly anything here.

DBB always await the end of the Function to execute Block by Block. You only can controll where the Flow goes on.

```javascript
    code(cache) {
      ...
    }
```

### The `cache` Object

The `cache` Object includes the information arround the Block. Without this the `code` can't interact with the lines. _You only need it for the included functions from **this**._

Example:

```javascript
  {
    "workspace": "",
    "name": "",
    "index": "",
    "inputs": {},
    "options": {},
    "outputs": {}
  }
```

`name` is the Block Name itself. `index` is the Number of the Block (out of DBB-Editor). `workspace` is a Number what it mean.... `inputs` is the Array of your Input lines (only the ID's of the Line gets here). `outputs` is an Array of your Output Lines (only the ID's too).

### The `this` Object

The `this` Object includes all active Blocks (you **don't** need this) and some usefull Functions for you.

```javascript
  // Usefull stuff for you!!
  this.GetInputValue("id", cache);
  this.GetOptionValue("id", cache);
  this.StoreOutputValue(object, "id", cache);
  this.RunNextBlock("id", cache);
  await this.require("npmmodul");
  // Just ignore anything else ;)
```

With this functions you can get or store the Input-, Option- and Output values or run the next Block. (with the right function)

For Example here is the code Block from the Print Action.

```javascript
  code(cache) {
    const content = this.GetInputValue("value", cache);

    console.log(content);

    this.RunNextBlock("action", cache);
  }
```

`"value"` in `this.GetInputValue()` is defined in the `inputs` part of the Block. Its the same with `this.StoreOutputValue()`. It only can be use for Output Lines!

Input Object from Block:

```javascript
    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Value",
            "description": "Acceptable Types: Unspecified, Undefined, Null, Object, Boolean, Number, Text, List\n\nDescription: The value that you want to send to your console.",
            "types": ["unspecified", "undefined", "null", "object", "boolean", "number", "text", "list"]
        }
    ]
```

`"action"` in `this.RunNextBlock()` is defined in the `outputs` part of the Block.

Output Object from Block:

```javascript
    outputs: [
      {
        "id": "action",
        "name": "Action",
        "description": "Type: Action\n\nDescription: Executes blocks.",
        "types": ["action"]
      }
    ]
```

### Module loading with `this.require()`

If you want to import an Module like `fs` or `path` that **aren't** downloaded **from npm**, simply use it like anywhere else, just put it inside the `code` field:

Example:

```javascript
    async code(cache) {
      const path = await require("path");
      // and go on like you wan't...
    }
```

If you want to import an Module like `discord.js` **from npm** please use `this.require()` like this:

Example:

```javascript
    async code(cache) {
      const discord = await this.require("discord.js");
      // and go on :)
    }
```

To improve Performance you should only use default Packages and if you need another, try to use a minimal libary of this function.
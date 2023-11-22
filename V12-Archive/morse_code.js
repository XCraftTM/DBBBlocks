module.exports = {
  name: "Morse Code",

  description: "Convert text to morse code and vise versa",

  category: ".MOD",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "input",
      "name": "Input",
      "description": "The text to convert",
      "types": ["text", "unspecified"],
      "required": true
   },
  ],

  options: [
    {
      "id": "option",
      "name": "Conversion Type",
      "description": "The type of conversion",
      "type": "SELECT",
      "options": {
        1: "Morse Code",
        2: "To Text",
      }
   },
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
    "description": "Converted result",
    "types": ["text", "unspecified"]
  }
  
  ],

  async code(cache) {
    const morseCode = await this.require('morse-code-js');
    const input = this.GetInputValue("input", cache);
    const option = this.GetOptionValue("option", cache);
    function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
    function replaceAll(str, match, replacement){
      return str.replace(new RegExp(escapeRegExp(match), 'g'), ()=>replacement);
  }
    let res
    if (option == 1) {
     res = morseCode.morseSentence(input).split(".").join(" ").split("|").join(" | ");
     res = replaceAll(res, "*", ".")
    }
    else if (option == 2) {
     let idk = input.split(" | ").join("|")
     idk = replaceAll(idk, ".", "*").split(" ").join(".");
     res = morseCode.stringSentence(idk)
    }
      this.StoreOutputValue(res, "result", cache);
      this.RunNextBlock("action", cache);
  }
}
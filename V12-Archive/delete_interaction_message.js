module.exports = {
  name: "Delete Interaction Message [DONATOR ACCESS v0.1.0]",

  description: "Made by @JU & @EXCORDO fixed by @Ente der Tiefsee",

  category: "Interaction Stuff",

  inputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
      "types": ["action"]
    },
    {
      "id": "packet",
      "name": "Interaction",
      "description": "Type: Action\n\nDescription: Interaction to be deleted",
      "types": ["object", "unspecified"]
    }
  ],

  options: [],

  outputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Type: Action\n\nDescription: Soon.",
      "types": ["action"]
    },
    {
      "id": "error",
      "name": "Error",
      "description": "Type: Action\n\nDescription: Soon.",
      "types": ["text", "unspecified"]
    }
  ],

  async code(cache) {
    const axios = require('axios');
    const packet = this.GetInputValue("packet", cache);

    axios.delete(`https://discord.com/api/v8/webhooks/${packet.d.application_id}/${packet.d.token}/messages/@original`)
    .catch(error => {
      this.StoreOutputValue(error, "error", cache);
      this.RunNextBlock("action", cache);
    });
    this.RunNextBlock("action", cache)
  }
}

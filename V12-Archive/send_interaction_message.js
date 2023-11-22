module.exports = {
  name: "Send Interaction Message [DONATOR ACCESS v0.4.0]",

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
      "id": "text",
      "name": "Text",
      "description": "Type: Action\n\nDescription: The Text the Bot replies with.",
      "types": ["text", "object", "unspecified"]
    },
    {
      "id": "embed",
      "name": "Embeds",
      "description": "Type: Action\n\nDescription: The Embed(s) the Bot replies with.",
      "types": ["list", "unspecified"]
    },
    {
      "id": "component",
      "name": "Components",
      "description": "Type: Action\n\nDescription: Soon.",
      "types": ["list", "unspecified"]
    },
    {
      "id": "packet",
      "name": "Interaction",
      "description": "Type: Action\n\nDescription: The Interaction to reply to.",
      "types": ["object", "unspecified"]
    }
  ],

  options: [
    {
        "id": "ephemeral",
        "name": "Visible",
        "description": "Description: Soon.",
        "type": "SELECT",
        "options": {
            1: "Everyone",
            2: "User",
        }
    }
],

  outputs: [
    {
      "id": "action",
      "name": "Action",
      "description": "Type: Action\n\nDescription: Soon.",
      "types": ["action"]
    },
    {
        "id": "packet",
        "name": "Interaction",
        "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
        "types": ["object"]
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
    const text = this.GetInputValue("text", cache);
    const embed = this.GetInputValue("embed", cache);
    const componentlist = this.GetInputValue("component", cache);
    const packet = this.GetInputValue("packet", cache);
    const ephemeral = parseInt(this.GetOptionValue("ephemeral", cache));

    let component;

    if (typeof componentlist !== "undefined") {
      const comp = componentlist.reduce((acc, val, index) => {
        const compindex = Math.floor(index / 5)
        if(typeof acc[compindex] === "undefined") acc[[compindex]] = [];
        acc[compindex].push(val); 
        return acc
      }, [])

      component = comp.map((item) => ({type: 1, components: item}))
    } else {
      component = undefined
    }

    let result;
    switch(ephemeral) {
        case 1:
            result = undefined;
            break;
        case 2:
            result = 64;
            break;
    }

    const data = {
      content: text,
      embeds: embed,
      components: component,
      flags: result
    }

    Object.keys(data).forEach(key => {
        if([undefined, null, NaN].includes(data[key])) delete data[key];
    });

    axios.post(`https://discord.com/api/v8/interactions/${packet.d.id}/${packet.d.token}/callback`, JSON.stringify({"type": 4, data: data}),
    {headers: {Authorization: `Bot ${this.client.token}`, "Content-Type": "application/json"}})
    .catch(error => {
      this.StoreOutputValue(error, "error", cache);
      this.RunNextBlock("action", cache);
    });
    this.StoreOutputValue(packet, "packet", cache);
    this.RunNextBlock("action", cache);
  }
}

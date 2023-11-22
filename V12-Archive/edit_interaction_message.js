module.exports = {
  name: "Edit Interaction Message [DONATOR ACCESS v0.1.0]",

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
      "description": "Type: Action\n\nDescription: Text the Interaction Message is changed to.",
      "types": ["text", "unspecified"]
    },
    {
      "id": "embed",
      "name": "Embeds",
      "description": "Type: Action\n\nDescription: Embed the Interaction message is changed to.",
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
      "description": "Type: Action\n\nDescription: The Interaction.",
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
    const embed = this.GetInputValue("embed", cache);
    const text = this.GetInputValue("text", cache);
    const packet = this.GetInputValue("packet", cache);
    const componentlist = this.GetInputValue("component", cache);
    
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

    const data = {
      content: text,
      embeds: embed,
      components: component
    }

    Object.keys(data).forEach(key => {
        if([undefined, null, NaN].includes(data[key])) delete data[key];
    });

    axios.patch(`https://discord.com/api/v8/webhooks/${packet.d.application_id}/${packet.d.token}/messages/@original`, JSON.stringify(data),
    {headers: {Authorization: `Bot ${this.client.token}`, "Content-Type": "application/json"}})
    .catch(error => {
      this.StoreOutputValue(error, "error", cache);
      this.RunNextBlock("action", cache);
    });
    this.StoreOutputValue(packet, "packet", cache);
    this.RunNextBlock("action", cache)
  }
}

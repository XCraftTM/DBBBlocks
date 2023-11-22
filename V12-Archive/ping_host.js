module.exports = {
    name: "Ping Host",

    description: "ping the target host. if host reachable is true.",

    category: "Internet Stuff",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "host",
            "name": "Host",
            "description": "Insert the IP Adress from Target Host",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "port",
            "name": "Port",
            "description": "insert the Port from Target Host",
            "types": ["number", "unspecified"],
            "required": false
        },
    ],

    options: [],

    outputs: [
        {
            "id": "action1",
            "name": "Action (If True)",
            "description": "",
            "types": ["action"]
        },
        {
            "id": "action2",
            "name": "Action (If False)",
            "description": "",
            "types": ["action"]
        },

    ],

    async code(cache) {
        const host = this.GetInputValue("host", cache);
        const port = this.GetInputValue("port", cache);
        

        
        var net = require('net');
        var hosts = [[host, port]];


        hosts.forEach((item) => {
                var sock = new net.Socket();
                sock.on('connect', (a) => {
                    this.RunNextBlock("action1", cache);
                }).on('error', (e) => {
                    this.RunNextBlock("action2", cache);
                }).on('timeout', (e) => {
                    this.RunNextBlock("action2", cache);
                }).connect(item[1], item[0]);
            });
        

    }
    }


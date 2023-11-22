module.exports = {
    name: "MOD_Send SSH Command",

    description: "Send a SSH Command to Linux Server",

    category: ".MOD",

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
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of the specific workspace. Starts at \"1\". Only use this input if you selected the option \"Specific Workspace\" in \"Variable Restriction Type\". (OPTIONAL)",
            "types": ["text"]
        },
        {
            "id": "port",
            "name": "Port",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of the specific workspace. Starts at \"1\". Only use this input if you selected the option \"Specific Workspace\" in \"Variable Restriction Type\". (OPTIONAL)",
            "types": ["number"]
        },
        {
            "id": "username",
            "name": "Username",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of the specific workspace. Starts at \"1\". Only use this input if you selected the option \"Specific Workspace\" in \"Variable Restriction Type\". (OPTIONAL)",
            "types": ["text"]
        },
        {
            "id": "password",
            "name": "Password",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of the specific workspace. Starts at \"1\". Only use this input if you selected the option \"Specific Workspace\" in \"Variable Restriction Type\". (OPTIONAL)",
            "types": ["text"]
        },
        {
            "id": "textcommand",
            "name": "Command",
            "description": "Acceptable Types: Number, Unspecified\n\nDescription: The number of the specific workspace. Starts at \"1\". Only use this input if you selected the option \"Specific Workspace\" in \"Variable Restriction Type\". (OPTIONAL)",
            "types": ["text"]
        }
    ],

    options: [],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        }
   
    ],

   async code(cache) {
        const { Client } = await this.require('ssh2');
        const host = this.GetInputValue("host", cache)
        const port = this.GetInputValue("port", cache)
        const username = this.GetInputValue("username", cache)
        const password = this.GetInputValue("password", cache)
        const textcommand = this.GetInputValue("textcommand", cache)


        const conn = new Client();
        conn.on('ready', () => {
            console.log('Client :: ready');
            conn.exec(textcommand, (err, stream) => {
                if (err) throw err;
                stream.on('close', (code, signal) => {
                    console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                    conn.end();
                }).on('data', (data) => {
                    console.log('STDOUT: ' + data);
                }).stderr.on('data', (data) => {
                    console.log('STDERR: ' + data);
                });
            });
        }).connect({
            host: (host),
            port: (port),
            username: (username),
            password: (password)
        });

        this.RunNextBlock("action", cache);
    }
}
module.exports = {
    name: "HTTP [Request]",

    description: "who cares",

    version: "1",

    category: "HTTP",

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
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": false
        },
        {
            "id": "url",
            "name": "URL",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": false
        },
        {
            "id": "path",
            "name": "Path",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": false
        },
        {
            "id": "port",
            "name": "Port",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": false
        },
        {
            "id": "data",
            "name": "Data",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": false
        },
        {
            "id": "headers",
            "name": "Custom Headers",
            "description": "who cares",
            "types": ["object", "unspecified"],
            "required": false
        }
    ],

    options: [{
        "id": "method",
        "name": "method",
        "description": "who cares",
        "type": "SELECT",
        "options": {
            "GET": "GET",
            "POST": "POST",
            "HEAD": "HEAD",
            "DELETE": "DELETE",
            "OPTIONS": "OPTIONS",
            "TRACE": "TRACE",
            "PUT": "PUT",
        }
    },],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "res",
            "name": "res",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": false
        }
    ],

    code(cache) {
        const http = require('http');
        const this_s = this

        const options = {
            host: this.GetInputValue("host", cache),
            path: this.GetInputValue("path", cache),
            port: this.GetInputValue("port", cache),
            method: this.GetOptionValue("method", cache),
            headers: this.GetInputValue('headers', cache),
        };

        callback = function (response) {
            var str = ''
            response.on('data', function (chunk) {
                str += chunk;
            });

            response.on('end', function () {
                this_s.StoreOutputValue(str, "res", cache);
                this_s.RunNextBlock("action", cache);
            });
        }

        var req = http.request(options, callback);
        //This is the data we are posting, it needs to be a string or a buffer
        if (this_s.GetInputValue("data", cache)) {
            req.write(this_s.GetInputValue("data", cache));
        }
        req.end();

    }
}
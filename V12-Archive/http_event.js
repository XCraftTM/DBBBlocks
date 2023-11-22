module.exports = {
    name: "HTTP [Event]",

    description: "who cares",

    category: "HTTP",

    auto_execute: true,

    inputs: [
    ],

    options: [
        {
            "id": "port",
            "name": "Port",
            "description": "who cares",
            "type": "NUMBER",
            "required": true
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
            "id": "res",
            "name": "res",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["object"]
        },
        {
            "id": "req",
            "name": "req",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["object"]
        },
        {
            "id": "header",
            "name": "headers",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["object"]
        },
        {
            "id": "query",
            "name": "Query",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["text"]
        },
        {
            "id": "cookies",
            "name": "cookies",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["object"]
        },
        {
            "id": "method",
            "name": "method",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["text"]
        },
        {
            "id": "data",
            "name": "data",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["object"]
        },
        {
            "id": "raw-data",
            "name": "raw data",
            "description": "Type: Unspecified\n\nDescription: who cares",
            "types": ["text"]
        }
    ],

    code(cache) {
        const http = require("http");
        const host = "localhost";
        const port = this.GetOptionValue("port", cache);
        const this_s = this

        function parseCookies(request) {
            var list = {},
                rc = request.headers.cookie;

            rc && rc.split('; ').forEach(function (cookie) {
                var parts = cookie.split('=');
                list[parts.shift().trim()] = decodeURI(parts.join('='));
            });
            return list;
        }
        
        function parseData(data) {
            var list = {}
            data && data.split('&').forEach(function (cookie) {
                var parts = cookie.split('=');
                list[parts.shift().trim()] = decodeURI(parts.join('='));
            });
            return list;
        }

        function requestListener(req, res) {
            this_s.StoreOutputValue(res, "res", cache);
            this_s.StoreOutputValue(req, "req", cache);
            this_s.StoreOutputValue(req.url, "query", cache);
            this_s.StoreOutputValue(req.method, "method", cache);
            this_s.StoreOutputValue(req.headers, "header", cache);
            var body = "";
            req.on("data", function (chunk) {
                body += chunk;
                this_s.StoreOutputValue(parseData(body), "data", cache);
                this_s.StoreOutputValue(body, "raw-data", cache);
            });
            if (req.headers.cookie !== undefined) {
                this_s.StoreOutputValue(parseCookies(req), "cookies", cache);
            }
            this_s.RunNextBlock("action", cache);
        };

        const server = http.createServer(requestListener);
        server.listen(port);
    }
}
module.exports = {
    name: "HTTP OAuth [Event]",

    description: "who cares",

    category: "HTTP",

    auto_execute: true,

    inputs: [
        {
            "id": "clientId",
            "name": "Client ID",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        },
        {
            "id": "clientSecret",
            "name": "Client Secret",
            "description": "who cares",
            "types": ["text", "unspecified"],
            "required": true
        }
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
            "description": "who cares",
            "types": ["object"]
        }, {
            "id": "req",
            "name": "req",
            "description": "who cares",
            "types": ["object"]
        },
        {
            "id": "header",
            "name": "headers",
            "description": "who cares",
            "types": ["object"]
        },
        {
            "id": "query",
            "name": "Query",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "cookies",
            "name": "cookies",
            "description": "who cares",
            "types": ["object"]
        },
        {
            "id": "method",
            "name": "method",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "data",
            "name": "data",
            "description": "who cares",
            "types": ["object"]
        },
        {
            "id": "raw-data",
            "name": "raw data",
            "description": "who cares",
            "types": ["text"]
        },
        {
            "id": "object",
            "name": "object",
            "description": "properties: res, req, header, method, query, queryObject, cookies, code",
            "types": ["object"]
        },
        {
            "id": "code",
            "name": "code",
            "description": "who cares",
            "types": ["text"]
        }
    ],

    code(cache) {
        const clientId = this.GetInputValue("clientId", cache);
        const clientSecret = this.GetInputValue("clientSecret", cache);

        const DiscordOauth2 = require('discord-oauth2'); // require OAuth2
        const oauth = new DiscordOauth2({
            clientId: clientId,
            clientSecret: clientSecret
        });

        const http = require("http");// require HTTP module
        const url = require('url'); // require url module
        const port = this.GetOptionValue("port", cache); // get port
        const this_s = this // save this

        function parseCookies(request) { // parse Cookies
            var list = {},
                rc = request.headers.cookie;

            rc && rc.split('; ').forEach(function (cookie) {
                var parts = cookie.split('=');
                list[parts.shift().trim()] = decodeURI(parts.join('='));
            });
            return list;
        }

        function parseData(data) { // parse data
            var list = {}
            data && data.split('&').forEach(function (cookie) {
                var parts = cookie.split('=');
                list[parts.shift().trim()] = decodeURI(parts.join('='));
            });
            return list;
        }
        
        async function requestListener(req, res) {
            this_s.StoreOutputValue(res, "res", cache); // store res
            this_s.StoreOutputValue(req, "req", cache); // store req
            this_s.StoreOutputValue(req.url, "query", cache); // store query
            const queryObject = url.parse(req.url, true).query; // parse url
            this_s.StoreOutputValue(req.headers, "header", cache); // store header
            this_s.StoreOutputValue(req.method, "method", cache); // store method
            
            const object = {};
            object["res"] = res; // obj_out
            object["req"] = req; // obj_out
            object["header"] = req.headers; // obj_out
            object["method"] = req.method; // obj_out
            object["query"] = req.url; // obj_out
            object["queryObject"] = queryObject; // obj_out

            var body = "";
            req.on("data", function (chunk) {
                body += chunk;
                this_s.StoreOutputValue(parseData(body), "data", cache); // store data
                this_s.StoreOutputValue(body, "raw-data", cache); // store raw data

                object["data"] = parseData(body); // obj_out
                object["rawData"] = body; // obj_out
            });
            if (req.headers.cookie !== undefined) { // if cookies exists
                const cookies = parseCookies(req);
                this_s.StoreOutputValue(cookies, "cookies", cache); // store cookies

                object["cookies"] = cookies; // obj_out

                if (queryObject.state && queryObject.code && cookies['oauth-state']) { // if req query and req state and user state cookie

                    if (queryObject.state == cookies['oauth-state']) {
                        this_s.StoreOutputValue(queryObject.code, "code", cache);
                        object["code"] = queryObject.code; // obj_out
                    }
                }
            }
            this_s.setVariable("HTTP", object, {"type":"global", "restriction":"current", "index": ""}, cache);
            this_s.StoreOutputValue(object, "object", cache)
            this_s.RunNextBlock("action", cache);
        };
        const server = http.createServer(requestListener);
        server.listen(port);
    }
}
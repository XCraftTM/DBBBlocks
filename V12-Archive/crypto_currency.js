module.exports = {
    name: "Cryptos Bal",

    description: "Tells how worth is a crypto currency",

    category: ".Panso",

    inputs: [{
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
        },
        {
            "id": "id",
            "name": "Crypto ID",
            "description": "Description: The ID of the cryptocurrency",
            "types": ["text", "unspecified"],
        },
        {
            "id": "currency",
            "name": "Currency",
            "description": "Description: The amount of currnecy to add",
            "types": ["text", "unspecified"],
        },
    ],

    options: [{
            "id": "cryptos",
            "name": "Cryptos",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "type": "SELECT",
            "options": {
                "none": "Custom",
                "bitcoin": "Bitcoin (BTC)",
                "ethereum": "Ethereum (ETH)",
                "dogecoin": "Dogecoin (DOGE)",
            }
        },
        {
            "id": "currency",
            "name": "Currency",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "type": "SELECT",
            "options": {
                "none": "Custom",
                "usd": "Dollars (USD)",
                "mxn": "Pesos (MXN)",
            }
        },
    ],

    outputs: [{
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "value",
            "name": "Price",
            "description": "Type: Action\n\nDescription: The cost of the currency.",
            "types": ["number", "unspecified"]
        },
    ],

    async code(cache) {
        const fetch = await this.require("node-fetch");

        var c = this.GetOptionValue("currency", cache)
        var i = this.GetOptionValue("cryptos", cache)

        var currency
        if (c == "none") {
            currency = this.GetInputValue("currency", cache)
        } else {
            currency = c
        }

        var id
        if (i == "none") {
            id = this.GetInputValue("id", cache)
        } else {
            id = i
        }

        var url = 'https://api.coingecko.com/api/v3/simple/price?ids=' + id + "&vs_currencies=" + currency
        var content = await fetch(url).then(res => res.text())
        var res = res = JSON.parse(content)

        if (!res[id]) { console.log("ERROR: CRYPTO ID OR CURRENCY ARE WRONG") } else {
            this.StoreOutputValue(res[id][currency], "value", cache)
            this.RunNextBlock("action", cache);
        }

    }
}
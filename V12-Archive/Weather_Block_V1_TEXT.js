module.exports = {
  
    name: "Weather Block V1 TEXT",

    description: "gives you the weather based on what city you live in! by Aiden aka ytAidenstime",

    category: "ytAidenstime",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "countrys",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
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
        },
        {
            "id": "countryProvided",
            "name": "Country",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "region",
            "name": "Region",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "timezome",
            "name": "TimeZone",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "condition",
            "name": "Condition",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "windspeeds",
            "name": "WindSpeeds",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "clouds",
            "name": "Clouds",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "tempc",
            "name": "TempC",
            "description": "Who Cares",
            "types": ["unspecified"]
        },
        {
            "id": "tempf",
            "name": "TempF",
            "description": "Who Cares",
            "types": ["unspecified"]
        }
    ],

    async code(cache) {
        const fetch = await this.require("node-fetch");
        const locationInput = this.GetInputValue("countrys", cache)
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1c324a4789af4036b7a00204222112&q=${locationInput}&aqi=no`, {
	method: 'get',
    });
    const data = await response.json();
    this.StoreOutputValue(data.location.name, "countryProvided", cache)
    this.StoreOutputValue(data.location.region, "region", cache)
    this.StoreOutputValue(data.location.tz_id, "timezome", cache)
    this.StoreOutputValue(data.current.condition.text, "condition", cache)
    this.StoreOutputValue(data.current.wind_mph, "windspeeds", cache)
    this.StoreOutputValue(data.current.cloud, "clouds", cache)
    this.StoreOutputValue(data.current.temp_c, "tempc", cache)
    this.StoreOutputValue(data.current.temp_f, "tempf", cache)
    this.RunNextBlock("action", cache)
      }
}

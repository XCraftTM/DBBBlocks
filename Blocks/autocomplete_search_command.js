module.exports = {
    name: "Autocomplete Song Search",

    description: "Applies the autocomplete song search to a slash command.",

    category: ".Audio V2",

    auto_execute: true,

    inputs: [],

    options: [
        {
            id: "id",
            name: "Name / Id",
            description: "Description: The Id of the Command to filter for.",
            type: "text"
        },
        {
            id: "option",
            name: "Query Option ID",
            description: "Description: The ID of the Query Option",
            type: "text"
        }
    ],

    outputs: [],

    async code(cache) {
        const id = this.GetOptionValue("id", cache);
        const option = this.GetOptionValue("option", cache);
        const { useMainPlayer } = require("discord-player");

        this.client.on("interactionCreate", async (interaction) => {
            if (interaction.commandName == id) {
                if (interaction.isAutocomplete()) {
                    const player = useMainPlayer();
                    const query = interaction.options.getString(option) || " ";
                    const results = await player.search(query);

                    interaction.respond(
                        results.tracks.slice(0, 10).map((t) => ({
                            name: (t.author.split(",")[0] + " - " + t.title).substring(0, 99),
                            value: t.url
                        }))
                    );
                }
            }
        });
    }
}
module.exports = {
    name: "Create Button Row",

    description: "Sends a message with a button.",

    category: "Buttons",

    inputs: [
        {
            id: "action",
            name: "Action",
            description: "Acceptable Types: Action\n\nDescription: Executes this block.",
            types: ["action"]
        },
        {
            id: "button1",
            name: "Button 1",
            description: "Description: To add Buttons to the Message.",
            types: ["object", "unspecified"],
            required: true
        },
        {
            id: "button2",
            name: "Button 2",
            description: "Description: To add 2 Buttons to the Message. (OPTIONAL)",
            types: ["object", "unspecified"]
        },
        {
            id: "button3",
            name: "Button 3",
            description: "Description: To add 3 Buttons to the Message. (OPTIONAL)",
            types: ["object", "unspecified"]
        },
        {
            id: "button4",
            name: "Button 4",
            description: "Description: To add 4 Buttons to the Message. (OPTIONAL)",
            types: ["object", "unspecified"]
        },
        {
            id: "button5",
            name: "Button 5",
            description: "Description: To add 5 Buttons to the Message. (OPTIONAL)",
            types: ["object", "unspecified"]
        }
    ],

    options: [],

    outputs: [
        {
            id: "action",
            name: "Action",
            description: "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            types: ["action"]
        },
        {
            id: "row",
            name: "Button Row",
            description: "Description: The Button Row Output.",
            types: ["object"]
        }
    ],

    code(cache) {

        const { ActionRowBuilder } = require('discord.js');   

		const button1 = this.GetInputValue("button1", cache);
        const button2 = this.GetInputValue("button2", cache);
        const button3 = this.GetInputValue("button3", cache);
        const button4 = this.GetInputValue("button4", cache);
        const button5 = this.GetInputValue("button5", cache);
        var but;
        

        // function end(buttons){
        //     button = buttons
        //     button_row
        //     // channel.send({ content: 'Testing', components: button })
        //     run_block
        //}

        if(button2 == null){
            one()
        }else if(button3 == null){
            two()
        }else if(button4 == null){
            three()
        }else if(button5 == null){
            four()
        }else{
            five()
        }

        
        this.StoreOutputValue(but, "row", cache);
        this.RunNextBlock("action", cache);
        

        function one(){
            const buttons = [
                new ActionRowBuilder()
                    .addComponents(button1),
            ]          
        but = buttons
        return;
        }

        

        function two(){
            const buttons = [
                new ActionRowBuilder()
                    .addComponents(button1)
                    .addComponents(button2),    
            ]
            but = buttons
            return;
        }

        function three(){
            const buttons = [
                new ActionRowBuilder()
                    .addComponents(button1)
                    .addComponents(button2)
                    .addComponents(button3),
            ]
            but = buttons
        return;
        }

        function four(){
            const buttons = [
                new ActionRowBuilder()
                    .addComponents(button1)
                    .addComponents(button2)
                    .addComponents(button3)
                    .addComponents(button4),
            ]
            but = buttons
            return;
        }

        function five(){
            const buttons = [
                new ActionRowBuilder()
                    .addComponents(button1)
                    .addComponents(button2)
                    .addComponents(button3)
                    .addComponents(button4)
                    .addComponents(button5),
            ]
            but = buttons
            return;
        }    
    }
}
module.exports = {
    name: "Block that blocks profanity block",

    description: "Profanity Block",

    category: ".MOD",

    auto_execute: true,

    inputs: [],

    options: [
        {
            "id": "a",
            "name": "How cool is suiji?",
            "description": "Description: Its just a question man. Answer it. Now.",
            "type": "SELECT",
            "options": {
                1: "Very Cool!",
                2: "Very Very Cool!!",
            }
        }],

    outputs: [],

    code(cache) {



        let profanity = ["c0ck", "cock", "b1tch", "bitch", "fuck", "cunt", "shit", "nigger", "ass", "cum", "dick", "nigga","n1gga","n1gger", "niger", "niga", "fuck", "fuc", "fuk", "sht", "vagina", "pussy", "pusy", "pussi", "pusi", "gay", "porn", "fag", "faggot", "douche", "nipple", "boobs", "blowjob"];




        let reason = "Profanity not allowed";
        console.log()
                console.log(`Current list of profanity:`)
                console.log(profanity)
        console.log("You can add/remove by edditing the block code. Do CTRL + F and search for let profanity.")
        console.log()
        let result;
        let words;

        this.events.on("message", msg => {
            words = msg.content.trim().split(" ");
            
                for (let i = 0; i < words.length; i++){
                    for (let j = 0; j < profanity.length; j++){
                        if(words[i] === profanity[j]){
                            result = true;
                            if(result == true) { msg.delete({reason}); break; }
                        }else{ result = false; }
                    }
                }
        });
    }
}
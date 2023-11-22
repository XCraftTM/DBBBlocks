
module.exports ={

    name: "Send Message to all role Member",

    description: "Sende a message to all Role member",

    category: ".MOD",

    inputs:[
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes this block.",
            "types": ["action"]
        },
        {
            "id": "text",
            "name": "Text",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: The text to put in the message. (OPTIONAL)",
            "types": ["text", "unspecified"]
        },
        {
            "id": "embed",
            "name": "Embed",
            "description": "Acceptable Types: Object, Unspecified\n\nDescription: The embed to put in the message. (OPTIONAL)",
            "types": ["object", "unspecified"]
        },
        {
            "id": "online",
            "name": "only online (default: true)",
            "description": "Acceptable Types: Text, Unspecified\n\nDescription: Send message only to online user/member",
            "types": ["boolean"]
        },
    ],
    options:[
        
        {
            "id": "find_role_by",
            "name": "Find Role By",
            "description": "Description: The type of search for the role.",
            "types": ["text", "number"],
            
        }
    ],
    outputs:[
        {
            "id": "action",
            "name": "Action",
            "description": "Acceptable Types: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },       
        {
            "id": "message",
            "name": "Message",
            "description": "Type: Object, List\n\nDescription: The message obtained. If \"Split Message\" is enabled, this will return a list containing all message objects instead of a single one.",
            "types": ["object", "list"]
        }
    ],

    code(cache){
        const search_value_role = this.GetOptionValue("find_role_by",cache) + ""; 
        const text = this.GetInputValue("text", cache);
        const embed = this.GetInputValue("embed", cache);
        const online = Boolean(this.GetInputValue("online", cache));

        const text_split = search_value_role.split(this.ConvertRegex("/\\n/"));
        let server = this.client.guilds;
        let roles = [].concat(...server.cache.map(a => a.roles.cache.array()));
        console.log(search_value_role);
        try {
            if (server ) {
                text_split.forEach(elements => {
                    if (!isNaN(elements)) {
                       let  result_role = roles.find(c => c.id == elements);
                        if (result_role) {
                           let result = result_role.members.array();
                            if (result) {
                                loopMembers(result);
                            } else {
                                throw new Error("The member object does not exist (ID)");
                            }
                        } else {
                            throw new Error("The role object does not exist (ID)")
                        }
                    } else {
                       let result_role = roles.find(c => c.name == elements);
                        if (result_role) {
                           let result = result_role.members.array();
                            if (result) {
                                loopMembers(result);
                            } else {
                                throw new Error("The member object does not exist (TEXT)");
                            }
                        } else {
                            throw new Error("The role object does not exist (TEXT)")
                        }
                    }
                });
            }else{
                throw new Error("Server object or Roles does not exist");
            }
        } catch (error) {
            console.log(error);
        }

        async function loopMembers(user) {
            try {
                for (const [index, value] of Object.entries(user)) {
                    if (!online) {
                        //console.log(value.presence.status);
                        if (value.presence.status === "online" || value.presence.status === "idle") {
                            channel = await value.createDM();
                            channel.send(text, {
                                embed,
                            }).then(msg => {
                                finish(msg);
                            });
                        } else {
                            throw new Error('There are no online users available')
                        }
                    } else {
                        let channel = await value.createDM();
                        channel.send(text, {
                            embed,
                        }).then(msg => {
                            finish(msg);
                        });
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }

        const finish =(message) =>{
            this.StoreOutputValue(message, "message", cache);  
            this.RunNextBlock("action", cache);
        };
    }
    
}
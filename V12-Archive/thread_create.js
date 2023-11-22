module.exports = {
    name: "Create Thread v2.1",

    description: "creates an empty Thread without a message (ones for creating threads with messages will come too just later)",

    category: "ytAidenstime",

    inputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Description: Executes this block.",
            "types": ["action"],
            "required": true
        },
        {
            "id": "channel",
            "name": "Channel",
            "description": "The channel to add the thread in",
            "types": ["object", "text", "unspecified"],
            "required": true
        },
    ],

    options: [
        {
            "id": "thread_name",
            "name": "Thread Name",
            "description": "Description: The name of thread to create.",
            "type": "TEXT"
        },
        {
            "id": "invite",
            "name": "Can Users Invite Other Members?",
            "description": "Description: Control whether non-moderators can add other non-moderators to the thread.",
            "type": "SELECT",
            "options": {
                "false": "No",
                "true": "Yes",
            }
        },
        {
            "id": "archive_time",
            "name": "Archive Time",
            "description": "Description: The time before the thread is automatically archived",
            "type": "SELECT",
            "options": {
                1440: "1 Day",
                4320: "3 Days",
                10080: "1 Week"
            }
        },
    ],

    outputs: [
        {
            "id": "action",
            "name": "Action",
            "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
            "types": ["action"]
        },
        {
            "id": "thread_out",
            "name": "Thread",
            "description": "The thread that was created.",
            "types": ["object", "unspecified"]
        }
    ],

    code(cache) {
        
        const bot = global.bot; 
        var archive_time = this.GetOptionValue("archive_time", cache);
        // var archive_time = parseInt(archive_time);
        const invite = this.GetOptionValue("invite", cache);
        const thread_name = this.GetOptionValue("thread_name", cache) + "";
        const message = this.GetInputValue("message", cache);
        var channel = this.GetInputValue("channel", cache);
        var channel = channel.id;


            if (invite === "true") { 

                const data = {    
                    autoArchiveDuration: archive_time,
                    name: thread_name,
                    invitable: true,
                }

                return new Promise((resolve, reject) => {
                    bot.createThreadWithoutMessage(channel, data).then(PrivateThreadChannel => {
                        resolve(PrivateThreadChannel)
                        this.StoreOutputValue(PrivateThreadChannel, "thread_out", cache);
                        this.RunNextBlock('action', cache)
                    }).catch(error => {
                        reject(error);
                    })
                })
            }

            else {

                const data = {    
                    autoArchiveDuration: archive_time,
                    name: thread_name,
                    invitable: false,
                }

                return new Promise((resolve, reject) => {
                    bot.createThreadWithoutMessage(channel, data).then(PrivateThreadChannel => {
                        resolve(PrivateThreadChannel)
                        this.StoreOutputValue(PrivateThreadChannel, "thread_out", cache);
                        this.RunNextBlock('action', cache)
                    }).catch(error => {
                        reject(error);
                    })
                })
        }
    }
}
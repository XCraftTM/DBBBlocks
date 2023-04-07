# Slash Commands
This Section will explain how to Create, Setup and Use Slash Commands.

!!! warning "Requirements"
    [Autocode Slash Commands Builder](https://autocode.com/tools/discord/command-builder/)  
    [Register Slash Commands Block](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/register_slash_commands.js)  
    [Interaction Event](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/interaction_event.js)  
    [Get Interaction Argument by Name](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/get_modal_argument_by_name.js)  
    [Reply to Interaction](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/reply_interaction.js)  

## Create Commands

First go to the [Autocode Slash Commands Builder](https://autocode.com/tools/discord/command-builder/) Website and Create a command of your Choice, in this example it will be a say command:  
![Image](https://i.imgur.com/KSvMsRp.png)  
The Website display you a Preview of the Command on the right!


After you built your Command, you click "View Code" and Copy only the Part from the first { to the last }.  
![Image](https://i.imgur.com/2kUuGOc.png)

Import that Command into your Workspace using [Register Slash Commands Block](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/register_slash_commands.js).
To receive when the Command was used, you can use the [Interaction Event](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/interaction_event.js) Block, which will be triggered once the command was run.  
(In the Block you select Slash Command and set the Name to the name of the Command)

Next you add the [Get Interaction Argument by Name](https://github.com/XCraftTM/DBBBlocks/blob/main/Interaction%20Blocks/get_modal_argument_by_name.js) Block to get the `msg` argument from the command. After that you add the Reply to Interaction Block to send a message back to the user.  
(In this example the Message that the user sent)
![Image](https://i.imgur.com/qZhcVA1.png)

After you start your Bot the Command(s) should be available in Discord!

!!! warning
    - You can Only use **One Block Per Project**
    - You can add multiple Commands by using `,` to split the commands
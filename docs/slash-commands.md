# Slash Commands
This Section will explain how to Create, Setup and Use Slash Commands.

!!! warning "Requirements"
    [Autocode Slash Commands Builder](https://autocode.com/tools/discord/command-builder/){:target="_blank"}  
    [Register Slash Commands Block](https://blocks.dbb.software/Blocks/register_slash_commands.js){:target="_blank"}  
    [Interaction Event](https://blocks.dbb.software/Blocks/interaction_event.js){:target="_blank"}  
    [Get Interaction Argument by Name](https://blocks.dbb.software/Blocks/get_interaction_argument_by_name.js){:target="_blank"}  
    [Reply to Interaction](https://blocks.dbb.software/Blocks/reply_interaction.js){:target="_blank"}  

## Create Commands

First go to the [Autocode Slash Commands Builder](https://autocode.com/tools/discord/command-builder/){:target="_blank"} Website and Create a command of your Choice, in this example it will be a say command:  
![Image](https://i.imgur.com/KSvMsRp.png)  
The Website display you a Preview of the Command on the right!

## Add Command to DBB

!!! danger "READ THIS!"
    - You can Only use **One** `Register Slash Commands` Block Per **_Project_**
    - You can add multiple Commands by using `,` to split the commands

After you built your Command, you click "View Code"  
and Copy only the Part from the first `{` to the last `}`.  
![Image](https://i.imgur.com/2kUuGOc.png)

Import that Command into your Workspace using [Register Slash Commands Block](https://blocks.dbb.software/Blocks/register_slash_commands.js){:target="_blank"}.
To receive when the Command was used, you can use the [Interaction Event](https://blocks.dbb.software/Blocks/interaction_event.js){:target="_blank"} Block, which will be triggered once the command was run.  
(In the Block you select Slash Command and set the Name to the name of the Command)

## Manage Command Interactions

Next you add the [Get Interaction Argument by Name](https://blocks.dbb.software/Blocks/get_interaction_argument_by_name.js){:target="_blank"} Block to get the `msg` argument from the command. After that you add the Reply to Interaction Block to send a message back to the user.  
(In this example the Message that the user sent)
![Image](https://i.imgur.com/qZhcVA1.png)

## Testing the Finished Product

After you start your Bot the Command(s) should be available in Discord!
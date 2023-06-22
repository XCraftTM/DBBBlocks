# Slash Commands
This Section will explain how to Create, Setup and Use Slash Commands.

!!! warning "Requirements"
    [Autocode Slash Commands Builder](https://autocode.com/tools/discord/command-builder/){:target="_blank"}  
    [Register Slash Commands Block](https://blocks.dbb.software/Blocks/register_slash_commands.js){:target="_blank"}  
    [Interaction Event](https://blocks.dbb.software/Blocks/interaction_event.js){:target="_blank"}  
    [Get Interaction Argument by Name](https://blocks.dbb.software/Blocks/get_interaction_argument_by_name.js){:target="_blank"}  
    [Reply to Interaction](https://blocks.dbb.software/Blocks/reply_interaction.js){:target="_blank"}  

## Create Commands

First go to the [Autocode Slash Commands Builder](https://autocode.com/tools/discord/command-builder/){:target="_blank"} Website and Create a command of your Choice.  
In this example we will create a Kick and Timeout Command:
![Image](https://i.imgur.com/6mKB9Rj.png)  
![Image](https://i.imgur.com/CIxv8c0.png)  
The Website display you a Preview of the Command on the right!

## Copy Command Code

After you built your Command, you click `View Code`  
and Copy only the Part from the first `{` to the last `}`.  
![CMD1](https://i.imgur.com/zYv9DvX.png)  
![CMD2](https://i.imgur.com/pv3d0gU.png)  

Import that Command into your Workspace using [Register Slash Commands Block](https://blocks.dbb.software/Blocks/register_slash_commands.js){:target="_blank"}.

## Add Command to DBB

!!! danger "READ THIS!"
    - You can Only use **One** `Register Slash Commands` Block Per **_Project_**
    - You can add multiple Commands by using `,` to split the commands

![Image](https://i.imgur.com/6PndwXh.png)

## Handle The Command Interaction

### Kick Command

First we Build the Kick Command Handler. For that we use the [Interaction Event](https://blocks.dbb.software/Blocks/interaction_event.js){:target="_blank"} Block. Next we use the [Get Interaction Argument by Name](https://blocks.dbb.software/Blocks/get_interaction_argument_by_name.js){:target="_blank"} to get the Member and Reason. Next we use the `Kick Member` Block and connect everything. Optionally you can use the `Merge Texts [Advanced]` Block to add the Mention of the Mmeber to a Message, you can reply to the Interaction using `Reply to Interaction`.
![Command1Handler](https://i.imgur.com/vgMhvHt.png)

### Timeout Command

Next we will build the Timeout Command Handler. For that we again use the [Interaction Event](https://blocks.dbb.software/Blocks/interaction_event.js){:target="_blank"} Block. Next again use the [Get Interaction Argument by Name](https://blocks.dbb.software/Blocks/get_interaction_argument_by_name.js){:target="_blank"} Block to get the Member and the Time Number in Minutes. After that we use the `Timeout Member` Block and add the Rest of the Optional Stuff if needed.
![Command2Handler](https://i.imgur.com/zOX5Avm.png)

## Testing the Finished Product

After you start your Bot the Command(s) should be available in Discord!
![StartImage](https://i.imgur.com/9SnSXOc.png)
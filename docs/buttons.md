# Buttons
This Section will cover how to create a button, multiple buttons and also detect and handle button inputs.

!!! warning "Important"
    - Each Button needs a Custom ID to detect when it was Pressed
    - You can get a Emoji on Windows using ++windows+period++

## Create One Button
This Construction will trigger when the `!buttons` Command was run, that will create and send the button with the [Send Message(Components)](https://blocks.dbb.software/Blocks/send_message_component.js){:target="_blank"} Block.  
![Image](https://i.imgur.com/9cTHNB8.png)

## Create Multiple Buttons
We are going to use the same command like the first one and just add more [Create Button](https://blocks.dbb.software/Blocks/create_button.js){:target="_blank"} Blocks. In Combination with [Create Button Row](https://blocks.dbb.software/Blocks/create_button_row.js){:target="_blank"}  
![https://i.imgur.com/bOXExvC.png](https://i.imgur.com/bOXExvC.png)

## Detect and handle a Button Press

You can use the [Interaction Event](https://blocks.dbb.software/Blocks/interaction_event.js){:target="_blank"} to detect a Button Press using the Custom ID. Also to get the Current Time and Date you use the `Create Date` Block and using the `Format Date` Block you can get the Date in a Text Type. To now send a message back to the User that used the Button, you can use the [Reply to Interaction](https://blocks.dbb.software/Blocks/reply_interaction.js){:target="_blank"} Block.  
(Ephemeral means only visible to the user)  
![https://i.imgur.com/9imoEyd.png](https://i.imgur.com/9imoEyd.png)  

## Testing Everything
When you launch the bot you can now use the example command that was created, and with that the 3 Buttons should be sent. When you now click on a Button the message you reply!
![Button Run](https://i.imgur.com/23RP7D9.png)

## Your Turn
Since you now know how to handle one button, you can do the same for the other example buttons and try to send a Message Back!

## Still Issues or Questions?
If you have Issues or any questions you can always ask on the [Discord Bot Builder Discord](https://discord.gg/PAzxTDw){:target="_blank"}, or send me a DM: `xcrafttm`!
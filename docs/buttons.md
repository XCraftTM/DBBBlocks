# Buttons
This Section will cover how to create a button, multiple buttons and also detect and handle button inputs.

!!! warning "Important"
    - Each Button needs a Custom ID to detect when it was Pressed
    - You can get a Emoji on Windows using `WIN+.`

## Create One Button
This Construction will trigger when the `!buttons` Command was run, that will create and send the button with the [Send Message(Components)](https://cdn.discordapp.com/attachments/1061029902125629510/1064287216773374022/send_message_component.js) Block.  
![Image](https://i.imgur.com/9cTHNB8.png)

## Create Multiple Buttons
We are going to use the same command like the first one and just add more [Create Button](https://cdn.discordapp.com/attachments/1061025650422583376/1084958759266295838/create_button.js) Blocks. In Combination with [Create Button Row](https://cdn.discordapp.com/attachments/1061025650422583376/1061433811906347090/create_button_row.js)  
![https://i.imgur.com/bOXExvC.png](https://i.imgur.com/bOXExvC.png)

## Detect and handle a Button Press

You can use the [Interaction Event](https://cdn.discordapp.com/attachments/1074299564758159421/1083629798422753381/interaction_event.js) to detect a Button Press using the Custom ID. Also to get the Current Time and Date you use the `Create Date` Block and using the `Format Date` Block you can get the Date in a Text Type. To now send a message back to the User that used the Button, you can use the [Reply to Interaction](https://cdn.discordapp.com/attachments/1063947208916992042/1087368804021059605/reply_interaction.js) Block.  
(Ephemeral means only visible to the user)  
![https://i.imgur.com/9imoEyd.png](https://i.imgur.com/9imoEyd.png)  

## Testing Everything
When you launch the bot you can now use the example command that was created, and with that the 3 Buttons should be sent. When you now click on a Button the message you reply!
![Button Run](https://i.imgur.com/23RP7D9.png)

## Your Turn
Since you now know how to handle one button, you can do the same for the other example buttons and try to send a Message Back!

## Still Issues or Questions?
If you have Issues or any questions you can always ask on the [Discord Bot Builder Discord](https://discord.gg/PAzxTDw), or send me a DM: `XCraftTM#5396`!
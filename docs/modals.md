# Modals
This Section will explain how setup a Modal, and show that to the User and also fetch what the User Inputed into the Modal.

## Setup Modal
Starting of a quick note... To be able to receive a Modal, a normal Prefix Command is not working, you will need some kind of Interaction. That can be a Slash command, Button or Select Menu.  
After the `Interaction [Event]` Block we will use the `Create Modal Input Field` Block to create Text Inputs for the Modal, you can customize these to your liking.  
After that, add each Input Field Object to a List that you create using the `Create List` Block and add them using the `Add Item to List` Block.  
After all that you use the `Create and Show Modal` Block to finish the Modal and show it to the User.  
(Defering or Replying to the Interaction is not needed right now, but later...)  

![Image](https://i.imgur.com/nmzSoim.png)

## Reacting to the Modal
You just use the `Interaction [Event]` again, set it to Modal, and enter CustomID of the Modal.  
Then use the `Get Modal Argument by Name` to get both Field Inputs, and use them as you like. In this Example we will add them together using `Merge Texts (Advanced)`.  
After that Reply to the Interaction to tell the User that we received the Input!  

![Image](https://i.imgur.com/bkTwT3H.png)

## Testing in Discord

![GIF](https://i.imgur.com/3Irb1q3.gif)
# Select Menus

This Section will explain how to create and use Select Menus.

***

## String Select Menu

A String Select Menu, is the default Menu that can have anything selectable with Text, emojis and a Description.  
Here is a Example for a Select Menu!  

### Creating the Select Menu

This will create 3 Select Menu Options and each item gets added to a list that needs to be created extra.  
The List then gets connected to the Create Menu Block.

![Create a Select Menu](https://i.imgur.com/eHXH4tP.png)  

### Reacting to the Select Menu

The Select Menu uses the Interaction Event when used.  
The `Options` Output returns the Selected Option Custom ID as a List, which can be gotten using the `get item from list`.  
Then using the `Switch (Conditional)` you can make each Selected item do something else. In this Example Replying some Text!  

![React to Select Menu](https://i.imgur.com/XojLoh7.png)  

### Testing in Discord

After you run your Bot you should be able to see your Menu using the Command of your choice.  
Once you select something, the bot should return a Message or whatever you set!

![Testing in Discord](https://i.imgur.com/oLH9VDw.gif)  

***

## User Select Menu

The User Select Menu is, again, much easier then the String Select Menu.  
You just need one Block to create it!  

### Creating the Select Menu

Use a Command, then create your Select Menu, then send that Menu. It can't get any simpler than that!  

![User Select Menu](https://i.imgur.com/2PFZ5Gg.png)  

### Reacting to the Select Menu

Then use the `Interaction Event`, in Combination with `Get Item from List` to get the User.  
Then Get the Infos you need about the Infos and Reply back to the Interaction.  

![React to Select Menu](https://i.imgur.com/ZhiGRxV.png)

### Testing in Discord

After you run your Bot, just use the Command and Interact with the Select Menu, then it should work...

![Testing...](https://i.imgur.com/5PWqPrv.gif)
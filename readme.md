#node-impact
===========

##Initial Setup
-----------

To be clear, this node module is actually a full boilerplate.
First, after running npm install `impact-worldmaster`, you'll now have your node_modules, and within that, the impact worldmaster folder. 

the files within the impact worldmaster filder? That's your project root. 
You can copy these and put them elsewhere, or just work right out of this folder. Nontheless, this is your project root for the game. You can ignore all the preceding directories.


##Adding impact
---
Now, You'll need to provide the following:


1. src/public/lib/impact
	This is the actual impact game folder, that you must have purchased 

- src/public/lib/weltmeister
	Same with this - its the weltmeister folder, just paste it right in, you should own this.

- src/public/weltmeister.html
	And the weltmeister point of entry. Add this. You can locally access it by going to `localhost:port/weltmeister` once you are running.

If necessary, run npm install.	

## Configuration
---
The weltmeister/config.js might still be pointing to old php files. You don't want this.
Make sure you're calling the right node routes for everything now, you no longer need the .php extensions!
Edit this in the config file in the /weltmeister folder you added to the project.

```js
'api': {
	'save': '/worldmaster/save',
	'browse': '/worldmaster/browse',
	'glob': '/worldmaster/glob'
}
```	

## Run It
--	
At the root of the project, you can run ```npm start``` and it should start running on he default port.
Instead of the ususal php backend, it will use the node code in this boilerplate.
You might also note there is no tools folder. This will be eventually replaced with gulp.
`/` should go to the "it works" screen. This is your game.
`/weltmesiter.html` will take you, as expected to the world editor. 

Have fun.












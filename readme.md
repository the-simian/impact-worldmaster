node-impact
===========

#Initial Setup
-----------
You'll need to provide the following:

- src/public/lib/impact

This is the actual impact game folder, that you must have purchased 

- src/public/lib/weltmeister

Same with this - its the weltmeister folder.

- src/public/weltmeister.html

And the weltmeister point of entry. Add this. You can access it by going to <server>/weltmeister once you are running.

You can then run the server with npm start. Instead of the ususal php backend, it will use the node code in this boilerplate.
You might also note there is no tools folder. This will be eventually replaced with gulp.

One thing to note, the weltmeister.config might still be pointing to old php files. You dont want this.

Make sure you're calling the right node routs for everything now:
```js
'api': {
	'save': '/worldmaster/save',
	'browse': '/worldmaster/browse',
	'glob': '/worldmaster/glob'
}
```			












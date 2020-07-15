# Pinterest Exercise

## Description
This is a homework assignment to practice using Firebase hosting and deployment, ES6 modules, SASS, and Bootstrap.

### Feature List
* Similar to the real Pinterest website, the user can create a collection of named boards, and each board houses a collection of pinned websites. Each pin has an image and links to an external website.
* Boards and pins can be created or deleted.
* Pins can be edited and moved from one board to another
* Full CRUD
* Google authentication
* Firebase database hosting and deployment

### How To Run
1. Clone the repo to have it on your local machine
1. Install the necessary webpack dependencies
1. Use `npm` to start up a local server
1. Visit the server in your browser (defaults to localhost:8080)
1. Or visit pinterest-45ead.web.app to view the deployed site. (But it's kind of rough and still needs work so maybe don't actually look at it right now, k thanks.)

### Contributors
* [Jeanine Beckle](https://github.com/jeaninebeckle)

### TODO
* Override bootstrap to get rid of the border that remains on the card when it's deleted
* Majorly improve styling because it looks sad right now
* Add functionality to "cancel" buttons on editing a board or a pin
* When editing a pin, figure out how to get the current board to be the default selection in the dropdown menu, otherwise the user will have to re-select that same board every time they edit a pin.

# phase1-project1

First Interaction with the Read App:

As a user of the Read App, you will be able to perform a book search via typing a key word in the input field. The Read App accesses the Google Books API database, and it will display a list of book cards conforming to the search query input. 

Code Steps of First Interaction:

Fisrt, a "DOM Content Loaded" event listener is created to allow the script to fire when the page' s DOM is fully parsed from the underlying html file. The callback function linked to this event is the init() function which will indicate the first user interaction with the App. When the user enters an input in the search field and hit the submit or enter button, an API fetch call will be made to the server to respond to the search query. A promise is awaited and the .then() methods are used to converte the data received to Json format and display to the DOM. A renderBooks() is handling creating the elements and diplaying their content. 

Preview Link Button Interaction:

Each book card will display a thumbnail image, a title, and authors of the book. also, at the footer of the book card you will be able to preview the book link, using the preview link button, where you can be directed to a full electronic version or a sample read if the book is not available for a free read. 

Preview Link Button Code:

To the user, the Preview Link appears as a button; however, it is coded as a link tag <a> and styled as a button using CSS classes.

Like and Save Button:

On the other hand, a like button will indicate that the book is liked via changing the button color and will save the title of the book liked to a side list under Favorite Reads. The user can delete each title using the delete (x) button to the left of each title.

Like and Save Button Code:

This is coded as an actual button just as the user experience. This button is doing tasks such as changing the color to purple to indicate a like and displays the liked book's title to a side list under Favorite Reads. 
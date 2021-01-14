# LAB - 02 and 03

## jQuery Selectors and Events
In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

### Authors: 
+ Seamus Brown | 
+ Sang Lee | sanglee76@yahoo.com 
+ Stephen Webber |

### Links and Resources
+ submission PR
+ Google Fonts: Indie Flower - https://fonts.google.com/specimen/Indie+Flower?sidebar.open=true&selection.family=Indie+Flower

### Reflections and Comments
+ Consider including the answers to your daily journal and submission questions here
+ This is also a good place to reflect on the tools and resources used and learned

### Updates
Number and name of feature: Display Images
Estimate of time needed to complete: 1 hour
Start time: 2:00
Finish time: 3:10
Actual time needed to complete: 1 hour 10 min


Number and name of feature: Filter Images
Estimate of time needed to complete: 1 hour 30 min
Start time: 3:20
Finish time: 5:00
Actual time needed to complete: 1 hour 40 min

Number and name of feature: Sorting
Estimate of time needed to complete: 1 hour
Start time: 1:28
Finish time: 2:38
Actual time needed to complete: 1 hour 10 min

## Detailed Assignment DescriptionDay 

### [Day 1](https://canvas.instructure.com/courses/2488344/assignments/19497125?module_item_id=40763096) 

**Feature #1: Display images**
**Why are we implementing this feature?**
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?**
Given that a user opens the application in the browser When the user navigates to the home page Then the photo gallery should display all of the images in the gallery

**How are we implementing it?**
Use AJAX, specifically $.ajax(), to read the provided JSON file.
Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.
**Feature #2: Filter images**
**Why are we implementing this feature?**
As a user, I want to be able to filter the images so that I can view only images that match a keyword.
**What are we going to implement?**
Given that a user clicks on the dropdown menu When the user selects one of the options Then only the images whose keyword matches the option should be displayed

**How are we implementing it?**
Create a `<select>` element which contains unique `<option>` elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.
Feature #3: Style the application
**Why are we implementing this feature?**
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in rows across the screen

**How are we implementing it?**
Style your application using floats.
Utilize at least one Google font.
Stretch Goal: Sort the images
**Why are we implementing this feature?**
As a user, I want to be able to sort the images so there is an order to how they render.
**What are we going to implement?**
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

**How are we implementing it?**
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.

### [Day 2](https://canvas.instructure.com/courses/2488344/assignments/19497126?module_item_id=40763101)
**Feature 1: Pagination**
**Why are we implementing this feature?**
As a user, I want to have the ability to view additional images so that my view does not become cluttered.
**What are we going to implement?**
Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

**How are we implementing it?**
Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
Reset the filters, then repopulate them using only keywords from the images currently being displayed.
**Feature 2: Templating**
**Why are we implementing this feature?**
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
**What are we going to implement?**
Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

**How are we implementing it?**
Create the appropriate Mustache template in your HTML with the same `<h2>`, `<img>`, and `<p>` elements as the jQuery template from the prior lab.
Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.
**Feature 3: Styling with Flexbox**
**Why are we implementing this feature?**
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.
**What are we going to implement?**
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows

**How are we implementing it?**
Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.
**Feature 4: Sort the images**
**Why are we implementing this feature?**
As a user, I want to be able to sort the images so that there is an order to their rendering.
**What are we going to implement?**
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

**How are we implementing it?**
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.
**Stretch Goal: Detail view**
**Why are we implementing this feature?**
As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.
**What are we going to implement?**
Given that a user wants to view the details of the image When the user clicks on an individual image Then the image should render larger on the screen with the description displayed

**How are we implementing it?**
Add a detail view which will display the image in a larger size in the center of the screen with a colored background.
The description should be shown now, as well.
When the user clicks off of the image, return to the grid view.
Use a transition or animation to show and hide the detail view of an image.
**Stretch Goal: Fuzzy search**
**Why are we implementing this feature?**
As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.
**What are we going to implement?**
Given that a user enters wants to view specific images When the user enters a character into the search field Then only the images matching the current set of characters should be displayed on the screen

**How are we implementing it?**
Create an input element to allow users to search for an image. It is up to you and your partner to decide if the user should be able to search by title, keyword, or both.
Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.
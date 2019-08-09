This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

# Adding a new Page #

## part 1 : Importing ##
1. Navigate to the corresponding folder of the desired event (Workshops/Talks/Event_Conferences),then eventDetails
2. make a new file named with the event's name. For example, gitIntroSkg.js
3. Import either WorkshopDetails if it is a workshop, or EventTalk if it is a Conferenence/Talk from /pages/DetailedEvent
4. Import the event's poster and a couple of photos
5. If it is a workshop, import a svg for the cheatsheet.

## part 2 : adding Data ##
We create several components : codesnippets(for a workshop) cheatSheet(for a workshop) LinkArrays (link containers) downloadLinks(container for downloading files) images(an array of images) imageCaptions(for alt text) and then we create a **parent array** importing all components and export it as a prop for our DetailedEvent Component 
 
 ### Component A : codeSnippets ###
 
 A single div with spans of different classes. Using BEM naming, codeSnippet is the block, code is the element and the rest is the modifier.
 Every span has the base naming of codeSnippet__code-* and you can fill the * with one of the following names  :
 1. Comment //for a grayed out comment
 2. Command | pink coloured 
 3. input | white coloured
 4. Link | green coloured
 ### Component B : cheatSheat ###
 
 An array of objects with 3 fields :
 1. title : goal of command
 2. command : specific command
 3. use : the use of command
 
 ### Component C : stageContainers ###
 An array of texts for cheatsheet's stages.
 
 ### Component D : downloadLinks ###
 An array of objects with 2 fields : 
 1. url
 2. text
 
 ### Component E : LinkArrays ###
 An array of objects with 2 fields : 
 1. url
 2. text
 
  ### Component F  : images ###
  An array with the imported images
  
  ### Component G  : imageCaptions ###
  An array of text for each image.Used as alt text.
  
  ## part 3 : Importing them all in a single object ##
  1. title : event's data
  2. date : event's date
  3. details : a small paragraph 
  4. group : workshop/talk/event,used for colours
  5. topic : used for workshops / Talks -> BreadCrumbs
  6. poset : most of the time, the first element of the images array.
  7. slides : a link for the event's slides.
  8. socialEvent : a link for facebook's event.
  9. svg : used for the cheatsheet(workshop)
  --Importing the arrays--
  10. cheatsheet,
  11. codeSnippets : an array with every codesnippet
  12. images
  13. imageCaptions
  14. downloadlinks
  15. stages
  
   ## part 4 : Exporting  ##
  Export WorkshopDetailedEvent
  const eventName = (props)=><WorkshopDetailedEvent mobile={props.mobile} group='workshop' data={eventData}/>
  
  ## part 5 : An actual page ##
  1. Navigate to App Component
  2. Import your exported eventName
  3. Make a new Route based on event
  
  ## part 6 : show your new event on event Showcase Component ##
  1. Navigate to the corresponding folder of the desired event (Workshops/Talks/Event_Conferences)
  2. Navigate to eventShowcase.
  3. Files are based on topic. Choose a file based on your event
  4. create a new object in the single array component,with the same fields as the other one.
  5. fill the fields.

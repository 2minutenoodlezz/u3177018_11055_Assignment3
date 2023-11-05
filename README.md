# Developer Notes

## Project Overview

One page site featuring a timeline of major and well recorded Australian bushfires

## Table of Contents

- [File Structure](#file-structure)
- [Key Components](#key-components)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Future Improvements](#future-improvements)
- [References](#references)

## File Structure

Project folder consisting of:

- **`index.html`**: The main HTML file containing the structure of the web page.
- **`index.css`**: The main CSS file for styling the HTML elements.
- **`background.js`**: JavaScript file responsible for handling background functionality.
- **`expand.js`**: JavaScript file responsible for expanding timeline elements and changing styles.
- **`README.md`**: Project readme file containing information about the project, how to set it up, and usage instructions.

## Key Components

### 1. **Timeline Element**

- **Description**: The timeline element represents individual events in the historical timeline. It consists of a container with a specific ID, containing a year or period label.
- **Responsibilities**:
  - Displaying the timeline events on the web page.
  - Handling mouseover events to expand and display detailed information about the event.
  - Dynamically updating the content and styles based on user interactions.

### 2. **Canvas**

- **Description**: The canvas element provides a drawing area for visualizations or interactive elements.
- **Responsibilities**:
  - Rendering graphical elements related to the historical events, such as timelines, graphs, or charts.
  - Handling drawing operations based on user interactions or data updates.

### 3. **expand.js**

- **Description**: JavaScript file responsible for expanding timeline elements and changing styles.
- **Responsibilities**:
  - Implementing logic for expanding and displaying detailed information when hovering over timeline events.
  - Managing the dynamic content update and styling changes for the timeline elements.

### 4. **background.js**

- **Description**: JavaScript file handling background functionality and interactions.
- **Responsibilities**:
  - Implementing background processes, if any, such as data fetching, calculations, or event listeners for global interactions.
  - Managing communication between different parts of the application, coordinating their behavior.

### 5. **index.css**

- **Description**: The main CSS file for styling HTML elements.
- **Responsibilities**:
  - Defining the styles for various components, ensuring a consistent and visually appealing user interface.

### 6. **index.html**

- **Description**: The main HTML file defining the structure of the web page.
- **Responsibilities**:
  - Structuring the layout and organizing different elements, including canvas, timeline events, and other UI components.

## Usage

### Prerequisites

- Make sure you have a modern web browser installed (such as Chrome, Firefox, or Safari) with JavaScript enabled.

### Getting Started

1. **Clone the Repository:**
   git clone https://github.com/your-username/your-project.git

2. Navigate to the Project Directory


3. Open index.html in Your Browser:

Double-click on the index.html file or open it using your preferred web browser.
This will load the main application page with the historical timeline and canvas.

4. Interacting with the Timeline:

Hover over timeline events to see detailed information about each event.
Click on specific events to navigate to related pages or resources (if implemented).
Explore the interactive canvas area to view visualizations or historical data representations (if implemented).
Making Changes or Contributions
Modify the Code:

Explore the expand.js file to understand the logic behind expanding timeline events and changing styles.
Update the timelineData object in expand.js to add, modify, or remove historical events and their descriptions.
Modify Styles:

If you want to change the appearance of the timeline or other elements, edit the index.css file to update styles and layouts.
Testing Your Changes:

Open index.html in your browser after making changes to see the updated version of the application.
Test interactions and ensure the UI behaves as expected.

## Dependencies

- **None:** This project does not rely on any external libraries or frameworks. It is built using HTML, CSS, and JavaScript.

- **Optional Development Tools:**
  - **Git:** Version control system used for tracking changes in the source code. [Git Installation Guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - **Text Editor or IDE:** You can use any text editor or integrated development environment (IDE) of your choice to view and edit the project files. Some popular options include Visual Studio Code, Sublime Text, or Atom.

## References

- All: https://www.ffm.vic.gov.au/history-and-incidents/past-bushfires

- '1851': https://www.nma.gov.au/defining-moments/resources/black-thursday-bushfires

- '1898': https://www.communitybushfireconnection.com.au/history/1898-fires/

- '1905-1906': https://www.communitybushfireconnection.com.au/history/1906-fires-in-south-gippsland/ 

	https://anneyoungau.wordpress.com/2019/12/17/trove-tuesday-1905-bushfire-precautions/
	
	https://knowledge.aidr.org.au/resources/bushfire-widespread-victoria-1906/

- '1926': https://www.communitybushfireconnection.com.au/history/1926-fires/

	https://knowledge.aidr.org.au/resources/bushfire-south-east-victoria-1926/

- '1932': https://www.communitybushfireconnection.com.au/history/1932-fires/

	https://knowledge.aidr.org.au/resources/bushfire-gippsland-victoria-1932/

- '1938-1939': https://knowledge.aidr.org.au/resources/bushfire-black-friday-victoria-1939/

	https://www.communitybushfireconnection.com.au/history/1939-fires/
 
- '1942': https://www.communitybushfireconnection.com.au/history/1942-south-gippsland-fires/

- '1943-1944': https://en.wikipedia.org/wiki/1943%E2%80%9344_Victorian_bushfire_season

	https://www.communitybushfireconnection.com.au/history/1944-fires/

- '1952': http://www.rfs.nsw.gov.au/ourstory/film/bush-fires-in-australia-1952

	https://knowledge.aidr.org.au/resources/bushfire-act-and-south-west-new-south-wales-1951-52/

- '1955': https://knowledge.aidr.org.au/resources/bushfire-black-sunday-mt-lofty-ranges-1955/

	https://en.wikipedia.org/wiki/Black_Sunday_bushfires

- '1962': https://knowledge.aidr.org.au/resources/bushfire-dandenong-ranges-and-southern-victoria-1962/
	
	https://ferntreegully.mailcommunity.com.au/news/2022-01-31/remembering-the-devastating-bushfires-from-60-years-ago/

- '1965': https://www.communitybushfireconnection.com.au/history/1965-gippsland-bushfires/

- '1967': https://knowledge.aidr.org.au/resources/bushfire-black-tuesday-tasmania-1967/

	https://en.wikipedia.org/wiki/1967_Tasmanian_fires

- '1969': https://www.blacksaturdaymuseum.com/LaraFire.htm

	https://knowledge.aidr.org.au/resources/bushfire-lara-and-melbourne-fringe-victoria-1969/

- '1974-1975': https://knowledge.aidr.org.au/resources/bushfire-new-south-wales-1974/
	
	https://en.wikipedia.org/wiki/1974%E2%80%9375_Australian_bushfire_season

- '1977': https://knowledge.aidr.org.au/resources/bushfire-western-districts-and-streatham-victoria-and-south-australian-1977/

- '1983': https://en.wikipedia.org/wiki/Ash_Wednesday_bushfires

	https://knowledge.aidr.org.au/resources/bushfire-ash-wednesday-victoria-and-south-australia-1983/

- '1984': https://knowledge.aidr.org.au/resources/bushfire-north-western-regions/

- '1985': https://knowledge.aidr.org.au/resources/bushfire-central-victoria-and-alpine-region-victoria-1985/

- '1994': https://en.wikipedia.org/wiki/1994_eastern_seaboard_fires

	https://dictionaryofsydney.org/entry/eastern_seaboard_bushfires_1994

	https://knowledge.aidr.org.au/resources/bushfire-north-coast-hunter-and-sydney-regions-1993-94/

- '1997': https://knowledge.aidr.org.au/resources/bushfire-dandenong-ranges-and-mornington-peninsula-victoria-1997/

	https://knowledge.aidr.org.au/resources/bushfire-sydney-hunter-pilliga/

	https://en.wikipedia.org/wiki/1996%E2%80%9397_Australian_bushfire_season

- '2001-2002': https://en.wikipedia.org/wiki/Black_Christmas_bushfires

	https://knowledge.aidr.org.au/resources/bushfire-black-christmas-2001/

	https://www.nma.gov.au/defining-moments/resources/canberra-bushfires

- '2002-2003': https://knowledge.aidr.org.au/resources/bushfire-sydney-new-south-wales-2002/

	https://en.wikipedia.org/wiki/2002%E2%80%9303_Australian_bushfire_season

- '2005-2006': https://knowledge.aidr.org.au/resources/bushfire-victoria-2006/

	https://en.wikipedia.org/wiki/2005%E2%80%9306_Australian_bushfire_season

- 2006-2007': https://knowledge.aidr.org.au/resources/bushfire-great-divide-complex-victoria/

	https://en.wikipedia.org/wiki/2006%E2%80%9307_Australian_bushfire_season

- '2009': https://education.nationalgeographic.org/resource/black-saturday-bushfires-australia/

	https://www.nma.gov.au/defining-moments/resources/black-saturday-bushfires

	https://en.wikipedia.org/wiki/Black_Saturday_bushfires

- '2013-2014': https://en.wikipedia.org/wiki/2013_New_South_Wales_bushfires

	https://en.wikipedia.org/wiki/2013%E2%80%9314_Australian_bushfire_season

- '2015': https://en.wikipedia.org/wiki/2015%E2%80%9316_Australian_bushfire_season

- '2019-2020': https://en.wikipedia.org/wiki/2019%E2%80%9320_Australian_bushfire_season

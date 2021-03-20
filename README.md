# Capital One Mindsumo Skyscanner Challenge
Developed using React.js with the Skyscanner API (https://rapidapi.com/skyscanner/api/skyscanner-flight-search). 

My web app was developed using React.js and the Skyscanner API. My solution takes in user input for path parameters and appends them to the API request in order to retrieve the appropriate data. It iterates over the map of retrieved data to calculate the minimum price so it can highlight the corresponding row.

## Task One: Let users view their flight options between two destinations for specific dates
I completed this task by including text boxes to allow users to input origin location, destination location, outbound date, inbound date, and currency. I then appended these specified path parameters to the API URL in order to query the data corresponding to the user's input.

## Task Two: Allow users to select their currency preference when searching for flights
I completed this task by including a text box to allow users to input their desired currency. I then appended this specified path parameter to the API URL.

## Task Three: Use intuitive UI principles to highlight or call out the cheapest flights for a user running a search
My solution iterates over the map retrieved by the API request and visits each price returned to determine the overall minimum price value. It then compares each price in the display table to the minimum price value, and if the current price is equivalent to the minimum price value, the entire corresponding row is bolded in the table.



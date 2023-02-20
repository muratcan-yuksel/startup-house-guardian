live demo =>
backend source code=>

# How did I build this app?

For styling, I used Tailwind CSS, nothing too complicated there.

For the frontend I used React, and for the backend I used Node.js with Express.

For the database I used MongoDB with Mongoose.

## Process

Now, I wanted to flex my full-stack skills so instead of local storage or something else, the saved articles should've been stored in a database. But I didn't start coding the backend before I had many things ready.

First off, I needed to get the data from The Guardian API, axios to the rescue there. The API itself helps a lot with filtering too so I can get culture, sports, business, whatever. On each page change, articles on that page should be shown. But there's a problem there. For instance, all articles are like more than 250 pages but say, books section has only 8 pages. If I wanted to change from all to books when I was at page, say 25, it would throw an error, because the books section doesn't have that page number. To solve it, I set the page number to 1 at each section change, which made the app even more user-friendly.

Then I needed to filter the items, both the ones coming from the api and the saved ones, which will come form the database soon. I wrote 2 distinct functions to make the code more readable, and sent the relevant info via props.

For backend, I fired up an Express server with MVC (model-view-controller) pattern. Why? Maybe it was not necessary for such a small application, but I find it easier to work with. I used Mongoose to connect to the database, and I used dotenv to hide my database connection string.

There was this interesting problem: Now I save the articles to the database by clicking the read later button, which sends an API request to the endpoint my my backend. As soon as that item reaches the database, it should be shown on the saved articles component. In order to show it in real time, I used React's in-built context API to let one component send the message to another that the context was changed, so that the component should re-render. I used useEffect for rerender, and for the context, I just incremented it on each save or delete. This way, whenever the item was saved or deleted, the relevant component rerenders and we see the data flow seamlessly, without the need of a refresh.

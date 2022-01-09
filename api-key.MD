NZN7UMOxRbKo6xZ3TwzN6hhNUt4MdwwT

Gif URL
api.giphy.com/v1/gifs/search

Sticker URL
api.giphy.com/v1/stickers/search

| Request Parameters:| Example: | Description:|

| - | - | - |

| api_key: string(required) 
|YOUR_API_KEY |GIPHY API Key.|
| q: string(required) 
|cheeseburgers 
|Search query term or phrase. Adding @<username> anywhere in the q parameter effectively changes the search query to be a search for a specific user’s GIFs (user has to be public and verified user by GIPHY.)|

limit: integer (int32) 20 The maximum number of objects to return. (Default: “25”).
For beta keys max limit is 50

offset: integer (int32) 5 Specifies the starting position of the results.
Default: “0”
Maximum: “4999”

rating: string g Filters results by specified rating. Acceptable values include g, pg, pg-13, r. If you do not specify a rating, you will receive results from all possible ratings.

lang: string en Specify default language for regional content; use a 2-letter ISO 639-1 language code.

random_id: string e826c9fc5c929e0d6c6d423841a282aa An ID/proxy for a specific user.

bundle: string messaging_non_clips Returns only renditions that correspond to the named bundle. Read more about renditions.

Successful Response (200 OK)

### ENDPOIN LISTO


https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=NZN7UMOxRbKo6xZ3TwzN6hhNUt4MdwwT



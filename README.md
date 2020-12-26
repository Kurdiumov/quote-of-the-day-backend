# Backend for Quote of the day

Backend is used as a proxy for [Quote of the day](https://kurdiumov.github.io/quote-of-the-day/) application.
There are two endpoints:
 - **GET _/quote_** - Fetches _quote of the day_ from [Paper Quotes API](http://paperquotes.com/).
 - **GET _/ImageUrl_** - Fetches image data from [Unsplash.com API](https://unsplash.com/developers) and returns image url with custom size.

Application hosted on [Heroku](http://heroku.com).

Development
---
Check out repository and navigate to it:
```
git clone https://github.com/Kurdiumov/quote-of-the-day-backend.git
cd quote-of-the-day-backend
```
    
Install dependencies using npm:
```
npm install
```

Start express server using the following command:
```
npm run start
```

Server will be started by defaullt on port 5000.

## Built with
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/>


## License
This project is licensed under the terms of the [MIT license](https://github.com/Kurdiumov/quote-of-the-day-backend/blob/main/LICENSE).

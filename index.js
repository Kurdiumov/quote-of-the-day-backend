require("dotenv-safe").config();
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "https://kurdiumov.github.io/quote-of-the-day",
  optionsSuccessStatus: 200
};

app.get("/imageUrl", cors(corsOptions), async (req, res) => {
  const width = req.query.width ? req.query.width : 1024;
  const height = req.query.height ? req.query.height : 768;
  const collections = "804449,1242150,9545968";

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random/?collections=${collections}&client_id=${process.env.UNSPLASH_API_KEY}&w=${width}&h=${height}`
    );

    const json = await response.json();
    if (response.ok) {
      return res.status(200).json({
        success: true,
        imageUrl: json.urls.custom
      });
    }

    throw new Error(JSON.stringify(json));
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

app.get("/quote", cors(corsOptions), async (req, res) => {
  try {
    const response = await fetch(
      "https://api.paperquotes.com/apiv1/qod/?lang=en",
      {
        method: "GET",
        headers: {
          Authorization: `Token ${process.env.PAPER_QUOTES_API_KEY}`
        }
      }
    );

    const json = await response.json();
    if (response.ok) {
      return res.status(200).json({
        success: true,
        result: {
          author: json.author,
          quote: json.quote
        }
      });
    }

    throw new Error(JSON.stringify(json));
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

var path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

dotenv.config();

const API_KEY = process.env.LICENSE_KEY;
const MAIN_CLOUD_URL = "https://api.meaningcloud.com/sentiment-2.1";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/find-meaning", async (req, res) => {
  console.log(req.body);
  if (!req.body.url) {
    return res.status(400).json({ message: "Error: URL is missing" });
  }

  let response = null;

  try {
    response = await sendRequest(req.body.url);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }

  console.log(response);

  const result = {
    agreement: response.data.agreement,
    subjectivity: response.data.subjectivity,
    confidence: response.data.confidence,
    irony: response.data.irony,
  };

  console.log(result);

  res.json(result);
});

const sendRequest = async (url) => {
  var data = JSON.stringify({ url: url });

  var config = {
    method: "post",
    url: `${MAIN_CLOUD_URL}?key=${API_KEY}&of=json&lang=en`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  return await axios(config);
};

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

// import { jokes } from "../../../lib/data.js";

import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";

export default async function handler(request, response) {
  // goal is to connect to the db
  await dbConnect();

  // check if the request method is GET

  if (request.method === "GET") {
    // make a request to the db to get the jokes
    const jokes = await Joke.find();

    console.log("jokes: ", jokes);

    // send the jokes back
    response.status(200).json(jokes);
  }
}

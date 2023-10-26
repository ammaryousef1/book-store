import express from 'express';
import mongoose from 'mongoose';
import { Books } from './bookmodule.js';
import Bookrouter from './router.js';
import cors   from 'cors'
const app = express();
const PORT = 3003;



app.get('/', (request, response) => {
  response.send('Welcome! I did it.');
});


app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // Some legacy browsers (e.g., IE11) choke on 204
}));



  app.use(express.json())
  app.use("/book" , Bookrouter)
mongoose
  .connect('mongodb+srv://ammaryousef172:ammaryousef172@cluster0.csssqsz.mongodb.net/store-book?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((error) => {
    console.log('There was an error connecting to the database');
  });

app.listen(PORT, () => {
  console.log('App is running. Listening on port', PORT);
});
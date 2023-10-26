import express from 'express'
import { Books } from './bookmodule.js';
const Bookrouter = express.Router();


Bookrouter.get('/', async (request, response) => {
    try {
      const books = await Books.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  Bookrouter.post('/', async (request, response) => {
    const { title, author, puplishdin } = request.body;
    const newBook =  new Books({ title, author, puplishdin });
    try {
      await newBook.save();
      response.status(201).json('Book created successfully.');
    } catch (error) {
      console.log('There was an error:', error);
    }
  });

  Bookrouter.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await Books.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log("something rong");
      response.status(500).send("something rong");
    }
  });

  Bookrouter.put('/:id', async (request, response) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.puplishdin
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, puplishdin',
        });
      }
  
      const { id } = request.params;
  
      const result = await Books.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  Bookrouter.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Books.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default Bookrouter
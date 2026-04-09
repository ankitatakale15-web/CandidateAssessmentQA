'use strict';

const express = require('express');
const tutorController = require('./src/controllers/tutorController');

const app = express();

app.use(express.json());

app.get('/api/tutors', tutorController.getAllTutors);
app.get('/api/tutors/search', tutorController.searchTutors);
app.post('/api/tutors/:tutorId/book', tutorController.bookTutor);

module.exports = app;

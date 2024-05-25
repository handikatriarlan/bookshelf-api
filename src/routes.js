const {
  addNoteHandler,
  getAllbooksHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllbooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;

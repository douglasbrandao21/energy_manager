'use strict'

const Route = use('Route')

Route.post('/sessions', 'SessionController.store').validator('StoreSession');

Route.post('/users', 'UserController.store').validator('StoreUser');

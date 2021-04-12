'use strict'

const User = use('App/Models/User');

class UserController {

  async store({ request, response }) {
    const { name, email, password } = request.all();

    const userAlreadyExists = await User.findBy('email', email);

    if(userAlreadyExists)
      return response.status(400).json({ message: `Desculpe, e-mail já cadastrado.` });

    const user = await User.create({
      name, email, password
    });

    return response.status(201).json(user);
  }

}

module.exports = UserController

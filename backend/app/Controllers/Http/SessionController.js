'use strict'

const User = use('App/Models/User');

class SessionController {

  async store({ auth, request, response }) {
    const { email, password } = request.all();

    const { token } = await auth.attempt(email, password);

    if(token) {
      const user = await User.findByOrFail('email', email);

      return response.json({
        token,
        user
      });
    }

    return response.status(401).json({
      message: 'Credenciais inválidas'
    });
  }
}

module.exports = SessionController

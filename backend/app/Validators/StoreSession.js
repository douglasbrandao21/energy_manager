'use strict'

class StoreSession {
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }

  get messages() {
    return {
      'email.required': 'Preencha seu e-mail corretamente',
      'email.email': 'O e-mail inserido é inválido',
      'password.required': 'Preencha sua senha corretamente'
    }
  }
}

module.exports = StoreSession

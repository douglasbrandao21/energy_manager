'use strict'

class StoreUser {
  get rules () {
    return {
      name: 'required',
      email: 'required|email|unique:users',
      password: 'confirmed'
    }
  }

  get messages() {
    return {
      'name.required': 'Preencha seu nome corretamente',
      'email.required': 'Preencha seu e-mail corretamente',
      'email.email': 'O e-mail inserido é inválido',
      'email.unique': 'O e-mail inserido já está cadastrado',
      'password.confirmed': 'Preencha sua senha corretamente'
    }
  }
}

module.exports = StoreUser

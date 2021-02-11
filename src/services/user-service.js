const UserService = {
  getUsernameData: function (db, username) {
    return db('users')
      .select('user_id', 'username', 'admin')
      .where({ username })
      .first();
  }
  ,
  matchingPassword: function (db, username, password) {
    return db('users')
      .select('*')
      .where({ username, password })
  }
  ,
  findByID: function (db, user_id) {
    return db('users')
    .where({ user_id })
    .select('user_id', 'first_name', 'last_name', 'email', 'admin')
  }
  ,
  getAll: function (db) {
    return db('users')
    .select('user_id', 'first_name', 'last_name', 'email', 'admin')
  }
  ,
  create: function (db, user) {
    return db('users')
      .insert(user)
      .returning('*')
      .then(rows => rows[0]);
  }
  ,
  edit: function (db, user_id, values) {
    return db('users')
      .select('*')
      .update(values)
      .where({ user_id })
      .returning('*')
      .then(rows => rows[0])
  }
  ,
  delete: function (db, user_id) {
    return db('users')
      .where({ user_id })
      .delete();
  }
};

module.exports = UserService;

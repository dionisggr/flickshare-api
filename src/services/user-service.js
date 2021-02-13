const UserService = {
  getUsernameData(db, username) {
    return db('users')
      .select('user_id', 'username', 'admin')
      .where({ username })
      .first();
  }
  ,
  findPassword(db, username) {
    return db('users')
      .select('password')
      .where({ username })
      .first();
  }
  ,
  findByID(db, user_id) {
    return db('users')
    .where({ user_id })
    .select('user_id', 'first_name', 'last_name', 'email', 'admin')
  }
  ,
  getAll(db) {
    return db('users')
    .select('user_id', 'first_name', 'last_name', 'email', 'admin')
  }
  ,
  create(db, user) {
    return db('users')
      .insert(user)
      .returning('*')
      .then(rows => rows[0]);
  }
  ,
  edit(db, user_id, values) {
    return db('users')
      .select('*')
      .update(values)
      .where({ user_id })
      .returning('*')
      .then(rows => rows[0])
  }
  ,
  delete(db, user_id) {
    return db('users')
      .where({ user_id })
      .del();
  }
};

module.exports = UserService;

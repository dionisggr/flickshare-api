const ListService = {
  getMain(db) {
    return db('lists')
      .select('*')
      .where({ user_id: null });
  }
  ,
  getAll(db) {
    return db('lists')
      .select('*');
  }
  ,
  getAllUserLists(db, user_id) {
    return db('lists')
      .select('*')
      .where({ user_id });
  }
  ,
  findByID(db, list_id) {
    return db('lists')
      .select('*')
      .where({ list_id });
  }
  ,
  create(db, list) {
    return db('lists')
      .insert(list)
      .returning('*')
      .then(rows => rows[0]);
  }
  ,
  edit(db, list_id, values) {
    return db('lists')
      .select('*')
      .where({ list_id })
      .update(values)
      .returning('*')
      .then(rows => rows[0])
  }
  ,
  delete(db, list_id) {
    return db('lists')
      .where({ list_id })
      .del();
  }
  ,
  
};

module.exports = ListService;
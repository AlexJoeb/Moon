
exports.up = (knex) => knex.schema
  .createTable('links', tbl => {
    // ID - uuid - RU
    // shortid -- RU
    // destination -- RU
    // visits - RD0
    // author - RMax5
    // expired - RD0(F)
    // expire_at
    // created_at
    // updated_at
    tbl.text('id').notNullable().unique();
    tbl.text('shortid').notNullable().unique();
    tbl.text('destination').notNullable();
    tbl.integer('visits').notNullable().defaultTo(0);
    tbl.text('author').notNullable();
    tbl.integer('expired').notNullable().defaultTo(0);
    tbl.text('expire_at').notNullable().defaultTo(new Date().toString());
    tbl.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTableIfExists('links');
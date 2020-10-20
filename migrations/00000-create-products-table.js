exports.up = async (sql) => {
  await sql`
  CREATE TABLE if NOT EXISTS products(id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY, name varchar(40), img varchar(40), price integer, location varchar (40));
`;
};

exports.down = async (sql) => {
  await sql`DROP TABLE IF EXISTS products`;
};

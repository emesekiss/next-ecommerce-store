// Insert products into database
exports.up = async (sql) => {
  await sql`
    INSERT INTO products (name, img, price, location) VALUES
      ('Banana','/banana.jpg',3,'Elm Tree Farm'),
      ('Lemon','/lemon.jpg', 5,'Birch Wood Farm'),
      ('Onion','/onion.jpg', 2, 'Lake View Farm'),
      ('Peas','/pea.jpg', 8,'Elm Tree Farm'),
      ('Tomatoes','/tomatoes.jpg',10,'Lake View Farm'),('Cucumber','/cucumber.jpg',4,'Magnolia Ranch'),
      ('Beetroot','/beetroot.jpg',4,'Magnolia Ranch'),
      ('Chilli','/chilli.jpg',9,'Elm Tree Farm'),
      ('Courgette','/courgette.jpg',5,'Elm Tree Farm'),
      ('Garlic','/garlic.jpg',3,'Lake View Farm'),
      ('Orange','/orange.jpg',8,'Magnolia Ranch'),
      ('Parsley','/parsley.jpg',6,'Birch Wood Farm'),
      ('Potato','/potato.jpg',2,'Lake View Farm'),
      ('Strawberry','/strawberry.jpg',9,'Elm Tree Farm'),
      ('Watermelon','/watermelon.jpg',13,'Birch Wood Farm')
  `;
};

// Remove products from database
exports.down = async (sql) => {
  await sql`
    DELETE FROM products
      WHERE name IN ('T-Shirt', 'Coffee Cup', 'Screen Cleaner', 'Umbrella')
  `;
};

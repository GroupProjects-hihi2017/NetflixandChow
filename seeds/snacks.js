exports.seed = function(knex, Promise) { // don't need to insert id because your id is auto incremented
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        {id: 1, name: 'Extra-Buttery Popcorn', image: 'https://static.planetminecraft.com/files/resource_media/screenshot/1239/hot-buttered-popcorn_3735088_lrg.jpg', description: 'The more butter, the better.'},
        {id: 2, name: 'Wine', image: 'http://www.wrightswines.co.nz/wp-content/uploads/2013/05/NWC-Pinot-Noir-Gold.jpg', description: "Tonight, you'll be drinking your movie snack."},
        {id: 3, name: "Ben and Jerry's Half-Baked", image: 'http://images.complex.com/complex/image/upload/c_limit,w_680/fl_lossy,pg_1,q_auto/vlgsmpt0tfbs8plfvfrm.jpg', description: 'Equal parts ice cream and chunks of stuff, no movie night is complete without it.'},
        {id: 4, name: 'Cadbury Snowballs', image: 'https://wowprodmedia002aae.azureedge.net/content/wowproductimages/large/266878.jpg', description: 'Get your marshmallow on.'},
        {id: 5, name: 'Unicorn Tears', image: 'http://www.thinkgeek.com/images/products/additional/large/imsi_unicorn_tears_ladies_tee_dd.jpg', description: "Rare and expensive. They're JV's favourite movie snack."}
      ]);
    });
};

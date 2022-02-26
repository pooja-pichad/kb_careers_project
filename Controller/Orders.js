const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Nav@gur1",
        database: "Ecomerse_data"
    },
});

Orders = (req, res) => {
    get_token = req.data
    knex('Orders').insert({
        date_time: new Date(),
        user_id: get_token.user_id,
        product_id: req.body.product_id
    }).then(() => {
        res.json({
            payment: "No payment integration",
            Data: "Succesfully Done!"
        })
    }).catch((err) => {
        res.send(err)
    })
}

Orders_All = (req, res) => {
    knex('products').join('Orders', 'products.product_id', '=', 'Orders.product_id').select("*")
        .then((rows) => {
            console.log(rows)
            res.send(rows)
        }).catch((err) => {
            if (err)
                res.status(403).send(`Order with the ${req.params.product_id} id is not exists`)
            console.log(err)
        })
}


module.exports = {
    Orders,
    Orders_All
}
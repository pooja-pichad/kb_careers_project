const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Pooja@123",
        database: "order_anything"
    },
});

const Attributes = (req, res) => {
    get_token = req.data
    knex("registration").where({ user_id: get_token.user_id })
        .then(() => {
            let readlineSync = require("readline-sync");
            product = readlineSync.question("what you want to take /n 1) Shirt 2)T-shirt :")
            if (product == "Shirt" || product == "T-shirt") {
                if (get_token.size_1 == req.body.size || get_token.size_2 == req.body.size || get_token.size_3 == req.body.size) {
                    if (get_token.color_1 == req.body.color || get_token.color_2 == req.body.color || get_token.color_3 == req.body.color || get_token.color_4 == req.body.color || get_token.color_5 == req.body.color || get_token.color_6 == req.body.color || get_token.color_7 == req.body.color) {
                        knex("registration").where({ user_id: get_token.user_id })
                            .then(() => {
                                user_id = get_token.user_id
                                knex("products").insert({
                                    size: req.body.size,
                                    color: req.body.color,
                                    user_id: user_id
                                }).then((data) => {
                                    res.send(data)

                                }).catch((err) => {
                                    res.send(err)

                                })


                            })
                    } else {
                        res.send("This color in didn't match")
                    }
                } else {
                    res.send("This size is not match")
                }

            } else {
                res.send("This product is not match")
            }
        })
        .catch((err) => {
            res.send(err)
        })
}


module.exports = {
    Attributes
}
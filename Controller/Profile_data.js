const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "Nav@gur1",
        database: "Ecomerse_data"
    },
});

Signup = (req, res) => {
    const user = req.body;
    bcrypt.hash(user.password, 10).then((hash) => {
        knex("registration").insert({
                Name: req.body.Name,
                Mobile_no: req.body.Mobile_no,
                Email: req.body.Email,
                password: req.body.password
            })
            .then((result) => {
                res.send({ sucess: result })
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    res.status(400).send({ error: err })
                }
            })
    })
}

Login = (req, res) => {
    knex.select("*").
    from('registration').where({ Email: req.body.Email })
        .then(registration => {
            if (registration.length !== 0) {
                var log_token = jwt.sign({ "user_id": registration[0].user_id, "size_1": "M", "size_2": "L", "size_3": "XL", "color_1": "Red", "color_2": "White", "color_3": "Grey", "color_4": "Blue", "color_5": "Black", "color_6": "Cream", "color_7": "Green" }, "registration", {
                    expiresIn: "2h"
                });
                res.send({
                    registration,
                    access_token: log_token
                });
            } else {
                res.status(400).json({
                    message: "failed"
                });
            };

        })
        .catch((err) => {
            res.send(err);
        });
};

profile_Data = (req, res) => {
    get_token = req.data
    console.log(get_token)
    knex.select("*").from("registration").where({ user_id: get_token.user_id })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
};

profile_Data_update = (req, res) => {
    get_token = req.data
    knex("registration").where({ user_id: get_token.user_id }).update({
            Name: req.body.Name,
            Mobile_no: req.body.Mobile_no,
            password: req.body.password
        })
        .then(() => {
            knex.select("*").from("registration").where({ user_id: get_token.user_id })
                .then((data) => {
                    res.send(data)
                })
        })
        .catch((err) => {
            res.send(err);
            console.log(err)
        });

};

profile_Data_Delete = (req, res) => {
    get_token = req.data
    knex("registration").select("*").where({ user_id: get_token.user_id })
        .del()
        .then((data) => {
            res.send("Data delete")
        })
}


module.exports = {
    Signup,
    Login,
    profile_Data,
    profile_Data_update,
    profile_Data_Delete
}
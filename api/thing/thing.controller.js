const dbMysql = require('./../../config/driver.mysql');

module.exports = {
    create,
    read,
    update,
    destroy,
    index
};

function create(req, res) {
    const queryString = `INSERT INTO Thing (name) VALUES ("${req.body.name}")`;
    dbMysql.query(queryString)
        .then(() => {
            res.status(200).json('success');
        })
        .catch(() => {
            res.status(400).json('err');
        });
}

function read(req, res) {
    const queryString = `SELECT * FROM Thing WHERE id = ${req.params.id}`;
    dbMysql.query(queryString)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(() => {
            res.status(400).json('err');
        });
}

function update(req, res) {
    const queryString = `UPDATE Thing SET name = "${req.body.name}" WHERE id = ${req.params.id}`;
    dbMysql.query(queryString)
        .then(data => {
            res.status(200).json('success');
        })
        .catch(() => {
            res.status(400).json('err');
        });
}

function destroy(req, res) {
    const queryString = `DELETE FROM Thing WHERE id = ${req.params.id}`;
    dbMysql.query(queryString)
        .then(() => {
            res.status(200).json('success');
        })
        .catch(() => {
            res.status(400).json('err');
        });
}

function index(req, res) {
    const queryString = `SELECT * FROM Thing`;
    dbMysql.query(queryString)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(() => {
            res.status(400).json('err');
        });
}

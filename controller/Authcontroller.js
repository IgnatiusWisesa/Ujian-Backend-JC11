const db = require('./../connection')

module.exports = {

    tambahmovies: (req,res) => {
        const {nama, tahun, description} = req.body

        var filmbaru = {
            nama,
            tahun,
            description
        }

        let sql = `INSERT INTO movies SET ?`
        db.query(sql, filmbaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editmovies: (req,res) => {
        console.log(req.params.id)
        console.log(req.body)

        let {nama, tahun, description} = req.body

        let updatefilm = {
            nama,
            tahun,
            description
        }

        let sql = `UPDATE movies SET ? WHERE id = ?`
        db.query(sql, [updatefilm, req.params.id], (err, result) => {
            if (err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    hapusmovies: (req, res) => {
        console.log(req.params.id)

        let sql = `DELETE FROM movies WHERE id = ?`

        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    tambahcategory: (req, res) => {
        const {nama} = req.body
        console.log(nama)

        let sql = `INSERT INTO categories (nama) VALUES ('${nama}');`
        db.query(sql, req.body.nama, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    editcategories: (req, res) => {
        console.log(req.params.id)
        const {nama} = req.body

        let sql = `UPDATE categories SET nama='${nama}' WHERE id=${req.params.id};`
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },
    hapuscategory: (req, res) => {
        console.log(req.params.id)

        let sql = `DELETE FROM categories WHERE id = ?`

        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    // SELECT mv.id ,mo.nama, c.nama FROM movcat mv
    // join movies mo on mo.id = mv.idmovie
    // join categories c on c.id = mv.idcategory;

    tambahkoneksi: (req,res) => {
        const {idmovie, idcategory} = req.body
        console.log(idmovie, idcategory)

        var koneksibaru = {
            idmovie,
            idcategory
        }

        let sql = `INSERT INTO movcat SET ?`
        db.query(sql, koneksibaru, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    },

    hapuskoneksi: (req,res) => {
        let sql = `DELETE FROM movcat WHERE id = ?`

        db.query(sql, req.params.id, (err, result) => {
            if(err) res.status(500).send(err)
            res.status(200).send(result)
        })
    }
}
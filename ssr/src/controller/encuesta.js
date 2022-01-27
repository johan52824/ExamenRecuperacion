const axios = require('axios').default;
const {API} = require('../config');

class EncuestaController{
    async index(req, res){
        let v = await axios.get(`${API}/encuesta`);
        const data = v.data.data;
        res.render('home',{data})
    }

    async vistaAgregar(req, res){
        res.render('add');
    }

    async vistaEditar(req, res){
        const {id} = req.params;
        const data = await axios.get(`${API}/encuesta/${id}`);
        res.render('edit',{data: data.data.data});
    }

    async create(req, res){
        await axios.post(`${API}/encuesta`, req.body);
        res.redirect('/');
    }

    async edit(req, res){
        const {id} = req.params;
        await axios.patch(`${API}/encuesta/${id}`, req.body);
        res.redirect('/');
    }

    async delete(req, res){
        const {id} = req.params;
        await axios.delete(`${API}/encuesta/${id}`);
        res.redirect('/');
    }
    
}

module.exports = new EncuestaController();

series = (app) =>{

    app.get('/series', (req, res) => {
        var seriesDao = app.models.Series

        seriesDao.lista()
            .then(resultado =>{
                res.send(resultado)
            })
            .catch(erro =>{
                console.log('Erro ao consultar: ' + erro)
                res.status(500).send(erro)
            })
    })

    app.post('/series', (req,res) =>{
        const seriesDao = app.models.Series

        let serie = req.body;
        console.log(serie)
        seriesDao.insere(serie)
            .then(resultado => {
                const insertedId = resultado.insertId;
                serie = {id:insertedId, ...serie}
                res.status(201).send(serie)
            })
            .catch(erro =>{
                console.log('Erro ao inserir: ' + erro)
                res.status(500).send(erro)
            })
    })

    app.get('/series/:id', (req, res) => {
        const id = req.params.id

        const seriesDao = app.models.Series
        seriesDao.buscaPorId(id)
            .then(serie => {
                if(!serie){
                    res.status(404).send({
                        erro: 'serie nao encontrada'})
                    return
                }
               
                res.send(serie)
                
            })

            .catch(erro =>{
                console.log('Erro ao buscar serie')
                res.status(500).send({erro: 'erro ao buscar'

                })
            })
    })

    app.put('/series/:id', (req,res) => {
        const id = req.params.id
        const serie = req.body
        serie.id = id;

        seriesDao = app.models.Series
        
        seriesDao.atualiza(serie).then(retorno =>{
            console.log(retorno)
            if(!retorno.affectedRows){
                res.status(404).send({erro: 'Serie não encontrada'})
                return
            }
            res.send(serie)
        })

        .catch(erro => res.status(500).send(erro))
    })


    app.delete('/series/:id', (req,res)=>{
        const id = req.params.id

        seriesDao = app.models.Series

        seriesDao.delete(id)
            .then(retorno => {
                if(!retorno.affectedRows){
                    res.status(404).send({erro: 'Serie nao encontrada'})
                    return
                }
                res.status(204).send()
            })
            .catch(erro => {
                console.log('Erro ao deletar ' + erro);
                res.status(500).send({
                    erro: 'erro ao remover'
                })
            })
    })

}

module.exports = series;
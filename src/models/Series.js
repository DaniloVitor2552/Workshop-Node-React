const baseQuery = require('./baseQuery');

class Series {

    lista() {
       return baseQuery('select * from series');

    }

    insere(serie){
        return baseQuery("INSERT into series set ?", serie);

    } 

    buscaPorId(id){
        return baseQuery ("SELECT * FROM series where id = ?",id);

    }

    delete(id){
        return baseQuery ( "DELETE FROM series where id = ?",id)

    }

    atualiza(serie){
        return baseQuery = ( "UPDATE series set ? WHERE id = ?", [serie, serie.id]);
            
    } 

}

module.exports = Series;
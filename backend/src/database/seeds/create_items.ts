import Knex from 'knex'

export async function seed(knex : Knex){
    await knex('items').insert([
        {title: 'Lampadas', image:'Lampadas.svg'},
        {title: 'Pilhas e Baterias', image: 'baterias.svg'},
        {title: 'Papeis e Papelao', image: 'papeis-papelao.svg'},
        {title: 'Residuos Eletronicos', image: 'organicos.svg'},
        {title: 'Residuos Organicos',image: 'organicos.svg'},
        {title: 'Óleo de Cozinha',image: 'oleo.svg'},
    ]);
}
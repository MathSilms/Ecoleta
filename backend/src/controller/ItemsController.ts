import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index( req: Request, res: Response ){
   
            const items = await knex('items').select('*');
            const serializedItems = items.map(item =>{
                return {
                    id: item.id,
                    title: item.title,
                    image_url:`http://192.168.1.10:8080/uploads/${item.image}`,
                };
            })
            exp://192.168.1.10:19000
            return res.json(serializedItems);
        }
}

export default new ItemsController;
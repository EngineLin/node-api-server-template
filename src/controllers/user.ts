import {Request, Response, NextFunction} from 'express'

import {queryUsers} from "../models/user";

export default {
    async getUsers(req: Request, res: Response, next: NextFunction) {
      const users = await queryUsers();
      res.status(200).json(users)
    }
}



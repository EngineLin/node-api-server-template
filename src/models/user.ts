import {query} from './mysql';
import {User} from "../@types";

export async function queryUsers() {
    return await query<User[]>('SELECT * FROM User');
}

import {EntityRepository, Repository} from "typeorm"
import {User} from "../entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User>{
    static findOne(user_receiver: string) {
        throw new Error("Method not implemented.");
    }

}

export {UsersRepositories}
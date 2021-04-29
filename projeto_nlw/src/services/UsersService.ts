import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string) {
        // Check if user exists
        const userExists = await this.usersRepository.findOne({
            email,
        })
        
        // If user exists, return user
        if(userExists) {
            return userExists;
        }

        // If user do not exists, save this new user in database
        const user = this.usersRepository.create({ 
            email,
        });

        await this.usersRepository.save(user);

        return user;

    }
}

export { UsersService };
import User from "./User";
import axiosApi from "../AxiosUtility"


export default class UserServiceImpl {
    public async findAll(): Promise<User[]> {
        try {
            const {data} = await axiosApi.get<User[]>("/users");
            return data;
        } catch (error: any) {
            throw new Error(error);
        }
    }
    public async add(user: User): Promise<User> {
        try {
            return(
            axiosApi.post("/users/", user)
            );
        } catch (error: any) {
            throw new Error(error);
        }
    }
}


import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        'API-KEY': '04c8156f-4a7c-4a31-b07c-622b1f281d6f'
    }
})


export const usersAPI = {
    getUsers(currentPage:number, pageSize:number){
        return instance.get('users?page=currentPage&count=pageSize').then(respons => {
            return respons.data
        })
    }
}

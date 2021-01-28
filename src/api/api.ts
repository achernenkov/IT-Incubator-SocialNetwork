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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })},
    unFollow(id:number){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data.resultCode
        })},
    follow(id:number){
        return instance.post(`follow/${id}`).then(response => {
            return response.data.resultCode
        })
    },
    getUserData(userID: string){
        return instance.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userID).then(obj => {
            return obj.data
        })
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me').then(response => {
            return response.data
        })}
}
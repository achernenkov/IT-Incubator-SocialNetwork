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
        return instance.get(`profile/` + userID).then(response => {
            return response.data
        })
    }
}


export const userProfileAPI = {
    getUserData(userID: string){
        return instance.get(`profile/` + userID).then(response => {
            return response.data
        })
    },
    getUserStatus(userID: string){
        return instance.get(`profile/status/${userID}`).then(response => {
            return response
        })
    },
    updateUserStatus(newStatus: string){
        return instance.put('profile/status',{status: newStatus}).then(response => {
            return response
        })
    }
}


export const authAPI = {
    me(){
        return instance.get('auth/me').then(response => {
            return response.data
        })},
    logIN(login: string, pass: string, remember: boolean){
        return instance.post('auth/login',{email: login, password: pass, rememberMe:remember }).then(response => {
            return response.data.resultCode
        })
    },
    logOut(){
        return instance.delete('auth/login').then(response => {
            return response.data.resultCode
        })
    }
}
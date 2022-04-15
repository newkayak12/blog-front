import Service from "@/service/Service";
class userSvc extends Service{
    signIn(param={}){
        return this.get('/api/user/signIn', param)
            .then(response=>{

                if(response.data.code===200){
                    console.log('로그인성공')
                    const token = response.data.data.token
                    const userData= response.data.data.userData
                    this.setToken(token, userData)
                }
                return response
            })
    }

    signOut() {
        return this.get('/api/user/signOut')
            .then(response => {
                this.deleteToken()
            })
    }

    signUp(param={}) {
        return this.post('/api/user/signUp', param)
            .then(response => {
                if(response.data.code === 200){
                    const token = response.data.data.token
                    const userData= response.data.data.userData
                    this.setToken(token, userData);
                }
                return response;
            });
    }

    changePassword(param={}) {
        return this.patch('/api/user/changePassword', param)
            .then(response => {
                if(response.data.code === 200){
                    const token = response.data.data.token
                    const userData= response.data.data.userData
                    this.setToken(token, userData);
                }
                return response;
            })
    }

    fetchList(param={}) {
        return this.get('/api/board/fetchList', param)
            .then(response => {
                return response.data;
            });
    }

}
export default new userSvc()
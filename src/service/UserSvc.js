import Service from "@/service/Service";
class userSvc extends Service{
    signIn(param={}){
        return this.get('/api/user/signIn', param)
            .then(response=>{

                if(response.data.code===200){
                    console.log("HEI")
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
                if(response.data.code === 200){
                    this.deleteToken()
                }
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


}
export default new userSvc()
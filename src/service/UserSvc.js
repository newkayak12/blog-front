import Service from "@/service/Service";

class userSvc extends Service{
    signIn(param={}){
        return this.get('/api/user/signIn', param)
            .then(response=>{
                return response
            })


    }


}
export default new userSvc()
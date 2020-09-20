export default{
  saveUserName(context:any,username:string){
    context.commit('saveUserName',username)
  }
}
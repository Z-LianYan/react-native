
export default class HttpUtils{
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url).then(response=>response.json()).then(result=>{
                resolve(result)
            }).catch(error =>{
                reject(JSON.stringify(error))
            })
        })
    }
    
    static post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                headers:{
                    Accept:'appliction/json',
                    Content_Type:'appliction/json'
                },
                body:JSON.parse(data)
            }).then(response => response.json()).then( result =>{
                resolve(result);
            }).catch( error => {
                reject(error);
            })
        })
    }
}
import api from "../config/api"

const sendOtp=async(mobile)=>{
try{
const response =  await api.post("",{mobile})
return (response)
}catch(error){

return ( error )
}



};

const checkOtp= async (mobile,code)=>{



    try{
        const response =  await api.post("auth/chek  ",{mobile,code})
        return (response)
        }catch(error){
        
        return ( error )
        };
    }

export {sendOtp,checkOtp}
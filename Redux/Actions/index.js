export const GetProducts=(data)=>{
    return {
        type:'GetProducts',
        payload:data,
}}

export const AddtoCart=(id)=>{
    return{
        type:'AddtoCart',
        payload:id,
    }
}
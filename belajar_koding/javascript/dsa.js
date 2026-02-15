const useParams=()=>{
    const url="shoping.com/product/12"
    const route="shoping.com/product/:id"

    const convert_to_object=(url,route)=>{
        const url_split=url.split("/")
            const matching=route.match(/:\w+/g)
                if(!matching)return {}
            const result=matching.reduce((acc,cur,index)=>{
                const key=cur.replace(/:/g,"")
                const index_route=route.split("/").indexOf(key)
                
                acc[key]=url_split[index_route]
                return acc
            },{})
            return result
    }

}



const shopping=()=>{
    
    const database=[
        {id:1,product:"adidas shoes"},
        {id:2,product:"pillow"},
    ]
}
  
//react look a like 
//use param name fungsi akan dikonversi jadi custom element syarat yang huruf pertamanya adalah uppercase
const register_framework_spa=()=>{

}
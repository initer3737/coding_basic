//todo buat observer untuk mendeteksi perubahan data terkini dan reactive
//buat tiruan dari react js usestate 
const useState=(data)=>{
  const reactive_data=[]
const datas=[]

  datas[0]="buz "
  datas[1]="buz "
  datas[2]="baz"
  
  const data_player={
    name:"k"
  }
  //09:09
//https://www.youtube.com/watch?v=uL9oOZStezw&list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R&index=6

  //ketika ada perubahan data maka 
  //todo data diset misa jadi  maka otomatis data 
  //akan diupdate jadi nilai yang baru
  //reactive_data variable menampung parameter dan nanti akan diinvoke 
  //ketika set data dipanggil dan nanti otomatis akan mengupdate data 
  //secara reactive
  //jika param data itu fungsi maka setdata(val=>val+1)
  ///todo /todo /todo /todo 
  const watcher=val=>{
    reactive_data.push(val);
    //<head>
    //posisi o untuk melompat di bawah

  }
  const setdata=(new_val)=>{
    let data;
    if(typeof new_val=== "function"){
      //jika new_val adalah fungsi maka bisa diambil preval pakai callback
      data_new=new_val(data)
      return reactive_data[0]=data_new     
    }

    return reactive_data[0]=new_val  
  }
  //ambil data pertama saat data pertama kali diinisialisasi
 let get_data=data
  //ambil data terakhir di array untuk mendapatkan data reactive
  const newest_data=()=>{
      watcher(val=>{
        return val 
      })
  }

  return [ newest_data(),setdata] const reactive_data=[]
  //ketika ada perubahan data maka 
  //ketika ada perubahan data maka 
  //todo data diset misa jadi 2 maka otomatis data 
  //akan diupdate jadi nilai yang baru
  //reactive_data variable menampung parameter dan nanti akan diinvoke 
  //ketika set data dipanggil dan nanti otomatis akan mengupdate data 
  //secara reactive
  //jika param data itu fungsi maka setdata(val=>val+1)
  ///todo /todo /todo /todo 
  const watcher=val=>{
    reactive_data.push(val);
    //<head>
    //posisi o untuk melompat di bawah
  }
  const setdata=(new_val)=>{
    let data;
    if(typeof new_val=== "function"){
      //jika new_val adalah fungsi maka bisa diambil preval pakai callback
      data_new=new_val(data)
      return reactive_data[0]=data_new     
    }

    return reactive_data[0]=new_val  
  }
  //ambil data pertama saat data pertama kali diinisialisasi
 let get_data=data
  //ambil data terakhir di array untuk mendapatkan data reactive
  const newest_data=()=>{
      watcher(val=>{
        return val 
      })
  }

  return [ newest_data(),setdata]
}


const useParams=()=>{
    const url="shoping.com/product/12"
    const route="shoping.com/product/:id"

    const convert_to_object=(url,route)=>{
        const url_split=url.split("/")
            const matching=route.match(/:\w+/g)
                if(!matching)return {}
            const result=matching.reduce((acc,cur,index)=>{
                const key=cur
                const index_route=route.split("/").indexOf(key)
                
                acc[key]=url_split[index_route]
                return acc
            },{})
            return result
    }

}

//todo i want to perform asynchronus request 
//to json file so i will create that json file
//making library to handle request 
const axios={
  get:async({url})=>{
    
  },
  post:async({url})=>{

  },

}



//todo saya ingin memmbuat library react sederhana cloning ajah 
//jadi saya mengkonversi beberapa fungsi jadi custom element 
//dan passing props seperti react 
// contohnya fungsi Product maka akan jadi <Product>

const shopping=()=>{

    
    const database=[
        {id:1,product:"adidas shoes"},
        {id:2,product:"pillow"},
    ]

}
  
//react look a like 
//use param name fungsi akan dikonversi jadi custom element 
//syarat yang huruf pertamanya adalah uppercase
//fungsi dibawah adalah mendaftarkan framework sebagai custom 
//element dan menggabungkan props di agar bisa diakses oleh fungsi
const register_framework_spa=()=>{

}

//todo 
//
//
//
//try use state 

const [counter,setCounter]=useState(0)

setCounter(val=>val+10)
setCounter(90)
console.log("counter is ",counter)


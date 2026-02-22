


const user={
  name:"jack",
  age:12
}

//old way 
const names=user 
        names.name

//new ways
const {name,age}=user

console.log("name is ",name)
console.log("age is ",age)

//rename variable
//default value to prevent undefiend properties
const {name:username="guest",city="solo"} =user

console.log(username);
console.log('city is ',city);

//nested object
const data2={
  name:"jaka",
  age:12,
  links:{
    github:"github",
    web:"https://",
  }
}

//rest sintak use ...
const {...restData}=data2

  console.log("rest syntaks ",restData)

const greet=({name})=>{
  return "wellcome "+name
}

console.log(greet(data2))

//rest sintak





const data_diri={
  name:"manabu seika",
  age:16,
  links:[
    { github:"github",
      web:"https://", 
    },
    { github:"github",
      web:"https://", 
    },
    { github:"github",
      web:"https://", 
    },
    { github:"github",
      web:"https://", 
    },
  ] 
}


//const { links:[one] }=data_diri
const { links:[{github,web}] }=data_diri

//console.log(github," ini github")

const jpo={
  name:"jaka",
  project:"jembatan penyeberangan orang",
  data:{
    ktp:"ktp",

  }
}


const get_data=({
  name="guest",
  data:{
    ktp
  }={
    ktp:"guest"
  }
})=>{
  console.log("my name is ",name)
  console.log("my ktp is ",ktp)

}

get_data(jpo)


//array destructuring
const langs=[
["rust","golang"]
  ,
  "php",
  "html"
]

const [one,two,three,four="nothing "]=langs
//rest sintaks harus di akhir element
const [[rust,golang],...reslang]=langs
console.log(golang)

//https://dev.nauv.al/course/destructuring-assignment-es6/array-default-values
//swap variable
let firstname="jaka"

let lastname="nurul huda"

;[firstname,lastname]=[lastname,firstname]

console.log(firstname)
console.log(lastname)


const fruits=()=>['apple','ananas',"grape","watermelon"]

const [a,n, ,w]=fruits()
console.log(a,n)


//=====ignore element by inserting , [coma]
console.log(w)

const userdatas=[
  {name:"rizal",age:12},
  {name:"rizal 1",age:14},
  {name:"rizal 2",age:19},
]
//ignore bisa dgunakkan , untuk skip destructuring
const [{name},{name:name2}]=userdatas


//loop destructuring lloop
for(const {name} of userdatas){
    console.log("name ",name)
}

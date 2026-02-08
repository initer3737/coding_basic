use std::collections::HashMap;
use chrono::{DateTime, Utc};
fn main() {
    println!("Hello, world!");
     let name="agus";
         //name="kilo";
     println!("{}",name);
     
}


#[test]
fn name(){
   //cargo test nama fungsi -- --exact --nocapture
   println!("my name is {}","jack");
}

#[test]
fn data_structures(){
    //array
    let fruits=["apple","ananas","sarraku"];
        println!("panjang array {}",fruits.len());
        println!("array semua {:?}",fruits);
        for fruit in fruits{
            println!("fruit is {}",fruit);
        }
        //vec is array that can srink or grow
    let mut fruits2=vec!["apple","ananas"];
            fruits2.push("belimbing");
            fruits2.pop();
            fruits2.insert(5,"jackfruit");
            fruits2.remove(0);
        println!("isi vectors {:?}",fruits2);
    //tuples
 let datas=("jaka1","jaka2",456,"belajar rust nih kyun");
   let (name1,name2,name3,_nouse)=datas;

    println!("name 1 is {}",name1);
    println!("name 2 is {}",name2);
    println!("name 3 is {}",name3);
    println!("kalimat: {}",datas.3);
        //hashmap
let mut bio=HashMap::new();
    //untuk update value dia akan otomatis menimpa yang sudah ada
        bio.insert("name","initer3737");
        bio.insert("id","3765490");
        bio.insert("website","https://initer3737.github.io");
println!("hashmap {:?}",bio);

for (website,id) in &bio{
    println!("bio website {} id {}",website,id);
}

//structs
struct Person{
    name:String,
    age:u32,
    talk:fn(name:String)->()    
}

fn talk(name:String){
        println!("iam {}",name);
    }
let time:DateTime<Utc>=Utc::now();


let jack:Person=Person{ //i32 for int
    name:String::from("jack sparrow"),
    age:time.format("%Y").to_string().parse::<u32>().unwrap()-1943,
    talk:talk
};

jack.name;
jack.age;
(jack.talk)(String::from("jack sparrow"));

enum Gender{
    Male,
    Female
}

let mut jackal:HashMap<&str, Gender>=HashMap::new();
    jackal.insert("gender",Gender::Male);
let mut princes_kiku:HashMap<&str, Gender>=HashMap::new();
    princes_kiku.insert("gender",Gender::Female);
}
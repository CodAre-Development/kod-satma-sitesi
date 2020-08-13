var express = require("express");
var expressLayouts = require("express-ejs-layouts");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

var app = express();
const fs = require('fs');
//database start
let ürünler2 =
[
  {
  
      ürün_id: "1",
      ürün_adi: "test",
      ürün_bilgi: "Test ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"
    
  },
  {
  
      ürün_id: "2",
      ürün_adi: "test2",
      ürün_bilgi: "Test2 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"


  },
    {
  
      ürün_id: "3",
      ürün_adi: "test3",
      ürün_bilgi: "Test3 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"
    
  },
  {
  
      ürün_id: "4",
      ürün_adi: "test4",
      ürün_bilgi: "Test4 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"


  },
    {
  
      ürün_id: "5",
      ürün_adi: "test5",
      ürün_bilgi: "Test5 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"
    
  },
  {
  
      ürün_id: "6",
      ürün_adi: "test6",
      ürün_bilgi: "Test6 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"


  },
    {
  
      ürün_id: "7",
      ürün_adi: "test7",
      ürün_bilgi: "Test7 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"
    
  },
  {
  
      ürün_id: "8",
      ürün_adi: "test8",
      ürün_bilgi: "Test8 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"


  },
    {
  
      ürün_id: "9",
      ürün_adi: "test9",
      ürün_bilgi: "Test9 ürünü",
      ürün_resim: "https://raksix.wtf/resim/a9ltw.png"
    
  }
      
  

]

let ürünler =
{
  
  
    1: {
      ürün_id: "1",
      ürün_adi: "test",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    2: {
      ürün_id: "2",
      ürün_adi: "test2",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.",
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"

    },
    3: {
      ürün_id: "3",
      ürün_adi: "test3",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    4: {
      ürün_id: "4",
      ürün_adi: "test4",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    5: {
      ürün_id: "5",
      ürün_adi: "test5",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    6: {
      ürün_id: "6",
      ürün_adi: "test6",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    7: {
      ürün_id: "7",
      ürün_adi: "test7",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    8: {
      ürün_id: "8",
      ürün_adi: "test8",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    },
    9: {
      ürün_id: "9",
      ürün_adi: "test9",
      uzun_bilgi: "La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak. La hawla qula ta bawe ciyad tennim orospu çocuğu ta ta ta ta bum bum yarak bumbe yarak.", 
      youtube: "https://www.youtube.com/embed/G1IbRujko-A"
    }
  
}

const two_api = "./anan.json";




app.get("/satinal/:urunid", (req, res) => {
  const anan = ürünler[req.params.urunid]
  return res.render("sayfa.ejs", {anan:anan });
});

app.get("/api", (req, res) => {
  res.send(ürünler);
});

app.get("/testapi", (req, res) => {
  let data = fs.readFileSync(two_api, "utf-8")
  res.send(data);
});

app.get('/api/:urunid', (req, res) => {
  return res.send(ürünler[req.params.urunid]);
});

//database end


//express start
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index.ejs", {ürünler : ürünler2});
});

app.get("/sayfa", function(req, res) {
  res.render("sayfa.ejs");
});

//express end






app.listen(3000);

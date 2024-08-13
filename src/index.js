import express from "express"
import cors from "cors"
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sibcare",
  password: "",
  port: 3306,
});


const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get("/api/procedimentos/:filtro/:id",(req,res)=>{
  const body = req.params
  const q = `select * from procedimentos  where categoria = '${body.filtro}' and id !=${body.id} order by rand() limit 5`
  db.query(q,(err,data)=>{
      if(err) return res.status(500).json(data)
          return res.status(200).json(data) 
  })
})

app.get("/api/procedimentos",(req,res)=>{
    const q = `select * from procedimentos`
    db.query(q,(err,data)=>{
        if(err) return res.status(500).json(data)
            return res.status(200).json(data) 
    })
})
app.get("/api/procedimento/:id",(req,res)=>{
  const re = req.params
  const q = `select * from procedimentos where id = ${re.id} `
  db.query(q,(err,data)=>{
      if(err) return res.status(500).json(data)
          return res.status(200).json(data) 
  })
})

app.get("/api/aparelhos/",(req,res)=>{
  const re = req.params
  const q = `select * from aparelhos `
  db.query(q,(err,data)=>{
      if(err) return res.status(500).json(data)
          return res.status(200).json(data) 
  })
})

app.get("/api/aparelhos/:id",(req,res)=>{
  const re = req.params
  const q = `select * from aparelhos where id = ${re.id} `
  db.query(q,(err,data)=>{
      if(err) return res.status(500).json(data)
          return res.status(200).json(data) 
  })
})



app.listen(port,()=>{

})


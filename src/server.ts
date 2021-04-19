import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.json({
        message: "Hello NLW05",
    });
});

app.post("/users", (req, res)=>{
    return res.json({
        message: "Usuário salvo com sucesso!",
    });
})

app.listen(3001, ()=> console.log("Server is running on port 3001"));
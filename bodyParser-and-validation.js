const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const validator = require('validatorjs');

const app = new Koa();
app.use(bodyParser());

const information = {
    name: 'required|string',
    email: 'required|email',
    id: 'required|integer'
};

app.use((ctx)=>{
    const body = ctx.request.body;
    const validation = new validator(body, information);
    if(validation.passes()){
        ctx.status = 200;
        console.log(ctx.status);
        ctx.body = `Name: ${body.name}\nEmail: ${body.email}\nID: ${body.id}`;
    }
    else{
        ctx.status = 400;
        console.log(ctx.status);
        ctx.body = "Informations are not valid";
    }
});

app.listen(3000, () => {
    console.log("Server is running...");
});
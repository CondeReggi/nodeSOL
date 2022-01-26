require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const exec = require('child_process').exec;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

//ROUTES
//app.use(auth.routes)

const confServidores = [
	{
		ip: "192.168.1.130",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.131",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.132",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.136",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.137",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.138",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.140",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.146",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.145",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.146",
		user:'slabadie',
		pwd:'slabadie'
	},
	{
		ip: "192.168.1.150",
		user:'slabadie',
		pwd:'slabadie'
	},
];

app.get("/shutdown/:ip", (req, res) => {
	const servidor = confServidores.filter(servidor=>servidor.ip === req.params.ip)[0]
	
	if (servidor) {
		exec(`net rpc SHUTDOWN -f -r -I ${servidor.ip} -U ${servidor.user}%${servidor.pwd}`,(error,stdout,stderr)=>{
			console.log('error: ',error)
			console.log('error: ',stdout)
			console.log('error: ',stderr)
		})
		res.json({msg:'Servidor apagado con exito'})
	}else{
		res.json({msg:'Ese servidor no existe capo'})
	}
	
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Que peligro

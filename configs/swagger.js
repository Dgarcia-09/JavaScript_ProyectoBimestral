import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"1.0.0",
        info:{
            title: "Gestor de Tienda API",
            version: "1.0.0",
            description: "APi para la gestion de una tienda",
            contact:{
                name: "Diego Fernando Garcia Galvez",
                email: "dieggoggarciaz@gmail.com"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/gestionTienda/v1"
            }
        ]
    },
    apis:[
        "./src/auth/auth.routes.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}
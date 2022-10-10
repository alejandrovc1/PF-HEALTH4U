//La carpeta middlewares contiene middlewares personalizados para proteger rutas
//exporta todos los middlewares

import * as authJwt from "./authJwt"
import * as verifySignUp from "./verifySignup"
export { authJwt, verifySignUp }
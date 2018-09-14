// import { CreateUserRouteService } from "./create-user-route.service";

// const argon2 = require('argon2');

// export CreateUserRouteService(req: Request, res:Response) {
//     const credentials = req.body;

//     argon2.hash(credentials.password)
//         .then(passwordDigest => {

//             const user = db.createUser(credentials.email, credentials.password);

//             console.log(USERS);

//             res.status(200).json({ id: user.id, email: user.email });

//         });

// }

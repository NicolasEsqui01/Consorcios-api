import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express, { Application, Request, Response, NextFunction } from 'express';

const db = require("./models");
import routes from "./routes/index";
import { messageError, messageGreen, messageMagenta } from "./utils/logs";

// ______________________________________________
//  Master Yoda===Rober Villa                 ____
//                _.' :  `._
//          .-.'`.  ;   .'`.-.
//  __      / : ___\ ;  /___ ; \      __
// ,'_ ""--.:__;".-.";: :".-.":__;.--"" _`,
// :' `.t""--.. '<@.`;_  ',@>` ..--""j.' `;
//       `:-.._J '-.-'L__ `-- ' L_..-;'
//         "-.__ ;  .-"  "-.  : __.-"
//             L ' /.------.\ ' J
//             "-.   "--"   .-"
//             __.l"-:_JL_;-";.__
//         .-j/'.;  ;""""  / .'\"-.
//       .' /:`. "-.:     .-" .';  `.
//     .-"  / ;  "-. "-..-" .-"  :    "-.
// .+"-.  : :      "-.__.-"      ;-._   \
// ; \  `.; ;                    : : "+. ;
// :  ;   ; ;                    : ;  : \:
// ;  :   ; :                    ;:   ;  :
// : \  ;  :  ;                  : ;  /  ::
// ;  ; :   ; :                  ;   :   ;:
// :  :  ;  :  ;                : :  ;  : ;
// ;\    :   ; :                ; ;     ; ;
// : `."-;   :  ;              :  ;    /  ;
// ;    -:   ; :              ;  : .-"   :
// :\     \  :  ;            : \.-"      :
//   ;`.    \  ; :            ;.'_..--  / ;
//   :  "-.  "-:  ;          :/."      .'  :
//   \         \ :          ;/  __        :
//     \       .-`.\        /t-""  ":-+.   :
//     `.  .-"    `l    __/ /`. :  ; ; \  ;
//       \   .-" .-"-.-"  .' .'j \  /   ;/
//         \ / .-"   /.     .'.' ;_:'    ;
//         :-""-.`./-.'     /    `.___.'
//               \ `t  ._  /  ...
//                 "-.t-._:'
//
// _____________"Feel the force!"_____________

const app: Application = express();
const port = process.env.PORT || 8080;

dotenv.config();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middlewares.
app.use(
  cors({
    origin: ["http://localhost:8080"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);

// routes
//Check my app up
app.use("/ok", (_req, res) => {
  res.send("ok");
});
//Api routes 
app.use("/api", routes);

// custom error middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);

  return res.status(500).json({
    status: 500,
    err: err.name,
    message: err.message,
  });
});
try {
  db.sequelize.sync({ force: false }).then(() => {
    messageMagenta(`DB connected and ready to fight (ง •̀_•́)ง`);
    app.listen(port, (): void => {
      messageGreen(`Server up on port ${port} and ready to fight ᄾ(•̀_•́ᄾ)`);
    });
  });
} catch (error) {
  messageError(`Error occured: ${error.message}`);
}

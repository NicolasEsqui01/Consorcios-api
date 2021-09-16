"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const index_1 = __importDefault(require("./routes/index"));
const logs_1 = require("./utils/logs");
const app = express_1.default();
const port = process.env.PORT || 3000;
dotenv_1.default.config();
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default({
    origin: ['http://localhost:8000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: true,
}));
app.use('/', index_1.default);
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 500,
        err: err.name,
        message: err.message,
    });
});
try {
    db_1.default.sync({ force: false }).then(() => {
        logs_1.messageMagenta(`DB connected and ready to fight (ง •̀_•́)ง`);
        app.listen(port, () => {
            logs_1.messageGreen(`Server up on port ${port} and ready to fight ᄾ(•̀_•́ᄾ)`);
        });
    });
}
catch (error) {
    logs_1.messageError(`Error occured: ${error.message}`);
}

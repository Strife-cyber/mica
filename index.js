import cors from "cors";
import path from "path";
import helmet from "helmet";
import express from "express";
import { load } from 'js-yaml';
import readline from "readline";
import router from "./routes.js";
import { readFileSync } from "fs";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import expressListEndpoints from "express-list-endpoints";

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

const swaggerDocument = load(readFileSync('./swagger.yaml', 'utf8'));

app.use(cors({
    origin: [
        'http://localhost:5173'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/uploads', express.static(path.join(process.cwd(), "uploads")));

function listenForQuitCommand() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        if (input.trim().toLowerCase() === 'q') {
            console.log("Shutting down server...");
            process.exit(0);
        } else if (input.trim().toLowerCase() === 'c') {
            console.clear();
        } else if (input.trim().toLowerCase() === 'l') {
            console.log(expressListEndpoints(router));
        }
    });
}

app.listen(PORT, () => {
    console.clear();
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Press 'q' to quit the server.");
    listenForQuitCommand();
});


import express, { Application, Request, Response } from "express";

import { PORT } from "./config/index";

const app = express();

app.get("/", (req: Request, res: Response) => {
    console.log("Healthy...");
});

app.listen(PORT, () => console.log(`App listning on port ${PORT}`));

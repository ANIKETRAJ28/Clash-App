// package imports
import express, { Application, Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";

// named imports
import { PORT } from "./config/env.js";
import { sendEmail } from "./config/mail.js";
import { emailQueueName, emailQueue, queueWorker } from "./jobs/index.js";
import routes from "./routes/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// set view path
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.use("/api", routes);

app.get("/", async (req: Request, res: Response) => {
    // const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, {name: "Aniket Raj"});
    // await sendEmail("logelov307@hraifi.com", "Testing SMTP", html);
    // await emailQueue.add(emailQueueName, {
    //     to: "yacojid818@paxnw.com",
    //     subject: "Testing smtp",
    //     body: html
    // });
    res.send({msg: "Email sent successfully!"});
});

app.listen(PORT, () => console.log(`App listning on port ${PORT}`));

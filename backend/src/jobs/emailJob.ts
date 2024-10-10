// package imports
import { Job, Queue, Worker } from "bullmq";

// named imports
import { defaultQueueOptions, redisConnection } from "../config/queue.js";
import { sendEmail } from "../config/mail.js";

interface emailJobDataType {
    to: string,
    subject: string,
    body: string
};

export const emailQueueName = "emailQueue";

export const emailQueue = new Queue(emailQueueName, {
    connection: redisConnection,
    defaultJobOptions: defaultQueueOptions
});

export const queueWorker = new Worker(
    emailQueueName, 
    async (job: Job) => {
        const data: emailJobDataType = job.data;
        await sendEmail(data.to, data.subject, data.body);
    }, {
        connection: redisConnection
    }
);
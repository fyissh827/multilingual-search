// consumer.ts
import { insert } from "../../modules/processes/insert.js";
import { kafka } from "./client.js";

const TOPIC = process.env.KAFKATOPIC;
const GROUP_ID = process.env.KAFKAGROUPID;
if (!GROUP_ID) {
  throw new Error("KAFKA_GROUP_ID is not defined");
}
const consumer = kafka.consumer({ groupId: GROUP_ID });

export const startConsumer = async (): Promise<void> => {
  try {
    await consumer.connect();
    console.log("Kafka connected");

    await consumer.subscribe({
      topic: TOPIC as any,
      fromBeginning: false,
    });

    await consumer.run({
      eachMessage: async ({ topic, partition, message } : any) => {
        const key = message.key?.toString();
        const value = message.value?.toString();

        console.log({
          topic,
          partition,
          offset: message.offset,
          key,
          value,
        });
        
        await insert(value as string);
        
      },
    });
  } catch (error) {
    process.exit(1);
  }
};



// Start
startConsumer();

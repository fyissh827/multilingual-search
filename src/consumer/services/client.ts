
import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "my-ts-consumer",
  brokers: [process.env.KAFKA_CLIENT ?? "localhost:9092"], 
  retry: {
    initialRetryTime: 300,
    retries: 10,
  },
});

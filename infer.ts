// Generics
type QueueJob<Q extends string, P> = {
  queue: Q;
  payload: P;
};

type WelcomeEmail = {
  to: string;
  body: string;
};

type ProcessPayment = {
  userName: string;
  accountId: number;
};

type WelcomeEmailJob = QueueJob<"email", WelcomeEmail>;
type ProcessPaymentJob = QueueJob<"payment", ProcessPayment>;

type QueueName<J extends QueueJob<string, unknown>> = J extends QueueJob<
  infer N,
  unknown
>
  ? N
  : never;

type EmailQueue = QueueName<WelcomeEmailJob>;
type PaymentQueue = QueueName<ProcessPaymentJob>;

// Arrays

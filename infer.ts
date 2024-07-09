// Infer generic type

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

// pulls out queue name
type QueueName<J extends QueueJob<string, unknown>> = J extends QueueJob<
  infer N,
  unknown
>
  ? N
  : never;

type EmailQueue = QueueName<WelcomeEmailJob>;
type PaymentQueue = QueueName<ProcessPaymentJob>;

// infer payload type
type QueuePayload<Q extends QueueJob<string, unknown>> = Q extends QueueJob<
  string,
  infer TPayload
>
  ? TPayload
  : never;

type EmailPayload = QueuePayload<WelcomeEmailJob>;

// Arrays
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? U extends F
    ? true
    : Includes<R, U>
  : never;

// Functions
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type MyReturnType<T> = T extends (args: any[]) => infer R ? R : never;

// Template litterals
type Chars = " " | "\n" | "\t";
type Trim<S extends string> = S extends `${Chars}${infer SS}`
  ? Trim<SS>
  : S extends `${infer SS}${Chars}`
  ? Trim<SS>
  : S;

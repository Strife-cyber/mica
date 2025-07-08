
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model expenses
 * 
 */
export type expenses = $Result.DefaultSelection<Prisma.$expensesPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model inventory_transactions
 * 
 */
export type inventory_transactions = $Result.DefaultSelection<Prisma.$inventory_transactionsPayload>
/**
 * Model purchase_items
 * 
 */
export type purchase_items = $Result.DefaultSelection<Prisma.$purchase_itemsPayload>
/**
 * Model purchases
 * 
 */
export type purchases = $Result.DefaultSelection<Prisma.$purchasesPayload>
/**
 * Model sales
 * 
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>
/**
 * Model sales_items
 * 
 */
export type sales_items = $Result.DefaultSelection<Prisma.$sales_itemsPayload>
/**
 * Model suppliers
 * 
 */
export type suppliers = $Result.DefaultSelection<Prisma.$suppliersPayload>
/**
 * Model business
 * 
 */
export type business = $Result.DefaultSelection<Prisma.$businessPayload>
/**
 * Model plans
 * 
 */
export type plans = $Result.DefaultSelection<Prisma.$plansPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenses`: Exposes CRUD operations for the **expenses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expenses.findMany()
    * ```
    */
  get expenses(): Prisma.expensesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory_transactions`: Exposes CRUD operations for the **inventory_transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventory_transactions
    * const inventory_transactions = await prisma.inventory_transactions.findMany()
    * ```
    */
  get inventory_transactions(): Prisma.inventory_transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase_items`: Exposes CRUD operations for the **purchase_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchase_items
    * const purchase_items = await prisma.purchase_items.findMany()
    * ```
    */
  get purchase_items(): Prisma.purchase_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchases`: Exposes CRUD operations for the **purchases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchases.findMany()
    * ```
    */
  get purchases(): Prisma.purchasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.salesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales_items`: Exposes CRUD operations for the **sales_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales_items
    * const sales_items = await prisma.sales_items.findMany()
    * ```
    */
  get sales_items(): Prisma.sales_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.suppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.businessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plans`: Exposes CRUD operations for the **plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plans.findMany()
    * ```
    */
  get plans(): Prisma.plansDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    customers: 'customers',
    expenses: 'expenses',
    inventory: 'inventory',
    inventory_transactions: 'inventory_transactions',
    purchase_items: 'purchase_items',
    purchases: 'purchases',
    sales: 'sales',
    sales_items: 'sales_items',
    suppliers: 'suppliers',
    business: 'business',
    plans: 'plans',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customers" | "expenses" | "inventory" | "inventory_transactions" | "purchase_items" | "purchases" | "sales" | "sales_items" | "suppliers" | "business" | "plans" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      expenses: {
        payload: Prisma.$expensesPayload<ExtArgs>
        fields: Prisma.expensesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expensesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expensesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findFirst: {
            args: Prisma.expensesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expensesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          findMany: {
            args: Prisma.expensesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          create: {
            args: Prisma.expensesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          createMany: {
            args: Prisma.expensesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expensesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          delete: {
            args: Prisma.expensesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          update: {
            args: Prisma.expensesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          deleteMany: {
            args: Prisma.expensesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expensesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expensesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>[]
          }
          upsert: {
            args: Prisma.expensesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensesPayload>
          }
          aggregate: {
            args: Prisma.ExpensesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenses>
          }
          groupBy: {
            args: Prisma.expensesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpensesGroupByOutputType>[]
          }
          count: {
            args: Prisma.expensesCountArgs<ExtArgs>
            result: $Utils.Optional<ExpensesCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      inventory_transactions: {
        payload: Prisma.$inventory_transactionsPayload<ExtArgs>
        fields: Prisma.inventory_transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventory_transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventory_transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          findFirst: {
            args: Prisma.inventory_transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventory_transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          findMany: {
            args: Prisma.inventory_transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>[]
          }
          create: {
            args: Prisma.inventory_transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          createMany: {
            args: Prisma.inventory_transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventory_transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>[]
          }
          delete: {
            args: Prisma.inventory_transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          update: {
            args: Prisma.inventory_transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          deleteMany: {
            args: Prisma.inventory_transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventory_transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventory_transactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>[]
          }
          upsert: {
            args: Prisma.inventory_transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventory_transactionsPayload>
          }
          aggregate: {
            args: Prisma.Inventory_transactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory_transactions>
          }
          groupBy: {
            args: Prisma.inventory_transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inventory_transactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventory_transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<Inventory_transactionsCountAggregateOutputType> | number
          }
        }
      }
      purchase_items: {
        payload: Prisma.$purchase_itemsPayload<ExtArgs>
        fields: Prisma.purchase_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchase_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchase_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>
          }
          findFirst: {
            args: Prisma.purchase_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchase_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>
          }
          findMany: {
            args: Prisma.purchase_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>[]
          }
          create: {
            args: Prisma.purchase_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>
          }
          createMany: {
            args: Prisma.purchase_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.purchase_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>[]
          }
          delete: {
            args: Prisma.purchase_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>
          }
          update: {
            args: Prisma.purchase_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>
          }
          deleteMany: {
            args: Prisma.purchase_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchase_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.purchase_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>[]
          }
          upsert: {
            args: Prisma.purchase_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchase_itemsPayload>
          }
          aggregate: {
            args: Prisma.Purchase_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase_items>
          }
          groupBy: {
            args: Prisma.purchase_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Purchase_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchase_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Purchase_itemsCountAggregateOutputType> | number
          }
        }
      }
      purchases: {
        payload: Prisma.$purchasesPayload<ExtArgs>
        fields: Prisma.purchasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.purchasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.purchasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          findFirst: {
            args: Prisma.purchasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.purchasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          findMany: {
            args: Prisma.purchasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>[]
          }
          create: {
            args: Prisma.purchasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          createMany: {
            args: Prisma.purchasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.purchasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>[]
          }
          delete: {
            args: Prisma.purchasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          update: {
            args: Prisma.purchasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          deleteMany: {
            args: Prisma.purchasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.purchasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.purchasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>[]
          }
          upsert: {
            args: Prisma.purchasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$purchasesPayload>
          }
          aggregate: {
            args: Prisma.PurchasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchases>
          }
          groupBy: {
            args: Prisma.purchasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.purchasesCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasesCountAggregateOutputType> | number
          }
        }
      }
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>
        fields: Prisma.salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.salesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
          }
        }
      }
      sales_items: {
        payload: Prisma.$sales_itemsPayload<ExtArgs>
        fields: Prisma.sales_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sales_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sales_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          findFirst: {
            args: Prisma.sales_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sales_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          findMany: {
            args: Prisma.sales_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>[]
          }
          create: {
            args: Prisma.sales_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          createMany: {
            args: Prisma.sales_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sales_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>[]
          }
          delete: {
            args: Prisma.sales_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          update: {
            args: Prisma.sales_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          deleteMany: {
            args: Prisma.sales_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sales_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sales_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>[]
          }
          upsert: {
            args: Prisma.sales_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sales_itemsPayload>
          }
          aggregate: {
            args: Prisma.Sales_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales_items>
          }
          groupBy: {
            args: Prisma.sales_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sales_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sales_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Sales_itemsCountAggregateOutputType> | number
          }
        }
      }
      suppliers: {
        payload: Prisma.$suppliersPayload<ExtArgs>
        fields: Prisma.suppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.suppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.suppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findFirst: {
            args: Prisma.suppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.suppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          findMany: {
            args: Prisma.suppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          create: {
            args: Prisma.suppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          createMany: {
            args: Prisma.suppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.suppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          delete: {
            args: Prisma.suppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          update: {
            args: Prisma.suppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          deleteMany: {
            args: Prisma.suppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.suppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.suppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>[]
          }
          upsert: {
            args: Prisma.suppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$suppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.suppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.suppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      business: {
        payload: Prisma.$businessPayload<ExtArgs>
        fields: Prisma.businessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.businessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.businessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          findFirst: {
            args: Prisma.businessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.businessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          findMany: {
            args: Prisma.businessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[]
          }
          create: {
            args: Prisma.businessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          createMany: {
            args: Prisma.businessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.businessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[]
          }
          delete: {
            args: Prisma.businessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          update: {
            args: Prisma.businessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          deleteMany: {
            args: Prisma.businessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.businessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.businessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[]
          }
          upsert: {
            args: Prisma.businessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$businessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.businessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.businessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      plans: {
        payload: Prisma.$plansPayload<ExtArgs>
        fields: Prisma.plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          findFirst: {
            args: Prisma.plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          findMany: {
            args: Prisma.plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>[]
          }
          create: {
            args: Prisma.plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          createMany: {
            args: Prisma.plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.plansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>[]
          }
          delete: {
            args: Prisma.plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          update: {
            args: Prisma.plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          deleteMany: {
            args: Prisma.plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.plansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>[]
          }
          upsert: {
            args: Prisma.plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$plansPayload>
          }
          aggregate: {
            args: Prisma.PlansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlans>
          }
          groupBy: {
            args: Prisma.plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlansGroupByOutputType>[]
          }
          count: {
            args: Prisma.plansCountArgs<ExtArgs>
            result: $Utils.Optional<PlansCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customers?: customersOmit
    expenses?: expensesOmit
    inventory?: inventoryOmit
    inventory_transactions?: inventory_transactionsOmit
    purchase_items?: purchase_itemsOmit
    purchases?: purchasesOmit
    sales?: salesOmit
    sales_items?: sales_itemsOmit
    suppliers?: suppliersOmit
    business?: businessOmit
    plans?: plansOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    sales: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomersCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    inventory_transactions: number
    purchase_items: number
    sales_items: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory_transactions?: boolean | InventoryCountOutputTypeCountInventory_transactionsArgs
    purchase_items?: boolean | InventoryCountOutputTypeCountPurchase_itemsArgs
    sales_items?: boolean | InventoryCountOutputTypeCountSales_itemsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountInventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_transactionsWhereInput
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountPurchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_itemsWhereInput
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountSales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
  }


  /**
   * Count Type PurchasesCountOutputType
   */

  export type PurchasesCountOutputType = {
    purchase_items: number
  }

  export type PurchasesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_items?: boolean | PurchasesCountOutputTypeCountPurchase_itemsArgs
  }

  // Custom InputTypes
  /**
   * PurchasesCountOutputType without action
   */
  export type PurchasesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasesCountOutputType
     */
    select?: PurchasesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchasesCountOutputType without action
   */
  export type PurchasesCountOutputTypeCountPurchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_itemsWhereInput
  }


  /**
   * Count Type SalesCountOutputType
   */

  export type SalesCountOutputType = {
    sales_items: number
  }

  export type SalesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales_items?: boolean | SalesCountOutputTypeCountSales_itemsArgs
  }

  // Custom InputTypes
  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesCountOutputType
     */
    select?: SalesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalesCountOutputType without action
   */
  export type SalesCountOutputTypeCountSales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    inventory: number
    purchases: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | SuppliersCountOutputTypeCountInventoryArgs
    purchases?: boolean | SuppliersCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    expenses: number
    customers: number
    suppliers: number
    inventory: number
    purchases: number
    purchase_items: number
    inventory_transactions: number
    sales: number
    sales_items: number
    business: number
    plan: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | UsersCountOutputTypeCountExpensesArgs
    customers?: boolean | UsersCountOutputTypeCountCustomersArgs
    suppliers?: boolean | UsersCountOutputTypeCountSuppliersArgs
    inventory?: boolean | UsersCountOutputTypeCountInventoryArgs
    purchases?: boolean | UsersCountOutputTypeCountPurchasesArgs
    purchase_items?: boolean | UsersCountOutputTypeCountPurchase_itemsArgs
    inventory_transactions?: boolean | UsersCountOutputTypeCountInventory_transactionsArgs
    sales?: boolean | UsersCountOutputTypeCountSalesArgs
    sales_items?: boolean | UsersCountOutputTypeCountSales_itemsArgs
    business?: boolean | UsersCountOutputTypeCountBusinessArgs
    plan?: boolean | UsersCountOutputTypeCountPlanArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSuppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPurchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_itemsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountInventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_transactionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBusinessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plansWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    email: number
    phone: number
    address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CustomersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CustomersMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomersMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomersCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    id: number
    user_id: number
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    sales?: boolean | customers$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "email" | "phone" | "address" | "created_at" | "updated_at", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | customers$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      sales: Prisma.$salesPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string | null
      email: string | null
      phone: string | null
      address: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customersWithIdOnly = await prisma.customers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customersWithIdOnly = await prisma.customers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends customers$salesArgs<ExtArgs> = {}>(args?: Subset<T, customers$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly id: FieldRef<"customers", 'Int'>
    readonly user_id: FieldRef<"customers", 'Int'>
    readonly name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly address: FieldRef<"customers", 'String'>
    readonly created_at: FieldRef<"customers", 'DateTime'>
    readonly updated_at: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.sales
   */
  export type customers$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model expenses
   */

  export type AggregateExpenses = {
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  export type ExpensesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type ExpensesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    amount: Decimal | null
  }

  export type ExpensesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    description: string | null
    amount: Decimal | null
    date: Date | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExpensesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    description: string | null
    amount: Decimal | null
    date: Date | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ExpensesCountAggregateOutputType = {
    id: number
    user_id: number
    description: number
    amount: number
    date: number
    category: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ExpensesAvgAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type ExpensesSumAggregateInputType = {
    id?: true
    user_id?: true
    amount?: true
  }

  export type ExpensesMinAggregateInputType = {
    id?: true
    user_id?: true
    description?: true
    amount?: true
    date?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type ExpensesMaxAggregateInputType = {
    id?: true
    user_id?: true
    description?: true
    amount?: true
    date?: true
    category?: true
    created_at?: true
    updated_at?: true
  }

  export type ExpensesCountAggregateInputType = {
    id?: true
    user_id?: true
    description?: true
    amount?: true
    date?: true
    category?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ExpensesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to aggregate.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpensesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpensesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpensesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpensesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpensesMaxAggregateInputType
  }

  export type GetExpensesAggregateType<T extends ExpensesAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenses[P]>
      : GetScalarType<T[P], AggregateExpenses[P]>
  }




  export type expensesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithAggregationInput | expensesOrderByWithAggregationInput[]
    by: ExpensesScalarFieldEnum[] | ExpensesScalarFieldEnum
    having?: expensesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpensesCountAggregateInputType | true
    _avg?: ExpensesAvgAggregateInputType
    _sum?: ExpensesSumAggregateInputType
    _min?: ExpensesMinAggregateInputType
    _max?: ExpensesMaxAggregateInputType
  }

  export type ExpensesGroupByOutputType = {
    id: number
    user_id: number | null
    description: string | null
    amount: Decimal | null
    date: Date | null
    category: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: ExpensesCountAggregateOutputType | null
    _avg: ExpensesAvgAggregateOutputType | null
    _sum: ExpensesSumAggregateOutputType | null
    _min: ExpensesMinAggregateOutputType | null
    _max: ExpensesMaxAggregateOutputType | null
  }

  type GetExpensesGroupByPayload<T extends expensesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpensesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpensesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
            : GetScalarType<T[P], ExpensesGroupByOutputType[P]>
        }
      >
    >


  export type expensesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | expenses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | expenses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | expenses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["expenses"]>

  export type expensesSelectScalar = {
    id?: boolean
    user_id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type expensesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "description" | "amount" | "date" | "category" | "created_at" | "updated_at", ExtArgs["result"]["expenses"]>
  export type expensesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | expenses$usersArgs<ExtArgs>
  }
  export type expensesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | expenses$usersArgs<ExtArgs>
  }
  export type expensesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | expenses$usersArgs<ExtArgs>
  }

  export type $expensesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expenses"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      description: string | null
      amount: Prisma.Decimal | null
      date: Date | null
      category: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["expenses"]>
    composites: {}
  }

  type expensesGetPayload<S extends boolean | null | undefined | expensesDefaultArgs> = $Result.GetResult<Prisma.$expensesPayload, S>

  type expensesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expensesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpensesCountAggregateInputType | true
    }

  export interface expensesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expenses'], meta: { name: 'expenses' } }
    /**
     * Find zero or one Expenses that matches the filter.
     * @param {expensesFindUniqueArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expensesFindUniqueArgs>(args: SelectSubset<T, expensesFindUniqueArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expenses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expensesFindUniqueOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expensesFindUniqueOrThrowArgs>(args: SelectSubset<T, expensesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expensesFindFirstArgs>(args?: SelectSubset<T, expensesFindFirstArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expenses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindFirstOrThrowArgs} args - Arguments to find a Expenses
     * @example
     * // Get one Expenses
     * const expenses = await prisma.expenses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expensesFindFirstOrThrowArgs>(args?: SelectSubset<T, expensesFindFirstOrThrowArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expenses.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expenses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expensesWithIdOnly = await prisma.expenses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expensesFindManyArgs>(args?: SelectSubset<T, expensesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expenses.
     * @param {expensesCreateArgs} args - Arguments to create a Expenses.
     * @example
     * // Create one Expenses
     * const Expenses = await prisma.expenses.create({
     *   data: {
     *     // ... data to create a Expenses
     *   }
     * })
     * 
     */
    create<T extends expensesCreateArgs>(args: SelectSubset<T, expensesCreateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expensesCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expensesCreateManyArgs>(args?: SelectSubset<T, expensesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {expensesCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expenses = await prisma.expenses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expensesCreateManyAndReturnArgs>(args?: SelectSubset<T, expensesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expenses.
     * @param {expensesDeleteArgs} args - Arguments to delete one Expenses.
     * @example
     * // Delete one Expenses
     * const Expenses = await prisma.expenses.delete({
     *   where: {
     *     // ... filter to delete one Expenses
     *   }
     * })
     * 
     */
    delete<T extends expensesDeleteArgs>(args: SelectSubset<T, expensesDeleteArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expenses.
     * @param {expensesUpdateArgs} args - Arguments to update one Expenses.
     * @example
     * // Update one Expenses
     * const expenses = await prisma.expenses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expensesUpdateArgs>(args: SelectSubset<T, expensesUpdateArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expensesDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expenses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expensesDeleteManyArgs>(args?: SelectSubset<T, expensesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expensesUpdateManyArgs>(args: SelectSubset<T, expensesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {expensesUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expenses = await prisma.expenses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expensesWithIdOnly = await prisma.expenses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expensesUpdateManyAndReturnArgs>(args: SelectSubset<T, expensesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expenses.
     * @param {expensesUpsertArgs} args - Arguments to update or create a Expenses.
     * @example
     * // Update or create a Expenses
     * const expenses = await prisma.expenses.upsert({
     *   create: {
     *     // ... data to create a Expenses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expenses we want to update
     *   }
     * })
     */
    upsert<T extends expensesUpsertArgs>(args: SelectSubset<T, expensesUpsertArgs<ExtArgs>>): Prisma__expensesClient<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expenses.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expensesCountArgs>(
      args?: Subset<T, expensesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpensesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpensesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpensesAggregateArgs>(args: Subset<T, ExpensesAggregateArgs>): Prisma.PrismaPromise<GetExpensesAggregateType<T>>

    /**
     * Group by Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expensesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expensesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expensesGroupByArgs['orderBy'] }
        : { orderBy?: expensesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expensesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpensesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expenses model
   */
  readonly fields: expensesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expenses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expensesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends expenses$usersArgs<ExtArgs> = {}>(args?: Subset<T, expenses$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expenses model
   */
  interface expensesFieldRefs {
    readonly id: FieldRef<"expenses", 'Int'>
    readonly user_id: FieldRef<"expenses", 'Int'>
    readonly description: FieldRef<"expenses", 'String'>
    readonly amount: FieldRef<"expenses", 'Decimal'>
    readonly date: FieldRef<"expenses", 'DateTime'>
    readonly category: FieldRef<"expenses", 'String'>
    readonly created_at: FieldRef<"expenses", 'DateTime'>
    readonly updated_at: FieldRef<"expenses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * expenses findUnique
   */
  export type expensesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findUniqueOrThrow
   */
  export type expensesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses findFirst
   */
  export type expensesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findFirstOrThrow
   */
  export type expensesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses findMany
   */
  export type expensesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expensesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expensesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * expenses create
   */
  export type expensesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to create a expenses.
     */
    data?: XOR<expensesCreateInput, expensesUncheckedCreateInput>
  }

  /**
   * expenses createMany
   */
  export type expensesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
  }

  /**
   * expenses createManyAndReturn
   */
  export type expensesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * The data used to create many expenses.
     */
    data: expensesCreateManyInput | expensesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses update
   */
  export type expensesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The data needed to update a expenses.
     */
    data: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
    /**
     * Choose, which expenses to update.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses updateMany
   */
  export type expensesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expenses updateManyAndReturn
   */
  export type expensesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * The data used to update expenses.
     */
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * expenses upsert
   */
  export type expensesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * The filter to search for the expenses to update in case it exists.
     */
    where: expensesWhereUniqueInput
    /**
     * In case the expenses found by the `where` argument doesn't exist, create a new expenses with this data.
     */
    create: XOR<expensesCreateInput, expensesUncheckedCreateInput>
    /**
     * In case the expenses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expensesUpdateInput, expensesUncheckedUpdateInput>
  }

  /**
   * expenses delete
   */
  export type expensesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    /**
     * Filter which expenses to delete.
     */
    where: expensesWhereUniqueInput
  }

  /**
   * expenses deleteMany
   */
  export type expensesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expensesWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expenses.users
   */
  export type expenses$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * expenses without action
   */
  export type expensesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    quantity_in_stock: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    supplier_id: number | null
  }

  export type InventorySumAggregateOutputType = {
    id: number | null
    user_id: number | null
    quantity_in_stock: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    supplier_id: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    quantity_in_stock: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    supplier_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    description: string | null
    quantity_in_stock: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    supplier_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    description: number
    quantity_in_stock: number
    cost_price: number
    selling_price: number
    supplier_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    id?: true
    user_id?: true
    quantity_in_stock?: true
    cost_price?: true
    selling_price?: true
    supplier_id?: true
  }

  export type InventorySumAggregateInputType = {
    id?: true
    user_id?: true
    quantity_in_stock?: true
    cost_price?: true
    selling_price?: true
    supplier_id?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    quantity_in_stock?: true
    cost_price?: true
    selling_price?: true
    supplier_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    quantity_in_stock?: true
    cost_price?: true
    selling_price?: true
    supplier_id?: true
    created_at?: true
    updated_at?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    description?: true
    quantity_in_stock?: true
    cost_price?: true
    selling_price?: true
    supplier_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: number
    user_id: number
    name: string | null
    description: string | null
    quantity_in_stock: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    supplier_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    quantity_in_stock?: boolean
    cost_price?: boolean
    selling_price?: boolean
    supplier_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    suppliers?: boolean | inventory$suppliersArgs<ExtArgs>
    inventory_transactions?: boolean | inventory$inventory_transactionsArgs<ExtArgs>
    purchase_items?: boolean | inventory$purchase_itemsArgs<ExtArgs>
    sales_items?: boolean | inventory$sales_itemsArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    quantity_in_stock?: boolean
    cost_price?: boolean
    selling_price?: boolean
    supplier_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    suppliers?: boolean | inventory$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    quantity_in_stock?: boolean
    cost_price?: boolean
    selling_price?: boolean
    supplier_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    suppliers?: boolean | inventory$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    description?: boolean
    quantity_in_stock?: boolean
    cost_price?: boolean
    selling_price?: boolean
    supplier_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "description" | "quantity_in_stock" | "cost_price" | "selling_price" | "supplier_id" | "created_at" | "updated_at", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | inventory$suppliersArgs<ExtArgs>
    inventory_transactions?: boolean | inventory$inventory_transactionsArgs<ExtArgs>
    purchase_items?: boolean | inventory$purchase_itemsArgs<ExtArgs>
    sales_items?: boolean | inventory$sales_itemsArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | inventory$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | inventory$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      suppliers: Prisma.$suppliersPayload<ExtArgs> | null
      inventory_transactions: Prisma.$inventory_transactionsPayload<ExtArgs>[]
      purchase_items: Prisma.$purchase_itemsPayload<ExtArgs>[]
      sales_items: Prisma.$sales_itemsPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string | null
      description: string | null
      quantity_in_stock: number | null
      cost_price: Prisma.Decimal | null
      selling_price: Prisma.Decimal | null
      supplier_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    suppliers<T extends inventory$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, inventory$suppliersArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventory_transactions<T extends inventory$inventory_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, inventory$inventory_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchase_items<T extends inventory$purchase_itemsArgs<ExtArgs> = {}>(args?: Subset<T, inventory$purchase_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales_items<T extends inventory$sales_itemsArgs<ExtArgs> = {}>(args?: Subset<T, inventory$sales_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory model
   */
  interface inventoryFieldRefs {
    readonly id: FieldRef<"inventory", 'Int'>
    readonly user_id: FieldRef<"inventory", 'Int'>
    readonly name: FieldRef<"inventory", 'String'>
    readonly description: FieldRef<"inventory", 'String'>
    readonly quantity_in_stock: FieldRef<"inventory", 'Int'>
    readonly cost_price: FieldRef<"inventory", 'Decimal'>
    readonly selling_price: FieldRef<"inventory", 'Decimal'>
    readonly supplier_id: FieldRef<"inventory", 'Int'>
    readonly created_at: FieldRef<"inventory", 'DateTime'>
    readonly updated_at: FieldRef<"inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
  }

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory updateManyAndReturn
   */
  export type inventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.suppliers
   */
  export type inventory$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
  }

  /**
   * inventory.inventory_transactions
   */
  export type inventory$inventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    where?: inventory_transactionsWhereInput
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    cursor?: inventory_transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory.purchase_items
   */
  export type inventory$purchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    where?: purchase_itemsWhereInput
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    cursor?: purchase_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchase_itemsScalarFieldEnum | Purchase_itemsScalarFieldEnum[]
  }

  /**
   * inventory.sales_items
   */
  export type inventory$sales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    cursor?: sales_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model inventory_transactions
   */

  export type AggregateInventory_transactions = {
    _count: Inventory_transactionsCountAggregateOutputType | null
    _avg: Inventory_transactionsAvgAggregateOutputType | null
    _sum: Inventory_transactionsSumAggregateOutputType | null
    _min: Inventory_transactionsMinAggregateOutputType | null
    _max: Inventory_transactionsMaxAggregateOutputType | null
  }

  export type Inventory_transactionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    inventory_id: number | null
    quantity_change: number | null
    reference_id: number | null
  }

  export type Inventory_transactionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    inventory_id: number | null
    quantity_change: number | null
    reference_id: number | null
  }

  export type Inventory_transactionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    inventory_id: number | null
    transaction_type: string | null
    quantity_change: number | null
    date: Date | null
    reference_type: string | null
    reference_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Inventory_transactionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    inventory_id: number | null
    transaction_type: string | null
    quantity_change: number | null
    date: Date | null
    reference_type: string | null
    reference_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Inventory_transactionsCountAggregateOutputType = {
    id: number
    user_id: number
    inventory_id: number
    transaction_type: number
    quantity_change: number
    date: number
    reference_type: number
    reference_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Inventory_transactionsAvgAggregateInputType = {
    id?: true
    user_id?: true
    inventory_id?: true
    quantity_change?: true
    reference_id?: true
  }

  export type Inventory_transactionsSumAggregateInputType = {
    id?: true
    user_id?: true
    inventory_id?: true
    quantity_change?: true
    reference_id?: true
  }

  export type Inventory_transactionsMinAggregateInputType = {
    id?: true
    user_id?: true
    inventory_id?: true
    transaction_type?: true
    quantity_change?: true
    date?: true
    reference_type?: true
    reference_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Inventory_transactionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    inventory_id?: true
    transaction_type?: true
    quantity_change?: true
    date?: true
    reference_type?: true
    reference_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Inventory_transactionsCountAggregateInputType = {
    id?: true
    user_id?: true
    inventory_id?: true
    transaction_type?: true
    quantity_change?: true
    date?: true
    reference_type?: true
    reference_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Inventory_transactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_transactions to aggregate.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventory_transactions
    **/
    _count?: true | Inventory_transactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inventory_transactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inventory_transactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inventory_transactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inventory_transactionsMaxAggregateInputType
  }

  export type GetInventory_transactionsAggregateType<T extends Inventory_transactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory_transactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory_transactions[P]>
      : GetScalarType<T[P], AggregateInventory_transactions[P]>
  }




  export type inventory_transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventory_transactionsWhereInput
    orderBy?: inventory_transactionsOrderByWithAggregationInput | inventory_transactionsOrderByWithAggregationInput[]
    by: Inventory_transactionsScalarFieldEnum[] | Inventory_transactionsScalarFieldEnum
    having?: inventory_transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inventory_transactionsCountAggregateInputType | true
    _avg?: Inventory_transactionsAvgAggregateInputType
    _sum?: Inventory_transactionsSumAggregateInputType
    _min?: Inventory_transactionsMinAggregateInputType
    _max?: Inventory_transactionsMaxAggregateInputType
  }

  export type Inventory_transactionsGroupByOutputType = {
    id: number
    user_id: number
    inventory_id: number | null
    transaction_type: string | null
    quantity_change: number | null
    date: Date | null
    reference_type: string | null
    reference_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: Inventory_transactionsCountAggregateOutputType | null
    _avg: Inventory_transactionsAvgAggregateOutputType | null
    _sum: Inventory_transactionsSumAggregateOutputType | null
    _min: Inventory_transactionsMinAggregateOutputType | null
    _max: Inventory_transactionsMaxAggregateOutputType | null
  }

  type GetInventory_transactionsGroupByPayload<T extends inventory_transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inventory_transactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inventory_transactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inventory_transactionsGroupByOutputType[P]>
            : GetScalarType<T[P], Inventory_transactionsGroupByOutputType[P]>
        }
      >
    >


  export type inventory_transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    inventory_id?: boolean
    transaction_type?: boolean
    quantity_change?: boolean
    date?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | inventory_transactions$inventoryArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_transactions"]>

  export type inventory_transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    inventory_id?: boolean
    transaction_type?: boolean
    quantity_change?: boolean
    date?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | inventory_transactions$inventoryArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_transactions"]>

  export type inventory_transactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    inventory_id?: boolean
    transaction_type?: boolean
    quantity_change?: boolean
    date?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | inventory_transactions$inventoryArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory_transactions"]>

  export type inventory_transactionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    inventory_id?: boolean
    transaction_type?: boolean
    quantity_change?: boolean
    date?: boolean
    reference_type?: boolean
    reference_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type inventory_transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "inventory_id" | "transaction_type" | "quantity_change" | "date" | "reference_type" | "reference_id" | "created_at" | "updated_at", ExtArgs["result"]["inventory_transactions"]>
  export type inventory_transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventory_transactions$inventoryArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type inventory_transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventory_transactions$inventoryArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type inventory_transactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | inventory_transactions$inventoryArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $inventory_transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory_transactions"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      inventory_id: number | null
      transaction_type: string | null
      quantity_change: number | null
      date: Date | null
      reference_type: string | null
      reference_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["inventory_transactions"]>
    composites: {}
  }

  type inventory_transactionsGetPayload<S extends boolean | null | undefined | inventory_transactionsDefaultArgs> = $Result.GetResult<Prisma.$inventory_transactionsPayload, S>

  type inventory_transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventory_transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inventory_transactionsCountAggregateInputType | true
    }

  export interface inventory_transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory_transactions'], meta: { name: 'inventory_transactions' } }
    /**
     * Find zero or one Inventory_transactions that matches the filter.
     * @param {inventory_transactionsFindUniqueArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventory_transactionsFindUniqueArgs>(args: SelectSubset<T, inventory_transactionsFindUniqueArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory_transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventory_transactionsFindUniqueOrThrowArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventory_transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, inventory_transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsFindFirstArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventory_transactionsFindFirstArgs>(args?: SelectSubset<T, inventory_transactionsFindFirstArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory_transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsFindFirstOrThrowArgs} args - Arguments to find a Inventory_transactions
     * @example
     * // Get one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventory_transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, inventory_transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventory_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findMany()
     * 
     * // Get first 10 Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventory_transactionsWithIdOnly = await prisma.inventory_transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inventory_transactionsFindManyArgs>(args?: SelectSubset<T, inventory_transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory_transactions.
     * @param {inventory_transactionsCreateArgs} args - Arguments to create a Inventory_transactions.
     * @example
     * // Create one Inventory_transactions
     * const Inventory_transactions = await prisma.inventory_transactions.create({
     *   data: {
     *     // ... data to create a Inventory_transactions
     *   }
     * })
     * 
     */
    create<T extends inventory_transactionsCreateArgs>(args: SelectSubset<T, inventory_transactionsCreateArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventory_transactions.
     * @param {inventory_transactionsCreateManyArgs} args - Arguments to create many Inventory_transactions.
     * @example
     * // Create many Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventory_transactionsCreateManyArgs>(args?: SelectSubset<T, inventory_transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventory_transactions and returns the data saved in the database.
     * @param {inventory_transactionsCreateManyAndReturnArgs} args - Arguments to create many Inventory_transactions.
     * @example
     * // Create many Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventory_transactions and only return the `id`
     * const inventory_transactionsWithIdOnly = await prisma.inventory_transactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventory_transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, inventory_transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory_transactions.
     * @param {inventory_transactionsDeleteArgs} args - Arguments to delete one Inventory_transactions.
     * @example
     * // Delete one Inventory_transactions
     * const Inventory_transactions = await prisma.inventory_transactions.delete({
     *   where: {
     *     // ... filter to delete one Inventory_transactions
     *   }
     * })
     * 
     */
    delete<T extends inventory_transactionsDeleteArgs>(args: SelectSubset<T, inventory_transactionsDeleteArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory_transactions.
     * @param {inventory_transactionsUpdateArgs} args - Arguments to update one Inventory_transactions.
     * @example
     * // Update one Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventory_transactionsUpdateArgs>(args: SelectSubset<T, inventory_transactionsUpdateArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventory_transactions.
     * @param {inventory_transactionsDeleteManyArgs} args - Arguments to filter Inventory_transactions to delete.
     * @example
     * // Delete a few Inventory_transactions
     * const { count } = await prisma.inventory_transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventory_transactionsDeleteManyArgs>(args?: SelectSubset<T, inventory_transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventory_transactionsUpdateManyArgs>(args: SelectSubset<T, inventory_transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventory_transactions and returns the data updated in the database.
     * @param {inventory_transactionsUpdateManyAndReturnArgs} args - Arguments to update many Inventory_transactions.
     * @example
     * // Update many Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventory_transactions and only return the `id`
     * const inventory_transactionsWithIdOnly = await prisma.inventory_transactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inventory_transactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, inventory_transactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory_transactions.
     * @param {inventory_transactionsUpsertArgs} args - Arguments to update or create a Inventory_transactions.
     * @example
     * // Update or create a Inventory_transactions
     * const inventory_transactions = await prisma.inventory_transactions.upsert({
     *   create: {
     *     // ... data to create a Inventory_transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory_transactions we want to update
     *   }
     * })
     */
    upsert<T extends inventory_transactionsUpsertArgs>(args: SelectSubset<T, inventory_transactionsUpsertArgs<ExtArgs>>): Prisma__inventory_transactionsClient<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsCountArgs} args - Arguments to filter Inventory_transactions to count.
     * @example
     * // Count the number of Inventory_transactions
     * const count = await prisma.inventory_transactions.count({
     *   where: {
     *     // ... the filter for the Inventory_transactions we want to count
     *   }
     * })
    **/
    count<T extends inventory_transactionsCountArgs>(
      args?: Subset<T, inventory_transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inventory_transactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inventory_transactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inventory_transactionsAggregateArgs>(args: Subset<T, Inventory_transactionsAggregateArgs>): Prisma.PrismaPromise<GetInventory_transactionsAggregateType<T>>

    /**
     * Group by Inventory_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventory_transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inventory_transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventory_transactionsGroupByArgs['orderBy'] }
        : { orderBy?: inventory_transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inventory_transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventory_transactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory_transactions model
   */
  readonly fields: inventory_transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory_transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventory_transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends inventory_transactions$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, inventory_transactions$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inventory_transactions model
   */
  interface inventory_transactionsFieldRefs {
    readonly id: FieldRef<"inventory_transactions", 'Int'>
    readonly user_id: FieldRef<"inventory_transactions", 'Int'>
    readonly inventory_id: FieldRef<"inventory_transactions", 'Int'>
    readonly transaction_type: FieldRef<"inventory_transactions", 'String'>
    readonly quantity_change: FieldRef<"inventory_transactions", 'Int'>
    readonly date: FieldRef<"inventory_transactions", 'DateTime'>
    readonly reference_type: FieldRef<"inventory_transactions", 'String'>
    readonly reference_id: FieldRef<"inventory_transactions", 'Int'>
    readonly created_at: FieldRef<"inventory_transactions", 'DateTime'>
    readonly updated_at: FieldRef<"inventory_transactions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inventory_transactions findUnique
   */
  export type inventory_transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions findUniqueOrThrow
   */
  export type inventory_transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions findFirst
   */
  export type inventory_transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_transactions.
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_transactions.
     */
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory_transactions findFirstOrThrow
   */
  export type inventory_transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventory_transactions.
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventory_transactions.
     */
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory_transactions findMany
   */
  export type inventory_transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter, which inventory_transactions to fetch.
     */
    where?: inventory_transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventory_transactions to fetch.
     */
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventory_transactions.
     */
    cursor?: inventory_transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventory_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventory_transactions.
     */
    skip?: number
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * inventory_transactions create
   */
  export type inventory_transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory_transactions.
     */
    data: XOR<inventory_transactionsCreateInput, inventory_transactionsUncheckedCreateInput>
  }

  /**
   * inventory_transactions createMany
   */
  export type inventory_transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventory_transactions.
     */
    data: inventory_transactionsCreateManyInput | inventory_transactionsCreateManyInput[]
  }

  /**
   * inventory_transactions createManyAndReturn
   */
  export type inventory_transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * The data used to create many inventory_transactions.
     */
    data: inventory_transactionsCreateManyInput | inventory_transactionsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory_transactions update
   */
  export type inventory_transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory_transactions.
     */
    data: XOR<inventory_transactionsUpdateInput, inventory_transactionsUncheckedUpdateInput>
    /**
     * Choose, which inventory_transactions to update.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions updateMany
   */
  export type inventory_transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventory_transactions.
     */
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which inventory_transactions to update
     */
    where?: inventory_transactionsWhereInput
    /**
     * Limit how many inventory_transactions to update.
     */
    limit?: number
  }

  /**
   * inventory_transactions updateManyAndReturn
   */
  export type inventory_transactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * The data used to update inventory_transactions.
     */
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyInput>
    /**
     * Filter which inventory_transactions to update
     */
    where?: inventory_transactionsWhereInput
    /**
     * Limit how many inventory_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * inventory_transactions upsert
   */
  export type inventory_transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory_transactions to update in case it exists.
     */
    where: inventory_transactionsWhereUniqueInput
    /**
     * In case the inventory_transactions found by the `where` argument doesn't exist, create a new inventory_transactions with this data.
     */
    create: XOR<inventory_transactionsCreateInput, inventory_transactionsUncheckedCreateInput>
    /**
     * In case the inventory_transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventory_transactionsUpdateInput, inventory_transactionsUncheckedUpdateInput>
  }

  /**
   * inventory_transactions delete
   */
  export type inventory_transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    /**
     * Filter which inventory_transactions to delete.
     */
    where: inventory_transactionsWhereUniqueInput
  }

  /**
   * inventory_transactions deleteMany
   */
  export type inventory_transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory_transactions to delete
     */
    where?: inventory_transactionsWhereInput
    /**
     * Limit how many inventory_transactions to delete.
     */
    limit?: number
  }

  /**
   * inventory_transactions.inventory
   */
  export type inventory_transactions$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * inventory_transactions without action
   */
  export type inventory_transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
  }


  /**
   * Model purchase_items
   */

  export type AggregatePurchase_items = {
    _count: Purchase_itemsCountAggregateOutputType | null
    _avg: Purchase_itemsAvgAggregateOutputType | null
    _sum: Purchase_itemsSumAggregateOutputType | null
    _min: Purchase_itemsMinAggregateOutputType | null
    _max: Purchase_itemsMaxAggregateOutputType | null
  }

  export type Purchase_itemsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    purchase_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Purchase_itemsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    purchase_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Purchase_itemsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    purchase_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Purchase_itemsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    purchase_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Purchase_itemsCountAggregateOutputType = {
    id: number
    user_id: number
    purchase_id: number
    inventory_id: number
    quantity: number
    unit_price: number
    total_price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Purchase_itemsAvgAggregateInputType = {
    id?: true
    user_id?: true
    purchase_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Purchase_itemsSumAggregateInputType = {
    id?: true
    user_id?: true
    purchase_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Purchase_itemsMinAggregateInputType = {
    id?: true
    user_id?: true
    purchase_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
  }

  export type Purchase_itemsMaxAggregateInputType = {
    id?: true
    user_id?: true
    purchase_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
  }

  export type Purchase_itemsCountAggregateInputType = {
    id?: true
    user_id?: true
    purchase_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Purchase_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase_items to aggregate.
     */
    where?: purchase_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchase_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchase_items
    **/
    _count?: true | Purchase_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Purchase_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Purchase_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Purchase_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Purchase_itemsMaxAggregateInputType
  }

  export type GetPurchase_itemsAggregateType<T extends Purchase_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase_items[P]>
      : GetScalarType<T[P], AggregatePurchase_items[P]>
  }




  export type purchase_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchase_itemsWhereInput
    orderBy?: purchase_itemsOrderByWithAggregationInput | purchase_itemsOrderByWithAggregationInput[]
    by: Purchase_itemsScalarFieldEnum[] | Purchase_itemsScalarFieldEnum
    having?: purchase_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Purchase_itemsCountAggregateInputType | true
    _avg?: Purchase_itemsAvgAggregateInputType
    _sum?: Purchase_itemsSumAggregateInputType
    _min?: Purchase_itemsMinAggregateInputType
    _max?: Purchase_itemsMaxAggregateInputType
  }

  export type Purchase_itemsGroupByOutputType = {
    id: number
    user_id: number
    purchase_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: Purchase_itemsCountAggregateOutputType | null
    _avg: Purchase_itemsAvgAggregateOutputType | null
    _sum: Purchase_itemsSumAggregateOutputType | null
    _min: Purchase_itemsMinAggregateOutputType | null
    _max: Purchase_itemsMaxAggregateOutputType | null
  }

  type GetPurchase_itemsGroupByPayload<T extends purchase_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Purchase_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Purchase_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Purchase_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Purchase_itemsGroupByOutputType[P]>
        }
      >
    >


  export type purchase_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    purchase_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | purchase_items$inventoryArgs<ExtArgs>
    purchases?: boolean | purchase_items$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_items"]>

  export type purchase_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    purchase_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | purchase_items$inventoryArgs<ExtArgs>
    purchases?: boolean | purchase_items$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_items"]>

  export type purchase_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    purchase_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | purchase_items$inventoryArgs<ExtArgs>
    purchases?: boolean | purchase_items$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase_items"]>

  export type purchase_itemsSelectScalar = {
    id?: boolean
    user_id?: boolean
    purchase_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type purchase_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "purchase_id" | "inventory_id" | "quantity" | "unit_price" | "total_price" | "created_at" | "updated_at", ExtArgs["result"]["purchase_items"]>
  export type purchase_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | purchase_items$inventoryArgs<ExtArgs>
    purchases?: boolean | purchase_items$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type purchase_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | purchase_items$inventoryArgs<ExtArgs>
    purchases?: boolean | purchase_items$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type purchase_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | purchase_items$inventoryArgs<ExtArgs>
    purchases?: boolean | purchase_items$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $purchase_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchase_items"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
      purchases: Prisma.$purchasesPayload<ExtArgs> | null
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      purchase_id: number | null
      inventory_id: number | null
      quantity: number | null
      unit_price: Prisma.Decimal | null
      total_price: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["purchase_items"]>
    composites: {}
  }

  type purchase_itemsGetPayload<S extends boolean | null | undefined | purchase_itemsDefaultArgs> = $Result.GetResult<Prisma.$purchase_itemsPayload, S>

  type purchase_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchase_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Purchase_itemsCountAggregateInputType | true
    }

  export interface purchase_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchase_items'], meta: { name: 'purchase_items' } }
    /**
     * Find zero or one Purchase_items that matches the filter.
     * @param {purchase_itemsFindUniqueArgs} args - Arguments to find a Purchase_items
     * @example
     * // Get one Purchase_items
     * const purchase_items = await prisma.purchase_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchase_itemsFindUniqueArgs>(args: SelectSubset<T, purchase_itemsFindUniqueArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchase_itemsFindUniqueOrThrowArgs} args - Arguments to find a Purchase_items
     * @example
     * // Get one Purchase_items
     * const purchase_items = await prisma.purchase_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchase_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, purchase_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemsFindFirstArgs} args - Arguments to find a Purchase_items
     * @example
     * // Get one Purchase_items
     * const purchase_items = await prisma.purchase_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchase_itemsFindFirstArgs>(args?: SelectSubset<T, purchase_itemsFindFirstArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemsFindFirstOrThrowArgs} args - Arguments to find a Purchase_items
     * @example
     * // Get one Purchase_items
     * const purchase_items = await prisma.purchase_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchase_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, purchase_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchase_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchase_items
     * const purchase_items = await prisma.purchase_items.findMany()
     * 
     * // Get first 10 Purchase_items
     * const purchase_items = await prisma.purchase_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchase_itemsWithIdOnly = await prisma.purchase_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends purchase_itemsFindManyArgs>(args?: SelectSubset<T, purchase_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase_items.
     * @param {purchase_itemsCreateArgs} args - Arguments to create a Purchase_items.
     * @example
     * // Create one Purchase_items
     * const Purchase_items = await prisma.purchase_items.create({
     *   data: {
     *     // ... data to create a Purchase_items
     *   }
     * })
     * 
     */
    create<T extends purchase_itemsCreateArgs>(args: SelectSubset<T, purchase_itemsCreateArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchase_items.
     * @param {purchase_itemsCreateManyArgs} args - Arguments to create many Purchase_items.
     * @example
     * // Create many Purchase_items
     * const purchase_items = await prisma.purchase_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchase_itemsCreateManyArgs>(args?: SelectSubset<T, purchase_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchase_items and returns the data saved in the database.
     * @param {purchase_itemsCreateManyAndReturnArgs} args - Arguments to create many Purchase_items.
     * @example
     * // Create many Purchase_items
     * const purchase_items = await prisma.purchase_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchase_items and only return the `id`
     * const purchase_itemsWithIdOnly = await prisma.purchase_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends purchase_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, purchase_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase_items.
     * @param {purchase_itemsDeleteArgs} args - Arguments to delete one Purchase_items.
     * @example
     * // Delete one Purchase_items
     * const Purchase_items = await prisma.purchase_items.delete({
     *   where: {
     *     // ... filter to delete one Purchase_items
     *   }
     * })
     * 
     */
    delete<T extends purchase_itemsDeleteArgs>(args: SelectSubset<T, purchase_itemsDeleteArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase_items.
     * @param {purchase_itemsUpdateArgs} args - Arguments to update one Purchase_items.
     * @example
     * // Update one Purchase_items
     * const purchase_items = await prisma.purchase_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchase_itemsUpdateArgs>(args: SelectSubset<T, purchase_itemsUpdateArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchase_items.
     * @param {purchase_itemsDeleteManyArgs} args - Arguments to filter Purchase_items to delete.
     * @example
     * // Delete a few Purchase_items
     * const { count } = await prisma.purchase_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchase_itemsDeleteManyArgs>(args?: SelectSubset<T, purchase_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchase_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchase_items
     * const purchase_items = await prisma.purchase_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchase_itemsUpdateManyArgs>(args: SelectSubset<T, purchase_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchase_items and returns the data updated in the database.
     * @param {purchase_itemsUpdateManyAndReturnArgs} args - Arguments to update many Purchase_items.
     * @example
     * // Update many Purchase_items
     * const purchase_items = await prisma.purchase_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchase_items and only return the `id`
     * const purchase_itemsWithIdOnly = await prisma.purchase_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends purchase_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, purchase_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase_items.
     * @param {purchase_itemsUpsertArgs} args - Arguments to update or create a Purchase_items.
     * @example
     * // Update or create a Purchase_items
     * const purchase_items = await prisma.purchase_items.upsert({
     *   create: {
     *     // ... data to create a Purchase_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase_items we want to update
     *   }
     * })
     */
    upsert<T extends purchase_itemsUpsertArgs>(args: SelectSubset<T, purchase_itemsUpsertArgs<ExtArgs>>): Prisma__purchase_itemsClient<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchase_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemsCountArgs} args - Arguments to filter Purchase_items to count.
     * @example
     * // Count the number of Purchase_items
     * const count = await prisma.purchase_items.count({
     *   where: {
     *     // ... the filter for the Purchase_items we want to count
     *   }
     * })
    **/
    count<T extends purchase_itemsCountArgs>(
      args?: Subset<T, purchase_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Purchase_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Purchase_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Purchase_itemsAggregateArgs>(args: Subset<T, Purchase_itemsAggregateArgs>): Prisma.PrismaPromise<GetPurchase_itemsAggregateType<T>>

    /**
     * Group by Purchase_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchase_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchase_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchase_itemsGroupByArgs['orderBy'] }
        : { orderBy?: purchase_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchase_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchase_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchase_items model
   */
  readonly fields: purchase_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchase_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchase_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends purchase_items$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, purchase_items$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    purchases<T extends purchase_items$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, purchase_items$purchasesArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchase_items model
   */
  interface purchase_itemsFieldRefs {
    readonly id: FieldRef<"purchase_items", 'Int'>
    readonly user_id: FieldRef<"purchase_items", 'Int'>
    readonly purchase_id: FieldRef<"purchase_items", 'Int'>
    readonly inventory_id: FieldRef<"purchase_items", 'Int'>
    readonly quantity: FieldRef<"purchase_items", 'Int'>
    readonly unit_price: FieldRef<"purchase_items", 'Decimal'>
    readonly total_price: FieldRef<"purchase_items", 'Decimal'>
    readonly created_at: FieldRef<"purchase_items", 'DateTime'>
    readonly updated_at: FieldRef<"purchase_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * purchase_items findUnique
   */
  export type purchase_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchase_items to fetch.
     */
    where: purchase_itemsWhereUniqueInput
  }

  /**
   * purchase_items findUniqueOrThrow
   */
  export type purchase_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchase_items to fetch.
     */
    where: purchase_itemsWhereUniqueInput
  }

  /**
   * purchase_items findFirst
   */
  export type purchase_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchase_items to fetch.
     */
    where?: purchase_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchase_items.
     */
    cursor?: purchase_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_items.
     */
    distinct?: Purchase_itemsScalarFieldEnum | Purchase_itemsScalarFieldEnum[]
  }

  /**
   * purchase_items findFirstOrThrow
   */
  export type purchase_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchase_items to fetch.
     */
    where?: purchase_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchase_items.
     */
    cursor?: purchase_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchase_items.
     */
    distinct?: Purchase_itemsScalarFieldEnum | Purchase_itemsScalarFieldEnum[]
  }

  /**
   * purchase_items findMany
   */
  export type purchase_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * Filter, which purchase_items to fetch.
     */
    where?: purchase_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchase_items to fetch.
     */
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchase_items.
     */
    cursor?: purchase_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchase_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchase_items.
     */
    skip?: number
    distinct?: Purchase_itemsScalarFieldEnum | Purchase_itemsScalarFieldEnum[]
  }

  /**
   * purchase_items create
   */
  export type purchase_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a purchase_items.
     */
    data: XOR<purchase_itemsCreateInput, purchase_itemsUncheckedCreateInput>
  }

  /**
   * purchase_items createMany
   */
  export type purchase_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchase_items.
     */
    data: purchase_itemsCreateManyInput | purchase_itemsCreateManyInput[]
  }

  /**
   * purchase_items createManyAndReturn
   */
  export type purchase_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many purchase_items.
     */
    data: purchase_itemsCreateManyInput | purchase_itemsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchase_items update
   */
  export type purchase_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a purchase_items.
     */
    data: XOR<purchase_itemsUpdateInput, purchase_itemsUncheckedUpdateInput>
    /**
     * Choose, which purchase_items to update.
     */
    where: purchase_itemsWhereUniqueInput
  }

  /**
   * purchase_items updateMany
   */
  export type purchase_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchase_items.
     */
    data: XOR<purchase_itemsUpdateManyMutationInput, purchase_itemsUncheckedUpdateManyInput>
    /**
     * Filter which purchase_items to update
     */
    where?: purchase_itemsWhereInput
    /**
     * Limit how many purchase_items to update.
     */
    limit?: number
  }

  /**
   * purchase_items updateManyAndReturn
   */
  export type purchase_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * The data used to update purchase_items.
     */
    data: XOR<purchase_itemsUpdateManyMutationInput, purchase_itemsUncheckedUpdateManyInput>
    /**
     * Filter which purchase_items to update
     */
    where?: purchase_itemsWhereInput
    /**
     * Limit how many purchase_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchase_items upsert
   */
  export type purchase_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the purchase_items to update in case it exists.
     */
    where: purchase_itemsWhereUniqueInput
    /**
     * In case the purchase_items found by the `where` argument doesn't exist, create a new purchase_items with this data.
     */
    create: XOR<purchase_itemsCreateInput, purchase_itemsUncheckedCreateInput>
    /**
     * In case the purchase_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchase_itemsUpdateInput, purchase_itemsUncheckedUpdateInput>
  }

  /**
   * purchase_items delete
   */
  export type purchase_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    /**
     * Filter which purchase_items to delete.
     */
    where: purchase_itemsWhereUniqueInput
  }

  /**
   * purchase_items deleteMany
   */
  export type purchase_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchase_items to delete
     */
    where?: purchase_itemsWhereInput
    /**
     * Limit how many purchase_items to delete.
     */
    limit?: number
  }

  /**
   * purchase_items.inventory
   */
  export type purchase_items$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * purchase_items.purchases
   */
  export type purchase_items$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    where?: purchasesWhereInput
  }

  /**
   * purchase_items without action
   */
  export type purchase_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
  }


  /**
   * Model purchases
   */

  export type AggregatePurchases = {
    _count: PurchasesCountAggregateOutputType | null
    _avg: PurchasesAvgAggregateOutputType | null
    _sum: PurchasesSumAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  export type PurchasesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    supplier_id: number | null
    total_amount: Decimal | null
  }

  export type PurchasesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    supplier_id: number | null
    total_amount: Decimal | null
  }

  export type PurchasesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    supplier_id: number | null
    purchase_date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PurchasesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    supplier_id: number | null
    purchase_date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PurchasesCountAggregateOutputType = {
    id: number
    user_id: number
    supplier_id: number
    purchase_date: number
    total_amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PurchasesAvgAggregateInputType = {
    id?: true
    user_id?: true
    supplier_id?: true
    total_amount?: true
  }

  export type PurchasesSumAggregateInputType = {
    id?: true
    user_id?: true
    supplier_id?: true
    total_amount?: true
  }

  export type PurchasesMinAggregateInputType = {
    id?: true
    user_id?: true
    supplier_id?: true
    purchase_date?: true
    total_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type PurchasesMaxAggregateInputType = {
    id?: true
    user_id?: true
    supplier_id?: true
    purchase_date?: true
    total_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type PurchasesCountAggregateInputType = {
    id?: true
    user_id?: true
    supplier_id?: true
    purchase_date?: true
    total_amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PurchasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases to aggregate.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned purchases
    **/
    _count?: true | PurchasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasesMaxAggregateInputType
  }

  export type GetPurchasesAggregateType<T extends PurchasesAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchases[P]>
      : GetScalarType<T[P], AggregatePurchases[P]>
  }




  export type purchasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithAggregationInput | purchasesOrderByWithAggregationInput[]
    by: PurchasesScalarFieldEnum[] | PurchasesScalarFieldEnum
    having?: purchasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasesCountAggregateInputType | true
    _avg?: PurchasesAvgAggregateInputType
    _sum?: PurchasesSumAggregateInputType
    _min?: PurchasesMinAggregateInputType
    _max?: PurchasesMaxAggregateInputType
  }

  export type PurchasesGroupByOutputType = {
    id: number
    user_id: number
    supplier_id: number | null
    purchase_date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: PurchasesCountAggregateOutputType | null
    _avg: PurchasesAvgAggregateOutputType | null
    _sum: PurchasesSumAggregateOutputType | null
    _min: PurchasesMinAggregateOutputType | null
    _max: PurchasesMaxAggregateOutputType | null
  }

  type GetPurchasesGroupByPayload<T extends purchasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasesGroupByOutputType[P]>
        }
      >
    >


  export type purchasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    purchase_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    purchase_items?: boolean | purchases$purchase_itemsArgs<ExtArgs>
    suppliers?: boolean | purchases$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PurchasesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type purchasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    purchase_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    suppliers?: boolean | purchases$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type purchasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    purchase_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    suppliers?: boolean | purchases$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchases"]>

  export type purchasesSelectScalar = {
    id?: boolean
    user_id?: boolean
    supplier_id?: boolean
    purchase_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type purchasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "supplier_id" | "purchase_date" | "total_amount" | "created_at" | "updated_at", ExtArgs["result"]["purchases"]>
  export type purchasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchase_items?: boolean | purchases$purchase_itemsArgs<ExtArgs>
    suppliers?: boolean | purchases$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | PurchasesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type purchasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | purchases$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type purchasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    suppliers?: boolean | purchases$suppliersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $purchasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "purchases"
    objects: {
      purchase_items: Prisma.$purchase_itemsPayload<ExtArgs>[]
      suppliers: Prisma.$suppliersPayload<ExtArgs> | null
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      supplier_id: number | null
      purchase_date: Date | null
      total_amount: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["purchases"]>
    composites: {}
  }

  type purchasesGetPayload<S extends boolean | null | undefined | purchasesDefaultArgs> = $Result.GetResult<Prisma.$purchasesPayload, S>

  type purchasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<purchasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasesCountAggregateInputType | true
    }

  export interface purchasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['purchases'], meta: { name: 'purchases' } }
    /**
     * Find zero or one Purchases that matches the filter.
     * @param {purchasesFindUniqueArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends purchasesFindUniqueArgs>(args: SelectSubset<T, purchasesFindUniqueArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {purchasesFindUniqueOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends purchasesFindUniqueOrThrowArgs>(args: SelectSubset<T, purchasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesFindFirstArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends purchasesFindFirstArgs>(args?: SelectSubset<T, purchasesFindFirstArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesFindFirstOrThrowArgs} args - Arguments to find a Purchases
     * @example
     * // Get one Purchases
     * const purchases = await prisma.purchases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends purchasesFindFirstOrThrowArgs>(args?: SelectSubset<T, purchasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchases.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasesWithIdOnly = await prisma.purchases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends purchasesFindManyArgs>(args?: SelectSubset<T, purchasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchases.
     * @param {purchasesCreateArgs} args - Arguments to create a Purchases.
     * @example
     * // Create one Purchases
     * const Purchases = await prisma.purchases.create({
     *   data: {
     *     // ... data to create a Purchases
     *   }
     * })
     * 
     */
    create<T extends purchasesCreateArgs>(args: SelectSubset<T, purchasesCreateArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {purchasesCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends purchasesCreateManyArgs>(args?: SelectSubset<T, purchasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {purchasesCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchases = await prisma.purchases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchasesWithIdOnly = await prisma.purchases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends purchasesCreateManyAndReturnArgs>(args?: SelectSubset<T, purchasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchases.
     * @param {purchasesDeleteArgs} args - Arguments to delete one Purchases.
     * @example
     * // Delete one Purchases
     * const Purchases = await prisma.purchases.delete({
     *   where: {
     *     // ... filter to delete one Purchases
     *   }
     * })
     * 
     */
    delete<T extends purchasesDeleteArgs>(args: SelectSubset<T, purchasesDeleteArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchases.
     * @param {purchasesUpdateArgs} args - Arguments to update one Purchases.
     * @example
     * // Update one Purchases
     * const purchases = await prisma.purchases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends purchasesUpdateArgs>(args: SelectSubset<T, purchasesUpdateArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {purchasesDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends purchasesDeleteManyArgs>(args?: SelectSubset<T, purchasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends purchasesUpdateManyArgs>(args: SelectSubset<T, purchasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {purchasesUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchases = await prisma.purchases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchasesWithIdOnly = await prisma.purchases.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends purchasesUpdateManyAndReturnArgs>(args: SelectSubset<T, purchasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchases.
     * @param {purchasesUpsertArgs} args - Arguments to update or create a Purchases.
     * @example
     * // Update or create a Purchases
     * const purchases = await prisma.purchases.upsert({
     *   create: {
     *     // ... data to create a Purchases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchases we want to update
     *   }
     * })
     */
    upsert<T extends purchasesUpsertArgs>(args: SelectSubset<T, purchasesUpsertArgs<ExtArgs>>): Prisma__purchasesClient<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchases.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends purchasesCountArgs>(
      args?: Subset<T, purchasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchasesAggregateArgs>(args: Subset<T, PurchasesAggregateArgs>): Prisma.PrismaPromise<GetPurchasesAggregateType<T>>

    /**
     * Group by Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {purchasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends purchasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: purchasesGroupByArgs['orderBy'] }
        : { orderBy?: purchasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, purchasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the purchases model
   */
  readonly fields: purchasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for purchases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__purchasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchase_items<T extends purchases$purchase_itemsArgs<ExtArgs> = {}>(args?: Subset<T, purchases$purchase_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suppliers<T extends purchases$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, purchases$suppliersArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the purchases model
   */
  interface purchasesFieldRefs {
    readonly id: FieldRef<"purchases", 'Int'>
    readonly user_id: FieldRef<"purchases", 'Int'>
    readonly supplier_id: FieldRef<"purchases", 'Int'>
    readonly purchase_date: FieldRef<"purchases", 'DateTime'>
    readonly total_amount: FieldRef<"purchases", 'Decimal'>
    readonly created_at: FieldRef<"purchases", 'DateTime'>
    readonly updated_at: FieldRef<"purchases", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * purchases findUnique
   */
  export type purchasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases findUniqueOrThrow
   */
  export type purchasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases findFirst
   */
  export type purchasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases.
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * purchases findFirstOrThrow
   */
  export type purchasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for purchases.
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of purchases.
     */
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * purchases findMany
   */
  export type purchasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter, which purchases to fetch.
     */
    where?: purchasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of purchases to fetch.
     */
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing purchases.
     */
    cursor?: purchasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` purchases.
     */
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * purchases create
   */
  export type purchasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * The data needed to create a purchases.
     */
    data: XOR<purchasesCreateInput, purchasesUncheckedCreateInput>
  }

  /**
   * purchases createMany
   */
  export type purchasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many purchases.
     */
    data: purchasesCreateManyInput | purchasesCreateManyInput[]
  }

  /**
   * purchases createManyAndReturn
   */
  export type purchasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * The data used to create many purchases.
     */
    data: purchasesCreateManyInput | purchasesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchases update
   */
  export type purchasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * The data needed to update a purchases.
     */
    data: XOR<purchasesUpdateInput, purchasesUncheckedUpdateInput>
    /**
     * Choose, which purchases to update.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases updateMany
   */
  export type purchasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update purchases.
     */
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyInput>
    /**
     * Filter which purchases to update
     */
    where?: purchasesWhereInput
    /**
     * Limit how many purchases to update.
     */
    limit?: number
  }

  /**
   * purchases updateManyAndReturn
   */
  export type purchasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * The data used to update purchases.
     */
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyInput>
    /**
     * Filter which purchases to update
     */
    where?: purchasesWhereInput
    /**
     * Limit how many purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * purchases upsert
   */
  export type purchasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * The filter to search for the purchases to update in case it exists.
     */
    where: purchasesWhereUniqueInput
    /**
     * In case the purchases found by the `where` argument doesn't exist, create a new purchases with this data.
     */
    create: XOR<purchasesCreateInput, purchasesUncheckedCreateInput>
    /**
     * In case the purchases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<purchasesUpdateInput, purchasesUncheckedUpdateInput>
  }

  /**
   * purchases delete
   */
  export type purchasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    /**
     * Filter which purchases to delete.
     */
    where: purchasesWhereUniqueInput
  }

  /**
   * purchases deleteMany
   */
  export type purchasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which purchases to delete
     */
    where?: purchasesWhereInput
    /**
     * Limit how many purchases to delete.
     */
    limit?: number
  }

  /**
   * purchases.purchase_items
   */
  export type purchases$purchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    where?: purchase_itemsWhereInput
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    cursor?: purchase_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchase_itemsScalarFieldEnum | Purchase_itemsScalarFieldEnum[]
  }

  /**
   * purchases.suppliers
   */
  export type purchases$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
  }

  /**
   * purchases without action
   */
  export type purchasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
  }


  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    customer_id: number | null
    total_amount: Decimal | null
  }

  export type SalesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    customer_id: number | null
    total_amount: Decimal | null
  }

  export type SalesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    customer_id: number | null
    sale_date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    customer_id: number | null
    sale_date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SalesCountAggregateOutputType = {
    id: number
    user_id: number
    customer_id: number
    sale_date: number
    total_amount: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    id?: true
    user_id?: true
    customer_id?: true
    total_amount?: true
  }

  export type SalesSumAggregateInputType = {
    id?: true
    user_id?: true
    customer_id?: true
    total_amount?: true
  }

  export type SalesMinAggregateInputType = {
    id?: true
    user_id?: true
    customer_id?: true
    sale_date?: true
    total_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesMaxAggregateInputType = {
    id?: true
    user_id?: true
    customer_id?: true
    sale_date?: true
    total_amount?: true
    created_at?: true
    updated_at?: true
  }

  export type SalesCountAggregateInputType = {
    id?: true
    user_id?: true
    customer_id?: true
    sale_date?: true
    total_amount?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    id: number
    user_id: number
    customer_id: number | null
    sale_date: Date | null
    total_amount: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    customers?: boolean | sales$customersArgs<ExtArgs>
    sales_items?: boolean | sales$sales_itemsArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    customers?: boolean | sales$customersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
    customers?: boolean | sales$customersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectScalar = {
    id?: boolean
    user_id?: boolean
    customer_id?: boolean
    sale_date?: boolean
    total_amount?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "customer_id" | "sale_date" | "total_amount" | "created_at" | "updated_at", ExtArgs["result"]["sales"]>
  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | sales$customersArgs<ExtArgs>
    sales_items?: boolean | sales$sales_itemsArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | SalesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type salesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | sales$customersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type salesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | sales$customersArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales"
    objects: {
      customers: Prisma.$customersPayload<ExtArgs> | null
      sales_items: Prisma.$sales_itemsPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      customer_id: number | null
      sale_date: Date | null
      total_amount: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<Prisma.$salesPayload, S>

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales'], meta: { name: 'sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salesFindUniqueArgs>(args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs>(args: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salesFindFirstArgs>(args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs>(args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesWithIdOnly = await prisma.sales.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends salesFindManyArgs>(args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends salesCreateArgs>(args: SelectSubset<T, salesCreateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {salesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salesCreateManyArgs>(args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {salesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends salesCreateManyAndReturnArgs>(args?: SelectSubset<T, salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends salesDeleteArgs>(args: SelectSubset<T, salesDeleteArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salesUpdateArgs>(args: SelectSubset<T, salesUpdateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salesDeleteManyArgs>(args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salesUpdateManyArgs>(args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {salesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const salesWithIdOnly = await prisma.sales.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends salesUpdateManyAndReturnArgs>(args: SelectSubset<T, salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends salesUpsertArgs>(args: SelectSubset<T, salesUpsertArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales model
   */
  readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends sales$customersArgs<ExtArgs> = {}>(args?: Subset<T, sales$customersArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales_items<T extends sales$sales_itemsArgs<ExtArgs> = {}>(args?: Subset<T, sales$sales_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sales model
   */
  interface salesFieldRefs {
    readonly id: FieldRef<"sales", 'Int'>
    readonly user_id: FieldRef<"sales", 'Int'>
    readonly customer_id: FieldRef<"sales", 'Int'>
    readonly sale_date: FieldRef<"sales", 'DateTime'>
    readonly total_amount: FieldRef<"sales", 'Decimal'>
    readonly created_at: FieldRef<"sales", 'DateTime'>
    readonly updated_at: FieldRef<"sales", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>
  }

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
  }

  /**
   * sales createManyAndReturn
   */
  export type salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales updateManyAndReturn
   */
  export type salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>
  }

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sales.customers
   */
  export type sales$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
  }

  /**
   * sales.sales_items
   */
  export type sales$sales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    cursor?: sales_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
  }


  /**
   * Model sales_items
   */

  export type AggregateSales_items = {
    _count: Sales_itemsCountAggregateOutputType | null
    _avg: Sales_itemsAvgAggregateOutputType | null
    _sum: Sales_itemsSumAggregateOutputType | null
    _min: Sales_itemsMinAggregateOutputType | null
    _max: Sales_itemsMaxAggregateOutputType | null
  }

  export type Sales_itemsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    sale_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Sales_itemsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    sale_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
  }

  export type Sales_itemsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    sale_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Sales_itemsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    sale_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Sales_itemsCountAggregateOutputType = {
    id: number
    user_id: number
    sale_id: number
    inventory_id: number
    quantity: number
    unit_price: number
    total_price: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Sales_itemsAvgAggregateInputType = {
    id?: true
    user_id?: true
    sale_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Sales_itemsSumAggregateInputType = {
    id?: true
    user_id?: true
    sale_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
  }

  export type Sales_itemsMinAggregateInputType = {
    id?: true
    user_id?: true
    sale_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
  }

  export type Sales_itemsMaxAggregateInputType = {
    id?: true
    user_id?: true
    sale_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
  }

  export type Sales_itemsCountAggregateInputType = {
    id?: true
    user_id?: true
    sale_id?: true
    inventory_id?: true
    quantity?: true
    unit_price?: true
    total_price?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Sales_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_items to aggregate.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales_items
    **/
    _count?: true | Sales_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sales_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sales_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sales_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sales_itemsMaxAggregateInputType
  }

  export type GetSales_itemsAggregateType<T extends Sales_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateSales_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales_items[P]>
      : GetScalarType<T[P], AggregateSales_items[P]>
  }




  export type sales_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithAggregationInput | sales_itemsOrderByWithAggregationInput[]
    by: Sales_itemsScalarFieldEnum[] | Sales_itemsScalarFieldEnum
    having?: sales_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sales_itemsCountAggregateInputType | true
    _avg?: Sales_itemsAvgAggregateInputType
    _sum?: Sales_itemsSumAggregateInputType
    _min?: Sales_itemsMinAggregateInputType
    _max?: Sales_itemsMaxAggregateInputType
  }

  export type Sales_itemsGroupByOutputType = {
    id: number
    user_id: number
    sale_id: number | null
    inventory_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    total_price: Decimal | null
    created_at: Date | null
    updated_at: Date | null
    _count: Sales_itemsCountAggregateOutputType | null
    _avg: Sales_itemsAvgAggregateOutputType | null
    _sum: Sales_itemsSumAggregateOutputType | null
    _min: Sales_itemsMinAggregateOutputType | null
    _max: Sales_itemsMaxAggregateOutputType | null
  }

  type GetSales_itemsGroupByPayload<T extends sales_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sales_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sales_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sales_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Sales_itemsGroupByOutputType[P]>
        }
      >
    >


  export type sales_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sale_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | sales_items$inventoryArgs<ExtArgs>
    sales?: boolean | sales_items$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_items"]>

  export type sales_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sale_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | sales_items$inventoryArgs<ExtArgs>
    sales?: boolean | sales_items$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_items"]>

  export type sales_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    sale_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | sales_items$inventoryArgs<ExtArgs>
    sales?: boolean | sales_items$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sales_items"]>

  export type sales_itemsSelectScalar = {
    id?: boolean
    user_id?: boolean
    sale_id?: boolean
    inventory_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    total_price?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type sales_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "sale_id" | "inventory_id" | "quantity" | "unit_price" | "total_price" | "created_at" | "updated_at", ExtArgs["result"]["sales_items"]>
  export type sales_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | sales_items$inventoryArgs<ExtArgs>
    sales?: boolean | sales_items$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sales_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | sales_items$inventoryArgs<ExtArgs>
    sales?: boolean | sales_items$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type sales_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | sales_items$inventoryArgs<ExtArgs>
    sales?: boolean | sales_items$salesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $sales_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales_items"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
      sales: Prisma.$salesPayload<ExtArgs> | null
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      sale_id: number | null
      inventory_id: number | null
      quantity: number | null
      unit_price: Prisma.Decimal | null
      total_price: Prisma.Decimal | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["sales_items"]>
    composites: {}
  }

  type sales_itemsGetPayload<S extends boolean | null | undefined | sales_itemsDefaultArgs> = $Result.GetResult<Prisma.$sales_itemsPayload, S>

  type sales_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sales_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sales_itemsCountAggregateInputType | true
    }

  export interface sales_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales_items'], meta: { name: 'sales_items' } }
    /**
     * Find zero or one Sales_items that matches the filter.
     * @param {sales_itemsFindUniqueArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sales_itemsFindUniqueArgs>(args: SelectSubset<T, sales_itemsFindUniqueArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sales_itemsFindUniqueOrThrowArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sales_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, sales_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsFindFirstArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sales_itemsFindFirstArgs>(args?: SelectSubset<T, sales_itemsFindFirstArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsFindFirstOrThrowArgs} args - Arguments to find a Sales_items
     * @example
     * // Get one Sales_items
     * const sales_items = await prisma.sales_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sales_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, sales_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales_items
     * const sales_items = await prisma.sales_items.findMany()
     * 
     * // Get first 10 Sales_items
     * const sales_items = await prisma.sales_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sales_itemsWithIdOnly = await prisma.sales_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sales_itemsFindManyArgs>(args?: SelectSubset<T, sales_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales_items.
     * @param {sales_itemsCreateArgs} args - Arguments to create a Sales_items.
     * @example
     * // Create one Sales_items
     * const Sales_items = await prisma.sales_items.create({
     *   data: {
     *     // ... data to create a Sales_items
     *   }
     * })
     * 
     */
    create<T extends sales_itemsCreateArgs>(args: SelectSubset<T, sales_itemsCreateArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales_items.
     * @param {sales_itemsCreateManyArgs} args - Arguments to create many Sales_items.
     * @example
     * // Create many Sales_items
     * const sales_items = await prisma.sales_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sales_itemsCreateManyArgs>(args?: SelectSubset<T, sales_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales_items and returns the data saved in the database.
     * @param {sales_itemsCreateManyAndReturnArgs} args - Arguments to create many Sales_items.
     * @example
     * // Create many Sales_items
     * const sales_items = await prisma.sales_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales_items and only return the `id`
     * const sales_itemsWithIdOnly = await prisma.sales_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sales_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, sales_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales_items.
     * @param {sales_itemsDeleteArgs} args - Arguments to delete one Sales_items.
     * @example
     * // Delete one Sales_items
     * const Sales_items = await prisma.sales_items.delete({
     *   where: {
     *     // ... filter to delete one Sales_items
     *   }
     * })
     * 
     */
    delete<T extends sales_itemsDeleteArgs>(args: SelectSubset<T, sales_itemsDeleteArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales_items.
     * @param {sales_itemsUpdateArgs} args - Arguments to update one Sales_items.
     * @example
     * // Update one Sales_items
     * const sales_items = await prisma.sales_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sales_itemsUpdateArgs>(args: SelectSubset<T, sales_itemsUpdateArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales_items.
     * @param {sales_itemsDeleteManyArgs} args - Arguments to filter Sales_items to delete.
     * @example
     * // Delete a few Sales_items
     * const { count } = await prisma.sales_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sales_itemsDeleteManyArgs>(args?: SelectSubset<T, sales_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales_items
     * const sales_items = await prisma.sales_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sales_itemsUpdateManyArgs>(args: SelectSubset<T, sales_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales_items and returns the data updated in the database.
     * @param {sales_itemsUpdateManyAndReturnArgs} args - Arguments to update many Sales_items.
     * @example
     * // Update many Sales_items
     * const sales_items = await prisma.sales_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales_items and only return the `id`
     * const sales_itemsWithIdOnly = await prisma.sales_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sales_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, sales_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales_items.
     * @param {sales_itemsUpsertArgs} args - Arguments to update or create a Sales_items.
     * @example
     * // Update or create a Sales_items
     * const sales_items = await prisma.sales_items.upsert({
     *   create: {
     *     // ... data to create a Sales_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales_items we want to update
     *   }
     * })
     */
    upsert<T extends sales_itemsUpsertArgs>(args: SelectSubset<T, sales_itemsUpsertArgs<ExtArgs>>): Prisma__sales_itemsClient<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsCountArgs} args - Arguments to filter Sales_items to count.
     * @example
     * // Count the number of Sales_items
     * const count = await prisma.sales_items.count({
     *   where: {
     *     // ... the filter for the Sales_items we want to count
     *   }
     * })
    **/
    count<T extends sales_itemsCountArgs>(
      args?: Subset<T, sales_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sales_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sales_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sales_itemsAggregateArgs>(args: Subset<T, Sales_itemsAggregateArgs>): Prisma.PrismaPromise<GetSales_itemsAggregateType<T>>

    /**
     * Group by Sales_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sales_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sales_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sales_itemsGroupByArgs['orderBy'] }
        : { orderBy?: sales_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sales_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSales_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales_items model
   */
  readonly fields: sales_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sales_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends sales_items$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, sales_items$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends sales_items$salesArgs<ExtArgs> = {}>(args?: Subset<T, sales_items$salesArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sales_items model
   */
  interface sales_itemsFieldRefs {
    readonly id: FieldRef<"sales_items", 'Int'>
    readonly user_id: FieldRef<"sales_items", 'Int'>
    readonly sale_id: FieldRef<"sales_items", 'Int'>
    readonly inventory_id: FieldRef<"sales_items", 'Int'>
    readonly quantity: FieldRef<"sales_items", 'Int'>
    readonly unit_price: FieldRef<"sales_items", 'Decimal'>
    readonly total_price: FieldRef<"sales_items", 'Decimal'>
    readonly created_at: FieldRef<"sales_items", 'DateTime'>
    readonly updated_at: FieldRef<"sales_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sales_items findUnique
   */
  export type sales_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items findUniqueOrThrow
   */
  export type sales_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items findFirst
   */
  export type sales_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales_items.
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales_items.
     */
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales_items findFirstOrThrow
   */
  export type sales_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales_items.
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales_items.
     */
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales_items findMany
   */
  export type sales_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter, which sales_items to fetch.
     */
    where?: sales_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales_items to fetch.
     */
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales_items.
     */
    cursor?: sales_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales_items.
     */
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * sales_items create
   */
  export type sales_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a sales_items.
     */
    data: XOR<sales_itemsCreateInput, sales_itemsUncheckedCreateInput>
  }

  /**
   * sales_items createMany
   */
  export type sales_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales_items.
     */
    data: sales_itemsCreateManyInput | sales_itemsCreateManyInput[]
  }

  /**
   * sales_items createManyAndReturn
   */
  export type sales_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many sales_items.
     */
    data: sales_itemsCreateManyInput | sales_itemsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales_items update
   */
  export type sales_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a sales_items.
     */
    data: XOR<sales_itemsUpdateInput, sales_itemsUncheckedUpdateInput>
    /**
     * Choose, which sales_items to update.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items updateMany
   */
  export type sales_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales_items.
     */
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyInput>
    /**
     * Filter which sales_items to update
     */
    where?: sales_itemsWhereInput
    /**
     * Limit how many sales_items to update.
     */
    limit?: number
  }

  /**
   * sales_items updateManyAndReturn
   */
  export type sales_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * The data used to update sales_items.
     */
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyInput>
    /**
     * Filter which sales_items to update
     */
    where?: sales_itemsWhereInput
    /**
     * Limit how many sales_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales_items upsert
   */
  export type sales_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the sales_items to update in case it exists.
     */
    where: sales_itemsWhereUniqueInput
    /**
     * In case the sales_items found by the `where` argument doesn't exist, create a new sales_items with this data.
     */
    create: XOR<sales_itemsCreateInput, sales_itemsUncheckedCreateInput>
    /**
     * In case the sales_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sales_itemsUpdateInput, sales_itemsUncheckedUpdateInput>
  }

  /**
   * sales_items delete
   */
  export type sales_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    /**
     * Filter which sales_items to delete.
     */
    where: sales_itemsWhereUniqueInput
  }

  /**
   * sales_items deleteMany
   */
  export type sales_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales_items to delete
     */
    where?: sales_itemsWhereInput
    /**
     * Limit how many sales_items to delete.
     */
    limit?: number
  }

  /**
   * sales_items.inventory
   */
  export type sales_items$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * sales_items.sales
   */
  export type sales_items$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
  }

  /**
   * sales_items without action
   */
  export type sales_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
  }


  /**
   * Model suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type SuppliersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    contact_info: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    name: string | null
    contact_info: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    user_id: number
    name: number
    contact_info: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SuppliersAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type SuppliersSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type SuppliersMinAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    contact_info?: true
    created_at?: true
    updated_at?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    contact_info?: true
    created_at?: true
    updated_at?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    user_id?: true
    name?: true
    contact_info?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to aggregate.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SuppliersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SuppliersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type suppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithAggregationInput | suppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: suppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _avg?: SuppliersAvgAggregateInputType
    _sum?: SuppliersSumAggregateInputType
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    id: number
    user_id: number
    name: string | null
    contact_info: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: SuppliersCountAggregateOutputType | null
    _avg: SuppliersAvgAggregateOutputType | null
    _sum: SuppliersSumAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends suppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type suppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
    inventory?: boolean | suppliers$inventoryArgs<ExtArgs>
    purchases?: boolean | suppliers$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    name?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type suppliersSelectScalar = {
    id?: boolean
    user_id?: boolean
    name?: boolean
    contact_info?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type suppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "name" | "contact_info" | "created_at" | "updated_at", ExtArgs["result"]["suppliers"]>
  export type suppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | suppliers$inventoryArgs<ExtArgs>
    purchases?: boolean | suppliers$purchasesArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type suppliersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type suppliersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $suppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "suppliers"
    objects: {
      inventory: Prisma.$inventoryPayload<ExtArgs>[]
      purchases: Prisma.$purchasesPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      name: string | null
      contact_info: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type suppliersGetPayload<S extends boolean | null | undefined | suppliersDefaultArgs> = $Result.GetResult<Prisma.$suppliersPayload, S>

  type suppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<suppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface suppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['suppliers'], meta: { name: 'suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {suppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends suppliersFindUniqueArgs>(args: SelectSubset<T, suppliersFindUniqueArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {suppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends suppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, suppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends suppliersFindFirstArgs>(args?: SelectSubset<T, suppliersFindFirstArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends suppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, suppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends suppliersFindManyArgs>(args?: SelectSubset<T, suppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {suppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends suppliersCreateArgs>(args: SelectSubset<T, suppliersCreateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {suppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends suppliersCreateManyArgs>(args?: SelectSubset<T, suppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {suppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends suppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, suppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {suppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends suppliersDeleteArgs>(args: SelectSubset<T, suppliersDeleteArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {suppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends suppliersUpdateArgs>(args: SelectSubset<T, suppliersUpdateArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {suppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends suppliersDeleteManyArgs>(args?: SelectSubset<T, suppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends suppliersUpdateManyArgs>(args: SelectSubset<T, suppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {suppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends suppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, suppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {suppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends suppliersUpsertArgs>(args: SelectSubset<T, suppliersUpsertArgs<ExtArgs>>): Prisma__suppliersClient<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends suppliersCountArgs>(
      args?: Subset<T, suppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {suppliersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends suppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: suppliersGroupByArgs['orderBy'] }
        : { orderBy?: suppliersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, suppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the suppliers model
   */
  readonly fields: suppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__suppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends suppliers$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, suppliers$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends suppliers$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, suppliers$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the suppliers model
   */
  interface suppliersFieldRefs {
    readonly id: FieldRef<"suppliers", 'Int'>
    readonly user_id: FieldRef<"suppliers", 'Int'>
    readonly name: FieldRef<"suppliers", 'String'>
    readonly contact_info: FieldRef<"suppliers", 'String'>
    readonly created_at: FieldRef<"suppliers", 'DateTime'>
    readonly updated_at: FieldRef<"suppliers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * suppliers findUnique
   */
  export type suppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findUniqueOrThrow
   */
  export type suppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers findFirst
   */
  export type suppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findFirstOrThrow
   */
  export type suppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers findMany
   */
  export type suppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter, which suppliers to fetch.
     */
    where?: suppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of suppliers to fetch.
     */
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing suppliers.
     */
    cursor?: suppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * suppliers create
   */
  export type suppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a suppliers.
     */
    data: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
  }

  /**
   * suppliers createMany
   */
  export type suppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
  }

  /**
   * suppliers createManyAndReturn
   */
  export type suppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to create many suppliers.
     */
    data: suppliersCreateManyInput | suppliersCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * suppliers update
   */
  export type suppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a suppliers.
     */
    data: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
    /**
     * Choose, which suppliers to update.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers updateMany
   */
  export type suppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
  }

  /**
   * suppliers updateManyAndReturn
   */
  export type suppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * The data used to update suppliers.
     */
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyInput>
    /**
     * Filter which suppliers to update
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * suppliers upsert
   */
  export type suppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the suppliers to update in case it exists.
     */
    where: suppliersWhereUniqueInput
    /**
     * In case the suppliers found by the `where` argument doesn't exist, create a new suppliers with this data.
     */
    create: XOR<suppliersCreateInput, suppliersUncheckedCreateInput>
    /**
     * In case the suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<suppliersUpdateInput, suppliersUncheckedUpdateInput>
  }

  /**
   * suppliers delete
   */
  export type suppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    /**
     * Filter which suppliers to delete.
     */
    where: suppliersWhereUniqueInput
  }

  /**
   * suppliers deleteMany
   */
  export type suppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: suppliersWhereInput
    /**
     * Limit how many suppliers to delete.
     */
    limit?: number
  }

  /**
   * suppliers.inventory
   */
  export type suppliers$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    cursor?: inventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * suppliers.purchases
   */
  export type suppliers$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    cursor?: purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * suppliers without action
   */
  export type suppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
  }


  /**
   * Model business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    hoursPerDay: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
    userId: number | null
    hoursPerDay: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    location: string | null
    description: string | null
    imagePath: string | null
    hoursPerDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    location: string | null
    description: string | null
    imagePath: string | null
    hoursPerDay: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    products: number
    location: number
    description: number
    imagePath: number
    socialMedia: number
    hoursPerDay: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
    userId?: true
    hoursPerDay?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
    userId?: true
    hoursPerDay?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    description?: true
    imagePath?: true
    hoursPerDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    description?: true
    imagePath?: true
    hoursPerDay?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    products?: true
    location?: true
    description?: true
    imagePath?: true
    socialMedia?: true
    hoursPerDay?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business to aggregate.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type businessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput
    orderBy?: businessOrderByWithAggregationInput | businessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: businessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    userId: number
    name: string
    products: JsonValue
    location: string
    description: string
    imagePath: string | null
    socialMedia: JsonValue
    hoursPerDay: number
    createdAt: Date
    updatedAt: Date
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends businessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type businessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    products?: boolean
    location?: boolean
    description?: boolean
    imagePath?: boolean
    socialMedia?: boolean
    hoursPerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type businessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    products?: boolean
    location?: boolean
    description?: boolean
    imagePath?: boolean
    socialMedia?: boolean
    hoursPerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type businessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    products?: boolean
    location?: boolean
    description?: boolean
    imagePath?: boolean
    socialMedia?: boolean
    hoursPerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type businessSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    products?: boolean
    location?: boolean
    description?: boolean
    imagePath?: boolean
    socialMedia?: boolean
    hoursPerDay?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type businessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "products" | "location" | "description" | "imagePath" | "socialMedia" | "hoursPerDay" | "createdAt" | "updatedAt", ExtArgs["result"]["business"]>
  export type businessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type businessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type businessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $businessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "business"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      products: Prisma.JsonValue
      location: string
      description: string
      imagePath: string | null
      socialMedia: Prisma.JsonValue
      hoursPerDay: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type businessGetPayload<S extends boolean | null | undefined | businessDefaultArgs> = $Result.GetResult<Prisma.$businessPayload, S>

  type businessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<businessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface businessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business'], meta: { name: 'business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {businessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends businessFindUniqueArgs>(args: SelectSubset<T, businessFindUniqueArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {businessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends businessFindUniqueOrThrowArgs>(args: SelectSubset<T, businessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends businessFindFirstArgs>(args?: SelectSubset<T, businessFindFirstArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends businessFindFirstOrThrowArgs>(args?: SelectSubset<T, businessFindFirstOrThrowArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends businessFindManyArgs>(args?: SelectSubset<T, businessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {businessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends businessCreateArgs>(args: SelectSubset<T, businessCreateArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {businessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends businessCreateManyArgs>(args?: SelectSubset<T, businessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {businessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends businessCreateManyAndReturnArgs>(args?: SelectSubset<T, businessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {businessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends businessDeleteArgs>(args: SelectSubset<T, businessDeleteArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {businessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends businessUpdateArgs>(args: SelectSubset<T, businessUpdateArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {businessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends businessDeleteManyArgs>(args?: SelectSubset<T, businessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends businessUpdateManyArgs>(args: SelectSubset<T, businessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {businessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends businessUpdateManyAndReturnArgs>(args: SelectSubset<T, businessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {businessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends businessUpsertArgs>(args: SelectSubset<T, businessUpsertArgs<ExtArgs>>): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends businessCountArgs>(
      args?: Subset<T, businessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends businessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: businessGroupByArgs['orderBy'] }
        : { orderBy?: businessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, businessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the business model
   */
  readonly fields: businessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__businessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the business model
   */
  interface businessFieldRefs {
    readonly id: FieldRef<"business", 'Int'>
    readonly userId: FieldRef<"business", 'Int'>
    readonly name: FieldRef<"business", 'String'>
    readonly products: FieldRef<"business", 'Json'>
    readonly location: FieldRef<"business", 'String'>
    readonly description: FieldRef<"business", 'String'>
    readonly imagePath: FieldRef<"business", 'String'>
    readonly socialMedia: FieldRef<"business", 'Json'>
    readonly hoursPerDay: FieldRef<"business", 'Float'>
    readonly createdAt: FieldRef<"business", 'DateTime'>
    readonly updatedAt: FieldRef<"business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * business findUnique
   */
  export type businessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business findUniqueOrThrow
   */
  export type businessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business findFirst
   */
  export type businessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * business findFirstOrThrow
   */
  export type businessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * business findMany
   */
  export type businessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter, which businesses to fetch.
     */
    where?: businessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing businesses.
     */
    cursor?: businessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * business create
   */
  export type businessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * The data needed to create a business.
     */
    data: XOR<businessCreateInput, businessUncheckedCreateInput>
  }

  /**
   * business createMany
   */
  export type businessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[]
  }

  /**
   * business createManyAndReturn
   */
  export type businessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * business update
   */
  export type businessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * The data needed to update a business.
     */
    data: XOR<businessUpdateInput, businessUncheckedUpdateInput>
    /**
     * Choose, which business to update.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business updateMany
   */
  export type businessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput
    /**
     * Limit how many businesses to update.
     */
    limit?: number
  }

  /**
   * business updateManyAndReturn
   */
  export type businessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput
    /**
     * Limit how many businesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * business upsert
   */
  export type businessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * The filter to search for the business to update in case it exists.
     */
    where: businessWhereUniqueInput
    /**
     * In case the business found by the `where` argument doesn't exist, create a new business with this data.
     */
    create: XOR<businessCreateInput, businessUncheckedCreateInput>
    /**
     * In case the business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<businessUpdateInput, businessUncheckedUpdateInput>
  }

  /**
   * business delete
   */
  export type businessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    /**
     * Filter which business to delete.
     */
    where: businessWhereUniqueInput
  }

  /**
   * business deleteMany
   */
  export type businessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which businesses to delete
     */
    where?: businessWhereInput
    /**
     * Limit how many businesses to delete.
     */
    limit?: number
  }

  /**
   * business without action
   */
  export type businessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
  }


  /**
   * Model plans
   */

  export type AggregatePlans = {
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  export type PlansAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PlansSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PlansMinAggregateOutputType = {
    id: number | null
    userId: number | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlansMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlansCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlansAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlansSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PlansMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlansMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlansCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plans to aggregate.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned plans
    **/
    _count?: true | PlansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlansMaxAggregateInputType
  }

  export type GetPlansAggregateType<T extends PlansAggregateArgs> = {
        [P in keyof T & keyof AggregatePlans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlans[P]>
      : GetScalarType<T[P], AggregatePlans[P]>
  }




  export type plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: plansWhereInput
    orderBy?: plansOrderByWithAggregationInput | plansOrderByWithAggregationInput[]
    by: PlansScalarFieldEnum[] | PlansScalarFieldEnum
    having?: plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlansCountAggregateInputType | true
    _avg?: PlansAvgAggregateInputType
    _sum?: PlansSumAggregateInputType
    _min?: PlansMinAggregateInputType
    _max?: PlansMaxAggregateInputType
  }

  export type PlansGroupByOutputType = {
    id: number
    userId: number
    plan: string
    createdAt: Date
    updatedAt: Date
    _count: PlansCountAggregateOutputType | null
    _avg: PlansAvgAggregateOutputType | null
    _sum: PlansSumAggregateOutputType | null
    _min: PlansMinAggregateOutputType | null
    _max: PlansMaxAggregateOutputType | null
  }

  type GetPlansGroupByPayload<T extends plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlansGroupByOutputType[P]>
            : GetScalarType<T[P], PlansGroupByOutputType[P]>
        }
      >
    >


  export type plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type plansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type plansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plans"]>

  export type plansSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plan" | "createdAt" | "updatedAt", ExtArgs["result"]["plans"]>
  export type plansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type plansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type plansIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "plans"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      plan: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plans"]>
    composites: {}
  }

  type plansGetPayload<S extends boolean | null | undefined | plansDefaultArgs> = $Result.GetResult<Prisma.$plansPayload, S>

  type plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlansCountAggregateInputType | true
    }

  export interface plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['plans'], meta: { name: 'plans' } }
    /**
     * Find zero or one Plans that matches the filter.
     * @param {plansFindUniqueArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends plansFindUniqueArgs>(args: SelectSubset<T, plansFindUniqueArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {plansFindUniqueOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends plansFindUniqueOrThrowArgs>(args: SelectSubset<T, plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansFindFirstArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends plansFindFirstArgs>(args?: SelectSubset<T, plansFindFirstArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansFindFirstOrThrowArgs} args - Arguments to find a Plans
     * @example
     * // Get one Plans
     * const plans = await prisma.plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends plansFindFirstOrThrowArgs>(args?: SelectSubset<T, plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plans.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plansWithIdOnly = await prisma.plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends plansFindManyArgs>(args?: SelectSubset<T, plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plans.
     * @param {plansCreateArgs} args - Arguments to create a Plans.
     * @example
     * // Create one Plans
     * const Plans = await prisma.plans.create({
     *   data: {
     *     // ... data to create a Plans
     *   }
     * })
     * 
     */
    create<T extends plansCreateArgs>(args: SelectSubset<T, plansCreateArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {plansCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends plansCreateManyArgs>(args?: SelectSubset<T, plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {plansCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plans = await prisma.plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends plansCreateManyAndReturnArgs>(args?: SelectSubset<T, plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plans.
     * @param {plansDeleteArgs} args - Arguments to delete one Plans.
     * @example
     * // Delete one Plans
     * const Plans = await prisma.plans.delete({
     *   where: {
     *     // ... filter to delete one Plans
     *   }
     * })
     * 
     */
    delete<T extends plansDeleteArgs>(args: SelectSubset<T, plansDeleteArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plans.
     * @param {plansUpdateArgs} args - Arguments to update one Plans.
     * @example
     * // Update one Plans
     * const plans = await prisma.plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends plansUpdateArgs>(args: SelectSubset<T, plansUpdateArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {plansDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends plansDeleteManyArgs>(args?: SelectSubset<T, plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends plansUpdateManyArgs>(args: SelectSubset<T, plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {plansUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plans = await prisma.plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const plansWithIdOnly = await prisma.plans.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends plansUpdateManyAndReturnArgs>(args: SelectSubset<T, plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plans.
     * @param {plansUpsertArgs} args - Arguments to update or create a Plans.
     * @example
     * // Update or create a Plans
     * const plans = await prisma.plans.upsert({
     *   create: {
     *     // ... data to create a Plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plans we want to update
     *   }
     * })
     */
    upsert<T extends plansUpsertArgs>(args: SelectSubset<T, plansUpsertArgs<ExtArgs>>): Prisma__plansClient<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plans.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends plansCountArgs>(
      args?: Subset<T, plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlansAggregateArgs>(args: Subset<T, PlansAggregateArgs>): Prisma.PrismaPromise<GetPlansAggregateType<T>>

    /**
     * Group by Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {plansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: plansGroupByArgs['orderBy'] }
        : { orderBy?: plansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the plans model
   */
  readonly fields: plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the plans model
   */
  interface plansFieldRefs {
    readonly id: FieldRef<"plans", 'Int'>
    readonly userId: FieldRef<"plans", 'Int'>
    readonly plan: FieldRef<"plans", 'String'>
    readonly createdAt: FieldRef<"plans", 'DateTime'>
    readonly updatedAt: FieldRef<"plans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * plans findUnique
   */
  export type plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans findUniqueOrThrow
   */
  export type plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans findFirst
   */
  export type plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plans.
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * plans findFirstOrThrow
   */
  export type plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for plans.
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of plans.
     */
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * plans findMany
   */
  export type plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter, which plans to fetch.
     */
    where?: plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of plans to fetch.
     */
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing plans.
     */
    cursor?: plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` plans.
     */
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * plans create
   */
  export type plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * The data needed to create a plans.
     */
    data: XOR<plansCreateInput, plansUncheckedCreateInput>
  }

  /**
   * plans createMany
   */
  export type plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many plans.
     */
    data: plansCreateManyInput | plansCreateManyInput[]
  }

  /**
   * plans createManyAndReturn
   */
  export type plansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * The data used to create many plans.
     */
    data: plansCreateManyInput | plansCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * plans update
   */
  export type plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * The data needed to update a plans.
     */
    data: XOR<plansUpdateInput, plansUncheckedUpdateInput>
    /**
     * Choose, which plans to update.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans updateMany
   */
  export type plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update plans.
     */
    data: XOR<plansUpdateManyMutationInput, plansUncheckedUpdateManyInput>
    /**
     * Filter which plans to update
     */
    where?: plansWhereInput
    /**
     * Limit how many plans to update.
     */
    limit?: number
  }

  /**
   * plans updateManyAndReturn
   */
  export type plansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * The data used to update plans.
     */
    data: XOR<plansUpdateManyMutationInput, plansUncheckedUpdateManyInput>
    /**
     * Filter which plans to update
     */
    where?: plansWhereInput
    /**
     * Limit how many plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * plans upsert
   */
  export type plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * The filter to search for the plans to update in case it exists.
     */
    where: plansWhereUniqueInput
    /**
     * In case the plans found by the `where` argument doesn't exist, create a new plans with this data.
     */
    create: XOR<plansCreateInput, plansUncheckedCreateInput>
    /**
     * In case the plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<plansUpdateInput, plansUncheckedUpdateInput>
  }

  /**
   * plans delete
   */
  export type plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    /**
     * Filter which plans to delete.
     */
    where: plansWhereUniqueInput
  }

  /**
   * plans deleteMany
   */
  export type plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which plans to delete
     */
    where?: plansWhereInput
    /**
     * Limit how many plans to delete.
     */
    limit?: number
  }

  /**
   * plans without action
   */
  export type plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    email: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    email?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    email?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string | null
    password: string | null
    role: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    expenses?: boolean | users$expensesArgs<ExtArgs>
    customers?: boolean | users$customersArgs<ExtArgs>
    suppliers?: boolean | users$suppliersArgs<ExtArgs>
    inventory?: boolean | users$inventoryArgs<ExtArgs>
    purchases?: boolean | users$purchasesArgs<ExtArgs>
    purchase_items?: boolean | users$purchase_itemsArgs<ExtArgs>
    inventory_transactions?: boolean | users$inventory_transactionsArgs<ExtArgs>
    sales?: boolean | users$salesArgs<ExtArgs>
    sales_items?: boolean | users$sales_itemsArgs<ExtArgs>
    business?: boolean | users$businessArgs<ExtArgs>
    plan?: boolean | users$planArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "email" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | users$expensesArgs<ExtArgs>
    customers?: boolean | users$customersArgs<ExtArgs>
    suppliers?: boolean | users$suppliersArgs<ExtArgs>
    inventory?: boolean | users$inventoryArgs<ExtArgs>
    purchases?: boolean | users$purchasesArgs<ExtArgs>
    purchase_items?: boolean | users$purchase_itemsArgs<ExtArgs>
    inventory_transactions?: boolean | users$inventory_transactionsArgs<ExtArgs>
    sales?: boolean | users$salesArgs<ExtArgs>
    sales_items?: boolean | users$sales_itemsArgs<ExtArgs>
    business?: boolean | users$businessArgs<ExtArgs>
    plan?: boolean | users$planArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      expenses: Prisma.$expensesPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs>[]
      suppliers: Prisma.$suppliersPayload<ExtArgs>[]
      inventory: Prisma.$inventoryPayload<ExtArgs>[]
      purchases: Prisma.$purchasesPayload<ExtArgs>[]
      purchase_items: Prisma.$purchase_itemsPayload<ExtArgs>[]
      inventory_transactions: Prisma.$inventory_transactionsPayload<ExtArgs>[]
      sales: Prisma.$salesPayload<ExtArgs>[]
      sales_items: Prisma.$sales_itemsPayload<ExtArgs>[]
      business: Prisma.$businessPayload<ExtArgs>[]
      plan: Prisma.$plansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string | null
      password: string | null
      role: string | null
      email: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends users$expensesArgs<ExtArgs> = {}>(args?: Subset<T, users$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends users$customersArgs<ExtArgs> = {}>(args?: Subset<T, users$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    suppliers<T extends users$suppliersArgs<ExtArgs> = {}>(args?: Subset<T, users$suppliersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$suppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends users$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, users$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends users$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, users$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchase_items<T extends users$purchase_itemsArgs<ExtArgs> = {}>(args?: Subset<T, users$purchase_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$purchase_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory_transactions<T extends users$inventory_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, users$inventory_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventory_transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends users$salesArgs<ExtArgs> = {}>(args?: Subset<T, users$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales_items<T extends users$sales_itemsArgs<ExtArgs> = {}>(args?: Subset<T, users$sales_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sales_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    business<T extends users$businessArgs<ExtArgs> = {}>(args?: Subset<T, users$businessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plan<T extends users$planArgs<ExtArgs> = {}>(args?: Subset<T, users$planArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.expenses
   */
  export type users$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expenses
     */
    select?: expensesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expenses
     */
    omit?: expensesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expensesInclude<ExtArgs> | null
    where?: expensesWhereInput
    orderBy?: expensesOrderByWithRelationInput | expensesOrderByWithRelationInput[]
    cursor?: expensesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpensesScalarFieldEnum | ExpensesScalarFieldEnum[]
  }

  /**
   * users.customers
   */
  export type users$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    cursor?: customersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * users.suppliers
   */
  export type users$suppliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the suppliers
     */
    select?: suppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the suppliers
     */
    omit?: suppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: suppliersInclude<ExtArgs> | null
    where?: suppliersWhereInput
    orderBy?: suppliersOrderByWithRelationInput | suppliersOrderByWithRelationInput[]
    cursor?: suppliersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * users.inventory
   */
  export type users$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    cursor?: inventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * users.purchases
   */
  export type users$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchases
     */
    select?: purchasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchases
     */
    omit?: purchasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchasesInclude<ExtArgs> | null
    where?: purchasesWhereInput
    orderBy?: purchasesOrderByWithRelationInput | purchasesOrderByWithRelationInput[]
    cursor?: purchasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasesScalarFieldEnum | PurchasesScalarFieldEnum[]
  }

  /**
   * users.purchase_items
   */
  export type users$purchase_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the purchase_items
     */
    select?: purchase_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the purchase_items
     */
    omit?: purchase_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: purchase_itemsInclude<ExtArgs> | null
    where?: purchase_itemsWhereInput
    orderBy?: purchase_itemsOrderByWithRelationInput | purchase_itemsOrderByWithRelationInput[]
    cursor?: purchase_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Purchase_itemsScalarFieldEnum | Purchase_itemsScalarFieldEnum[]
  }

  /**
   * users.inventory_transactions
   */
  export type users$inventory_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory_transactions
     */
    select?: inventory_transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory_transactions
     */
    omit?: inventory_transactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventory_transactionsInclude<ExtArgs> | null
    where?: inventory_transactionsWhereInput
    orderBy?: inventory_transactionsOrderByWithRelationInput | inventory_transactionsOrderByWithRelationInput[]
    cursor?: inventory_transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Inventory_transactionsScalarFieldEnum | Inventory_transactionsScalarFieldEnum[]
  }

  /**
   * users.sales
   */
  export type users$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * users.sales_items
   */
  export type users$sales_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales_items
     */
    select?: sales_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales_items
     */
    omit?: sales_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sales_itemsInclude<ExtArgs> | null
    where?: sales_itemsWhereInput
    orderBy?: sales_itemsOrderByWithRelationInput | sales_itemsOrderByWithRelationInput[]
    cursor?: sales_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sales_itemsScalarFieldEnum | Sales_itemsScalarFieldEnum[]
  }

  /**
   * users.business
   */
  export type users$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the business
     */
    omit?: businessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: businessInclude<ExtArgs> | null
    where?: businessWhereInput
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[]
    cursor?: businessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * users.plan
   */
  export type users$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the plans
     */
    select?: plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the plans
     */
    omit?: plansOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: plansInclude<ExtArgs> | null
    where?: plansWhereInput
    orderBy?: plansOrderByWithRelationInput | plansOrderByWithRelationInput[]
    cursor?: plansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlansScalarFieldEnum | PlansScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const ExpensesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    description: 'description',
    amount: 'amount',
    date: 'date',
    category: 'category',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ExpensesScalarFieldEnum = (typeof ExpensesScalarFieldEnum)[keyof typeof ExpensesScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    description: 'description',
    quantity_in_stock: 'quantity_in_stock',
    cost_price: 'cost_price',
    selling_price: 'selling_price',
    supplier_id: 'supplier_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const Inventory_transactionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    inventory_id: 'inventory_id',
    transaction_type: 'transaction_type',
    quantity_change: 'quantity_change',
    date: 'date',
    reference_type: 'reference_type',
    reference_id: 'reference_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Inventory_transactionsScalarFieldEnum = (typeof Inventory_transactionsScalarFieldEnum)[keyof typeof Inventory_transactionsScalarFieldEnum]


  export const Purchase_itemsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    purchase_id: 'purchase_id',
    inventory_id: 'inventory_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    total_price: 'total_price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Purchase_itemsScalarFieldEnum = (typeof Purchase_itemsScalarFieldEnum)[keyof typeof Purchase_itemsScalarFieldEnum]


  export const PurchasesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    supplier_id: 'supplier_id',
    purchase_date: 'purchase_date',
    total_amount: 'total_amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PurchasesScalarFieldEnum = (typeof PurchasesScalarFieldEnum)[keyof typeof PurchasesScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    customer_id: 'customer_id',
    sale_date: 'sale_date',
    total_amount: 'total_amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const Sales_itemsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    sale_id: 'sale_id',
    inventory_id: 'inventory_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    total_price: 'total_price',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Sales_itemsScalarFieldEnum = (typeof Sales_itemsScalarFieldEnum)[keyof typeof Sales_itemsScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    name: 'name',
    contact_info: 'contact_info',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    products: 'products',
    location: 'location',
    description: 'description',
    imagePath: 'imagePath',
    socialMedia: 'socialMedia',
    hoursPerDay: 'hoursPerDay',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const PlansScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlansScalarFieldEnum = (typeof PlansScalarFieldEnum)[keyof typeof PlansScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    email: 'email',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    id?: IntFilter<"customers"> | number
    user_id?: IntFilter<"customers"> | number
    name?: StringNullableFilter<"customers"> | string | null
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    created_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    sales?: SalesListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type customersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    sales?: salesOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    user_id?: IntFilter<"customers"> | number
    name?: StringNullableFilter<"customers"> | string | null
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    created_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    sales?: SalesListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type customersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"customers"> | number
    user_id?: IntWithAggregatesFilter<"customers"> | number
    name?: StringNullableWithAggregatesFilter<"customers"> | string | null
    email?: StringNullableWithAggregatesFilter<"customers"> | string | null
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    address?: StringNullableWithAggregatesFilter<"customers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null
  }

  export type expensesWhereInput = {
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    id?: IntFilter<"expenses"> | number
    user_id?: IntNullableFilter<"expenses"> | number | null
    description?: StringNullableFilter<"expenses"> | string | null
    amount?: DecimalNullableFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableFilter<"expenses"> | Date | string | null
    category?: StringNullableFilter<"expenses"> | string | null
    created_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type expensesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type expensesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: expensesWhereInput | expensesWhereInput[]
    OR?: expensesWhereInput[]
    NOT?: expensesWhereInput | expensesWhereInput[]
    user_id?: IntNullableFilter<"expenses"> | number | null
    description?: StringNullableFilter<"expenses"> | string | null
    amount?: DecimalNullableFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableFilter<"expenses"> | Date | string | null
    category?: StringNullableFilter<"expenses"> | string | null
    created_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type expensesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: expensesCountOrderByAggregateInput
    _avg?: expensesAvgOrderByAggregateInput
    _max?: expensesMaxOrderByAggregateInput
    _min?: expensesMinOrderByAggregateInput
    _sum?: expensesSumOrderByAggregateInput
  }

  export type expensesScalarWhereWithAggregatesInput = {
    AND?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    OR?: expensesScalarWhereWithAggregatesInput[]
    NOT?: expensesScalarWhereWithAggregatesInput | expensesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"expenses"> | number
    user_id?: IntNullableWithAggregatesFilter<"expenses"> | number | null
    description?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableWithAggregatesFilter<"expenses"> | Date | string | null
    category?: StringNullableWithAggregatesFilter<"expenses"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"expenses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"expenses"> | Date | string | null
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    id?: IntFilter<"inventory"> | number
    user_id?: IntFilter<"inventory"> | number
    name?: StringNullableFilter<"inventory"> | string | null
    description?: StringNullableFilter<"inventory"> | string | null
    quantity_in_stock?: IntNullableFilter<"inventory"> | number | null
    cost_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    selling_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_id?: IntNullableFilter<"inventory"> | number | null
    created_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    suppliers?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    inventory_transactions?: Inventory_transactionsListRelationFilter
    purchase_items?: Purchase_itemsListRelationFilter
    sales_items?: Sales_itemsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type inventoryOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity_in_stock?: SortOrderInput | SortOrder
    cost_price?: SortOrderInput | SortOrder
    selling_price?: SortOrderInput | SortOrder
    supplier_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    suppliers?: suppliersOrderByWithRelationInput
    inventory_transactions?: inventory_transactionsOrderByRelationAggregateInput
    purchase_items?: purchase_itemsOrderByRelationAggregateInput
    sales_items?: sales_itemsOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    user_id?: IntFilter<"inventory"> | number
    name?: StringNullableFilter<"inventory"> | string | null
    description?: StringNullableFilter<"inventory"> | string | null
    quantity_in_stock?: IntNullableFilter<"inventory"> | number | null
    cost_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    selling_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_id?: IntNullableFilter<"inventory"> | number | null
    created_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    suppliers?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    inventory_transactions?: Inventory_transactionsListRelationFilter
    purchase_items?: Purchase_itemsListRelationFilter
    sales_items?: Sales_itemsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type inventoryOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantity_in_stock?: SortOrderInput | SortOrder
    cost_price?: SortOrderInput | SortOrder
    selling_price?: SortOrderInput | SortOrder
    supplier_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory"> | number
    user_id?: IntWithAggregatesFilter<"inventory"> | number
    name?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    description?: StringNullableWithAggregatesFilter<"inventory"> | string | null
    quantity_in_stock?: IntNullableWithAggregatesFilter<"inventory"> | number | null
    cost_price?: DecimalNullableWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    selling_price?: DecimalNullableWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_id?: IntNullableWithAggregatesFilter<"inventory"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"inventory"> | Date | string | null
  }

  export type inventory_transactionsWhereInput = {
    AND?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    OR?: inventory_transactionsWhereInput[]
    NOT?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    id?: IntFilter<"inventory_transactions"> | number
    user_id?: IntFilter<"inventory_transactions"> | number
    inventory_id?: IntNullableFilter<"inventory_transactions"> | number | null
    transaction_type?: StringNullableFilter<"inventory_transactions"> | string | null
    quantity_change?: IntNullableFilter<"inventory_transactions"> | number | null
    date?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    reference_type?: StringNullableFilter<"inventory_transactions"> | string | null
    reference_id?: IntNullableFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type inventory_transactionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrderInput | SortOrder
    transaction_type?: SortOrderInput | SortOrder
    quantity_change?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    reference_type?: SortOrderInput | SortOrder
    reference_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type inventory_transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    OR?: inventory_transactionsWhereInput[]
    NOT?: inventory_transactionsWhereInput | inventory_transactionsWhereInput[]
    user_id?: IntFilter<"inventory_transactions"> | number
    inventory_id?: IntNullableFilter<"inventory_transactions"> | number | null
    transaction_type?: StringNullableFilter<"inventory_transactions"> | string | null
    quantity_change?: IntNullableFilter<"inventory_transactions"> | number | null
    date?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    reference_type?: StringNullableFilter<"inventory_transactions"> | string | null
    reference_id?: IntNullableFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type inventory_transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrderInput | SortOrder
    transaction_type?: SortOrderInput | SortOrder
    quantity_change?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    reference_type?: SortOrderInput | SortOrder
    reference_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: inventory_transactionsCountOrderByAggregateInput
    _avg?: inventory_transactionsAvgOrderByAggregateInput
    _max?: inventory_transactionsMaxOrderByAggregateInput
    _min?: inventory_transactionsMinOrderByAggregateInput
    _sum?: inventory_transactionsSumOrderByAggregateInput
  }

  export type inventory_transactionsScalarWhereWithAggregatesInput = {
    AND?: inventory_transactionsScalarWhereWithAggregatesInput | inventory_transactionsScalarWhereWithAggregatesInput[]
    OR?: inventory_transactionsScalarWhereWithAggregatesInput[]
    NOT?: inventory_transactionsScalarWhereWithAggregatesInput | inventory_transactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inventory_transactions"> | number
    user_id?: IntWithAggregatesFilter<"inventory_transactions"> | number
    inventory_id?: IntNullableWithAggregatesFilter<"inventory_transactions"> | number | null
    transaction_type?: StringNullableWithAggregatesFilter<"inventory_transactions"> | string | null
    quantity_change?: IntNullableWithAggregatesFilter<"inventory_transactions"> | number | null
    date?: DateTimeNullableWithAggregatesFilter<"inventory_transactions"> | Date | string | null
    reference_type?: StringNullableWithAggregatesFilter<"inventory_transactions"> | string | null
    reference_id?: IntNullableWithAggregatesFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"inventory_transactions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"inventory_transactions"> | Date | string | null
  }

  export type purchase_itemsWhereInput = {
    AND?: purchase_itemsWhereInput | purchase_itemsWhereInput[]
    OR?: purchase_itemsWhereInput[]
    NOT?: purchase_itemsWhereInput | purchase_itemsWhereInput[]
    id?: IntFilter<"purchase_items"> | number
    user_id?: IntFilter<"purchase_items"> | number
    purchase_id?: IntNullableFilter<"purchase_items"> | number | null
    inventory_id?: IntNullableFilter<"purchase_items"> | number | null
    quantity?: IntNullableFilter<"purchase_items"> | number | null
    unit_price?: DecimalNullableFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"purchase_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"purchase_items"> | Date | string | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    purchases?: XOR<PurchasesNullableScalarRelationFilter, purchasesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type purchase_itemsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrderInput | SortOrder
    inventory_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
    purchases?: purchasesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type purchase_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: purchase_itemsWhereInput | purchase_itemsWhereInput[]
    OR?: purchase_itemsWhereInput[]
    NOT?: purchase_itemsWhereInput | purchase_itemsWhereInput[]
    user_id?: IntFilter<"purchase_items"> | number
    purchase_id?: IntNullableFilter<"purchase_items"> | number | null
    inventory_id?: IntNullableFilter<"purchase_items"> | number | null
    quantity?: IntNullableFilter<"purchase_items"> | number | null
    unit_price?: DecimalNullableFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"purchase_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"purchase_items"> | Date | string | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    purchases?: XOR<PurchasesNullableScalarRelationFilter, purchasesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type purchase_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrderInput | SortOrder
    inventory_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: purchase_itemsCountOrderByAggregateInput
    _avg?: purchase_itemsAvgOrderByAggregateInput
    _max?: purchase_itemsMaxOrderByAggregateInput
    _min?: purchase_itemsMinOrderByAggregateInput
    _sum?: purchase_itemsSumOrderByAggregateInput
  }

  export type purchase_itemsScalarWhereWithAggregatesInput = {
    AND?: purchase_itemsScalarWhereWithAggregatesInput | purchase_itemsScalarWhereWithAggregatesInput[]
    OR?: purchase_itemsScalarWhereWithAggregatesInput[]
    NOT?: purchase_itemsScalarWhereWithAggregatesInput | purchase_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"purchase_items"> | number
    user_id?: IntWithAggregatesFilter<"purchase_items"> | number
    purchase_id?: IntNullableWithAggregatesFilter<"purchase_items"> | number | null
    inventory_id?: IntNullableWithAggregatesFilter<"purchase_items"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"purchase_items"> | number | null
    unit_price?: DecimalNullableWithAggregatesFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableWithAggregatesFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"purchase_items"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"purchase_items"> | Date | string | null
  }

  export type purchasesWhereInput = {
    AND?: purchasesWhereInput | purchasesWhereInput[]
    OR?: purchasesWhereInput[]
    NOT?: purchasesWhereInput | purchasesWhereInput[]
    id?: IntFilter<"purchases"> | number
    user_id?: IntFilter<"purchases"> | number
    supplier_id?: IntNullableFilter<"purchases"> | number | null
    purchase_date?: DateTimeNullableFilter<"purchases"> | Date | string | null
    total_amount?: DecimalNullableFilter<"purchases"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"purchases"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"purchases"> | Date | string | null
    purchase_items?: Purchase_itemsListRelationFilter
    suppliers?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type purchasesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    purchase_date?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    purchase_items?: purchase_itemsOrderByRelationAggregateInput
    suppliers?: suppliersOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type purchasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: purchasesWhereInput | purchasesWhereInput[]
    OR?: purchasesWhereInput[]
    NOT?: purchasesWhereInput | purchasesWhereInput[]
    user_id?: IntFilter<"purchases"> | number
    supplier_id?: IntNullableFilter<"purchases"> | number | null
    purchase_date?: DateTimeNullableFilter<"purchases"> | Date | string | null
    total_amount?: DecimalNullableFilter<"purchases"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"purchases"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"purchases"> | Date | string | null
    purchase_items?: Purchase_itemsListRelationFilter
    suppliers?: XOR<SuppliersNullableScalarRelationFilter, suppliersWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type purchasesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrderInput | SortOrder
    purchase_date?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: purchasesCountOrderByAggregateInput
    _avg?: purchasesAvgOrderByAggregateInput
    _max?: purchasesMaxOrderByAggregateInput
    _min?: purchasesMinOrderByAggregateInput
    _sum?: purchasesSumOrderByAggregateInput
  }

  export type purchasesScalarWhereWithAggregatesInput = {
    AND?: purchasesScalarWhereWithAggregatesInput | purchasesScalarWhereWithAggregatesInput[]
    OR?: purchasesScalarWhereWithAggregatesInput[]
    NOT?: purchasesScalarWhereWithAggregatesInput | purchasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"purchases"> | number
    user_id?: IntWithAggregatesFilter<"purchases"> | number
    supplier_id?: IntNullableWithAggregatesFilter<"purchases"> | number | null
    purchase_date?: DateTimeNullableWithAggregatesFilter<"purchases"> | Date | string | null
    total_amount?: DecimalNullableWithAggregatesFilter<"purchases"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"purchases"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"purchases"> | Date | string | null
  }

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    id?: IntFilter<"sales"> | number
    user_id?: IntFilter<"sales"> | number
    customer_id?: IntNullableFilter<"sales"> | number | null
    sale_date?: DateTimeNullableFilter<"sales"> | Date | string | null
    total_amount?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"sales"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sales"> | Date | string | null
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    sales_items?: Sales_itemsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type salesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    sale_date?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    customers?: customersOrderByWithRelationInput
    sales_items?: sales_itemsOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type salesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    user_id?: IntFilter<"sales"> | number
    customer_id?: IntNullableFilter<"sales"> | number | null
    sale_date?: DateTimeNullableFilter<"sales"> | Date | string | null
    total_amount?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"sales"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sales"> | Date | string | null
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    sales_items?: Sales_itemsListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type salesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    sale_date?: SortOrderInput | SortOrder
    total_amount?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: salesCountOrderByAggregateInput
    _avg?: salesAvgOrderByAggregateInput
    _max?: salesMaxOrderByAggregateInput
    _min?: salesMinOrderByAggregateInput
    _sum?: salesSumOrderByAggregateInput
  }

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    OR?: salesScalarWhereWithAggregatesInput[]
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sales"> | number
    user_id?: IntWithAggregatesFilter<"sales"> | number
    customer_id?: IntNullableWithAggregatesFilter<"sales"> | number | null
    sale_date?: DateTimeNullableWithAggregatesFilter<"sales"> | Date | string | null
    total_amount?: DecimalNullableWithAggregatesFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"sales"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"sales"> | Date | string | null
  }

  export type sales_itemsWhereInput = {
    AND?: sales_itemsWhereInput | sales_itemsWhereInput[]
    OR?: sales_itemsWhereInput[]
    NOT?: sales_itemsWhereInput | sales_itemsWhereInput[]
    id?: IntFilter<"sales_items"> | number
    user_id?: IntFilter<"sales_items"> | number
    sale_id?: IntNullableFilter<"sales_items"> | number | null
    inventory_id?: IntNullableFilter<"sales_items"> | number | null
    quantity?: IntNullableFilter<"sales_items"> | number | null
    unit_price?: DecimalNullableFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"sales_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sales_items"> | Date | string | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    sales?: XOR<SalesNullableScalarRelationFilter, salesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type sales_itemsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrderInput | SortOrder
    inventory_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByWithRelationInput
    sales?: salesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type sales_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sales_itemsWhereInput | sales_itemsWhereInput[]
    OR?: sales_itemsWhereInput[]
    NOT?: sales_itemsWhereInput | sales_itemsWhereInput[]
    user_id?: IntFilter<"sales_items"> | number
    sale_id?: IntNullableFilter<"sales_items"> | number | null
    inventory_id?: IntNullableFilter<"sales_items"> | number | null
    quantity?: IntNullableFilter<"sales_items"> | number | null
    unit_price?: DecimalNullableFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"sales_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sales_items"> | Date | string | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
    sales?: XOR<SalesNullableScalarRelationFilter, salesWhereInput> | null
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type sales_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrderInput | SortOrder
    inventory_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    unit_price?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: sales_itemsCountOrderByAggregateInput
    _avg?: sales_itemsAvgOrderByAggregateInput
    _max?: sales_itemsMaxOrderByAggregateInput
    _min?: sales_itemsMinOrderByAggregateInput
    _sum?: sales_itemsSumOrderByAggregateInput
  }

  export type sales_itemsScalarWhereWithAggregatesInput = {
    AND?: sales_itemsScalarWhereWithAggregatesInput | sales_itemsScalarWhereWithAggregatesInput[]
    OR?: sales_itemsScalarWhereWithAggregatesInput[]
    NOT?: sales_itemsScalarWhereWithAggregatesInput | sales_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sales_items"> | number
    user_id?: IntWithAggregatesFilter<"sales_items"> | number
    sale_id?: IntNullableWithAggregatesFilter<"sales_items"> | number | null
    inventory_id?: IntNullableWithAggregatesFilter<"sales_items"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"sales_items"> | number | null
    unit_price?: DecimalNullableWithAggregatesFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableWithAggregatesFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"sales_items"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"sales_items"> | Date | string | null
  }

  export type suppliersWhereInput = {
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    id?: IntFilter<"suppliers"> | number
    user_id?: IntFilter<"suppliers"> | number
    name?: StringNullableFilter<"suppliers"> | string | null
    contact_info?: StringNullableFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    inventory?: InventoryListRelationFilter
    purchases?: PurchasesListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type suppliersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    contact_info?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    inventory?: inventoryOrderByRelationAggregateInput
    purchases?: purchasesOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
  }

  export type suppliersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: suppliersWhereInput | suppliersWhereInput[]
    OR?: suppliersWhereInput[]
    NOT?: suppliersWhereInput | suppliersWhereInput[]
    user_id?: IntFilter<"suppliers"> | number
    name?: StringNullableFilter<"suppliers"> | string | null
    contact_info?: StringNullableFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    inventory?: InventoryListRelationFilter
    purchases?: PurchasesListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type suppliersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrderInput | SortOrder
    contact_info?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: suppliersCountOrderByAggregateInput
    _avg?: suppliersAvgOrderByAggregateInput
    _max?: suppliersMaxOrderByAggregateInput
    _min?: suppliersMinOrderByAggregateInput
    _sum?: suppliersSumOrderByAggregateInput
  }

  export type suppliersScalarWhereWithAggregatesInput = {
    AND?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    OR?: suppliersScalarWhereWithAggregatesInput[]
    NOT?: suppliersScalarWhereWithAggregatesInput | suppliersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"suppliers"> | number
    user_id?: IntWithAggregatesFilter<"suppliers"> | number
    name?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    contact_info?: StringNullableWithAggregatesFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"suppliers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"suppliers"> | Date | string | null
  }

  export type businessWhereInput = {
    AND?: businessWhereInput | businessWhereInput[]
    OR?: businessWhereInput[]
    NOT?: businessWhereInput | businessWhereInput[]
    id?: IntFilter<"business"> | number
    userId?: IntFilter<"business"> | number
    name?: StringFilter<"business"> | string
    products?: JsonFilter<"business">
    location?: StringFilter<"business"> | string
    description?: StringFilter<"business"> | string
    imagePath?: StringNullableFilter<"business"> | string | null
    socialMedia?: JsonFilter<"business">
    hoursPerDay?: FloatFilter<"business"> | number
    createdAt?: DateTimeFilter<"business"> | Date | string
    updatedAt?: DateTimeFilter<"business"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type businessOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    products?: SortOrder
    location?: SortOrder
    description?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    socialMedia?: SortOrder
    hoursPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type businessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: businessWhereInput | businessWhereInput[]
    OR?: businessWhereInput[]
    NOT?: businessWhereInput | businessWhereInput[]
    userId?: IntFilter<"business"> | number
    name?: StringFilter<"business"> | string
    products?: JsonFilter<"business">
    location?: StringFilter<"business"> | string
    description?: StringFilter<"business"> | string
    imagePath?: StringNullableFilter<"business"> | string | null
    socialMedia?: JsonFilter<"business">
    hoursPerDay?: FloatFilter<"business"> | number
    createdAt?: DateTimeFilter<"business"> | Date | string
    updatedAt?: DateTimeFilter<"business"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type businessOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    products?: SortOrder
    location?: SortOrder
    description?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    socialMedia?: SortOrder
    hoursPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: businessCountOrderByAggregateInput
    _avg?: businessAvgOrderByAggregateInput
    _max?: businessMaxOrderByAggregateInput
    _min?: businessMinOrderByAggregateInput
    _sum?: businessSumOrderByAggregateInput
  }

  export type businessScalarWhereWithAggregatesInput = {
    AND?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[]
    OR?: businessScalarWhereWithAggregatesInput[]
    NOT?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"business"> | number
    userId?: IntWithAggregatesFilter<"business"> | number
    name?: StringWithAggregatesFilter<"business"> | string
    products?: JsonWithAggregatesFilter<"business">
    location?: StringWithAggregatesFilter<"business"> | string
    description?: StringWithAggregatesFilter<"business"> | string
    imagePath?: StringNullableWithAggregatesFilter<"business"> | string | null
    socialMedia?: JsonWithAggregatesFilter<"business">
    hoursPerDay?: FloatWithAggregatesFilter<"business"> | number
    createdAt?: DateTimeWithAggregatesFilter<"business"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"business"> | Date | string
  }

  export type plansWhereInput = {
    AND?: plansWhereInput | plansWhereInput[]
    OR?: plansWhereInput[]
    NOT?: plansWhereInput | plansWhereInput[]
    id?: IntFilter<"plans"> | number
    userId?: IntFilter<"plans"> | number
    plan?: StringFilter<"plans"> | string
    createdAt?: DateTimeFilter<"plans"> | Date | string
    updatedAt?: DateTimeFilter<"plans"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type plansOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type plansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: plansWhereInput | plansWhereInput[]
    OR?: plansWhereInput[]
    NOT?: plansWhereInput | plansWhereInput[]
    userId?: IntFilter<"plans"> | number
    plan?: StringFilter<"plans"> | string
    createdAt?: DateTimeFilter<"plans"> | Date | string
    updatedAt?: DateTimeFilter<"plans"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type plansOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: plansCountOrderByAggregateInput
    _avg?: plansAvgOrderByAggregateInput
    _max?: plansMaxOrderByAggregateInput
    _min?: plansMinOrderByAggregateInput
    _sum?: plansSumOrderByAggregateInput
  }

  export type plansScalarWhereWithAggregatesInput = {
    AND?: plansScalarWhereWithAggregatesInput | plansScalarWhereWithAggregatesInput[]
    OR?: plansScalarWhereWithAggregatesInput[]
    NOT?: plansScalarWhereWithAggregatesInput | plansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"plans"> | number
    userId?: IntWithAggregatesFilter<"plans"> | number
    plan?: StringWithAggregatesFilter<"plans"> | string
    createdAt?: DateTimeWithAggregatesFilter<"plans"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"plans"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    expenses?: ExpensesListRelationFilter
    customers?: CustomersListRelationFilter
    suppliers?: SuppliersListRelationFilter
    inventory?: InventoryListRelationFilter
    purchases?: PurchasesListRelationFilter
    purchase_items?: Purchase_itemsListRelationFilter
    inventory_transactions?: Inventory_transactionsListRelationFilter
    sales?: SalesListRelationFilter
    sales_items?: Sales_itemsListRelationFilter
    business?: BusinessListRelationFilter
    plan?: PlansListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    expenses?: expensesOrderByRelationAggregateInput
    customers?: customersOrderByRelationAggregateInput
    suppliers?: suppliersOrderByRelationAggregateInput
    inventory?: inventoryOrderByRelationAggregateInput
    purchases?: purchasesOrderByRelationAggregateInput
    purchase_items?: purchase_itemsOrderByRelationAggregateInput
    inventory_transactions?: inventory_transactionsOrderByRelationAggregateInput
    sales?: salesOrderByRelationAggregateInput
    sales_items?: sales_itemsOrderByRelationAggregateInput
    business?: businessOrderByRelationAggregateInput
    plan?: plansOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringNullableFilter<"users"> | string | null
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    expenses?: ExpensesListRelationFilter
    customers?: CustomersListRelationFilter
    suppliers?: SuppliersListRelationFilter
    inventory?: InventoryListRelationFilter
    purchases?: PurchasesListRelationFilter
    purchase_items?: Purchase_itemsListRelationFilter
    inventory_transactions?: Inventory_transactionsListRelationFilter
    sales?: SalesListRelationFilter
    sales_items?: Sales_itemsListRelationFilter
    business?: BusinessListRelationFilter
    plan?: PlansListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type customersCreateInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales?: salesCreateNestedManyWithoutCustomersInput
    user: usersCreateNestedOneWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    id?: number
    user_id: number
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales?: salesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUpdateManyWithoutCustomersNestedInput
    user?: usersUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    id?: number
    user_id: number
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type customersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesCreateInput = {
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutExpensesInput
  }

  export type expensesUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type expensesUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutExpensesNestedInput
  }

  export type expensesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesCreateManyInput = {
    id?: number
    user_id?: number | null
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type expensesUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryCreateInput = {
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutInventoryInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsCreateNestedManyWithoutInventoryInput
    user: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutInventoryNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUpdateManyWithoutInventoryNestedInput
    user?: usersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventoryUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateInput = {
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutInventory_transactionsInput
    user: usersCreateNestedOneWithoutInventory_transactionsInput
  }

  export type inventory_transactionsUncheckedCreateInput = {
    id?: number
    user_id: number
    inventory_id?: number | null
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsUpdateInput = {
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutInventory_transactionsNestedInput
    user?: usersUpdateOneRequiredWithoutInventory_transactionsNestedInput
  }

  export type inventory_transactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateManyInput = {
    id?: number
    user_id: number
    inventory_id?: number | null
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsUpdateManyMutationInput = {
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsCreateInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutPurchase_itemsInput
    purchases?: purchasesCreateNestedOneWithoutPurchase_itemsInput
    user: usersCreateNestedOneWithoutPurchase_itemsInput
  }

  export type purchase_itemsUncheckedCreateInput = {
    id?: number
    user_id: number
    purchase_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutPurchase_itemsNestedInput
    purchases?: purchasesUpdateOneWithoutPurchase_itemsNestedInput
    user?: usersUpdateOneRequiredWithoutPurchase_itemsNestedInput
  }

  export type purchase_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsCreateManyInput = {
    id?: number
    user_id: number
    purchase_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchasesCreateInput = {
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsCreateNestedManyWithoutPurchasesInput
    suppliers?: suppliersCreateNestedOneWithoutPurchasesInput
    user: usersCreateNestedOneWithoutPurchasesInput
  }

  export type purchasesUncheckedCreateInput = {
    id?: number
    user_id: number
    supplier_id?: number | null
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutPurchasesInput
  }

  export type purchasesUpdateInput = {
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUpdateManyWithoutPurchasesNestedInput
    suppliers?: suppliersUpdateOneWithoutPurchasesNestedInput
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutPurchasesNestedInput
  }

  export type purchasesCreateManyInput = {
    id?: number
    user_id: number
    supplier_id?: number | null
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchasesUpdateManyMutationInput = {
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type salesCreateInput = {
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customers?: customersCreateNestedOneWithoutSalesInput
    sales_items?: sales_itemsCreateNestedManyWithoutSalesInput
    user: usersCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateInput = {
    id?: number
    user_id: number
    customer_id?: number | null
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutSalesInput
  }

  export type salesUpdateInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutSalesNestedInput
    sales_items?: sales_itemsUpdateManyWithoutSalesNestedInput
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales_items?: sales_itemsUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type salesCreateManyInput = {
    id?: number
    user_id: number
    customer_id?: number | null
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type salesUpdateManyMutationInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type salesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsCreateInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutSales_itemsInput
    sales?: salesCreateNestedOneWithoutSales_itemsInput
    user: usersCreateNestedOneWithoutSales_itemsInput
  }

  export type sales_itemsUncheckedCreateInput = {
    id?: number
    user_id: number
    sale_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutSales_itemsNestedInput
    sales?: salesUpdateOneWithoutSales_itemsNestedInput
    user?: usersUpdateOneRequiredWithoutSales_itemsNestedInput
  }

  export type sales_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sale_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsCreateManyInput = {
    id?: number
    user_id: number
    sale_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sale_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type suppliersCreateInput = {
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedManyWithoutSuppliersInput
    purchases?: purchasesCreateNestedManyWithoutSuppliersInput
    user: usersCreateNestedOneWithoutSuppliersInput
  }

  export type suppliersUncheckedCreateInput = {
    id?: number
    user_id: number
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryUncheckedCreateNestedManyWithoutSuppliersInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateManyWithoutSuppliersNestedInput
    purchases?: purchasesUpdateManyWithoutSuppliersNestedInput
    user?: usersUpdateOneRequiredWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUncheckedUpdateManyWithoutSuppliersNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersCreateManyInput = {
    id?: number
    user_id: number
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type suppliersUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type suppliersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type businessCreateInput = {
    name: string
    products: JsonNullValueInput | InputJsonValue
    location: string
    description: string
    imagePath?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    hoursPerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutBusinessInput
  }

  export type businessUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    products: JsonNullValueInput | InputJsonValue
    location: string
    description: string
    imagePath?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    hoursPerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type businessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutBusinessNestedInput
  }

  export type businessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type businessCreateManyInput = {
    id?: number
    userId: number
    name: string
    products: JsonNullValueInput | InputJsonValue
    location: string
    description: string
    imagePath?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    hoursPerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type businessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type businessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansCreateInput = {
    plan: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutPlanInput
  }

  export type plansUncheckedCreateInput = {
    id?: number
    userId: number
    plan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type plansUpdateInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPlanNestedInput
  }

  export type plansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansCreateManyInput = {
    id?: number
    userId: number
    plan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type plansUpdateManyMutationInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SalesListRelationFilter = {
    every?: salesWhereInput
    some?: salesWhereInput
    none?: salesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type expensesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type expensesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type expensesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type expensesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type expensesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    amount?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type SuppliersNullableScalarRelationFilter = {
    is?: suppliersWhereInput | null
    isNot?: suppliersWhereInput | null
  }

  export type Inventory_transactionsListRelationFilter = {
    every?: inventory_transactionsWhereInput
    some?: inventory_transactionsWhereInput
    none?: inventory_transactionsWhereInput
  }

  export type Purchase_itemsListRelationFilter = {
    every?: purchase_itemsWhereInput
    some?: purchase_itemsWhereInput
    none?: purchase_itemsWhereInput
  }

  export type Sales_itemsListRelationFilter = {
    every?: sales_itemsWhereInput
    some?: sales_itemsWhereInput
    none?: sales_itemsWhereInput
  }

  export type inventory_transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type purchase_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sales_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type inventoryCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity_in_stock?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    supplier_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quantity_in_stock?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    supplier_id?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity_in_stock?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    supplier_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity_in_stock?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    supplier_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    quantity_in_stock?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    supplier_id?: SortOrder
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: inventoryWhereInput | null
    isNot?: inventoryWhereInput | null
  }

  export type inventory_transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrder
    transaction_type?: SortOrder
    quantity_change?: SortOrder
    date?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventory_transactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrder
    quantity_change?: SortOrder
    reference_id?: SortOrder
  }

  export type inventory_transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrder
    transaction_type?: SortOrder
    quantity_change?: SortOrder
    date?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventory_transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrder
    transaction_type?: SortOrder
    quantity_change?: SortOrder
    date?: SortOrder
    reference_type?: SortOrder
    reference_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type inventory_transactionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    inventory_id?: SortOrder
    quantity_change?: SortOrder
    reference_id?: SortOrder
  }

  export type PurchasesNullableScalarRelationFilter = {
    is?: purchasesWhereInput | null
    isNot?: purchasesWhereInput | null
  }

  export type purchase_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchase_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type purchase_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchase_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchase_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    purchase_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type purchasesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    purchase_date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchasesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    total_amount?: SortOrder
  }

  export type purchasesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    purchase_date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchasesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    purchase_date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type purchasesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    supplier_id?: SortOrder
    total_amount?: SortOrder
  }

  export type CustomersNullableScalarRelationFilter = {
    is?: customersWhereInput | null
    isNot?: customersWhereInput | null
  }

  export type salesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    total_amount?: SortOrder
  }

  export type salesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    sale_date?: SortOrder
    total_amount?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type salesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    customer_id?: SortOrder
    total_amount?: SortOrder
  }

  export type SalesNullableScalarRelationFilter = {
    is?: salesWhereInput | null
    isNot?: salesWhereInput | null
  }

  export type sales_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sales_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type sales_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sales_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type sales_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    sale_id?: SortOrder
    inventory_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    total_price?: SortOrder
  }

  export type InventoryListRelationFilter = {
    every?: inventoryWhereInput
    some?: inventoryWhereInput
    none?: inventoryWhereInput
  }

  export type PurchasesListRelationFilter = {
    every?: purchasesWhereInput
    some?: purchasesWhereInput
    none?: purchasesWhereInput
  }

  export type inventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type purchasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type suppliersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    contact_info?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type suppliersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type suppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    contact_info?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type suppliersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    name?: SortOrder
    contact_info?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type suppliersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type businessCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    products?: SortOrder
    location?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    socialMedia?: SortOrder
    hoursPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type businessAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hoursPerDay?: SortOrder
  }

  export type businessMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    hoursPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type businessMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    hoursPerDay?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type businessSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    hoursPerDay?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type plansCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plansAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type plansMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plansMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type plansSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ExpensesListRelationFilter = {
    every?: expensesWhereInput
    some?: expensesWhereInput
    none?: expensesWhereInput
  }

  export type CustomersListRelationFilter = {
    every?: customersWhereInput
    some?: customersWhereInput
    none?: customersWhereInput
  }

  export type SuppliersListRelationFilter = {
    every?: suppliersWhereInput
    some?: suppliersWhereInput
    none?: suppliersWhereInput
  }

  export type BusinessListRelationFilter = {
    every?: businessWhereInput
    some?: businessWhereInput
    none?: businessWhereInput
  }

  export type PlansListRelationFilter = {
    every?: plansWhereInput
    some?: plansWhereInput
    none?: plansWhereInput
  }

  export type expensesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type suppliersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type businessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type plansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type salesCreateNestedManyWithoutCustomersInput = {
    create?: XOR<salesCreateWithoutCustomersInput, salesUncheckedCreateWithoutCustomersInput> | salesCreateWithoutCustomersInput[] | salesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomersInput | salesCreateOrConnectWithoutCustomersInput[]
    createMany?: salesCreateManyCustomersInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCustomersInput = {
    create?: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCustomersInput
    connect?: usersWhereUniqueInput
  }

  export type salesUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<salesCreateWithoutCustomersInput, salesUncheckedCreateWithoutCustomersInput> | salesCreateWithoutCustomersInput[] | salesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomersInput | salesCreateOrConnectWithoutCustomersInput[]
    createMany?: salesCreateManyCustomersInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type salesUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<salesCreateWithoutCustomersInput, salesUncheckedCreateWithoutCustomersInput> | salesCreateWithoutCustomersInput[] | salesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomersInput | salesCreateOrConnectWithoutCustomersInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutCustomersInput | salesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: salesCreateManyCustomersInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutCustomersInput | salesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: salesUpdateManyWithWhereWithoutCustomersInput | salesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: usersCreateOrConnectWithoutCustomersInput
    upsert?: usersUpsertWithoutCustomersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCustomersInput, usersUpdateWithoutCustomersInput>, usersUncheckedUpdateWithoutCustomersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type salesUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<salesCreateWithoutCustomersInput, salesUncheckedCreateWithoutCustomersInput> | salesCreateWithoutCustomersInput[] | salesUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutCustomersInput | salesCreateOrConnectWithoutCustomersInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutCustomersInput | salesUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: salesCreateManyCustomersInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutCustomersInput | salesUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: salesUpdateManyWithWhereWithoutCustomersInput | salesUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutExpensesInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: usersCreateOrConnectWithoutExpensesInput
    upsert?: usersUpsertWithoutExpensesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutExpensesInput, usersUpdateWithoutExpensesInput>, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type suppliersCreateNestedOneWithoutInventoryInput = {
    create?: XOR<suppliersCreateWithoutInventoryInput, suppliersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutInventoryInput
    connect?: suppliersWhereUniqueInput
  }

  export type inventory_transactionsCreateNestedManyWithoutInventoryInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type purchase_itemsCreateNestedManyWithoutInventoryInput = {
    create?: XOR<purchase_itemsCreateWithoutInventoryInput, purchase_itemsUncheckedCreateWithoutInventoryInput> | purchase_itemsCreateWithoutInventoryInput[] | purchase_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutInventoryInput | purchase_itemsCreateOrConnectWithoutInventoryInput[]
    createMany?: purchase_itemsCreateManyInventoryInputEnvelope
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
  }

  export type sales_itemsCreateNestedManyWithoutInventoryInput = {
    create?: XOR<sales_itemsCreateWithoutInventoryInput, sales_itemsUncheckedCreateWithoutInventoryInput> | sales_itemsCreateWithoutInventoryInput[] | sales_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutInventoryInput | sales_itemsCreateOrConnectWithoutInventoryInput[]
    createMany?: sales_itemsCreateManyInventoryInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutInventoryInput = {
    create?: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventoryInput
    connect?: usersWhereUniqueInput
  }

  export type inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type purchase_itemsUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<purchase_itemsCreateWithoutInventoryInput, purchase_itemsUncheckedCreateWithoutInventoryInput> | purchase_itemsCreateWithoutInventoryInput[] | purchase_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutInventoryInput | purchase_itemsCreateOrConnectWithoutInventoryInput[]
    createMany?: purchase_itemsCreateManyInventoryInputEnvelope
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
  }

  export type sales_itemsUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<sales_itemsCreateWithoutInventoryInput, sales_itemsUncheckedCreateWithoutInventoryInput> | sales_itemsCreateWithoutInventoryInput[] | sales_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutInventoryInput | sales_itemsCreateOrConnectWithoutInventoryInput[]
    createMany?: sales_itemsCreateManyInventoryInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type suppliersUpdateOneWithoutInventoryNestedInput = {
    create?: XOR<suppliersCreateWithoutInventoryInput, suppliersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutInventoryInput
    upsert?: suppliersUpsertWithoutInventoryInput
    disconnect?: suppliersWhereInput | boolean
    delete?: suppliersWhereInput | boolean
    connect?: suppliersWhereUniqueInput
    update?: XOR<XOR<suppliersUpdateToOneWithWhereWithoutInventoryInput, suppliersUpdateWithoutInventoryInput>, suppliersUncheckedUpdateWithoutInventoryInput>
  }

  export type inventory_transactionsUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutInventoryInput | inventory_transactionsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type purchase_itemsUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<purchase_itemsCreateWithoutInventoryInput, purchase_itemsUncheckedCreateWithoutInventoryInput> | purchase_itemsCreateWithoutInventoryInput[] | purchase_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutInventoryInput | purchase_itemsCreateOrConnectWithoutInventoryInput[]
    upsert?: purchase_itemsUpsertWithWhereUniqueWithoutInventoryInput | purchase_itemsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: purchase_itemsCreateManyInventoryInputEnvelope
    set?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    disconnect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    delete?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    update?: purchase_itemsUpdateWithWhereUniqueWithoutInventoryInput | purchase_itemsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: purchase_itemsUpdateManyWithWhereWithoutInventoryInput | purchase_itemsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
  }

  export type sales_itemsUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<sales_itemsCreateWithoutInventoryInput, sales_itemsUncheckedCreateWithoutInventoryInput> | sales_itemsCreateWithoutInventoryInput[] | sales_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutInventoryInput | sales_itemsCreateOrConnectWithoutInventoryInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutInventoryInput | sales_itemsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: sales_itemsCreateManyInventoryInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutInventoryInput | sales_itemsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutInventoryInput | sales_itemsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventoryInput
    upsert?: usersUpsertWithoutInventoryInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInventoryInput, usersUpdateWithoutInventoryInput>, usersUncheckedUpdateWithoutInventoryInput>
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput> | inventory_transactionsCreateWithoutInventoryInput[] | inventory_transactionsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutInventoryInput | inventory_transactionsCreateOrConnectWithoutInventoryInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: inventory_transactionsCreateManyInventoryInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput | inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutInventoryInput | inventory_transactionsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type purchase_itemsUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<purchase_itemsCreateWithoutInventoryInput, purchase_itemsUncheckedCreateWithoutInventoryInput> | purchase_itemsCreateWithoutInventoryInput[] | purchase_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutInventoryInput | purchase_itemsCreateOrConnectWithoutInventoryInput[]
    upsert?: purchase_itemsUpsertWithWhereUniqueWithoutInventoryInput | purchase_itemsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: purchase_itemsCreateManyInventoryInputEnvelope
    set?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    disconnect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    delete?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    update?: purchase_itemsUpdateWithWhereUniqueWithoutInventoryInput | purchase_itemsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: purchase_itemsUpdateManyWithWhereWithoutInventoryInput | purchase_itemsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
  }

  export type sales_itemsUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<sales_itemsCreateWithoutInventoryInput, sales_itemsUncheckedCreateWithoutInventoryInput> | sales_itemsCreateWithoutInventoryInput[] | sales_itemsUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutInventoryInput | sales_itemsCreateOrConnectWithoutInventoryInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutInventoryInput | sales_itemsUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: sales_itemsCreateManyInventoryInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutInventoryInput | sales_itemsUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutInventoryInput | sales_itemsUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type inventoryCreateNestedOneWithoutInventory_transactionsInput = {
    create?: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutInventory_transactionsInput
    connect?: inventoryWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutInventory_transactionsInput = {
    create?: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventory_transactionsInput
    connect?: usersWhereUniqueInput
  }

  export type inventoryUpdateOneWithoutInventory_transactionsNestedInput = {
    create?: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutInventory_transactionsInput
    upsert?: inventoryUpsertWithoutInventory_transactionsInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutInventory_transactionsInput, inventoryUpdateWithoutInventory_transactionsInput>, inventoryUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type usersUpdateOneRequiredWithoutInventory_transactionsNestedInput = {
    create?: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutInventory_transactionsInput
    upsert?: usersUpsertWithoutInventory_transactionsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutInventory_transactionsInput, usersUpdateWithoutInventory_transactionsInput>, usersUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type inventoryCreateNestedOneWithoutPurchase_itemsInput = {
    create?: XOR<inventoryCreateWithoutPurchase_itemsInput, inventoryUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutPurchase_itemsInput
    connect?: inventoryWhereUniqueInput
  }

  export type purchasesCreateNestedOneWithoutPurchase_itemsInput = {
    create?: XOR<purchasesCreateWithoutPurchase_itemsInput, purchasesUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: purchasesCreateOrConnectWithoutPurchase_itemsInput
    connect?: purchasesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPurchase_itemsInput = {
    create?: XOR<usersCreateWithoutPurchase_itemsInput, usersUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPurchase_itemsInput
    connect?: usersWhereUniqueInput
  }

  export type inventoryUpdateOneWithoutPurchase_itemsNestedInput = {
    create?: XOR<inventoryCreateWithoutPurchase_itemsInput, inventoryUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutPurchase_itemsInput
    upsert?: inventoryUpsertWithoutPurchase_itemsInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutPurchase_itemsInput, inventoryUpdateWithoutPurchase_itemsInput>, inventoryUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type purchasesUpdateOneWithoutPurchase_itemsNestedInput = {
    create?: XOR<purchasesCreateWithoutPurchase_itemsInput, purchasesUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: purchasesCreateOrConnectWithoutPurchase_itemsInput
    upsert?: purchasesUpsertWithoutPurchase_itemsInput
    disconnect?: purchasesWhereInput | boolean
    delete?: purchasesWhereInput | boolean
    connect?: purchasesWhereUniqueInput
    update?: XOR<XOR<purchasesUpdateToOneWithWhereWithoutPurchase_itemsInput, purchasesUpdateWithoutPurchase_itemsInput>, purchasesUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type usersUpdateOneRequiredWithoutPurchase_itemsNestedInput = {
    create?: XOR<usersCreateWithoutPurchase_itemsInput, usersUncheckedCreateWithoutPurchase_itemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPurchase_itemsInput
    upsert?: usersUpsertWithoutPurchase_itemsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPurchase_itemsInput, usersUpdateWithoutPurchase_itemsInput>, usersUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type purchase_itemsCreateNestedManyWithoutPurchasesInput = {
    create?: XOR<purchase_itemsCreateWithoutPurchasesInput, purchase_itemsUncheckedCreateWithoutPurchasesInput> | purchase_itemsCreateWithoutPurchasesInput[] | purchase_itemsUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutPurchasesInput | purchase_itemsCreateOrConnectWithoutPurchasesInput[]
    createMany?: purchase_itemsCreateManyPurchasesInputEnvelope
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
  }

  export type suppliersCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutPurchasesInput
    connect?: suppliersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPurchasesInput
    connect?: usersWhereUniqueInput
  }

  export type purchase_itemsUncheckedCreateNestedManyWithoutPurchasesInput = {
    create?: XOR<purchase_itemsCreateWithoutPurchasesInput, purchase_itemsUncheckedCreateWithoutPurchasesInput> | purchase_itemsCreateWithoutPurchasesInput[] | purchase_itemsUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutPurchasesInput | purchase_itemsCreateOrConnectWithoutPurchasesInput[]
    createMany?: purchase_itemsCreateManyPurchasesInputEnvelope
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
  }

  export type purchase_itemsUpdateManyWithoutPurchasesNestedInput = {
    create?: XOR<purchase_itemsCreateWithoutPurchasesInput, purchase_itemsUncheckedCreateWithoutPurchasesInput> | purchase_itemsCreateWithoutPurchasesInput[] | purchase_itemsUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutPurchasesInput | purchase_itemsCreateOrConnectWithoutPurchasesInput[]
    upsert?: purchase_itemsUpsertWithWhereUniqueWithoutPurchasesInput | purchase_itemsUpsertWithWhereUniqueWithoutPurchasesInput[]
    createMany?: purchase_itemsCreateManyPurchasesInputEnvelope
    set?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    disconnect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    delete?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    update?: purchase_itemsUpdateWithWhereUniqueWithoutPurchasesInput | purchase_itemsUpdateWithWhereUniqueWithoutPurchasesInput[]
    updateMany?: purchase_itemsUpdateManyWithWhereWithoutPurchasesInput | purchase_itemsUpdateManyWithWhereWithoutPurchasesInput[]
    deleteMany?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
  }

  export type suppliersUpdateOneWithoutPurchasesNestedInput = {
    create?: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: suppliersCreateOrConnectWithoutPurchasesInput
    upsert?: suppliersUpsertWithoutPurchasesInput
    disconnect?: suppliersWhereInput | boolean
    delete?: suppliersWhereInput | boolean
    connect?: suppliersWhereUniqueInput
    update?: XOR<XOR<suppliersUpdateToOneWithWhereWithoutPurchasesInput, suppliersUpdateWithoutPurchasesInput>, suppliersUncheckedUpdateWithoutPurchasesInput>
  }

  export type usersUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: usersCreateOrConnectWithoutPurchasesInput
    upsert?: usersUpsertWithoutPurchasesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPurchasesInput, usersUpdateWithoutPurchasesInput>, usersUncheckedUpdateWithoutPurchasesInput>
  }

  export type purchase_itemsUncheckedUpdateManyWithoutPurchasesNestedInput = {
    create?: XOR<purchase_itemsCreateWithoutPurchasesInput, purchase_itemsUncheckedCreateWithoutPurchasesInput> | purchase_itemsCreateWithoutPurchasesInput[] | purchase_itemsUncheckedCreateWithoutPurchasesInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutPurchasesInput | purchase_itemsCreateOrConnectWithoutPurchasesInput[]
    upsert?: purchase_itemsUpsertWithWhereUniqueWithoutPurchasesInput | purchase_itemsUpsertWithWhereUniqueWithoutPurchasesInput[]
    createMany?: purchase_itemsCreateManyPurchasesInputEnvelope
    set?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    disconnect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    delete?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    update?: purchase_itemsUpdateWithWhereUniqueWithoutPurchasesInput | purchase_itemsUpdateWithWhereUniqueWithoutPurchasesInput[]
    updateMany?: purchase_itemsUpdateManyWithWhereWithoutPurchasesInput | purchase_itemsUpdateManyWithWhereWithoutPurchasesInput[]
    deleteMany?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutSalesInput = {
    create?: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: customersCreateOrConnectWithoutSalesInput
    connect?: customersWhereUniqueInput
  }

  export type sales_itemsCreateNestedManyWithoutSalesInput = {
    create?: XOR<sales_itemsCreateWithoutSalesInput, sales_itemsUncheckedCreateWithoutSalesInput> | sales_itemsCreateWithoutSalesInput[] | sales_itemsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSalesInput | sales_itemsCreateOrConnectWithoutSalesInput[]
    createMany?: sales_itemsCreateManySalesInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSalesInput = {
    create?: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSalesInput
    connect?: usersWhereUniqueInput
  }

  export type sales_itemsUncheckedCreateNestedManyWithoutSalesInput = {
    create?: XOR<sales_itemsCreateWithoutSalesInput, sales_itemsUncheckedCreateWithoutSalesInput> | sales_itemsCreateWithoutSalesInput[] | sales_itemsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSalesInput | sales_itemsCreateOrConnectWithoutSalesInput[]
    createMany?: sales_itemsCreateManySalesInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type customersUpdateOneWithoutSalesNestedInput = {
    create?: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: customersCreateOrConnectWithoutSalesInput
    upsert?: customersUpsertWithoutSalesInput
    disconnect?: customersWhereInput | boolean
    delete?: customersWhereInput | boolean
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutSalesInput, customersUpdateWithoutSalesInput>, customersUncheckedUpdateWithoutSalesInput>
  }

  export type sales_itemsUpdateManyWithoutSalesNestedInput = {
    create?: XOR<sales_itemsCreateWithoutSalesInput, sales_itemsUncheckedCreateWithoutSalesInput> | sales_itemsCreateWithoutSalesInput[] | sales_itemsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSalesInput | sales_itemsCreateOrConnectWithoutSalesInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutSalesInput | sales_itemsUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: sales_itemsCreateManySalesInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutSalesInput | sales_itemsUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutSalesInput | sales_itemsUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: usersCreateOrConnectWithoutSalesInput
    upsert?: usersUpsertWithoutSalesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSalesInput, usersUpdateWithoutSalesInput>, usersUncheckedUpdateWithoutSalesInput>
  }

  export type sales_itemsUncheckedUpdateManyWithoutSalesNestedInput = {
    create?: XOR<sales_itemsCreateWithoutSalesInput, sales_itemsUncheckedCreateWithoutSalesInput> | sales_itemsCreateWithoutSalesInput[] | sales_itemsUncheckedCreateWithoutSalesInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutSalesInput | sales_itemsCreateOrConnectWithoutSalesInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutSalesInput | sales_itemsUpsertWithWhereUniqueWithoutSalesInput[]
    createMany?: sales_itemsCreateManySalesInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutSalesInput | sales_itemsUpdateWithWhereUniqueWithoutSalesInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutSalesInput | sales_itemsUpdateManyWithWhereWithoutSalesInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type inventoryCreateNestedOneWithoutSales_itemsInput = {
    create?: XOR<inventoryCreateWithoutSales_itemsInput, inventoryUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutSales_itemsInput
    connect?: inventoryWhereUniqueInput
  }

  export type salesCreateNestedOneWithoutSales_itemsInput = {
    create?: XOR<salesCreateWithoutSales_itemsInput, salesUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: salesCreateOrConnectWithoutSales_itemsInput
    connect?: salesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSales_itemsInput = {
    create?: XOR<usersCreateWithoutSales_itemsInput, usersUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSales_itemsInput
    connect?: usersWhereUniqueInput
  }

  export type inventoryUpdateOneWithoutSales_itemsNestedInput = {
    create?: XOR<inventoryCreateWithoutSales_itemsInput, inventoryUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutSales_itemsInput
    upsert?: inventoryUpsertWithoutSales_itemsInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutSales_itemsInput, inventoryUpdateWithoutSales_itemsInput>, inventoryUncheckedUpdateWithoutSales_itemsInput>
  }

  export type salesUpdateOneWithoutSales_itemsNestedInput = {
    create?: XOR<salesCreateWithoutSales_itemsInput, salesUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: salesCreateOrConnectWithoutSales_itemsInput
    upsert?: salesUpsertWithoutSales_itemsInput
    disconnect?: salesWhereInput | boolean
    delete?: salesWhereInput | boolean
    connect?: salesWhereUniqueInput
    update?: XOR<XOR<salesUpdateToOneWithWhereWithoutSales_itemsInput, salesUpdateWithoutSales_itemsInput>, salesUncheckedUpdateWithoutSales_itemsInput>
  }

  export type usersUpdateOneRequiredWithoutSales_itemsNestedInput = {
    create?: XOR<usersCreateWithoutSales_itemsInput, usersUncheckedCreateWithoutSales_itemsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSales_itemsInput
    upsert?: usersUpsertWithoutSales_itemsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSales_itemsInput, usersUpdateWithoutSales_itemsInput>, usersUncheckedUpdateWithoutSales_itemsInput>
  }

  export type inventoryCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<inventoryCreateWithoutSuppliersInput, inventoryUncheckedCreateWithoutSuppliersInput> | inventoryCreateWithoutSuppliersInput[] | inventoryUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutSuppliersInput | inventoryCreateOrConnectWithoutSuppliersInput[]
    createMany?: inventoryCreateManySuppliersInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type purchasesCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<purchasesCreateWithoutSuppliersInput, purchasesUncheckedCreateWithoutSuppliersInput> | purchasesCreateWithoutSuppliersInput[] | purchasesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSuppliersInput | purchasesCreateOrConnectWithoutSuppliersInput[]
    createMany?: purchasesCreateManySuppliersInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutSuppliersInput = {
    create?: XOR<usersCreateWithoutSuppliersInput, usersUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSuppliersInput
    connect?: usersWhereUniqueInput
  }

  export type inventoryUncheckedCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<inventoryCreateWithoutSuppliersInput, inventoryUncheckedCreateWithoutSuppliersInput> | inventoryCreateWithoutSuppliersInput[] | inventoryUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutSuppliersInput | inventoryCreateOrConnectWithoutSuppliersInput[]
    createMany?: inventoryCreateManySuppliersInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type purchasesUncheckedCreateNestedManyWithoutSuppliersInput = {
    create?: XOR<purchasesCreateWithoutSuppliersInput, purchasesUncheckedCreateWithoutSuppliersInput> | purchasesCreateWithoutSuppliersInput[] | purchasesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSuppliersInput | purchasesCreateOrConnectWithoutSuppliersInput[]
    createMany?: purchasesCreateManySuppliersInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type inventoryUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<inventoryCreateWithoutSuppliersInput, inventoryUncheckedCreateWithoutSuppliersInput> | inventoryCreateWithoutSuppliersInput[] | inventoryUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutSuppliersInput | inventoryCreateOrConnectWithoutSuppliersInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutSuppliersInput | inventoryUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: inventoryCreateManySuppliersInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutSuppliersInput | inventoryUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutSuppliersInput | inventoryUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type purchasesUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<purchasesCreateWithoutSuppliersInput, purchasesUncheckedCreateWithoutSuppliersInput> | purchasesCreateWithoutSuppliersInput[] | purchasesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSuppliersInput | purchasesCreateOrConnectWithoutSuppliersInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutSuppliersInput | purchasesUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: purchasesCreateManySuppliersInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutSuppliersInput | purchasesUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutSuppliersInput | purchasesUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: XOR<usersCreateWithoutSuppliersInput, usersUncheckedCreateWithoutSuppliersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSuppliersInput
    upsert?: usersUpsertWithoutSuppliersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSuppliersInput, usersUpdateWithoutSuppliersInput>, usersUncheckedUpdateWithoutSuppliersInput>
  }

  export type inventoryUncheckedUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<inventoryCreateWithoutSuppliersInput, inventoryUncheckedCreateWithoutSuppliersInput> | inventoryCreateWithoutSuppliersInput[] | inventoryUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutSuppliersInput | inventoryCreateOrConnectWithoutSuppliersInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutSuppliersInput | inventoryUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: inventoryCreateManySuppliersInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutSuppliersInput | inventoryUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutSuppliersInput | inventoryUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type purchasesUncheckedUpdateManyWithoutSuppliersNestedInput = {
    create?: XOR<purchasesCreateWithoutSuppliersInput, purchasesUncheckedCreateWithoutSuppliersInput> | purchasesCreateWithoutSuppliersInput[] | purchasesUncheckedCreateWithoutSuppliersInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutSuppliersInput | purchasesCreateOrConnectWithoutSuppliersInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutSuppliersInput | purchasesUpsertWithWhereUniqueWithoutSuppliersInput[]
    createMany?: purchasesCreateManySuppliersInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutSuppliersInput | purchasesUpdateWithWhereUniqueWithoutSuppliersInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutSuppliersInput | purchasesUpdateManyWithWhereWithoutSuppliersInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutBusinessInput = {
    create?: XOR<usersCreateWithoutBusinessInput, usersUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: usersCreateOrConnectWithoutBusinessInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneRequiredWithoutBusinessNestedInput = {
    create?: XOR<usersCreateWithoutBusinessInput, usersUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: usersCreateOrConnectWithoutBusinessInput
    upsert?: usersUpsertWithoutBusinessInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutBusinessInput, usersUpdateWithoutBusinessInput>, usersUncheckedUpdateWithoutBusinessInput>
  }

  export type usersCreateNestedOneWithoutPlanInput = {
    create?: XOR<usersCreateWithoutPlanInput, usersUncheckedCreateWithoutPlanInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlanInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPlanNestedInput = {
    create?: XOR<usersCreateWithoutPlanInput, usersUncheckedCreateWithoutPlanInput>
    connectOrCreate?: usersCreateOrConnectWithoutPlanInput
    upsert?: usersUpsertWithoutPlanInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPlanInput, usersUpdateWithoutPlanInput>, usersUncheckedUpdateWithoutPlanInput>
  }

  export type expensesCreateNestedManyWithoutUsersInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type customersCreateNestedManyWithoutUserInput = {
    create?: XOR<customersCreateWithoutUserInput, customersUncheckedCreateWithoutUserInput> | customersCreateWithoutUserInput[] | customersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUserInput | customersCreateOrConnectWithoutUserInput[]
    createMany?: customersCreateManyUserInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type suppliersCreateNestedManyWithoutUserInput = {
    create?: XOR<suppliersCreateWithoutUserInput, suppliersUncheckedCreateWithoutUserInput> | suppliersCreateWithoutUserInput[] | suppliersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutUserInput | suppliersCreateOrConnectWithoutUserInput[]
    createMany?: suppliersCreateManyUserInputEnvelope
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
  }

  export type inventoryCreateNestedManyWithoutUserInput = {
    create?: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput> | inventoryCreateWithoutUserInput[] | inventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[]
    createMany?: inventoryCreateManyUserInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type purchasesCreateNestedManyWithoutUserInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type purchase_itemsCreateNestedManyWithoutUserInput = {
    create?: XOR<purchase_itemsCreateWithoutUserInput, purchase_itemsUncheckedCreateWithoutUserInput> | purchase_itemsCreateWithoutUserInput[] | purchase_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutUserInput | purchase_itemsCreateOrConnectWithoutUserInput[]
    createMany?: purchase_itemsCreateManyUserInputEnvelope
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
  }

  export type inventory_transactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<inventory_transactionsCreateWithoutUserInput, inventory_transactionsUncheckedCreateWithoutUserInput> | inventory_transactionsCreateWithoutUserInput[] | inventory_transactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUserInput | inventory_transactionsCreateOrConnectWithoutUserInput[]
    createMany?: inventory_transactionsCreateManyUserInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type salesCreateNestedManyWithoutUserInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type sales_itemsCreateNestedManyWithoutUserInput = {
    create?: XOR<sales_itemsCreateWithoutUserInput, sales_itemsUncheckedCreateWithoutUserInput> | sales_itemsCreateWithoutUserInput[] | sales_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutUserInput | sales_itemsCreateOrConnectWithoutUserInput[]
    createMany?: sales_itemsCreateManyUserInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type businessCreateNestedManyWithoutUserInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput> | businessCreateWithoutUserInput[] | businessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: businessCreateOrConnectWithoutUserInput | businessCreateOrConnectWithoutUserInput[]
    createMany?: businessCreateManyUserInputEnvelope
    connect?: businessWhereUniqueInput | businessWhereUniqueInput[]
  }

  export type plansCreateNestedManyWithoutUserInput = {
    create?: XOR<plansCreateWithoutUserInput, plansUncheckedCreateWithoutUserInput> | plansCreateWithoutUserInput[] | plansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: plansCreateOrConnectWithoutUserInput | plansCreateOrConnectWithoutUserInput[]
    createMany?: plansCreateManyUserInputEnvelope
    connect?: plansWhereUniqueInput | plansWhereUniqueInput[]
  }

  export type expensesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
  }

  export type customersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<customersCreateWithoutUserInput, customersUncheckedCreateWithoutUserInput> | customersCreateWithoutUserInput[] | customersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUserInput | customersCreateOrConnectWithoutUserInput[]
    createMany?: customersCreateManyUserInputEnvelope
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
  }

  export type suppliersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<suppliersCreateWithoutUserInput, suppliersUncheckedCreateWithoutUserInput> | suppliersCreateWithoutUserInput[] | suppliersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutUserInput | suppliersCreateOrConnectWithoutUserInput[]
    createMany?: suppliersCreateManyUserInputEnvelope
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
  }

  export type inventoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput> | inventoryCreateWithoutUserInput[] | inventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[]
    createMany?: inventoryCreateManyUserInputEnvelope
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
  }

  export type purchasesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
  }

  export type purchase_itemsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<purchase_itemsCreateWithoutUserInput, purchase_itemsUncheckedCreateWithoutUserInput> | purchase_itemsCreateWithoutUserInput[] | purchase_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutUserInput | purchase_itemsCreateOrConnectWithoutUserInput[]
    createMany?: purchase_itemsCreateManyUserInputEnvelope
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
  }

  export type inventory_transactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<inventory_transactionsCreateWithoutUserInput, inventory_transactionsUncheckedCreateWithoutUserInput> | inventory_transactionsCreateWithoutUserInput[] | inventory_transactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUserInput | inventory_transactionsCreateOrConnectWithoutUserInput[]
    createMany?: inventory_transactionsCreateManyUserInputEnvelope
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type sales_itemsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sales_itemsCreateWithoutUserInput, sales_itemsUncheckedCreateWithoutUserInput> | sales_itemsCreateWithoutUserInput[] | sales_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutUserInput | sales_itemsCreateOrConnectWithoutUserInput[]
    createMany?: sales_itemsCreateManyUserInputEnvelope
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
  }

  export type businessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput> | businessCreateWithoutUserInput[] | businessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: businessCreateOrConnectWithoutUserInput | businessCreateOrConnectWithoutUserInput[]
    createMany?: businessCreateManyUserInputEnvelope
    connect?: businessWhereUniqueInput | businessWhereUniqueInput[]
  }

  export type plansUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<plansCreateWithoutUserInput, plansUncheckedCreateWithoutUserInput> | plansCreateWithoutUserInput[] | plansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: plansCreateOrConnectWithoutUserInput | plansCreateOrConnectWithoutUserInput[]
    createMany?: plansCreateManyUserInputEnvelope
    connect?: plansWhereUniqueInput | plansWhereUniqueInput[]
  }

  export type expensesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUsersInput | expensesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUsersInput | expensesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUsersInput | expensesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type customersUpdateManyWithoutUserNestedInput = {
    create?: XOR<customersCreateWithoutUserInput, customersUncheckedCreateWithoutUserInput> | customersCreateWithoutUserInput[] | customersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUserInput | customersCreateOrConnectWithoutUserInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutUserInput | customersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: customersCreateManyUserInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutUserInput | customersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: customersUpdateManyWithWhereWithoutUserInput | customersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type suppliersUpdateManyWithoutUserNestedInput = {
    create?: XOR<suppliersCreateWithoutUserInput, suppliersUncheckedCreateWithoutUserInput> | suppliersCreateWithoutUserInput[] | suppliersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutUserInput | suppliersCreateOrConnectWithoutUserInput[]
    upsert?: suppliersUpsertWithWhereUniqueWithoutUserInput | suppliersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: suppliersCreateManyUserInputEnvelope
    set?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    disconnect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    delete?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    update?: suppliersUpdateWithWhereUniqueWithoutUserInput | suppliersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: suppliersUpdateManyWithWhereWithoutUserInput | suppliersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
  }

  export type inventoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput> | inventoryCreateWithoutUserInput[] | inventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutUserInput | inventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inventoryCreateManyUserInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutUserInput | inventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutUserInput | inventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type purchasesUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutUserInput | purchasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutUserInput | purchasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutUserInput | purchasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type purchase_itemsUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchase_itemsCreateWithoutUserInput, purchase_itemsUncheckedCreateWithoutUserInput> | purchase_itemsCreateWithoutUserInput[] | purchase_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutUserInput | purchase_itemsCreateOrConnectWithoutUserInput[]
    upsert?: purchase_itemsUpsertWithWhereUniqueWithoutUserInput | purchase_itemsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchase_itemsCreateManyUserInputEnvelope
    set?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    disconnect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    delete?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    update?: purchase_itemsUpdateWithWhereUniqueWithoutUserInput | purchase_itemsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchase_itemsUpdateManyWithWhereWithoutUserInput | purchase_itemsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
  }

  export type inventory_transactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutUserInput, inventory_transactionsUncheckedCreateWithoutUserInput> | inventory_transactionsCreateWithoutUserInput[] | inventory_transactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUserInput | inventory_transactionsCreateOrConnectWithoutUserInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutUserInput | inventory_transactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inventory_transactionsCreateManyUserInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutUserInput | inventory_transactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutUserInput | inventory_transactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type salesUpdateManyWithoutUserNestedInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type sales_itemsUpdateManyWithoutUserNestedInput = {
    create?: XOR<sales_itemsCreateWithoutUserInput, sales_itemsUncheckedCreateWithoutUserInput> | sales_itemsCreateWithoutUserInput[] | sales_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutUserInput | sales_itemsCreateOrConnectWithoutUserInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutUserInput | sales_itemsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sales_itemsCreateManyUserInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutUserInput | sales_itemsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutUserInput | sales_itemsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type businessUpdateManyWithoutUserNestedInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput> | businessCreateWithoutUserInput[] | businessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: businessCreateOrConnectWithoutUserInput | businessCreateOrConnectWithoutUserInput[]
    upsert?: businessUpsertWithWhereUniqueWithoutUserInput | businessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: businessCreateManyUserInputEnvelope
    set?: businessWhereUniqueInput | businessWhereUniqueInput[]
    disconnect?: businessWhereUniqueInput | businessWhereUniqueInput[]
    delete?: businessWhereUniqueInput | businessWhereUniqueInput[]
    connect?: businessWhereUniqueInput | businessWhereUniqueInput[]
    update?: businessUpdateWithWhereUniqueWithoutUserInput | businessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: businessUpdateManyWithWhereWithoutUserInput | businessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: businessScalarWhereInput | businessScalarWhereInput[]
  }

  export type plansUpdateManyWithoutUserNestedInput = {
    create?: XOR<plansCreateWithoutUserInput, plansUncheckedCreateWithoutUserInput> | plansCreateWithoutUserInput[] | plansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: plansCreateOrConnectWithoutUserInput | plansCreateOrConnectWithoutUserInput[]
    upsert?: plansUpsertWithWhereUniqueWithoutUserInput | plansUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: plansCreateManyUserInputEnvelope
    set?: plansWhereUniqueInput | plansWhereUniqueInput[]
    disconnect?: plansWhereUniqueInput | plansWhereUniqueInput[]
    delete?: plansWhereUniqueInput | plansWhereUniqueInput[]
    connect?: plansWhereUniqueInput | plansWhereUniqueInput[]
    update?: plansUpdateWithWhereUniqueWithoutUserInput | plansUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: plansUpdateManyWithWhereWithoutUserInput | plansUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: plansScalarWhereInput | plansScalarWhereInput[]
  }

  export type expensesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput> | expensesCreateWithoutUsersInput[] | expensesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: expensesCreateOrConnectWithoutUsersInput | expensesCreateOrConnectWithoutUsersInput[]
    upsert?: expensesUpsertWithWhereUniqueWithoutUsersInput | expensesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: expensesCreateManyUsersInputEnvelope
    set?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    disconnect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    delete?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    connect?: expensesWhereUniqueInput | expensesWhereUniqueInput[]
    update?: expensesUpdateWithWhereUniqueWithoutUsersInput | expensesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: expensesUpdateManyWithWhereWithoutUsersInput | expensesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: expensesScalarWhereInput | expensesScalarWhereInput[]
  }

  export type customersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<customersCreateWithoutUserInput, customersUncheckedCreateWithoutUserInput> | customersCreateWithoutUserInput[] | customersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: customersCreateOrConnectWithoutUserInput | customersCreateOrConnectWithoutUserInput[]
    upsert?: customersUpsertWithWhereUniqueWithoutUserInput | customersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: customersCreateManyUserInputEnvelope
    set?: customersWhereUniqueInput | customersWhereUniqueInput[]
    disconnect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    delete?: customersWhereUniqueInput | customersWhereUniqueInput[]
    connect?: customersWhereUniqueInput | customersWhereUniqueInput[]
    update?: customersUpdateWithWhereUniqueWithoutUserInput | customersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: customersUpdateManyWithWhereWithoutUserInput | customersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: customersScalarWhereInput | customersScalarWhereInput[]
  }

  export type suppliersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<suppliersCreateWithoutUserInput, suppliersUncheckedCreateWithoutUserInput> | suppliersCreateWithoutUserInput[] | suppliersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: suppliersCreateOrConnectWithoutUserInput | suppliersCreateOrConnectWithoutUserInput[]
    upsert?: suppliersUpsertWithWhereUniqueWithoutUserInput | suppliersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: suppliersCreateManyUserInputEnvelope
    set?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    disconnect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    delete?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    connect?: suppliersWhereUniqueInput | suppliersWhereUniqueInput[]
    update?: suppliersUpdateWithWhereUniqueWithoutUserInput | suppliersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: suppliersUpdateManyWithWhereWithoutUserInput | suppliersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
  }

  export type inventoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput> | inventoryCreateWithoutUserInput[] | inventoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventoryCreateOrConnectWithoutUserInput | inventoryCreateOrConnectWithoutUserInput[]
    upsert?: inventoryUpsertWithWhereUniqueWithoutUserInput | inventoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inventoryCreateManyUserInputEnvelope
    set?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    disconnect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    delete?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    connect?: inventoryWhereUniqueInput | inventoryWhereUniqueInput[]
    update?: inventoryUpdateWithWhereUniqueWithoutUserInput | inventoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inventoryUpdateManyWithWhereWithoutUserInput | inventoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
  }

  export type purchasesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput> | purchasesCreateWithoutUserInput[] | purchasesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchasesCreateOrConnectWithoutUserInput | purchasesCreateOrConnectWithoutUserInput[]
    upsert?: purchasesUpsertWithWhereUniqueWithoutUserInput | purchasesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchasesCreateManyUserInputEnvelope
    set?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    disconnect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    delete?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    connect?: purchasesWhereUniqueInput | purchasesWhereUniqueInput[]
    update?: purchasesUpdateWithWhereUniqueWithoutUserInput | purchasesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchasesUpdateManyWithWhereWithoutUserInput | purchasesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
  }

  export type purchase_itemsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<purchase_itemsCreateWithoutUserInput, purchase_itemsUncheckedCreateWithoutUserInput> | purchase_itemsCreateWithoutUserInput[] | purchase_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: purchase_itemsCreateOrConnectWithoutUserInput | purchase_itemsCreateOrConnectWithoutUserInput[]
    upsert?: purchase_itemsUpsertWithWhereUniqueWithoutUserInput | purchase_itemsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: purchase_itemsCreateManyUserInputEnvelope
    set?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    disconnect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    delete?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    connect?: purchase_itemsWhereUniqueInput | purchase_itemsWhereUniqueInput[]
    update?: purchase_itemsUpdateWithWhereUniqueWithoutUserInput | purchase_itemsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: purchase_itemsUpdateManyWithWhereWithoutUserInput | purchase_itemsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<inventory_transactionsCreateWithoutUserInput, inventory_transactionsUncheckedCreateWithoutUserInput> | inventory_transactionsCreateWithoutUserInput[] | inventory_transactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: inventory_transactionsCreateOrConnectWithoutUserInput | inventory_transactionsCreateOrConnectWithoutUserInput[]
    upsert?: inventory_transactionsUpsertWithWhereUniqueWithoutUserInput | inventory_transactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: inventory_transactionsCreateManyUserInputEnvelope
    set?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    disconnect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    delete?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    connect?: inventory_transactionsWhereUniqueInput | inventory_transactionsWhereUniqueInput[]
    update?: inventory_transactionsUpdateWithWhereUniqueWithoutUserInput | inventory_transactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: inventory_transactionsUpdateManyWithWhereWithoutUserInput | inventory_transactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput> | salesCreateWithoutUserInput[] | salesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: salesCreateOrConnectWithoutUserInput | salesCreateOrConnectWithoutUserInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutUserInput | salesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: salesCreateManyUserInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutUserInput | salesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: salesUpdateManyWithWhereWithoutUserInput | salesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type sales_itemsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sales_itemsCreateWithoutUserInput, sales_itemsUncheckedCreateWithoutUserInput> | sales_itemsCreateWithoutUserInput[] | sales_itemsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sales_itemsCreateOrConnectWithoutUserInput | sales_itemsCreateOrConnectWithoutUserInput[]
    upsert?: sales_itemsUpsertWithWhereUniqueWithoutUserInput | sales_itemsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sales_itemsCreateManyUserInputEnvelope
    set?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    disconnect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    delete?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    connect?: sales_itemsWhereUniqueInput | sales_itemsWhereUniqueInput[]
    update?: sales_itemsUpdateWithWhereUniqueWithoutUserInput | sales_itemsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sales_itemsUpdateManyWithWhereWithoutUserInput | sales_itemsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
  }

  export type businessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput> | businessCreateWithoutUserInput[] | businessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: businessCreateOrConnectWithoutUserInput | businessCreateOrConnectWithoutUserInput[]
    upsert?: businessUpsertWithWhereUniqueWithoutUserInput | businessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: businessCreateManyUserInputEnvelope
    set?: businessWhereUniqueInput | businessWhereUniqueInput[]
    disconnect?: businessWhereUniqueInput | businessWhereUniqueInput[]
    delete?: businessWhereUniqueInput | businessWhereUniqueInput[]
    connect?: businessWhereUniqueInput | businessWhereUniqueInput[]
    update?: businessUpdateWithWhereUniqueWithoutUserInput | businessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: businessUpdateManyWithWhereWithoutUserInput | businessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: businessScalarWhereInput | businessScalarWhereInput[]
  }

  export type plansUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<plansCreateWithoutUserInput, plansUncheckedCreateWithoutUserInput> | plansCreateWithoutUserInput[] | plansUncheckedCreateWithoutUserInput[]
    connectOrCreate?: plansCreateOrConnectWithoutUserInput | plansCreateOrConnectWithoutUserInput[]
    upsert?: plansUpsertWithWhereUniqueWithoutUserInput | plansUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: plansCreateManyUserInputEnvelope
    set?: plansWhereUniqueInput | plansWhereUniqueInput[]
    disconnect?: plansWhereUniqueInput | plansWhereUniqueInput[]
    delete?: plansWhereUniqueInput | plansWhereUniqueInput[]
    connect?: plansWhereUniqueInput | plansWhereUniqueInput[]
    update?: plansUpdateWithWhereUniqueWithoutUserInput | plansUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: plansUpdateManyWithWhereWithoutUserInput | plansUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: plansScalarWhereInput | plansScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type salesCreateWithoutCustomersInput = {
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales_items?: sales_itemsCreateNestedManyWithoutSalesInput
    user: usersCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutCustomersInput = {
    id?: number
    user_id: number
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutSalesInput
  }

  export type salesCreateOrConnectWithoutCustomersInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutCustomersInput, salesUncheckedCreateWithoutCustomersInput>
  }

  export type salesCreateManyCustomersInputEnvelope = {
    data: salesCreateManyCustomersInput | salesCreateManyCustomersInput[]
  }

  export type usersCreateWithoutCustomersInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutCustomersInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutCustomersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
  }

  export type salesUpsertWithWhereUniqueWithoutCustomersInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutCustomersInput, salesUncheckedUpdateWithoutCustomersInput>
    create: XOR<salesCreateWithoutCustomersInput, salesUncheckedCreateWithoutCustomersInput>
  }

  export type salesUpdateWithWhereUniqueWithoutCustomersInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutCustomersInput, salesUncheckedUpdateWithoutCustomersInput>
  }

  export type salesUpdateManyWithWhereWithoutCustomersInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutCustomersInput>
  }

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[]
    OR?: salesScalarWhereInput[]
    NOT?: salesScalarWhereInput | salesScalarWhereInput[]
    id?: IntFilter<"sales"> | number
    user_id?: IntFilter<"sales"> | number
    customer_id?: IntNullableFilter<"sales"> | number | null
    sale_date?: DateTimeNullableFilter<"sales"> | Date | string | null
    total_amount?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"sales"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sales"> | Date | string | null
  }

  export type usersUpsertWithoutCustomersInput = {
    update: XOR<usersUpdateWithoutCustomersInput, usersUncheckedUpdateWithoutCustomersInput>
    create: XOR<usersCreateWithoutCustomersInput, usersUncheckedCreateWithoutCustomersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCustomersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCustomersInput, usersUncheckedUpdateWithoutCustomersInput>
  }

  export type usersUpdateWithoutCustomersInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutExpensesInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutExpensesInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutExpensesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
  }

  export type usersUpsertWithoutExpensesInput = {
    update: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
    create: XOR<usersCreateWithoutExpensesInput, usersUncheckedCreateWithoutExpensesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutExpensesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutExpensesInput, usersUncheckedUpdateWithoutExpensesInput>
  }

  export type usersUpdateWithoutExpensesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutExpensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type suppliersCreateWithoutInventoryInput = {
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchases?: purchasesCreateNestedManyWithoutSuppliersInput
    user: usersCreateNestedOneWithoutSuppliersInput
  }

  export type suppliersUncheckedCreateWithoutInventoryInput = {
    id?: number
    user_id: number
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchases?: purchasesUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersCreateOrConnectWithoutInventoryInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutInventoryInput, suppliersUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_transactionsCreateWithoutInventoryInput = {
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: usersCreateNestedOneWithoutInventory_transactionsInput
  }

  export type inventory_transactionsUncheckedCreateWithoutInventoryInput = {
    id?: number
    user_id: number
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsCreateOrConnectWithoutInventoryInput = {
    where: inventory_transactionsWhereUniqueInput
    create: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_transactionsCreateManyInventoryInputEnvelope = {
    data: inventory_transactionsCreateManyInventoryInput | inventory_transactionsCreateManyInventoryInput[]
  }

  export type purchase_itemsCreateWithoutInventoryInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchases?: purchasesCreateNestedOneWithoutPurchase_itemsInput
    user: usersCreateNestedOneWithoutPurchase_itemsInput
  }

  export type purchase_itemsUncheckedCreateWithoutInventoryInput = {
    id?: number
    user_id: number
    purchase_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsCreateOrConnectWithoutInventoryInput = {
    where: purchase_itemsWhereUniqueInput
    create: XOR<purchase_itemsCreateWithoutInventoryInput, purchase_itemsUncheckedCreateWithoutInventoryInput>
  }

  export type purchase_itemsCreateManyInventoryInputEnvelope = {
    data: purchase_itemsCreateManyInventoryInput | purchase_itemsCreateManyInventoryInput[]
  }

  export type sales_itemsCreateWithoutInventoryInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales?: salesCreateNestedOneWithoutSales_itemsInput
    user: usersCreateNestedOneWithoutSales_itemsInput
  }

  export type sales_itemsUncheckedCreateWithoutInventoryInput = {
    id?: number
    user_id: number
    sale_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsCreateOrConnectWithoutInventoryInput = {
    where: sales_itemsWhereUniqueInput
    create: XOR<sales_itemsCreateWithoutInventoryInput, sales_itemsUncheckedCreateWithoutInventoryInput>
  }

  export type sales_itemsCreateManyInventoryInputEnvelope = {
    data: sales_itemsCreateManyInventoryInput | sales_itemsCreateManyInventoryInput[]
  }

  export type usersCreateWithoutInventoryInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutInventoryInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutInventoryInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
  }

  export type suppliersUpsertWithoutInventoryInput = {
    update: XOR<suppliersUpdateWithoutInventoryInput, suppliersUncheckedUpdateWithoutInventoryInput>
    create: XOR<suppliersCreateWithoutInventoryInput, suppliersUncheckedCreateWithoutInventoryInput>
    where?: suppliersWhereInput
  }

  export type suppliersUpdateToOneWithWhereWithoutInventoryInput = {
    where?: suppliersWhereInput
    data: XOR<suppliersUpdateWithoutInventoryInput, suppliersUncheckedUpdateWithoutInventoryInput>
  }

  export type suppliersUpdateWithoutInventoryInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchases?: purchasesUpdateManyWithoutSuppliersNestedInput
    user?: usersUpdateOneRequiredWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchases?: purchasesUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type inventory_transactionsUpsertWithWhereUniqueWithoutInventoryInput = {
    where: inventory_transactionsWhereUniqueInput
    update: XOR<inventory_transactionsUpdateWithoutInventoryInput, inventory_transactionsUncheckedUpdateWithoutInventoryInput>
    create: XOR<inventory_transactionsCreateWithoutInventoryInput, inventory_transactionsUncheckedCreateWithoutInventoryInput>
  }

  export type inventory_transactionsUpdateWithWhereUniqueWithoutInventoryInput = {
    where: inventory_transactionsWhereUniqueInput
    data: XOR<inventory_transactionsUpdateWithoutInventoryInput, inventory_transactionsUncheckedUpdateWithoutInventoryInput>
  }

  export type inventory_transactionsUpdateManyWithWhereWithoutInventoryInput = {
    where: inventory_transactionsScalarWhereInput
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyWithoutInventoryInput>
  }

  export type inventory_transactionsScalarWhereInput = {
    AND?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
    OR?: inventory_transactionsScalarWhereInput[]
    NOT?: inventory_transactionsScalarWhereInput | inventory_transactionsScalarWhereInput[]
    id?: IntFilter<"inventory_transactions"> | number
    user_id?: IntFilter<"inventory_transactions"> | number
    inventory_id?: IntNullableFilter<"inventory_transactions"> | number | null
    transaction_type?: StringNullableFilter<"inventory_transactions"> | string | null
    quantity_change?: IntNullableFilter<"inventory_transactions"> | number | null
    date?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    reference_type?: StringNullableFilter<"inventory_transactions"> | string | null
    reference_id?: IntNullableFilter<"inventory_transactions"> | number | null
    created_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory_transactions"> | Date | string | null
  }

  export type purchase_itemsUpsertWithWhereUniqueWithoutInventoryInput = {
    where: purchase_itemsWhereUniqueInput
    update: XOR<purchase_itemsUpdateWithoutInventoryInput, purchase_itemsUncheckedUpdateWithoutInventoryInput>
    create: XOR<purchase_itemsCreateWithoutInventoryInput, purchase_itemsUncheckedCreateWithoutInventoryInput>
  }

  export type purchase_itemsUpdateWithWhereUniqueWithoutInventoryInput = {
    where: purchase_itemsWhereUniqueInput
    data: XOR<purchase_itemsUpdateWithoutInventoryInput, purchase_itemsUncheckedUpdateWithoutInventoryInput>
  }

  export type purchase_itemsUpdateManyWithWhereWithoutInventoryInput = {
    where: purchase_itemsScalarWhereInput
    data: XOR<purchase_itemsUpdateManyMutationInput, purchase_itemsUncheckedUpdateManyWithoutInventoryInput>
  }

  export type purchase_itemsScalarWhereInput = {
    AND?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
    OR?: purchase_itemsScalarWhereInput[]
    NOT?: purchase_itemsScalarWhereInput | purchase_itemsScalarWhereInput[]
    id?: IntFilter<"purchase_items"> | number
    user_id?: IntFilter<"purchase_items"> | number
    purchase_id?: IntNullableFilter<"purchase_items"> | number | null
    inventory_id?: IntNullableFilter<"purchase_items"> | number | null
    quantity?: IntNullableFilter<"purchase_items"> | number | null
    unit_price?: DecimalNullableFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableFilter<"purchase_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"purchase_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"purchase_items"> | Date | string | null
  }

  export type sales_itemsUpsertWithWhereUniqueWithoutInventoryInput = {
    where: sales_itemsWhereUniqueInput
    update: XOR<sales_itemsUpdateWithoutInventoryInput, sales_itemsUncheckedUpdateWithoutInventoryInput>
    create: XOR<sales_itemsCreateWithoutInventoryInput, sales_itemsUncheckedCreateWithoutInventoryInput>
  }

  export type sales_itemsUpdateWithWhereUniqueWithoutInventoryInput = {
    where: sales_itemsWhereUniqueInput
    data: XOR<sales_itemsUpdateWithoutInventoryInput, sales_itemsUncheckedUpdateWithoutInventoryInput>
  }

  export type sales_itemsUpdateManyWithWhereWithoutInventoryInput = {
    where: sales_itemsScalarWhereInput
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyWithoutInventoryInput>
  }

  export type sales_itemsScalarWhereInput = {
    AND?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
    OR?: sales_itemsScalarWhereInput[]
    NOT?: sales_itemsScalarWhereInput | sales_itemsScalarWhereInput[]
    id?: IntFilter<"sales_items"> | number
    user_id?: IntFilter<"sales_items"> | number
    sale_id?: IntNullableFilter<"sales_items"> | number | null
    inventory_id?: IntNullableFilter<"sales_items"> | number | null
    quantity?: IntNullableFilter<"sales_items"> | number | null
    unit_price?: DecimalNullableFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    total_price?: DecimalNullableFilter<"sales_items"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"sales_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"sales_items"> | Date | string | null
  }

  export type usersUpsertWithoutInventoryInput = {
    update: XOR<usersUpdateWithoutInventoryInput, usersUncheckedUpdateWithoutInventoryInput>
    create: XOR<usersCreateWithoutInventoryInput, usersUncheckedCreateWithoutInventoryInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInventoryInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInventoryInput, usersUncheckedUpdateWithoutInventoryInput>
  }

  export type usersUpdateWithoutInventoryInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type inventoryCreateWithoutInventory_transactionsInput = {
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutInventoryInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsCreateNestedManyWithoutInventoryInput
    user: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutInventory_transactionsInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutInventory_transactionsInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
  }

  export type usersCreateWithoutInventory_transactionsInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutInventory_transactionsInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutInventory_transactionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
  }

  export type inventoryUpsertWithoutInventory_transactionsInput = {
    update: XOR<inventoryUpdateWithoutInventory_transactionsInput, inventoryUncheckedUpdateWithoutInventory_transactionsInput>
    create: XOR<inventoryCreateWithoutInventory_transactionsInput, inventoryUncheckedCreateWithoutInventory_transactionsInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutInventory_transactionsInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutInventory_transactionsInput, inventoryUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type inventoryUpdateWithoutInventory_transactionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUpdateManyWithoutInventoryNestedInput
    user?: usersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutInventory_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type usersUpsertWithoutInventory_transactionsInput = {
    update: XOR<usersUpdateWithoutInventory_transactionsInput, usersUncheckedUpdateWithoutInventory_transactionsInput>
    create: XOR<usersCreateWithoutInventory_transactionsInput, usersUncheckedCreateWithoutInventory_transactionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutInventory_transactionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutInventory_transactionsInput, usersUncheckedUpdateWithoutInventory_transactionsInput>
  }

  export type usersUpdateWithoutInventory_transactionsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutInventory_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type inventoryCreateWithoutPurchase_itemsInput = {
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutInventoryInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsCreateNestedManyWithoutInventoryInput
    user: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutPurchase_itemsInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutPurchase_itemsInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutPurchase_itemsInput, inventoryUncheckedCreateWithoutPurchase_itemsInput>
  }

  export type purchasesCreateWithoutPurchase_itemsInput = {
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutPurchasesInput
    user: usersCreateNestedOneWithoutPurchasesInput
  }

  export type purchasesUncheckedCreateWithoutPurchase_itemsInput = {
    id?: number
    user_id: number
    supplier_id?: number | null
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchasesCreateOrConnectWithoutPurchase_itemsInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutPurchase_itemsInput, purchasesUncheckedCreateWithoutPurchase_itemsInput>
  }

  export type usersCreateWithoutPurchase_itemsInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPurchase_itemsInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPurchase_itemsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPurchase_itemsInput, usersUncheckedCreateWithoutPurchase_itemsInput>
  }

  export type inventoryUpsertWithoutPurchase_itemsInput = {
    update: XOR<inventoryUpdateWithoutPurchase_itemsInput, inventoryUncheckedUpdateWithoutPurchase_itemsInput>
    create: XOR<inventoryCreateWithoutPurchase_itemsInput, inventoryUncheckedCreateWithoutPurchase_itemsInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutPurchase_itemsInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutPurchase_itemsInput, inventoryUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type inventoryUpdateWithoutPurchase_itemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutInventoryNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUpdateManyWithoutInventoryNestedInput
    user?: usersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutPurchase_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type purchasesUpsertWithoutPurchase_itemsInput = {
    update: XOR<purchasesUpdateWithoutPurchase_itemsInput, purchasesUncheckedUpdateWithoutPurchase_itemsInput>
    create: XOR<purchasesCreateWithoutPurchase_itemsInput, purchasesUncheckedCreateWithoutPurchase_itemsInput>
    where?: purchasesWhereInput
  }

  export type purchasesUpdateToOneWithWhereWithoutPurchase_itemsInput = {
    where?: purchasesWhereInput
    data: XOR<purchasesUpdateWithoutPurchase_itemsInput, purchasesUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type purchasesUpdateWithoutPurchase_itemsInput = {
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutPurchasesNestedInput
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateWithoutPurchase_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutPurchase_itemsInput = {
    update: XOR<usersUpdateWithoutPurchase_itemsInput, usersUncheckedUpdateWithoutPurchase_itemsInput>
    create: XOR<usersCreateWithoutPurchase_itemsInput, usersUncheckedCreateWithoutPurchase_itemsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPurchase_itemsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPurchase_itemsInput, usersUncheckedUpdateWithoutPurchase_itemsInput>
  }

  export type usersUpdateWithoutPurchase_itemsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPurchase_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type purchase_itemsCreateWithoutPurchasesInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutPurchase_itemsInput
    user: usersCreateNestedOneWithoutPurchase_itemsInput
  }

  export type purchase_itemsUncheckedCreateWithoutPurchasesInput = {
    id?: number
    user_id: number
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsCreateOrConnectWithoutPurchasesInput = {
    where: purchase_itemsWhereUniqueInput
    create: XOR<purchase_itemsCreateWithoutPurchasesInput, purchase_itemsUncheckedCreateWithoutPurchasesInput>
  }

  export type purchase_itemsCreateManyPurchasesInputEnvelope = {
    data: purchase_itemsCreateManyPurchasesInput | purchase_itemsCreateManyPurchasesInput[]
  }

  export type suppliersCreateWithoutPurchasesInput = {
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedManyWithoutSuppliersInput
    user: usersCreateNestedOneWithoutSuppliersInput
  }

  export type suppliersUncheckedCreateWithoutPurchasesInput = {
    id?: number
    user_id: number
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersCreateOrConnectWithoutPurchasesInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
  }

  export type usersCreateWithoutPurchasesInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPurchasesInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPurchasesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
  }

  export type purchase_itemsUpsertWithWhereUniqueWithoutPurchasesInput = {
    where: purchase_itemsWhereUniqueInput
    update: XOR<purchase_itemsUpdateWithoutPurchasesInput, purchase_itemsUncheckedUpdateWithoutPurchasesInput>
    create: XOR<purchase_itemsCreateWithoutPurchasesInput, purchase_itemsUncheckedCreateWithoutPurchasesInput>
  }

  export type purchase_itemsUpdateWithWhereUniqueWithoutPurchasesInput = {
    where: purchase_itemsWhereUniqueInput
    data: XOR<purchase_itemsUpdateWithoutPurchasesInput, purchase_itemsUncheckedUpdateWithoutPurchasesInput>
  }

  export type purchase_itemsUpdateManyWithWhereWithoutPurchasesInput = {
    where: purchase_itemsScalarWhereInput
    data: XOR<purchase_itemsUpdateManyMutationInput, purchase_itemsUncheckedUpdateManyWithoutPurchasesInput>
  }

  export type suppliersUpsertWithoutPurchasesInput = {
    update: XOR<suppliersUpdateWithoutPurchasesInput, suppliersUncheckedUpdateWithoutPurchasesInput>
    create: XOR<suppliersCreateWithoutPurchasesInput, suppliersUncheckedCreateWithoutPurchasesInput>
    where?: suppliersWhereInput
  }

  export type suppliersUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: suppliersWhereInput
    data: XOR<suppliersUpdateWithoutPurchasesInput, suppliersUncheckedUpdateWithoutPurchasesInput>
  }

  export type suppliersUpdateWithoutPurchasesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateManyWithoutSuppliersNestedInput
    user?: usersUpdateOneRequiredWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type usersUpsertWithoutPurchasesInput = {
    update: XOR<usersUpdateWithoutPurchasesInput, usersUncheckedUpdateWithoutPurchasesInput>
    create: XOR<usersCreateWithoutPurchasesInput, usersUncheckedCreateWithoutPurchasesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPurchasesInput, usersUncheckedUpdateWithoutPurchasesInput>
  }

  export type usersUpdateWithoutPurchasesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type customersCreateWithoutSalesInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user: usersCreateNestedOneWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutSalesInput = {
    id?: number
    user_id: number
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type customersCreateOrConnectWithoutSalesInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
  }

  export type sales_itemsCreateWithoutSalesInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutSales_itemsInput
    user: usersCreateNestedOneWithoutSales_itemsInput
  }

  export type sales_itemsUncheckedCreateWithoutSalesInput = {
    id?: number
    user_id: number
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsCreateOrConnectWithoutSalesInput = {
    where: sales_itemsWhereUniqueInput
    create: XOR<sales_itemsCreateWithoutSalesInput, sales_itemsUncheckedCreateWithoutSalesInput>
  }

  export type sales_itemsCreateManySalesInputEnvelope = {
    data: sales_itemsCreateManySalesInput | sales_itemsCreateManySalesInput[]
  }

  export type usersCreateWithoutSalesInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSalesInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSalesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
  }

  export type customersUpsertWithoutSalesInput = {
    update: XOR<customersUpdateWithoutSalesInput, customersUncheckedUpdateWithoutSalesInput>
    create: XOR<customersCreateWithoutSalesInput, customersUncheckedCreateWithoutSalesInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutSalesInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutSalesInput, customersUncheckedUpdateWithoutSalesInput>
  }

  export type customersUpdateWithoutSalesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUpsertWithWhereUniqueWithoutSalesInput = {
    where: sales_itemsWhereUniqueInput
    update: XOR<sales_itemsUpdateWithoutSalesInput, sales_itemsUncheckedUpdateWithoutSalesInput>
    create: XOR<sales_itemsCreateWithoutSalesInput, sales_itemsUncheckedCreateWithoutSalesInput>
  }

  export type sales_itemsUpdateWithWhereUniqueWithoutSalesInput = {
    where: sales_itemsWhereUniqueInput
    data: XOR<sales_itemsUpdateWithoutSalesInput, sales_itemsUncheckedUpdateWithoutSalesInput>
  }

  export type sales_itemsUpdateManyWithWhereWithoutSalesInput = {
    where: sales_itemsScalarWhereInput
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyWithoutSalesInput>
  }

  export type usersUpsertWithoutSalesInput = {
    update: XOR<usersUpdateWithoutSalesInput, usersUncheckedUpdateWithoutSalesInput>
    create: XOR<usersCreateWithoutSalesInput, usersUncheckedCreateWithoutSalesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSalesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSalesInput, usersUncheckedUpdateWithoutSalesInput>
  }

  export type usersUpdateWithoutSalesInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type inventoryCreateWithoutSales_itemsInput = {
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutInventoryInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutInventoryInput
    user: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutSales_itemsInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutSales_itemsInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutSales_itemsInput, inventoryUncheckedCreateWithoutSales_itemsInput>
  }

  export type salesCreateWithoutSales_itemsInput = {
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customers?: customersCreateNestedOneWithoutSalesInput
    user: usersCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutSales_itemsInput = {
    id?: number
    user_id: number
    customer_id?: number | null
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type salesCreateOrConnectWithoutSales_itemsInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutSales_itemsInput, salesUncheckedCreateWithoutSales_itemsInput>
  }

  export type usersCreateWithoutSales_itemsInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSales_itemsInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSales_itemsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSales_itemsInput, usersUncheckedCreateWithoutSales_itemsInput>
  }

  export type inventoryUpsertWithoutSales_itemsInput = {
    update: XOR<inventoryUpdateWithoutSales_itemsInput, inventoryUncheckedUpdateWithoutSales_itemsInput>
    create: XOR<inventoryCreateWithoutSales_itemsInput, inventoryUncheckedCreateWithoutSales_itemsInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutSales_itemsInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutSales_itemsInput, inventoryUncheckedUpdateWithoutSales_itemsInput>
  }

  export type inventoryUpdateWithoutSales_itemsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutInventoryNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutInventoryNestedInput
    user?: usersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutSales_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type salesUpsertWithoutSales_itemsInput = {
    update: XOR<salesUpdateWithoutSales_itemsInput, salesUncheckedUpdateWithoutSales_itemsInput>
    create: XOR<salesCreateWithoutSales_itemsInput, salesUncheckedCreateWithoutSales_itemsInput>
    where?: salesWhereInput
  }

  export type salesUpdateToOneWithWhereWithoutSales_itemsInput = {
    where?: salesWhereInput
    data: XOR<salesUpdateWithoutSales_itemsInput, salesUncheckedUpdateWithoutSales_itemsInput>
  }

  export type salesUpdateWithoutSales_itemsInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutSalesNestedInput
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutSales_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutSales_itemsInput = {
    update: XOR<usersUpdateWithoutSales_itemsInput, usersUncheckedUpdateWithoutSales_itemsInput>
    create: XOR<usersCreateWithoutSales_itemsInput, usersUncheckedCreateWithoutSales_itemsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSales_itemsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSales_itemsInput, usersUncheckedUpdateWithoutSales_itemsInput>
  }

  export type usersUpdateWithoutSales_itemsInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSales_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type inventoryCreateWithoutSuppliersInput = {
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsCreateNestedManyWithoutInventoryInput
    user: usersCreateNestedOneWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutSuppliersInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutSuppliersInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutSuppliersInput, inventoryUncheckedCreateWithoutSuppliersInput>
  }

  export type inventoryCreateManySuppliersInputEnvelope = {
    data: inventoryCreateManySuppliersInput | inventoryCreateManySuppliersInput[]
  }

  export type purchasesCreateWithoutSuppliersInput = {
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsCreateNestedManyWithoutPurchasesInput
    user: usersCreateNestedOneWithoutPurchasesInput
  }

  export type purchasesUncheckedCreateWithoutSuppliersInput = {
    id?: number
    user_id: number
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutPurchasesInput
  }

  export type purchasesCreateOrConnectWithoutSuppliersInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutSuppliersInput, purchasesUncheckedCreateWithoutSuppliersInput>
  }

  export type purchasesCreateManySuppliersInputEnvelope = {
    data: purchasesCreateManySuppliersInput | purchasesCreateManySuppliersInput[]
  }

  export type usersCreateWithoutSuppliersInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSuppliersInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSuppliersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSuppliersInput, usersUncheckedCreateWithoutSuppliersInput>
  }

  export type inventoryUpsertWithWhereUniqueWithoutSuppliersInput = {
    where: inventoryWhereUniqueInput
    update: XOR<inventoryUpdateWithoutSuppliersInput, inventoryUncheckedUpdateWithoutSuppliersInput>
    create: XOR<inventoryCreateWithoutSuppliersInput, inventoryUncheckedCreateWithoutSuppliersInput>
  }

  export type inventoryUpdateWithWhereUniqueWithoutSuppliersInput = {
    where: inventoryWhereUniqueInput
    data: XOR<inventoryUpdateWithoutSuppliersInput, inventoryUncheckedUpdateWithoutSuppliersInput>
  }

  export type inventoryUpdateManyWithWhereWithoutSuppliersInput = {
    where: inventoryScalarWhereInput
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type inventoryScalarWhereInput = {
    AND?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
    OR?: inventoryScalarWhereInput[]
    NOT?: inventoryScalarWhereInput | inventoryScalarWhereInput[]
    id?: IntFilter<"inventory"> | number
    user_id?: IntFilter<"inventory"> | number
    name?: StringNullableFilter<"inventory"> | string | null
    description?: StringNullableFilter<"inventory"> | string | null
    quantity_in_stock?: IntNullableFilter<"inventory"> | number | null
    cost_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    selling_price?: DecimalNullableFilter<"inventory"> | Decimal | DecimalJsLike | number | string | null
    supplier_id?: IntNullableFilter<"inventory"> | number | null
    created_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"inventory"> | Date | string | null
  }

  export type purchasesUpsertWithWhereUniqueWithoutSuppliersInput = {
    where: purchasesWhereUniqueInput
    update: XOR<purchasesUpdateWithoutSuppliersInput, purchasesUncheckedUpdateWithoutSuppliersInput>
    create: XOR<purchasesCreateWithoutSuppliersInput, purchasesUncheckedCreateWithoutSuppliersInput>
  }

  export type purchasesUpdateWithWhereUniqueWithoutSuppliersInput = {
    where: purchasesWhereUniqueInput
    data: XOR<purchasesUpdateWithoutSuppliersInput, purchasesUncheckedUpdateWithoutSuppliersInput>
  }

  export type purchasesUpdateManyWithWhereWithoutSuppliersInput = {
    where: purchasesScalarWhereInput
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyWithoutSuppliersInput>
  }

  export type purchasesScalarWhereInput = {
    AND?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
    OR?: purchasesScalarWhereInput[]
    NOT?: purchasesScalarWhereInput | purchasesScalarWhereInput[]
    id?: IntFilter<"purchases"> | number
    user_id?: IntFilter<"purchases"> | number
    supplier_id?: IntNullableFilter<"purchases"> | number | null
    purchase_date?: DateTimeNullableFilter<"purchases"> | Date | string | null
    total_amount?: DecimalNullableFilter<"purchases"> | Decimal | DecimalJsLike | number | string | null
    created_at?: DateTimeNullableFilter<"purchases"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"purchases"> | Date | string | null
  }

  export type usersUpsertWithoutSuppliersInput = {
    update: XOR<usersUpdateWithoutSuppliersInput, usersUncheckedUpdateWithoutSuppliersInput>
    create: XOR<usersCreateWithoutSuppliersInput, usersUncheckedCreateWithoutSuppliersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSuppliersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSuppliersInput, usersUncheckedUpdateWithoutSuppliersInput>
  }

  export type usersUpdateWithoutSuppliersInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutBusinessInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    plan?: plansCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutBusinessInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    plan?: plansUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutBusinessInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutBusinessInput, usersUncheckedCreateWithoutBusinessInput>
  }

  export type usersUpsertWithoutBusinessInput = {
    update: XOR<usersUpdateWithoutBusinessInput, usersUncheckedUpdateWithoutBusinessInput>
    create: XOR<usersCreateWithoutBusinessInput, usersUncheckedCreateWithoutBusinessInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutBusinessInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutBusinessInput, usersUncheckedUpdateWithoutBusinessInput>
  }

  export type usersUpdateWithoutBusinessInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    plan?: plansUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    plan?: plansUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutPlanInput = {
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesCreateNestedManyWithoutUsersInput
    customers?: customersCreateNestedManyWithoutUserInput
    suppliers?: suppliersCreateNestedManyWithoutUserInput
    inventory?: inventoryCreateNestedManyWithoutUserInput
    purchases?: purchasesCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutUserInput
    sales?: salesCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsCreateNestedManyWithoutUserInput
    business?: businessCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPlanInput = {
    id?: number
    username?: string | null
    password?: string | null
    role?: string | null
    email?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    expenses?: expensesUncheckedCreateNestedManyWithoutUsersInput
    customers?: customersUncheckedCreateNestedManyWithoutUserInput
    suppliers?: suppliersUncheckedCreateNestedManyWithoutUserInput
    inventory?: inventoryUncheckedCreateNestedManyWithoutUserInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutUserInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutUserInput
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutUserInput
    sales?: salesUncheckedCreateNestedManyWithoutUserInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutUserInput
    business?: businessUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPlanInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPlanInput, usersUncheckedCreateWithoutPlanInput>
  }

  export type usersUpsertWithoutPlanInput = {
    update: XOR<usersUpdateWithoutPlanInput, usersUncheckedUpdateWithoutPlanInput>
    create: XOR<usersCreateWithoutPlanInput, usersUncheckedCreateWithoutPlanInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPlanInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPlanInput, usersUncheckedUpdateWithoutPlanInput>
  }

  export type usersUpdateWithoutPlanInput = {
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUpdateManyWithoutUsersNestedInput
    customers?: customersUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUpdateManyWithoutUserNestedInput
    inventory?: inventoryUpdateManyWithoutUserNestedInput
    purchases?: purchasesUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutUserNestedInput
    sales?: salesUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUpdateManyWithoutUserNestedInput
    business?: businessUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expenses?: expensesUncheckedUpdateManyWithoutUsersNestedInput
    customers?: customersUncheckedUpdateManyWithoutUserNestedInput
    suppliers?: suppliersUncheckedUpdateManyWithoutUserNestedInput
    inventory?: inventoryUncheckedUpdateManyWithoutUserNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutUserNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutUserNestedInput
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutUserNestedInput
    sales?: salesUncheckedUpdateManyWithoutUserNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutUserNestedInput
    business?: businessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type expensesCreateWithoutUsersInput = {
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type expensesUncheckedCreateWithoutUsersInput = {
    id?: number
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type expensesCreateOrConnectWithoutUsersInput = {
    where: expensesWhereUniqueInput
    create: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput>
  }

  export type expensesCreateManyUsersInputEnvelope = {
    data: expensesCreateManyUsersInput | expensesCreateManyUsersInput[]
  }

  export type customersCreateWithoutUserInput = {
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales?: salesCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales?: salesUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersCreateOrConnectWithoutUserInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutUserInput, customersUncheckedCreateWithoutUserInput>
  }

  export type customersCreateManyUserInputEnvelope = {
    data: customersCreateManyUserInput | customersCreateManyUserInput[]
  }

  export type suppliersCreateWithoutUserInput = {
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedManyWithoutSuppliersInput
    purchases?: purchasesCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryUncheckedCreateNestedManyWithoutSuppliersInput
    purchases?: purchasesUncheckedCreateNestedManyWithoutSuppliersInput
  }

  export type suppliersCreateOrConnectWithoutUserInput = {
    where: suppliersWhereUniqueInput
    create: XOR<suppliersCreateWithoutUserInput, suppliersUncheckedCreateWithoutUserInput>
  }

  export type suppliersCreateManyUserInputEnvelope = {
    data: suppliersCreateManyUserInput | suppliersCreateManyUserInput[]
  }

  export type inventoryCreateWithoutUserInput = {
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    suppliers?: suppliersCreateNestedOneWithoutInventoryInput
    inventory_transactions?: inventory_transactionsCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedCreateNestedManyWithoutInventoryInput
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutInventoryInput
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryCreateOrConnectWithoutUserInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>
  }

  export type inventoryCreateManyUserInputEnvelope = {
    data: inventoryCreateManyUserInput | inventoryCreateManyUserInput[]
  }

  export type purchasesCreateWithoutUserInput = {
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsCreateNestedManyWithoutPurchasesInput
    suppliers?: suppliersCreateNestedOneWithoutPurchasesInput
  }

  export type purchasesUncheckedCreateWithoutUserInput = {
    id?: number
    supplier_id?: number | null
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    purchase_items?: purchase_itemsUncheckedCreateNestedManyWithoutPurchasesInput
  }

  export type purchasesCreateOrConnectWithoutUserInput = {
    where: purchasesWhereUniqueInput
    create: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput>
  }

  export type purchasesCreateManyUserInputEnvelope = {
    data: purchasesCreateManyUserInput | purchasesCreateManyUserInput[]
  }

  export type purchase_itemsCreateWithoutUserInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutPurchase_itemsInput
    purchases?: purchasesCreateNestedOneWithoutPurchase_itemsInput
  }

  export type purchase_itemsUncheckedCreateWithoutUserInput = {
    id?: number
    purchase_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsCreateOrConnectWithoutUserInput = {
    where: purchase_itemsWhereUniqueInput
    create: XOR<purchase_itemsCreateWithoutUserInput, purchase_itemsUncheckedCreateWithoutUserInput>
  }

  export type purchase_itemsCreateManyUserInputEnvelope = {
    data: purchase_itemsCreateManyUserInput | purchase_itemsCreateManyUserInput[]
  }

  export type inventory_transactionsCreateWithoutUserInput = {
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutInventory_transactionsInput
  }

  export type inventory_transactionsUncheckedCreateWithoutUserInput = {
    id?: number
    inventory_id?: number | null
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsCreateOrConnectWithoutUserInput = {
    where: inventory_transactionsWhereUniqueInput
    create: XOR<inventory_transactionsCreateWithoutUserInput, inventory_transactionsUncheckedCreateWithoutUserInput>
  }

  export type inventory_transactionsCreateManyUserInputEnvelope = {
    data: inventory_transactionsCreateManyUserInput | inventory_transactionsCreateManyUserInput[]
  }

  export type salesCreateWithoutUserInput = {
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    customers?: customersCreateNestedOneWithoutSalesInput
    sales_items?: sales_itemsCreateNestedManyWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutUserInput = {
    id?: number
    customer_id?: number | null
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    sales_items?: sales_itemsUncheckedCreateNestedManyWithoutSalesInput
  }

  export type salesCreateOrConnectWithoutUserInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
  }

  export type salesCreateManyUserInputEnvelope = {
    data: salesCreateManyUserInput | salesCreateManyUserInput[]
  }

  export type sales_itemsCreateWithoutUserInput = {
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    inventory?: inventoryCreateNestedOneWithoutSales_itemsInput
    sales?: salesCreateNestedOneWithoutSales_itemsInput
  }

  export type sales_itemsUncheckedCreateWithoutUserInput = {
    id?: number
    sale_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsCreateOrConnectWithoutUserInput = {
    where: sales_itemsWhereUniqueInput
    create: XOR<sales_itemsCreateWithoutUserInput, sales_itemsUncheckedCreateWithoutUserInput>
  }

  export type sales_itemsCreateManyUserInputEnvelope = {
    data: sales_itemsCreateManyUserInput | sales_itemsCreateManyUserInput[]
  }

  export type businessCreateWithoutUserInput = {
    name: string
    products: JsonNullValueInput | InputJsonValue
    location: string
    description: string
    imagePath?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    hoursPerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type businessUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    products: JsonNullValueInput | InputJsonValue
    location: string
    description: string
    imagePath?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    hoursPerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type businessCreateOrConnectWithoutUserInput = {
    where: businessWhereUniqueInput
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>
  }

  export type businessCreateManyUserInputEnvelope = {
    data: businessCreateManyUserInput | businessCreateManyUserInput[]
  }

  export type plansCreateWithoutUserInput = {
    plan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type plansUncheckedCreateWithoutUserInput = {
    id?: number
    plan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type plansCreateOrConnectWithoutUserInput = {
    where: plansWhereUniqueInput
    create: XOR<plansCreateWithoutUserInput, plansUncheckedCreateWithoutUserInput>
  }

  export type plansCreateManyUserInputEnvelope = {
    data: plansCreateManyUserInput | plansCreateManyUserInput[]
  }

  export type expensesUpsertWithWhereUniqueWithoutUsersInput = {
    where: expensesWhereUniqueInput
    update: XOR<expensesUpdateWithoutUsersInput, expensesUncheckedUpdateWithoutUsersInput>
    create: XOR<expensesCreateWithoutUsersInput, expensesUncheckedCreateWithoutUsersInput>
  }

  export type expensesUpdateWithWhereUniqueWithoutUsersInput = {
    where: expensesWhereUniqueInput
    data: XOR<expensesUpdateWithoutUsersInput, expensesUncheckedUpdateWithoutUsersInput>
  }

  export type expensesUpdateManyWithWhereWithoutUsersInput = {
    where: expensesScalarWhereInput
    data: XOR<expensesUpdateManyMutationInput, expensesUncheckedUpdateManyWithoutUsersInput>
  }

  export type expensesScalarWhereInput = {
    AND?: expensesScalarWhereInput | expensesScalarWhereInput[]
    OR?: expensesScalarWhereInput[]
    NOT?: expensesScalarWhereInput | expensesScalarWhereInput[]
    id?: IntFilter<"expenses"> | number
    user_id?: IntNullableFilter<"expenses"> | number | null
    description?: StringNullableFilter<"expenses"> | string | null
    amount?: DecimalNullableFilter<"expenses"> | Decimal | DecimalJsLike | number | string | null
    date?: DateTimeNullableFilter<"expenses"> | Date | string | null
    category?: StringNullableFilter<"expenses"> | string | null
    created_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"expenses"> | Date | string | null
  }

  export type customersUpsertWithWhereUniqueWithoutUserInput = {
    where: customersWhereUniqueInput
    update: XOR<customersUpdateWithoutUserInput, customersUncheckedUpdateWithoutUserInput>
    create: XOR<customersCreateWithoutUserInput, customersUncheckedCreateWithoutUserInput>
  }

  export type customersUpdateWithWhereUniqueWithoutUserInput = {
    where: customersWhereUniqueInput
    data: XOR<customersUpdateWithoutUserInput, customersUncheckedUpdateWithoutUserInput>
  }

  export type customersUpdateManyWithWhereWithoutUserInput = {
    where: customersScalarWhereInput
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyWithoutUserInput>
  }

  export type customersScalarWhereInput = {
    AND?: customersScalarWhereInput | customersScalarWhereInput[]
    OR?: customersScalarWhereInput[]
    NOT?: customersScalarWhereInput | customersScalarWhereInput[]
    id?: IntFilter<"customers"> | number
    user_id?: IntFilter<"customers"> | number
    name?: StringNullableFilter<"customers"> | string | null
    email?: StringNullableFilter<"customers"> | string | null
    phone?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    created_at?: DateTimeNullableFilter<"customers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"customers"> | Date | string | null
  }

  export type suppliersUpsertWithWhereUniqueWithoutUserInput = {
    where: suppliersWhereUniqueInput
    update: XOR<suppliersUpdateWithoutUserInput, suppliersUncheckedUpdateWithoutUserInput>
    create: XOR<suppliersCreateWithoutUserInput, suppliersUncheckedCreateWithoutUserInput>
  }

  export type suppliersUpdateWithWhereUniqueWithoutUserInput = {
    where: suppliersWhereUniqueInput
    data: XOR<suppliersUpdateWithoutUserInput, suppliersUncheckedUpdateWithoutUserInput>
  }

  export type suppliersUpdateManyWithWhereWithoutUserInput = {
    where: suppliersScalarWhereInput
    data: XOR<suppliersUpdateManyMutationInput, suppliersUncheckedUpdateManyWithoutUserInput>
  }

  export type suppliersScalarWhereInput = {
    AND?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
    OR?: suppliersScalarWhereInput[]
    NOT?: suppliersScalarWhereInput | suppliersScalarWhereInput[]
    id?: IntFilter<"suppliers"> | number
    user_id?: IntFilter<"suppliers"> | number
    name?: StringNullableFilter<"suppliers"> | string | null
    contact_info?: StringNullableFilter<"suppliers"> | string | null
    created_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"suppliers"> | Date | string | null
  }

  export type inventoryUpsertWithWhereUniqueWithoutUserInput = {
    where: inventoryWhereUniqueInput
    update: XOR<inventoryUpdateWithoutUserInput, inventoryUncheckedUpdateWithoutUserInput>
    create: XOR<inventoryCreateWithoutUserInput, inventoryUncheckedCreateWithoutUserInput>
  }

  export type inventoryUpdateWithWhereUniqueWithoutUserInput = {
    where: inventoryWhereUniqueInput
    data: XOR<inventoryUpdateWithoutUserInput, inventoryUncheckedUpdateWithoutUserInput>
  }

  export type inventoryUpdateManyWithWhereWithoutUserInput = {
    where: inventoryScalarWhereInput
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyWithoutUserInput>
  }

  export type purchasesUpsertWithWhereUniqueWithoutUserInput = {
    where: purchasesWhereUniqueInput
    update: XOR<purchasesUpdateWithoutUserInput, purchasesUncheckedUpdateWithoutUserInput>
    create: XOR<purchasesCreateWithoutUserInput, purchasesUncheckedCreateWithoutUserInput>
  }

  export type purchasesUpdateWithWhereUniqueWithoutUserInput = {
    where: purchasesWhereUniqueInput
    data: XOR<purchasesUpdateWithoutUserInput, purchasesUncheckedUpdateWithoutUserInput>
  }

  export type purchasesUpdateManyWithWhereWithoutUserInput = {
    where: purchasesScalarWhereInput
    data: XOR<purchasesUpdateManyMutationInput, purchasesUncheckedUpdateManyWithoutUserInput>
  }

  export type purchase_itemsUpsertWithWhereUniqueWithoutUserInput = {
    where: purchase_itemsWhereUniqueInput
    update: XOR<purchase_itemsUpdateWithoutUserInput, purchase_itemsUncheckedUpdateWithoutUserInput>
    create: XOR<purchase_itemsCreateWithoutUserInput, purchase_itemsUncheckedCreateWithoutUserInput>
  }

  export type purchase_itemsUpdateWithWhereUniqueWithoutUserInput = {
    where: purchase_itemsWhereUniqueInput
    data: XOR<purchase_itemsUpdateWithoutUserInput, purchase_itemsUncheckedUpdateWithoutUserInput>
  }

  export type purchase_itemsUpdateManyWithWhereWithoutUserInput = {
    where: purchase_itemsScalarWhereInput
    data: XOR<purchase_itemsUpdateManyMutationInput, purchase_itemsUncheckedUpdateManyWithoutUserInput>
  }

  export type inventory_transactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: inventory_transactionsWhereUniqueInput
    update: XOR<inventory_transactionsUpdateWithoutUserInput, inventory_transactionsUncheckedUpdateWithoutUserInput>
    create: XOR<inventory_transactionsCreateWithoutUserInput, inventory_transactionsUncheckedCreateWithoutUserInput>
  }

  export type inventory_transactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: inventory_transactionsWhereUniqueInput
    data: XOR<inventory_transactionsUpdateWithoutUserInput, inventory_transactionsUncheckedUpdateWithoutUserInput>
  }

  export type inventory_transactionsUpdateManyWithWhereWithoutUserInput = {
    where: inventory_transactionsScalarWhereInput
    data: XOR<inventory_transactionsUpdateManyMutationInput, inventory_transactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type salesUpsertWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>
    create: XOR<salesCreateWithoutUserInput, salesUncheckedCreateWithoutUserInput>
  }

  export type salesUpdateWithWhereUniqueWithoutUserInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutUserInput, salesUncheckedUpdateWithoutUserInput>
  }

  export type salesUpdateManyWithWhereWithoutUserInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutUserInput>
  }

  export type sales_itemsUpsertWithWhereUniqueWithoutUserInput = {
    where: sales_itemsWhereUniqueInput
    update: XOR<sales_itemsUpdateWithoutUserInput, sales_itemsUncheckedUpdateWithoutUserInput>
    create: XOR<sales_itemsCreateWithoutUserInput, sales_itemsUncheckedCreateWithoutUserInput>
  }

  export type sales_itemsUpdateWithWhereUniqueWithoutUserInput = {
    where: sales_itemsWhereUniqueInput
    data: XOR<sales_itemsUpdateWithoutUserInput, sales_itemsUncheckedUpdateWithoutUserInput>
  }

  export type sales_itemsUpdateManyWithWhereWithoutUserInput = {
    where: sales_itemsScalarWhereInput
    data: XOR<sales_itemsUpdateManyMutationInput, sales_itemsUncheckedUpdateManyWithoutUserInput>
  }

  export type businessUpsertWithWhereUniqueWithoutUserInput = {
    where: businessWhereUniqueInput
    update: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>
  }

  export type businessUpdateWithWhereUniqueWithoutUserInput = {
    where: businessWhereUniqueInput
    data: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>
  }

  export type businessUpdateManyWithWhereWithoutUserInput = {
    where: businessScalarWhereInput
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyWithoutUserInput>
  }

  export type businessScalarWhereInput = {
    AND?: businessScalarWhereInput | businessScalarWhereInput[]
    OR?: businessScalarWhereInput[]
    NOT?: businessScalarWhereInput | businessScalarWhereInput[]
    id?: IntFilter<"business"> | number
    userId?: IntFilter<"business"> | number
    name?: StringFilter<"business"> | string
    products?: JsonFilter<"business">
    location?: StringFilter<"business"> | string
    description?: StringFilter<"business"> | string
    imagePath?: StringNullableFilter<"business"> | string | null
    socialMedia?: JsonFilter<"business">
    hoursPerDay?: FloatFilter<"business"> | number
    createdAt?: DateTimeFilter<"business"> | Date | string
    updatedAt?: DateTimeFilter<"business"> | Date | string
  }

  export type plansUpsertWithWhereUniqueWithoutUserInput = {
    where: plansWhereUniqueInput
    update: XOR<plansUpdateWithoutUserInput, plansUncheckedUpdateWithoutUserInput>
    create: XOR<plansCreateWithoutUserInput, plansUncheckedCreateWithoutUserInput>
  }

  export type plansUpdateWithWhereUniqueWithoutUserInput = {
    where: plansWhereUniqueInput
    data: XOR<plansUpdateWithoutUserInput, plansUncheckedUpdateWithoutUserInput>
  }

  export type plansUpdateManyWithWhereWithoutUserInput = {
    where: plansScalarWhereInput
    data: XOR<plansUpdateManyMutationInput, plansUncheckedUpdateManyWithoutUserInput>
  }

  export type plansScalarWhereInput = {
    AND?: plansScalarWhereInput | plansScalarWhereInput[]
    OR?: plansScalarWhereInput[]
    NOT?: plansScalarWhereInput | plansScalarWhereInput[]
    id?: IntFilter<"plans"> | number
    userId?: IntFilter<"plans"> | number
    plan?: StringFilter<"plans"> | string
    createdAt?: DateTimeFilter<"plans"> | Date | string
    updatedAt?: DateTimeFilter<"plans"> | Date | string
  }

  export type salesCreateManyCustomersInput = {
    id?: number
    user_id: number
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type salesUpdateWithoutCustomersInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales_items?: sales_itemsUpdateManyWithoutSalesNestedInput
    user?: usersUpdateOneRequiredWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales_items?: sales_itemsUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateManyWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsCreateManyInventoryInput = {
    id?: number
    user_id: number
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsCreateManyInventoryInput = {
    id?: number
    user_id: number
    purchase_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsCreateManyInventoryInput = {
    id?: number
    user_id: number
    sale_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsUpdateWithoutInventoryInput = {
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutInventory_transactionsNestedInput
  }

  export type inventory_transactionsUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsUpdateWithoutInventoryInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchases?: purchasesUpdateOneWithoutPurchase_itemsNestedInput
    user?: usersUpdateOneRequiredWithoutPurchase_itemsNestedInput
  }

  export type purchase_itemsUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchase_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUpdateWithoutInventoryInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUpdateOneWithoutSales_itemsNestedInput
    user?: usersUpdateOneRequiredWithoutSales_itemsNestedInput
  }

  export type sales_itemsUncheckedUpdateWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sale_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUncheckedUpdateManyWithoutInventoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    sale_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsCreateManyPurchasesInput = {
    id?: number
    user_id: number
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsUpdateWithoutPurchasesInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutPurchase_itemsNestedInput
    user?: usersUpdateOneRequiredWithoutPurchase_itemsNestedInput
  }

  export type purchase_itemsUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsUncheckedUpdateManyWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsCreateManySalesInput = {
    id?: number
    user_id: number
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsUpdateWithoutSalesInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutSales_itemsNestedInput
    user?: usersUpdateOneRequiredWithoutSales_itemsNestedInput
  }

  export type sales_itemsUncheckedUpdateWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUncheckedUpdateManyWithoutSalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryCreateManySuppliersInput = {
    id?: number
    user_id: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchasesCreateManySuppliersInput = {
    id?: number
    user_id: number
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventoryUpdateWithoutSuppliersInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUpdateManyWithoutInventoryNestedInput
    user?: usersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateManyWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchasesUpdateWithoutSuppliersInput = {
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUpdateManyWithoutPurchasesNestedInput
    user?: usersUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateManyWithoutSuppliersInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesCreateManyUsersInput = {
    id?: number
    description?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    date?: Date | string | null
    category?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type customersCreateManyUserInput = {
    id?: number
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type suppliersCreateManyUserInput = {
    id?: number
    name?: string | null
    contact_info?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventoryCreateManyUserInput = {
    id?: number
    name?: string | null
    description?: string | null
    quantity_in_stock?: number | null
    cost_price?: Decimal | DecimalJsLike | number | string | null
    selling_price?: Decimal | DecimalJsLike | number | string | null
    supplier_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchasesCreateManyUserInput = {
    id?: number
    supplier_id?: number | null
    purchase_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type purchase_itemsCreateManyUserInput = {
    id?: number
    purchase_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type inventory_transactionsCreateManyUserInput = {
    id?: number
    inventory_id?: number | null
    transaction_type?: string | null
    quantity_change?: number | null
    date?: Date | string | null
    reference_type?: string | null
    reference_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type salesCreateManyUserInput = {
    id?: number
    customer_id?: number | null
    sale_date?: Date | string | null
    total_amount?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type sales_itemsCreateManyUserInput = {
    id?: number
    sale_id?: number | null
    inventory_id?: number | null
    quantity?: number | null
    unit_price?: Decimal | DecimalJsLike | number | string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type businessCreateManyUserInput = {
    id?: number
    name: string
    products: JsonNullValueInput | InputJsonValue
    location: string
    description: string
    imagePath?: string | null
    socialMedia: JsonNullValueInput | InputJsonValue
    hoursPerDay: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type plansCreateManyUserInput = {
    id?: number
    plan: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type expensesUpdateWithoutUsersInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type expensesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type suppliersUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateManyWithoutSuppliersNestedInput
    purchases?: purchasesUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUncheckedUpdateManyWithoutSuppliersNestedInput
    purchases?: purchasesUncheckedUpdateManyWithoutSuppliersNestedInput
  }

  export type suppliersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_info?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    suppliers?: suppliersUpdateOneWithoutInventoryNestedInput
    inventory_transactions?: inventory_transactionsUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory_transactions?: inventory_transactionsUncheckedUpdateManyWithoutInventoryNestedInput
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutInventoryNestedInput
    sales_items?: sales_itemsUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_in_stock?: NullableIntFieldUpdateOperationsInput | number | null
    cost_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    selling_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchasesUpdateWithoutUserInput = {
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUpdateManyWithoutPurchasesNestedInput
    suppliers?: suppliersUpdateOneWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    purchase_items?: purchase_itemsUncheckedUpdateManyWithoutPurchasesNestedInput
  }

  export type purchasesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    supplier_id?: NullableIntFieldUpdateOperationsInput | number | null
    purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsUpdateWithoutUserInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutPurchase_itemsNestedInput
    purchases?: purchasesUpdateOneWithoutPurchase_itemsNestedInput
  }

  export type purchase_itemsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type purchase_itemsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    purchase_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUpdateWithoutUserInput = {
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutInventory_transactionsNestedInput
  }

  export type inventory_transactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventory_transactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    transaction_type?: NullableStringFieldUpdateOperationsInput | string | null
    quantity_change?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference_type?: NullableStringFieldUpdateOperationsInput | string | null
    reference_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type salesUpdateWithoutUserInput = {
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutSalesNestedInput
    sales_items?: sales_itemsUpdateManyWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales_items?: sales_itemsUncheckedUpdateManyWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    sale_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    total_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUpdateWithoutUserInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inventory?: inventoryUpdateOneWithoutSales_itemsNestedInput
    sales?: salesUpdateOneWithoutSales_itemsNestedInput
  }

  export type sales_itemsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sales_itemsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sale_id?: NullableIntFieldUpdateOperationsInput | number | null
    inventory_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    unit_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type businessUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type businessUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type businessUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: JsonNullValueInput | InputJsonValue
    location?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: JsonNullValueInput | InputJsonValue
    hoursPerDay?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansUpdateWithoutUserInput = {
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type plansUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    plan?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}

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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Guide
 * 
 */
export type Guide = $Result.DefaultSelection<Prisma.$GuidePayload>
/**
 * Model Tour
 * 
 */
export type Tour = $Result.DefaultSelection<Prisma.$TourPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model TourDate
 * 
 */
export type TourDate = $Result.DefaultSelection<Prisma.$TourDatePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model PromoCode
 * 
 */
export type PromoCode = $Result.DefaultSelection<Prisma.$PromoCodePayload>
/**
 * Model TourMaterial
 * 
 */
export type TourMaterial = $Result.DefaultSelection<Prisma.$TourMaterialPayload>
/**
 * Model PhotoDiary
 * 
 */
export type PhotoDiary = $Result.DefaultSelection<Prisma.$PhotoDiaryPayload>
/**
 * Model UserProcessedPhoto
 * 
 */
export type UserProcessedPhoto = $Result.DefaultSelection<Prisma.$UserProcessedPhotoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CLIENT: 'CLIENT',
  GUIDE: 'GUIDE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const DifficultyLevel: {
  BEGINNER: 'BEGINNER',
  EXPERIENCED: 'EXPERIENCED',
  PRO: 'PRO'
};

export type DifficultyLevel = (typeof DifficultyLevel)[keyof typeof DifficultyLevel]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  WAITING_LIST: 'WAITING_LIST'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentMethod: {
  STRIPE: 'STRIPE',
  PAYPAL: 'PAYPAL'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const MaterialType: {
  PDF: 'PDF',
  VIDEO: 'VIDEO',
  ROUTE: 'ROUTE',
  TIPS: 'TIPS'
};

export type MaterialType = (typeof MaterialType)[keyof typeof MaterialType]


export const ProcessingStatus: {
  UPLOADED: 'UPLOADED',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ProcessingStatus = (typeof ProcessingStatus)[keyof typeof ProcessingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type DifficultyLevel = $Enums.DifficultyLevel

export const DifficultyLevel: typeof $Enums.DifficultyLevel

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type MaterialType = $Enums.MaterialType

export const MaterialType: typeof $Enums.MaterialType

export type ProcessingStatus = $Enums.ProcessingStatus

export const ProcessingStatus: typeof $Enums.ProcessingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.guide`: Exposes CRUD operations for the **Guide** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Guides
    * const guides = await prisma.guide.findMany()
    * ```
    */
  get guide(): Prisma.GuideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tour`: Exposes CRUD operations for the **Tour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tours
    * const tours = await prisma.tour.findMany()
    * ```
    */
  get tour(): Prisma.TourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourDate`: Exposes CRUD operations for the **TourDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourDates
    * const tourDates = await prisma.tourDate.findMany()
    * ```
    */
  get tourDate(): Prisma.TourDateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promoCode`: Exposes CRUD operations for the **PromoCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromoCodes
    * const promoCodes = await prisma.promoCode.findMany()
    * ```
    */
  get promoCode(): Prisma.PromoCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tourMaterial`: Exposes CRUD operations for the **TourMaterial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TourMaterials
    * const tourMaterials = await prisma.tourMaterial.findMany()
    * ```
    */
  get tourMaterial(): Prisma.TourMaterialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoDiary`: Exposes CRUD operations for the **PhotoDiary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoDiaries
    * const photoDiaries = await prisma.photoDiary.findMany()
    * ```
    */
  get photoDiary(): Prisma.PhotoDiaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProcessedPhoto`: Exposes CRUD operations for the **UserProcessedPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProcessedPhotos
    * const userProcessedPhotos = await prisma.userProcessedPhoto.findMany()
    * ```
    */
  get userProcessedPhoto(): Prisma.UserProcessedPhotoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    User: 'User',
    Guide: 'Guide',
    Tour: 'Tour',
    Category: 'Category',
    Tag: 'Tag',
    TourDate: 'TourDate',
    Review: 'Review',
    Photo: 'Photo',
    Video: 'Video',
    Booking: 'Booking',
    Payment: 'Payment',
    PromoCode: 'PromoCode',
    TourMaterial: 'TourMaterial',
    PhotoDiary: 'PhotoDiary',
    UserProcessedPhoto: 'UserProcessedPhoto'
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
      modelProps: "user" | "guide" | "tour" | "category" | "tag" | "tourDate" | "review" | "photo" | "video" | "booking" | "payment" | "promoCode" | "tourMaterial" | "photoDiary" | "userProcessedPhoto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Guide: {
        payload: Prisma.$GuidePayload<ExtArgs>
        fields: Prisma.GuideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GuideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GuideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          findFirst: {
            args: Prisma.GuideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GuideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          findMany: {
            args: Prisma.GuideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          create: {
            args: Prisma.GuideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          createMany: {
            args: Prisma.GuideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GuideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          delete: {
            args: Prisma.GuideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          update: {
            args: Prisma.GuideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          deleteMany: {
            args: Prisma.GuideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GuideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GuideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>[]
          }
          upsert: {
            args: Prisma.GuideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GuidePayload>
          }
          aggregate: {
            args: Prisma.GuideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGuide>
          }
          groupBy: {
            args: Prisma.GuideGroupByArgs<ExtArgs>
            result: $Utils.Optional<GuideGroupByOutputType>[]
          }
          count: {
            args: Prisma.GuideCountArgs<ExtArgs>
            result: $Utils.Optional<GuideCountAggregateOutputType> | number
          }
        }
      }
      Tour: {
        payload: Prisma.$TourPayload<ExtArgs>
        fields: Prisma.TourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findFirst: {
            args: Prisma.TourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          findMany: {
            args: Prisma.TourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          create: {
            args: Prisma.TourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          createMany: {
            args: Prisma.TourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          delete: {
            args: Prisma.TourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          update: {
            args: Prisma.TourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          deleteMany: {
            args: Prisma.TourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>[]
          }
          upsert: {
            args: Prisma.TourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourPayload>
          }
          aggregate: {
            args: Prisma.TourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTour>
          }
          groupBy: {
            args: Prisma.TourGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourCountArgs<ExtArgs>
            result: $Utils.Optional<TourCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      TourDate: {
        payload: Prisma.$TourDatePayload<ExtArgs>
        fields: Prisma.TourDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          findFirst: {
            args: Prisma.TourDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          findMany: {
            args: Prisma.TourDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          create: {
            args: Prisma.TourDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          createMany: {
            args: Prisma.TourDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          delete: {
            args: Prisma.TourDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          update: {
            args: Prisma.TourDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          deleteMany: {
            args: Prisma.TourDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>[]
          }
          upsert: {
            args: Prisma.TourDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourDatePayload>
          }
          aggregate: {
            args: Prisma.TourDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourDate>
          }
          groupBy: {
            args: Prisma.TourDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourDateCountArgs<ExtArgs>
            result: $Utils.Optional<TourDateCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      PromoCode: {
        payload: Prisma.$PromoCodePayload<ExtArgs>
        fields: Prisma.PromoCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromoCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromoCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findFirst: {
            args: Prisma.PromoCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromoCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          findMany: {
            args: Prisma.PromoCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          create: {
            args: Prisma.PromoCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          createMany: {
            args: Prisma.PromoCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromoCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          delete: {
            args: Prisma.PromoCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          update: {
            args: Prisma.PromoCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          deleteMany: {
            args: Prisma.PromoCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromoCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromoCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>[]
          }
          upsert: {
            args: Prisma.PromoCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromoCodePayload>
          }
          aggregate: {
            args: Prisma.PromoCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromoCode>
          }
          groupBy: {
            args: Prisma.PromoCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromoCodeCountArgs<ExtArgs>
            result: $Utils.Optional<PromoCodeCountAggregateOutputType> | number
          }
        }
      }
      TourMaterial: {
        payload: Prisma.$TourMaterialPayload<ExtArgs>
        fields: Prisma.TourMaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TourMaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TourMaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>
          }
          findFirst: {
            args: Prisma.TourMaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TourMaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>
          }
          findMany: {
            args: Prisma.TourMaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>[]
          }
          create: {
            args: Prisma.TourMaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>
          }
          createMany: {
            args: Prisma.TourMaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TourMaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>[]
          }
          delete: {
            args: Prisma.TourMaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>
          }
          update: {
            args: Prisma.TourMaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>
          }
          deleteMany: {
            args: Prisma.TourMaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TourMaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TourMaterialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>[]
          }
          upsert: {
            args: Prisma.TourMaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TourMaterialPayload>
          }
          aggregate: {
            args: Prisma.TourMaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTourMaterial>
          }
          groupBy: {
            args: Prisma.TourMaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<TourMaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.TourMaterialCountArgs<ExtArgs>
            result: $Utils.Optional<TourMaterialCountAggregateOutputType> | number
          }
        }
      }
      PhotoDiary: {
        payload: Prisma.$PhotoDiaryPayload<ExtArgs>
        fields: Prisma.PhotoDiaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoDiaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoDiaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>
          }
          findFirst: {
            args: Prisma.PhotoDiaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoDiaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>
          }
          findMany: {
            args: Prisma.PhotoDiaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>[]
          }
          create: {
            args: Prisma.PhotoDiaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>
          }
          createMany: {
            args: Prisma.PhotoDiaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoDiaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>[]
          }
          delete: {
            args: Prisma.PhotoDiaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>
          }
          update: {
            args: Prisma.PhotoDiaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDiaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoDiaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoDiaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>[]
          }
          upsert: {
            args: Prisma.PhotoDiaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDiaryPayload>
          }
          aggregate: {
            args: Prisma.PhotoDiaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoDiary>
          }
          groupBy: {
            args: Prisma.PhotoDiaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoDiaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoDiaryCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoDiaryCountAggregateOutputType> | number
          }
        }
      }
      UserProcessedPhoto: {
        payload: Prisma.$UserProcessedPhotoPayload<ExtArgs>
        fields: Prisma.UserProcessedPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProcessedPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProcessedPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>
          }
          findFirst: {
            args: Prisma.UserProcessedPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProcessedPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>
          }
          findMany: {
            args: Prisma.UserProcessedPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>[]
          }
          create: {
            args: Prisma.UserProcessedPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>
          }
          createMany: {
            args: Prisma.UserProcessedPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProcessedPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>[]
          }
          delete: {
            args: Prisma.UserProcessedPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>
          }
          update: {
            args: Prisma.UserProcessedPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>
          }
          deleteMany: {
            args: Prisma.UserProcessedPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProcessedPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProcessedPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>[]
          }
          upsert: {
            args: Prisma.UserProcessedPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProcessedPhotoPayload>
          }
          aggregate: {
            args: Prisma.UserProcessedPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProcessedPhoto>
          }
          groupBy: {
            args: Prisma.UserProcessedPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProcessedPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProcessedPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<UserProcessedPhotoCountAggregateOutputType> | number
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
    user?: UserOmit
    guide?: GuideOmit
    tour?: TourOmit
    category?: CategoryOmit
    tag?: TagOmit
    tourDate?: TourDateOmit
    review?: ReviewOmit
    photo?: PhotoOmit
    video?: VideoOmit
    booking?: BookingOmit
    payment?: PaymentOmit
    promoCode?: PromoCodeOmit
    tourMaterial?: TourMaterialOmit
    photoDiary?: PhotoDiaryOmit
    userProcessedPhoto?: UserProcessedPhotoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bookings: number
    reviews: number
    photoDiaries: number
    processedPhotos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    photoDiaries?: boolean | UserCountOutputTypeCountPhotoDiariesArgs
    processedPhotos?: boolean | UserCountOutputTypeCountProcessedPhotosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotoDiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoDiaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcessedPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProcessedPhotoWhereInput
  }


  /**
   * Count Type GuideCountOutputType
   */

  export type GuideCountOutputType = {
    tours: number
  }

  export type GuideCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | GuideCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * GuideCountOutputType without action
   */
  export type GuideCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GuideCountOutputType
     */
    select?: GuideCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GuideCountOutputType without action
   */
  export type GuideCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }


  /**
   * Count Type TourCountOutputType
   */

  export type TourCountOutputType = {
    categories: number
    tags: number
    dates: number
    reviews: number
    photos: number
    videos: number
    materials: number
    bookings: number
  }

  export type TourCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | TourCountOutputTypeCountCategoriesArgs
    tags?: boolean | TourCountOutputTypeCountTagsArgs
    dates?: boolean | TourCountOutputTypeCountDatesArgs
    reviews?: boolean | TourCountOutputTypeCountReviewsArgs
    photos?: boolean | TourCountOutputTypeCountPhotosArgs
    videos?: boolean | TourCountOutputTypeCountVideosArgs
    materials?: boolean | TourCountOutputTypeCountMaterialsArgs
    bookings?: boolean | TourCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourCountOutputType
     */
    select?: TourCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountDatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourDateWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountVideosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourMaterialWhereInput
  }

  /**
   * TourCountOutputType without action
   */
  export type TourCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    tours: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | CategoryCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tours: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | TagCountOutputTypeCountToursArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountToursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    profilePicUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: $Enums.Role | null
    profilePicUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    phone: number
    role: number
    profilePicUrl: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    profilePicUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    profilePicUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    profilePicUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone: string | null
    role: $Enums.Role
    profilePicUrl: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePicUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | User$guideArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    photoDiaries?: boolean | User$photoDiariesArgs<ExtArgs>
    processedPhotos?: boolean | User$processedPhotosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePicUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePicUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    profilePicUrl?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "phone" | "role" | "profilePicUrl" | "bio" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | User$guideArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    photoDiaries?: boolean | User$photoDiariesArgs<ExtArgs>
    processedPhotos?: boolean | User$processedPhotosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      guide: Prisma.$GuidePayload<ExtArgs> | null
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      photoDiaries: Prisma.$PhotoDiaryPayload<ExtArgs>[]
      processedPhotos: Prisma.$UserProcessedPhotoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      phone: string | null
      role: $Enums.Role
      profilePicUrl: string | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guide<T extends User$guideArgs<ExtArgs> = {}>(args?: Subset<T, User$guideArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photoDiaries<T extends User$photoDiariesArgs<ExtArgs> = {}>(args?: Subset<T, User$photoDiariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    processedPhotos<T extends User$processedPhotosArgs<ExtArgs> = {}>(args?: Subset<T, User$processedPhotosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profilePicUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.guide
   */
  export type User$guideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    where?: GuideWhereInput
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.photoDiaries
   */
  export type User$photoDiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    where?: PhotoDiaryWhereInput
    orderBy?: PhotoDiaryOrderByWithRelationInput | PhotoDiaryOrderByWithRelationInput[]
    cursor?: PhotoDiaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoDiaryScalarFieldEnum | PhotoDiaryScalarFieldEnum[]
  }

  /**
   * User.processedPhotos
   */
  export type User$processedPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    where?: UserProcessedPhotoWhereInput
    orderBy?: UserProcessedPhotoOrderByWithRelationInput | UserProcessedPhotoOrderByWithRelationInput[]
    cursor?: UserProcessedPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProcessedPhotoScalarFieldEnum | UserProcessedPhotoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Guide
   */

  export type AggregateGuide = {
    _count: GuideCountAggregateOutputType | null
    _avg: GuideAvgAggregateOutputType | null
    _sum: GuideSumAggregateOutputType | null
    _min: GuideMinAggregateOutputType | null
    _max: GuideMaxAggregateOutputType | null
  }

  export type GuideAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GuideSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type GuideMinAggregateOutputType = {
    id: number | null
    userId: number | null
    experience: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    experience: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GuideCountAggregateOutputType = {
    id: number
    userId: number
    experience: number
    specializations: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GuideAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GuideSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type GuideMinAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideMaxAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GuideCountAggregateInputType = {
    id?: true
    userId?: true
    experience?: true
    specializations?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GuideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guide to aggregate.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Guides
    **/
    _count?: true | GuideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GuideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GuideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GuideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GuideMaxAggregateInputType
  }

  export type GetGuideAggregateType<T extends GuideAggregateArgs> = {
        [P in keyof T & keyof AggregateGuide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGuide[P]>
      : GetScalarType<T[P], AggregateGuide[P]>
  }




  export type GuideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GuideWhereInput
    orderBy?: GuideOrderByWithAggregationInput | GuideOrderByWithAggregationInput[]
    by: GuideScalarFieldEnum[] | GuideScalarFieldEnum
    having?: GuideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GuideCountAggregateInputType | true
    _avg?: GuideAvgAggregateInputType
    _sum?: GuideSumAggregateInputType
    _min?: GuideMinAggregateInputType
    _max?: GuideMaxAggregateInputType
  }

  export type GuideGroupByOutputType = {
    id: number
    userId: number
    experience: string | null
    specializations: string[]
    createdAt: Date
    updatedAt: Date
    _count: GuideCountAggregateOutputType | null
    _avg: GuideAvgAggregateOutputType | null
    _sum: GuideSumAggregateOutputType | null
    _min: GuideMinAggregateOutputType | null
    _max: GuideMaxAggregateOutputType | null
  }

  type GetGuideGroupByPayload<T extends GuideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GuideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GuideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GuideGroupByOutputType[P]>
            : GetScalarType<T[P], GuideGroupByOutputType[P]>
        }
      >
    >


  export type GuideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    experience?: boolean
    specializations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tours?: boolean | Guide$toursArgs<ExtArgs>
    _count?: boolean | GuideCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    experience?: boolean
    specializations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    experience?: boolean
    specializations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["guide"]>

  export type GuideSelectScalar = {
    id?: boolean
    userId?: boolean
    experience?: boolean
    specializations?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GuideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "experience" | "specializations" | "createdAt" | "updatedAt", ExtArgs["result"]["guide"]>
  export type GuideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tours?: boolean | Guide$toursArgs<ExtArgs>
    _count?: boolean | GuideCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GuideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GuideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GuidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Guide"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tours: Prisma.$TourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      experience: string | null
      specializations: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["guide"]>
    composites: {}
  }

  type GuideGetPayload<S extends boolean | null | undefined | GuideDefaultArgs> = $Result.GetResult<Prisma.$GuidePayload, S>

  type GuideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GuideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GuideCountAggregateInputType | true
    }

  export interface GuideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Guide'], meta: { name: 'Guide' } }
    /**
     * Find zero or one Guide that matches the filter.
     * @param {GuideFindUniqueArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GuideFindUniqueArgs>(args: SelectSubset<T, GuideFindUniqueArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Guide that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GuideFindUniqueOrThrowArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GuideFindUniqueOrThrowArgs>(args: SelectSubset<T, GuideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guide that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindFirstArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GuideFindFirstArgs>(args?: SelectSubset<T, GuideFindFirstArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Guide that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindFirstOrThrowArgs} args - Arguments to find a Guide
     * @example
     * // Get one Guide
     * const guide = await prisma.guide.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GuideFindFirstOrThrowArgs>(args?: SelectSubset<T, GuideFindFirstOrThrowArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Guides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Guides
     * const guides = await prisma.guide.findMany()
     * 
     * // Get first 10 Guides
     * const guides = await prisma.guide.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const guideWithIdOnly = await prisma.guide.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GuideFindManyArgs>(args?: SelectSubset<T, GuideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Guide.
     * @param {GuideCreateArgs} args - Arguments to create a Guide.
     * @example
     * // Create one Guide
     * const Guide = await prisma.guide.create({
     *   data: {
     *     // ... data to create a Guide
     *   }
     * })
     * 
     */
    create<T extends GuideCreateArgs>(args: SelectSubset<T, GuideCreateArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Guides.
     * @param {GuideCreateManyArgs} args - Arguments to create many Guides.
     * @example
     * // Create many Guides
     * const guide = await prisma.guide.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GuideCreateManyArgs>(args?: SelectSubset<T, GuideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Guides and returns the data saved in the database.
     * @param {GuideCreateManyAndReturnArgs} args - Arguments to create many Guides.
     * @example
     * // Create many Guides
     * const guide = await prisma.guide.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Guides and only return the `id`
     * const guideWithIdOnly = await prisma.guide.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GuideCreateManyAndReturnArgs>(args?: SelectSubset<T, GuideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Guide.
     * @param {GuideDeleteArgs} args - Arguments to delete one Guide.
     * @example
     * // Delete one Guide
     * const Guide = await prisma.guide.delete({
     *   where: {
     *     // ... filter to delete one Guide
     *   }
     * })
     * 
     */
    delete<T extends GuideDeleteArgs>(args: SelectSubset<T, GuideDeleteArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Guide.
     * @param {GuideUpdateArgs} args - Arguments to update one Guide.
     * @example
     * // Update one Guide
     * const guide = await prisma.guide.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GuideUpdateArgs>(args: SelectSubset<T, GuideUpdateArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Guides.
     * @param {GuideDeleteManyArgs} args - Arguments to filter Guides to delete.
     * @example
     * // Delete a few Guides
     * const { count } = await prisma.guide.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GuideDeleteManyArgs>(args?: SelectSubset<T, GuideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Guides
     * const guide = await prisma.guide.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GuideUpdateManyArgs>(args: SelectSubset<T, GuideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Guides and returns the data updated in the database.
     * @param {GuideUpdateManyAndReturnArgs} args - Arguments to update many Guides.
     * @example
     * // Update many Guides
     * const guide = await prisma.guide.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Guides and only return the `id`
     * const guideWithIdOnly = await prisma.guide.updateManyAndReturn({
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
    updateManyAndReturn<T extends GuideUpdateManyAndReturnArgs>(args: SelectSubset<T, GuideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Guide.
     * @param {GuideUpsertArgs} args - Arguments to update or create a Guide.
     * @example
     * // Update or create a Guide
     * const guide = await prisma.guide.upsert({
     *   create: {
     *     // ... data to create a Guide
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Guide we want to update
     *   }
     * })
     */
    upsert<T extends GuideUpsertArgs>(args: SelectSubset<T, GuideUpsertArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Guides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideCountArgs} args - Arguments to filter Guides to count.
     * @example
     * // Count the number of Guides
     * const count = await prisma.guide.count({
     *   where: {
     *     // ... the filter for the Guides we want to count
     *   }
     * })
    **/
    count<T extends GuideCountArgs>(
      args?: Subset<T, GuideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GuideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Guide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GuideAggregateArgs>(args: Subset<T, GuideAggregateArgs>): Prisma.PrismaPromise<GetGuideAggregateType<T>>

    /**
     * Group by Guide.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GuideGroupByArgs} args - Group by arguments.
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
      T extends GuideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GuideGroupByArgs['orderBy'] }
        : { orderBy?: GuideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GuideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGuideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Guide model
   */
  readonly fields: GuideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Guide.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GuideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tours<T extends Guide$toursArgs<ExtArgs> = {}>(args?: Subset<T, Guide$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Guide model
   */
  interface GuideFieldRefs {
    readonly id: FieldRef<"Guide", 'Int'>
    readonly userId: FieldRef<"Guide", 'Int'>
    readonly experience: FieldRef<"Guide", 'String'>
    readonly specializations: FieldRef<"Guide", 'String[]'>
    readonly createdAt: FieldRef<"Guide", 'DateTime'>
    readonly updatedAt: FieldRef<"Guide", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Guide findUnique
   */
  export type GuideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide findUniqueOrThrow
   */
  export type GuideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide findFirst
   */
  export type GuideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide findFirstOrThrow
   */
  export type GuideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guide to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Guides.
     */
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide findMany
   */
  export type GuideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter, which Guides to fetch.
     */
    where?: GuideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Guides to fetch.
     */
    orderBy?: GuideOrderByWithRelationInput | GuideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Guides.
     */
    cursor?: GuideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Guides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Guides.
     */
    skip?: number
    distinct?: GuideScalarFieldEnum | GuideScalarFieldEnum[]
  }

  /**
   * Guide create
   */
  export type GuideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The data needed to create a Guide.
     */
    data: XOR<GuideCreateInput, GuideUncheckedCreateInput>
  }

  /**
   * Guide createMany
   */
  export type GuideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Guides.
     */
    data: GuideCreateManyInput | GuideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Guide createManyAndReturn
   */
  export type GuideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * The data used to create many Guides.
     */
    data: GuideCreateManyInput | GuideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guide update
   */
  export type GuideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The data needed to update a Guide.
     */
    data: XOR<GuideUpdateInput, GuideUncheckedUpdateInput>
    /**
     * Choose, which Guide to update.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide updateMany
   */
  export type GuideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Guides.
     */
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyInput>
    /**
     * Filter which Guides to update
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to update.
     */
    limit?: number
  }

  /**
   * Guide updateManyAndReturn
   */
  export type GuideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * The data used to update Guides.
     */
    data: XOR<GuideUpdateManyMutationInput, GuideUncheckedUpdateManyInput>
    /**
     * Filter which Guides to update
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Guide upsert
   */
  export type GuideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * The filter to search for the Guide to update in case it exists.
     */
    where: GuideWhereUniqueInput
    /**
     * In case the Guide found by the `where` argument doesn't exist, create a new Guide with this data.
     */
    create: XOR<GuideCreateInput, GuideUncheckedCreateInput>
    /**
     * In case the Guide was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GuideUpdateInput, GuideUncheckedUpdateInput>
  }

  /**
   * Guide delete
   */
  export type GuideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
    /**
     * Filter which Guide to delete.
     */
    where: GuideWhereUniqueInput
  }

  /**
   * Guide deleteMany
   */
  export type GuideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Guides to delete
     */
    where?: GuideWhereInput
    /**
     * Limit how many Guides to delete.
     */
    limit?: number
  }

  /**
   * Guide.tours
   */
  export type Guide$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Guide without action
   */
  export type GuideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Guide
     */
    select?: GuideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Guide
     */
    omit?: GuideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GuideInclude<ExtArgs> | null
  }


  /**
   * Model Tour
   */

  export type AggregateTour = {
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  export type TourAvgAggregateOutputType = {
    id: number | null
    price: number | null
    guideId: number | null
  }

  export type TourSumAggregateOutputType = {
    id: number | null
    price: number | null
    guideId: number | null
  }

  export type TourMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    region: string | null
    difficulty: $Enums.DifficultyLevel | null
    price: number | null
    guideId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    region: string | null
    difficulty: $Enums.DifficultyLevel | null
    price: number | null
    guideId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourCountAggregateOutputType = {
    id: number
    title: number
    description: number
    region: number
    difficulty: number
    price: number
    program: number
    guideId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourAvgAggregateInputType = {
    id?: true
    price?: true
    guideId?: true
  }

  export type TourSumAggregateInputType = {
    id?: true
    price?: true
    guideId?: true
  }

  export type TourMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    region?: true
    difficulty?: true
    price?: true
    guideId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    region?: true
    difficulty?: true
    price?: true
    guideId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    region?: true
    difficulty?: true
    price?: true
    program?: true
    guideId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tour to aggregate.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tours
    **/
    _count?: true | TourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaxAggregateInputType
  }

  export type GetTourAggregateType<T extends TourAggregateArgs> = {
        [P in keyof T & keyof AggregateTour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTour[P]>
      : GetScalarType<T[P], AggregateTour[P]>
  }




  export type TourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourWhereInput
    orderBy?: TourOrderByWithAggregationInput | TourOrderByWithAggregationInput[]
    by: TourScalarFieldEnum[] | TourScalarFieldEnum
    having?: TourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourCountAggregateInputType | true
    _avg?: TourAvgAggregateInputType
    _sum?: TourSumAggregateInputType
    _min?: TourMinAggregateInputType
    _max?: TourMaxAggregateInputType
  }

  export type TourGroupByOutputType = {
    id: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonValue
    guideId: number
    createdAt: Date
    updatedAt: Date
    _count: TourCountAggregateOutputType | null
    _avg: TourAvgAggregateOutputType | null
    _sum: TourSumAggregateOutputType | null
    _min: TourMinAggregateOutputType | null
    _max: TourMaxAggregateOutputType | null
  }

  type GetTourGroupByPayload<T extends TourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourGroupByOutputType[P]>
            : GetScalarType<T[P], TourGroupByOutputType[P]>
        }
      >
    >


  export type TourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    region?: boolean
    difficulty?: boolean
    price?: boolean
    program?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | GuideDefaultArgs<ExtArgs>
    categories?: boolean | Tour$categoriesArgs<ExtArgs>
    tags?: boolean | Tour$tagsArgs<ExtArgs>
    dates?: boolean | Tour$datesArgs<ExtArgs>
    reviews?: boolean | Tour$reviewsArgs<ExtArgs>
    photos?: boolean | Tour$photosArgs<ExtArgs>
    videos?: boolean | Tour$videosArgs<ExtArgs>
    materials?: boolean | Tour$materialsArgs<ExtArgs>
    bookings?: boolean | Tour$bookingsArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    region?: boolean
    difficulty?: boolean
    price?: boolean
    program?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    region?: boolean
    difficulty?: boolean
    price?: boolean
    program?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tour"]>

  export type TourSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    region?: boolean
    difficulty?: boolean
    price?: boolean
    program?: boolean
    guideId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "region" | "difficulty" | "price" | "program" | "guideId" | "createdAt" | "updatedAt", ExtArgs["result"]["tour"]>
  export type TourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | GuideDefaultArgs<ExtArgs>
    categories?: boolean | Tour$categoriesArgs<ExtArgs>
    tags?: boolean | Tour$tagsArgs<ExtArgs>
    dates?: boolean | Tour$datesArgs<ExtArgs>
    reviews?: boolean | Tour$reviewsArgs<ExtArgs>
    photos?: boolean | Tour$photosArgs<ExtArgs>
    videos?: boolean | Tour$videosArgs<ExtArgs>
    materials?: boolean | Tour$materialsArgs<ExtArgs>
    bookings?: boolean | Tour$bookingsArgs<ExtArgs>
    _count?: boolean | TourCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TourIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }
  export type TourIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guide?: boolean | GuideDefaultArgs<ExtArgs>
  }

  export type $TourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tour"
    objects: {
      guide: Prisma.$GuidePayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      dates: Prisma.$TourDatePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      photos: Prisma.$PhotoPayload<ExtArgs>[]
      videos: Prisma.$VideoPayload<ExtArgs>[]
      materials: Prisma.$TourMaterialPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      region: string
      difficulty: $Enums.DifficultyLevel
      price: number
      program: Prisma.JsonValue
      guideId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tour"]>
    composites: {}
  }

  type TourGetPayload<S extends boolean | null | undefined | TourDefaultArgs> = $Result.GetResult<Prisma.$TourPayload, S>

  type TourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourCountAggregateInputType | true
    }

  export interface TourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tour'], meta: { name: 'Tour' } }
    /**
     * Find zero or one Tour that matches the filter.
     * @param {TourFindUniqueArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourFindUniqueArgs>(args: SelectSubset<T, TourFindUniqueArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourFindUniqueOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourFindUniqueOrThrowArgs>(args: SelectSubset<T, TourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourFindFirstArgs>(args?: SelectSubset<T, TourFindFirstArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindFirstOrThrowArgs} args - Arguments to find a Tour
     * @example
     * // Get one Tour
     * const tour = await prisma.tour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourFindFirstOrThrowArgs>(args?: SelectSubset<T, TourFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tours
     * const tours = await prisma.tour.findMany()
     * 
     * // Get first 10 Tours
     * const tours = await prisma.tour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourWithIdOnly = await prisma.tour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourFindManyArgs>(args?: SelectSubset<T, TourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tour.
     * @param {TourCreateArgs} args - Arguments to create a Tour.
     * @example
     * // Create one Tour
     * const Tour = await prisma.tour.create({
     *   data: {
     *     // ... data to create a Tour
     *   }
     * })
     * 
     */
    create<T extends TourCreateArgs>(args: SelectSubset<T, TourCreateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tours.
     * @param {TourCreateManyArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourCreateManyArgs>(args?: SelectSubset<T, TourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tours and returns the data saved in the database.
     * @param {TourCreateManyAndReturnArgs} args - Arguments to create many Tours.
     * @example
     * // Create many Tours
     * const tour = await prisma.tour.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourCreateManyAndReturnArgs>(args?: SelectSubset<T, TourCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tour.
     * @param {TourDeleteArgs} args - Arguments to delete one Tour.
     * @example
     * // Delete one Tour
     * const Tour = await prisma.tour.delete({
     *   where: {
     *     // ... filter to delete one Tour
     *   }
     * })
     * 
     */
    delete<T extends TourDeleteArgs>(args: SelectSubset<T, TourDeleteArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tour.
     * @param {TourUpdateArgs} args - Arguments to update one Tour.
     * @example
     * // Update one Tour
     * const tour = await prisma.tour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourUpdateArgs>(args: SelectSubset<T, TourUpdateArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tours.
     * @param {TourDeleteManyArgs} args - Arguments to filter Tours to delete.
     * @example
     * // Delete a few Tours
     * const { count } = await prisma.tour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDeleteManyArgs>(args?: SelectSubset<T, TourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourUpdateManyArgs>(args: SelectSubset<T, TourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tours and returns the data updated in the database.
     * @param {TourUpdateManyAndReturnArgs} args - Arguments to update many Tours.
     * @example
     * // Update many Tours
     * const tour = await prisma.tour.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tours and only return the `id`
     * const tourWithIdOnly = await prisma.tour.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourUpdateManyAndReturnArgs>(args: SelectSubset<T, TourUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tour.
     * @param {TourUpsertArgs} args - Arguments to update or create a Tour.
     * @example
     * // Update or create a Tour
     * const tour = await prisma.tour.upsert({
     *   create: {
     *     // ... data to create a Tour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tour we want to update
     *   }
     * })
     */
    upsert<T extends TourUpsertArgs>(args: SelectSubset<T, TourUpsertArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourCountArgs} args - Arguments to filter Tours to count.
     * @example
     * // Count the number of Tours
     * const count = await prisma.tour.count({
     *   where: {
     *     // ... the filter for the Tours we want to count
     *   }
     * })
    **/
    count<T extends TourCountArgs>(
      args?: Subset<T, TourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourAggregateArgs>(args: Subset<T, TourAggregateArgs>): Prisma.PrismaPromise<GetTourAggregateType<T>>

    /**
     * Group by Tour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourGroupByArgs} args - Group by arguments.
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
      T extends TourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourGroupByArgs['orderBy'] }
        : { orderBy?: TourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tour model
   */
  readonly fields: TourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guide<T extends GuideDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GuideDefaultArgs<ExtArgs>>): Prisma__GuideClient<$Result.GetResult<Prisma.$GuidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Tour$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Tour$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dates<T extends Tour$datesArgs<ExtArgs> = {}>(args?: Subset<T, Tour$datesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Tour$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Tour$photosArgs<ExtArgs> = {}>(args?: Subset<T, Tour$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videos<T extends Tour$videosArgs<ExtArgs> = {}>(args?: Subset<T, Tour$videosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    materials<T extends Tour$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Tour$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Tour$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tour model
   */
  interface TourFieldRefs {
    readonly id: FieldRef<"Tour", 'Int'>
    readonly title: FieldRef<"Tour", 'String'>
    readonly description: FieldRef<"Tour", 'String'>
    readonly region: FieldRef<"Tour", 'String'>
    readonly difficulty: FieldRef<"Tour", 'DifficultyLevel'>
    readonly price: FieldRef<"Tour", 'Float'>
    readonly program: FieldRef<"Tour", 'Json'>
    readonly guideId: FieldRef<"Tour", 'Int'>
    readonly createdAt: FieldRef<"Tour", 'DateTime'>
    readonly updatedAt: FieldRef<"Tour", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tour findUnique
   */
  export type TourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findUniqueOrThrow
   */
  export type TourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour findFirst
   */
  export type TourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findFirstOrThrow
   */
  export type TourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tour to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tours.
     */
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour findMany
   */
  export type TourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter, which Tours to fetch.
     */
    where?: TourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tours to fetch.
     */
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tours.
     */
    cursor?: TourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tours.
     */
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tour create
   */
  export type TourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to create a Tour.
     */
    data: XOR<TourCreateInput, TourUncheckedCreateInput>
  }

  /**
   * Tour createMany
   */
  export type TourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tour createManyAndReturn
   */
  export type TourCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to create many Tours.
     */
    data: TourCreateManyInput | TourCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour update
   */
  export type TourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The data needed to update a Tour.
     */
    data: XOR<TourUpdateInput, TourUncheckedUpdateInput>
    /**
     * Choose, which Tour to update.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour updateMany
   */
  export type TourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
  }

  /**
   * Tour updateManyAndReturn
   */
  export type TourUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * The data used to update Tours.
     */
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyInput>
    /**
     * Filter which Tours to update
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tour upsert
   */
  export type TourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * The filter to search for the Tour to update in case it exists.
     */
    where: TourWhereUniqueInput
    /**
     * In case the Tour found by the `where` argument doesn't exist, create a new Tour with this data.
     */
    create: XOR<TourCreateInput, TourUncheckedCreateInput>
    /**
     * In case the Tour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourUpdateInput, TourUncheckedUpdateInput>
  }

  /**
   * Tour delete
   */
  export type TourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    /**
     * Filter which Tour to delete.
     */
    where: TourWhereUniqueInput
  }

  /**
   * Tour deleteMany
   */
  export type TourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tours to delete
     */
    where?: TourWhereInput
    /**
     * Limit how many Tours to delete.
     */
    limit?: number
  }

  /**
   * Tour.categories
   */
  export type Tour$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Tour.tags
   */
  export type Tour$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tour.dates
   */
  export type Tour$datesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    where?: TourDateWhereInput
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    cursor?: TourDateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * Tour.reviews
   */
  export type Tour$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Tour.photos
   */
  export type Tour$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Tour.videos
   */
  export type Tour$videosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    cursor?: VideoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Tour.materials
   */
  export type Tour$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    where?: TourMaterialWhereInput
    orderBy?: TourMaterialOrderByWithRelationInput | TourMaterialOrderByWithRelationInput[]
    cursor?: TourMaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourMaterialScalarFieldEnum | TourMaterialScalarFieldEnum[]
  }

  /**
   * Tour.bookings
   */
  export type Tour$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Tour without action
   */
  export type TourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tours?: boolean | Category$toursArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | Category$toursArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      tours: Prisma.$TourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends Category$toursArgs<ExtArgs> = {}>(args?: Subset<T, Category$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.tours
   */
  export type Category$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tours?: boolean | Tag$toursArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tours?: boolean | Tag$toursArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      tours: Prisma.$TourPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
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
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tours<T extends Tag$toursArgs<ExtArgs> = {}>(args?: Subset<T, Tag$toursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.tours
   */
  export type Tag$toursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tour
     */
    select?: TourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tour
     */
    omit?: TourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourInclude<ExtArgs> | null
    where?: TourWhereInput
    orderBy?: TourOrderByWithRelationInput | TourOrderByWithRelationInput[]
    cursor?: TourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TourScalarFieldEnum | TourScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model TourDate
   */

  export type AggregateTourDate = {
    _count: TourDateCountAggregateOutputType | null
    _avg: TourDateAvgAggregateOutputType | null
    _sum: TourDateSumAggregateOutputType | null
    _min: TourDateMinAggregateOutputType | null
    _max: TourDateMaxAggregateOutputType | null
  }

  export type TourDateAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type TourDateSumAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type TourDateMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    date: Date | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourDateMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    date: Date | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TourDateCountAggregateOutputType = {
    id: number
    tourId: number
    date: number
    isAvailable: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TourDateAvgAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type TourDateSumAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type TourDateMinAggregateInputType = {
    id?: true
    tourId?: true
    date?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourDateMaxAggregateInputType = {
    id?: true
    tourId?: true
    date?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TourDateCountAggregateInputType = {
    id?: true
    tourId?: true
    date?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TourDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourDate to aggregate.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourDates
    **/
    _count?: true | TourDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourDateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourDateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourDateMaxAggregateInputType
  }

  export type GetTourDateAggregateType<T extends TourDateAggregateArgs> = {
        [P in keyof T & keyof AggregateTourDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourDate[P]>
      : GetScalarType<T[P], AggregateTourDate[P]>
  }




  export type TourDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourDateWhereInput
    orderBy?: TourDateOrderByWithAggregationInput | TourDateOrderByWithAggregationInput[]
    by: TourDateScalarFieldEnum[] | TourDateScalarFieldEnum
    having?: TourDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourDateCountAggregateInputType | true
    _avg?: TourDateAvgAggregateInputType
    _sum?: TourDateSumAggregateInputType
    _min?: TourDateMinAggregateInputType
    _max?: TourDateMaxAggregateInputType
  }

  export type TourDateGroupByOutputType = {
    id: number
    tourId: number
    date: Date
    isAvailable: boolean
    createdAt: Date
    updatedAt: Date
    _count: TourDateCountAggregateOutputType | null
    _avg: TourDateAvgAggregateOutputType | null
    _sum: TourDateSumAggregateOutputType | null
    _min: TourDateMinAggregateOutputType | null
    _max: TourDateMaxAggregateOutputType | null
  }

  type GetTourDateGroupByPayload<T extends TourDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourDateGroupByOutputType[P]>
            : GetScalarType<T[P], TourDateGroupByOutputType[P]>
        }
      >
    >


  export type TourDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    date?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    date?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    date?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourDate"]>

  export type TourDateSelectScalar = {
    id?: boolean
    tourId?: boolean
    date?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TourDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "date" | "isAvailable" | "createdAt" | "updatedAt", ExtArgs["result"]["tourDate"]>
  export type TourDateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourDateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourDateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourDate"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      date: Date
      isAvailable: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tourDate"]>
    composites: {}
  }

  type TourDateGetPayload<S extends boolean | null | undefined | TourDateDefaultArgs> = $Result.GetResult<Prisma.$TourDatePayload, S>

  type TourDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourDateCountAggregateInputType | true
    }

  export interface TourDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourDate'], meta: { name: 'TourDate' } }
    /**
     * Find zero or one TourDate that matches the filter.
     * @param {TourDateFindUniqueArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourDateFindUniqueArgs>(args: SelectSubset<T, TourDateFindUniqueArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourDateFindUniqueOrThrowArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourDateFindUniqueOrThrowArgs>(args: SelectSubset<T, TourDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindFirstArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourDateFindFirstArgs>(args?: SelectSubset<T, TourDateFindFirstArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindFirstOrThrowArgs} args - Arguments to find a TourDate
     * @example
     * // Get one TourDate
     * const tourDate = await prisma.tourDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourDateFindFirstOrThrowArgs>(args?: SelectSubset<T, TourDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourDates
     * const tourDates = await prisma.tourDate.findMany()
     * 
     * // Get first 10 TourDates
     * const tourDates = await prisma.tourDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourDateFindManyArgs>(args?: SelectSubset<T, TourDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourDate.
     * @param {TourDateCreateArgs} args - Arguments to create a TourDate.
     * @example
     * // Create one TourDate
     * const TourDate = await prisma.tourDate.create({
     *   data: {
     *     // ... data to create a TourDate
     *   }
     * })
     * 
     */
    create<T extends TourDateCreateArgs>(args: SelectSubset<T, TourDateCreateArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourDates.
     * @param {TourDateCreateManyArgs} args - Arguments to create many TourDates.
     * @example
     * // Create many TourDates
     * const tourDate = await prisma.tourDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourDateCreateManyArgs>(args?: SelectSubset<T, TourDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourDates and returns the data saved in the database.
     * @param {TourDateCreateManyAndReturnArgs} args - Arguments to create many TourDates.
     * @example
     * // Create many TourDates
     * const tourDate = await prisma.tourDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourDates and only return the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourDateCreateManyAndReturnArgs>(args?: SelectSubset<T, TourDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourDate.
     * @param {TourDateDeleteArgs} args - Arguments to delete one TourDate.
     * @example
     * // Delete one TourDate
     * const TourDate = await prisma.tourDate.delete({
     *   where: {
     *     // ... filter to delete one TourDate
     *   }
     * })
     * 
     */
    delete<T extends TourDateDeleteArgs>(args: SelectSubset<T, TourDateDeleteArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourDate.
     * @param {TourDateUpdateArgs} args - Arguments to update one TourDate.
     * @example
     * // Update one TourDate
     * const tourDate = await prisma.tourDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourDateUpdateArgs>(args: SelectSubset<T, TourDateUpdateArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourDates.
     * @param {TourDateDeleteManyArgs} args - Arguments to filter TourDates to delete.
     * @example
     * // Delete a few TourDates
     * const { count } = await prisma.tourDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourDateDeleteManyArgs>(args?: SelectSubset<T, TourDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourDates
     * const tourDate = await prisma.tourDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourDateUpdateManyArgs>(args: SelectSubset<T, TourDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourDates and returns the data updated in the database.
     * @param {TourDateUpdateManyAndReturnArgs} args - Arguments to update many TourDates.
     * @example
     * // Update many TourDates
     * const tourDate = await prisma.tourDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourDates and only return the `id`
     * const tourDateWithIdOnly = await prisma.tourDate.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourDateUpdateManyAndReturnArgs>(args: SelectSubset<T, TourDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourDate.
     * @param {TourDateUpsertArgs} args - Arguments to update or create a TourDate.
     * @example
     * // Update or create a TourDate
     * const tourDate = await prisma.tourDate.upsert({
     *   create: {
     *     // ... data to create a TourDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourDate we want to update
     *   }
     * })
     */
    upsert<T extends TourDateUpsertArgs>(args: SelectSubset<T, TourDateUpsertArgs<ExtArgs>>): Prisma__TourDateClient<$Result.GetResult<Prisma.$TourDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateCountArgs} args - Arguments to filter TourDates to count.
     * @example
     * // Count the number of TourDates
     * const count = await prisma.tourDate.count({
     *   where: {
     *     // ... the filter for the TourDates we want to count
     *   }
     * })
    **/
    count<T extends TourDateCountArgs>(
      args?: Subset<T, TourDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourDateAggregateArgs>(args: Subset<T, TourDateAggregateArgs>): Prisma.PrismaPromise<GetTourDateAggregateType<T>>

    /**
     * Group by TourDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourDateGroupByArgs} args - Group by arguments.
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
      T extends TourDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourDateGroupByArgs['orderBy'] }
        : { orderBy?: TourDateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourDate model
   */
  readonly fields: TourDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TourDate model
   */
  interface TourDateFieldRefs {
    readonly id: FieldRef<"TourDate", 'Int'>
    readonly tourId: FieldRef<"TourDate", 'Int'>
    readonly date: FieldRef<"TourDate", 'DateTime'>
    readonly isAvailable: FieldRef<"TourDate", 'Boolean'>
    readonly createdAt: FieldRef<"TourDate", 'DateTime'>
    readonly updatedAt: FieldRef<"TourDate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourDate findUnique
   */
  export type TourDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate findUniqueOrThrow
   */
  export type TourDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate findFirst
   */
  export type TourDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourDates.
     */
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate findFirstOrThrow
   */
  export type TourDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDate to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourDates.
     */
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate findMany
   */
  export type TourDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter, which TourDates to fetch.
     */
    where?: TourDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourDates to fetch.
     */
    orderBy?: TourDateOrderByWithRelationInput | TourDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourDates.
     */
    cursor?: TourDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourDates.
     */
    skip?: number
    distinct?: TourDateScalarFieldEnum | TourDateScalarFieldEnum[]
  }

  /**
   * TourDate create
   */
  export type TourDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * The data needed to create a TourDate.
     */
    data: XOR<TourDateCreateInput, TourDateUncheckedCreateInput>
  }

  /**
   * TourDate createMany
   */
  export type TourDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourDates.
     */
    data: TourDateCreateManyInput | TourDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourDate createManyAndReturn
   */
  export type TourDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data used to create many TourDates.
     */
    data: TourDateCreateManyInput | TourDateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourDate update
   */
  export type TourDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * The data needed to update a TourDate.
     */
    data: XOR<TourDateUpdateInput, TourDateUncheckedUpdateInput>
    /**
     * Choose, which TourDate to update.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate updateMany
   */
  export type TourDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourDates.
     */
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyInput>
    /**
     * Filter which TourDates to update
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to update.
     */
    limit?: number
  }

  /**
   * TourDate updateManyAndReturn
   */
  export type TourDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * The data used to update TourDates.
     */
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyInput>
    /**
     * Filter which TourDates to update
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourDate upsert
   */
  export type TourDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * The filter to search for the TourDate to update in case it exists.
     */
    where: TourDateWhereUniqueInput
    /**
     * In case the TourDate found by the `where` argument doesn't exist, create a new TourDate with this data.
     */
    create: XOR<TourDateCreateInput, TourDateUncheckedCreateInput>
    /**
     * In case the TourDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourDateUpdateInput, TourDateUncheckedUpdateInput>
  }

  /**
   * TourDate delete
   */
  export type TourDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
    /**
     * Filter which TourDate to delete.
     */
    where: TourDateWhereUniqueInput
  }

  /**
   * TourDate deleteMany
   */
  export type TourDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourDates to delete
     */
    where?: TourDateWhereInput
    /**
     * Limit how many TourDates to delete.
     */
    limit?: number
  }

  /**
   * TourDate without action
   */
  export type TourDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourDate
     */
    select?: TourDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourDate
     */
    omit?: TourDateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourDateInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    tourId: number
    userId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    tourId: number
    userId: number
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    tourId?: boolean
    userId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "userId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      userId: number
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly tourId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type PhotoSumAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    tourId: number
    url: number
    description: number
    createdAt: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type PhotoSumAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    tourId?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    tourId?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    tourId?: true
    url?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: number
    tourId: number
    url: string
    description: string | null
    createdAt: Date
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "url" | "description" | "createdAt", ExtArgs["result"]["photo"]>
  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      url: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
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
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'Int'>
    readonly tourId: FieldRef<"Photo", 'Int'>
    readonly url: FieldRef<"Photo", 'String'>
    readonly description: FieldRef<"Photo", 'String'>
    readonly createdAt: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type VideoSumAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    tourId: number
    url: number
    description: number
    createdAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type VideoSumAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    tourId?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    tourId?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    tourId?: true
    url?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: number
    tourId: number
    url: string
    description: string | null
    createdAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    tourId?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "url" | "description" | "createdAt", ExtArgs["result"]["video"]>
  export type VideoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type VideoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type VideoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      url: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
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
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'Int'>
    readonly tourId: FieldRef<"Video", 'Int'>
    readonly url: FieldRef<"Video", 'String'>
    readonly description: FieldRef<"Video", 'String'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    participants: number | null
    totalPrice: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    participants: number | null
    totalPrice: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    status: $Enums.BookingStatus | null
    participants: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    userId: number | null
    status: $Enums.BookingStatus | null
    participants: number | null
    totalPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    tourId: number
    userId: number
    status: number
    participants: number
    totalPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    participants?: true
    totalPrice?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    participants?: true
    totalPrice?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    status?: true
    participants?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    status?: true
    participants?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    tourId?: true
    userId?: true
    status?: true
    participants?: true
    totalPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    tourId: number
    userId: number
    status: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    userId?: boolean
    status?: boolean
    participants?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    userId?: boolean
    status?: boolean
    participants?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    userId?: boolean
    status?: boolean
    participants?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    tourId?: boolean
    userId?: boolean
    status?: boolean
    participants?: boolean
    totalPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "userId" | "status" | "participants" | "totalPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Booking$paymentsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      userId: number
      status: $Enums.BookingStatus
      participants: number
      totalPrice: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Booking$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly tourId: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly participants: FieldRef<"Booking", 'Int'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.payments
   */
  export type Booking$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    amount: number | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    amount: number | null
    paymentMethod: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    paymentMethod: number
    status: number
    transactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    bookingId: number
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    transactionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "amount" | "paymentMethod" | "status" | "transactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      amount: number
      paymentMethod: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      transactionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly bookingId: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentMethod: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PromoCode
   */

  export type AggregatePromoCode = {
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  export type PromoCodeAvgAggregateOutputType = {
    id: number | null
    discount: number | null
  }

  export type PromoCodeSumAggregateOutputType = {
    id: number | null
    discount: number | null
  }

  export type PromoCodeMinAggregateOutputType = {
    id: number | null
    code: string | null
    discount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PromoCodeMaxAggregateOutputType = {
    id: number | null
    code: string | null
    discount: number | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PromoCodeCountAggregateOutputType = {
    id: number
    code: number
    discount: number
    expiresAt: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type PromoCodeAvgAggregateInputType = {
    id?: true
    discount?: true
  }

  export type PromoCodeSumAggregateInputType = {
    id?: true
    discount?: true
  }

  export type PromoCodeMinAggregateInputType = {
    id?: true
    code?: true
    discount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
  }

  export type PromoCodeMaxAggregateInputType = {
    id?: true
    code?: true
    discount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
  }

  export type PromoCodeCountAggregateInputType = {
    id?: true
    code?: true
    discount?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type PromoCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCode to aggregate.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromoCodes
    **/
    _count?: true | PromoCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromoCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromoCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromoCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromoCodeMaxAggregateInputType
  }

  export type GetPromoCodeAggregateType<T extends PromoCodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePromoCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromoCode[P]>
      : GetScalarType<T[P], AggregatePromoCode[P]>
  }




  export type PromoCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromoCodeWhereInput
    orderBy?: PromoCodeOrderByWithAggregationInput | PromoCodeOrderByWithAggregationInput[]
    by: PromoCodeScalarFieldEnum[] | PromoCodeScalarFieldEnum
    having?: PromoCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromoCodeCountAggregateInputType | true
    _avg?: PromoCodeAvgAggregateInputType
    _sum?: PromoCodeSumAggregateInputType
    _min?: PromoCodeMinAggregateInputType
    _max?: PromoCodeMaxAggregateInputType
  }

  export type PromoCodeGroupByOutputType = {
    id: number
    code: string
    discount: number
    expiresAt: Date
    isActive: boolean
    createdAt: Date
    _count: PromoCodeCountAggregateOutputType | null
    _avg: PromoCodeAvgAggregateOutputType | null
    _sum: PromoCodeSumAggregateOutputType | null
    _min: PromoCodeMinAggregateOutputType | null
    _max: PromoCodeMaxAggregateOutputType | null
  }

  type GetPromoCodeGroupByPayload<T extends PromoCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromoCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromoCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
            : GetScalarType<T[P], PromoCodeGroupByOutputType[P]>
        }
      >
    >


  export type PromoCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["promoCode"]>

  export type PromoCodeSelectScalar = {
    id?: boolean
    code?: boolean
    discount?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type PromoCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "discount" | "expiresAt" | "isActive" | "createdAt", ExtArgs["result"]["promoCode"]>

  export type $PromoCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromoCode"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      discount: number
      expiresAt: Date
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["promoCode"]>
    composites: {}
  }

  type PromoCodeGetPayload<S extends boolean | null | undefined | PromoCodeDefaultArgs> = $Result.GetResult<Prisma.$PromoCodePayload, S>

  type PromoCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromoCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromoCodeCountAggregateInputType | true
    }

  export interface PromoCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromoCode'], meta: { name: 'PromoCode' } }
    /**
     * Find zero or one PromoCode that matches the filter.
     * @param {PromoCodeFindUniqueArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromoCodeFindUniqueArgs>(args: SelectSubset<T, PromoCodeFindUniqueArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromoCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromoCodeFindUniqueOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromoCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, PromoCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromoCodeFindFirstArgs>(args?: SelectSubset<T, PromoCodeFindFirstArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromoCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindFirstOrThrowArgs} args - Arguments to find a PromoCode
     * @example
     * // Get one PromoCode
     * const promoCode = await prisma.promoCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromoCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, PromoCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromoCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromoCodes
     * const promoCodes = await prisma.promoCode.findMany()
     * 
     * // Get first 10 PromoCodes
     * const promoCodes = await prisma.promoCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromoCodeFindManyArgs>(args?: SelectSubset<T, PromoCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromoCode.
     * @param {PromoCodeCreateArgs} args - Arguments to create a PromoCode.
     * @example
     * // Create one PromoCode
     * const PromoCode = await prisma.promoCode.create({
     *   data: {
     *     // ... data to create a PromoCode
     *   }
     * })
     * 
     */
    create<T extends PromoCodeCreateArgs>(args: SelectSubset<T, PromoCodeCreateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromoCodes.
     * @param {PromoCodeCreateManyArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromoCodeCreateManyArgs>(args?: SelectSubset<T, PromoCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromoCodes and returns the data saved in the database.
     * @param {PromoCodeCreateManyAndReturnArgs} args - Arguments to create many PromoCodes.
     * @example
     * // Create many PromoCodes
     * const promoCode = await prisma.promoCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromoCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, PromoCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromoCode.
     * @param {PromoCodeDeleteArgs} args - Arguments to delete one PromoCode.
     * @example
     * // Delete one PromoCode
     * const PromoCode = await prisma.promoCode.delete({
     *   where: {
     *     // ... filter to delete one PromoCode
     *   }
     * })
     * 
     */
    delete<T extends PromoCodeDeleteArgs>(args: SelectSubset<T, PromoCodeDeleteArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromoCode.
     * @param {PromoCodeUpdateArgs} args - Arguments to update one PromoCode.
     * @example
     * // Update one PromoCode
     * const promoCode = await prisma.promoCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromoCodeUpdateArgs>(args: SelectSubset<T, PromoCodeUpdateArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromoCodes.
     * @param {PromoCodeDeleteManyArgs} args - Arguments to filter PromoCodes to delete.
     * @example
     * // Delete a few PromoCodes
     * const { count } = await prisma.promoCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromoCodeDeleteManyArgs>(args?: SelectSubset<T, PromoCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromoCodeUpdateManyArgs>(args: SelectSubset<T, PromoCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromoCodes and returns the data updated in the database.
     * @param {PromoCodeUpdateManyAndReturnArgs} args - Arguments to update many PromoCodes.
     * @example
     * // Update many PromoCodes
     * const promoCode = await prisma.promoCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromoCodes and only return the `id`
     * const promoCodeWithIdOnly = await prisma.promoCode.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromoCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, PromoCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromoCode.
     * @param {PromoCodeUpsertArgs} args - Arguments to update or create a PromoCode.
     * @example
     * // Update or create a PromoCode
     * const promoCode = await prisma.promoCode.upsert({
     *   create: {
     *     // ... data to create a PromoCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromoCode we want to update
     *   }
     * })
     */
    upsert<T extends PromoCodeUpsertArgs>(args: SelectSubset<T, PromoCodeUpsertArgs<ExtArgs>>): Prisma__PromoCodeClient<$Result.GetResult<Prisma.$PromoCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromoCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeCountArgs} args - Arguments to filter PromoCodes to count.
     * @example
     * // Count the number of PromoCodes
     * const count = await prisma.promoCode.count({
     *   where: {
     *     // ... the filter for the PromoCodes we want to count
     *   }
     * })
    **/
    count<T extends PromoCodeCountArgs>(
      args?: Subset<T, PromoCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromoCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromoCodeAggregateArgs>(args: Subset<T, PromoCodeAggregateArgs>): Prisma.PrismaPromise<GetPromoCodeAggregateType<T>>

    /**
     * Group by PromoCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromoCodeGroupByArgs} args - Group by arguments.
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
      T extends PromoCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromoCodeGroupByArgs['orderBy'] }
        : { orderBy?: PromoCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromoCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromoCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromoCode model
   */
  readonly fields: PromoCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromoCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromoCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PromoCode model
   */
  interface PromoCodeFieldRefs {
    readonly id: FieldRef<"PromoCode", 'Int'>
    readonly code: FieldRef<"PromoCode", 'String'>
    readonly discount: FieldRef<"PromoCode", 'Float'>
    readonly expiresAt: FieldRef<"PromoCode", 'DateTime'>
    readonly isActive: FieldRef<"PromoCode", 'Boolean'>
    readonly createdAt: FieldRef<"PromoCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromoCode findUnique
   */
  export type PromoCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findUniqueOrThrow
   */
  export type PromoCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode findFirst
   */
  export type PromoCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findFirstOrThrow
   */
  export type PromoCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCode to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromoCodes.
     */
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode findMany
   */
  export type PromoCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter, which PromoCodes to fetch.
     */
    where?: PromoCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromoCodes to fetch.
     */
    orderBy?: PromoCodeOrderByWithRelationInput | PromoCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromoCodes.
     */
    cursor?: PromoCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromoCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromoCodes.
     */
    skip?: number
    distinct?: PromoCodeScalarFieldEnum | PromoCodeScalarFieldEnum[]
  }

  /**
   * PromoCode create
   */
  export type PromoCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data needed to create a PromoCode.
     */
    data: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
  }

  /**
   * PromoCode createMany
   */
  export type PromoCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromoCode createManyAndReturn
   */
  export type PromoCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to create many PromoCodes.
     */
    data: PromoCodeCreateManyInput | PromoCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromoCode update
   */
  export type PromoCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data needed to update a PromoCode.
     */
    data: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
    /**
     * Choose, which PromoCode to update.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode updateMany
   */
  export type PromoCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode updateManyAndReturn
   */
  export type PromoCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The data used to update PromoCodes.
     */
    data: XOR<PromoCodeUpdateManyMutationInput, PromoCodeUncheckedUpdateManyInput>
    /**
     * Filter which PromoCodes to update
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to update.
     */
    limit?: number
  }

  /**
   * PromoCode upsert
   */
  export type PromoCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * The filter to search for the PromoCode to update in case it exists.
     */
    where: PromoCodeWhereUniqueInput
    /**
     * In case the PromoCode found by the `where` argument doesn't exist, create a new PromoCode with this data.
     */
    create: XOR<PromoCodeCreateInput, PromoCodeUncheckedCreateInput>
    /**
     * In case the PromoCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromoCodeUpdateInput, PromoCodeUncheckedUpdateInput>
  }

  /**
   * PromoCode delete
   */
  export type PromoCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
    /**
     * Filter which PromoCode to delete.
     */
    where: PromoCodeWhereUniqueInput
  }

  /**
   * PromoCode deleteMany
   */
  export type PromoCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromoCodes to delete
     */
    where?: PromoCodeWhereInput
    /**
     * Limit how many PromoCodes to delete.
     */
    limit?: number
  }

  /**
   * PromoCode without action
   */
  export type PromoCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromoCode
     */
    select?: PromoCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromoCode
     */
    omit?: PromoCodeOmit<ExtArgs> | null
  }


  /**
   * Model TourMaterial
   */

  export type AggregateTourMaterial = {
    _count: TourMaterialCountAggregateOutputType | null
    _avg: TourMaterialAvgAggregateOutputType | null
    _sum: TourMaterialSumAggregateOutputType | null
    _min: TourMaterialMinAggregateOutputType | null
    _max: TourMaterialMaxAggregateOutputType | null
  }

  export type TourMaterialAvgAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type TourMaterialSumAggregateOutputType = {
    id: number | null
    tourId: number | null
  }

  export type TourMaterialMinAggregateOutputType = {
    id: number | null
    tourId: number | null
    title: string | null
    url: string | null
    type: $Enums.MaterialType | null
    createdAt: Date | null
  }

  export type TourMaterialMaxAggregateOutputType = {
    id: number | null
    tourId: number | null
    title: string | null
    url: string | null
    type: $Enums.MaterialType | null
    createdAt: Date | null
  }

  export type TourMaterialCountAggregateOutputType = {
    id: number
    tourId: number
    title: number
    url: number
    type: number
    createdAt: number
    _all: number
  }


  export type TourMaterialAvgAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type TourMaterialSumAggregateInputType = {
    id?: true
    tourId?: true
  }

  export type TourMaterialMinAggregateInputType = {
    id?: true
    tourId?: true
    title?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type TourMaterialMaxAggregateInputType = {
    id?: true
    tourId?: true
    title?: true
    url?: true
    type?: true
    createdAt?: true
  }

  export type TourMaterialCountAggregateInputType = {
    id?: true
    tourId?: true
    title?: true
    url?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type TourMaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourMaterial to aggregate.
     */
    where?: TourMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourMaterials to fetch.
     */
    orderBy?: TourMaterialOrderByWithRelationInput | TourMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TourMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TourMaterials
    **/
    _count?: true | TourMaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TourMaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TourMaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TourMaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TourMaterialMaxAggregateInputType
  }

  export type GetTourMaterialAggregateType<T extends TourMaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateTourMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTourMaterial[P]>
      : GetScalarType<T[P], AggregateTourMaterial[P]>
  }




  export type TourMaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TourMaterialWhereInput
    orderBy?: TourMaterialOrderByWithAggregationInput | TourMaterialOrderByWithAggregationInput[]
    by: TourMaterialScalarFieldEnum[] | TourMaterialScalarFieldEnum
    having?: TourMaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TourMaterialCountAggregateInputType | true
    _avg?: TourMaterialAvgAggregateInputType
    _sum?: TourMaterialSumAggregateInputType
    _min?: TourMaterialMinAggregateInputType
    _max?: TourMaterialMaxAggregateInputType
  }

  export type TourMaterialGroupByOutputType = {
    id: number
    tourId: number
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt: Date
    _count: TourMaterialCountAggregateOutputType | null
    _avg: TourMaterialAvgAggregateOutputType | null
    _sum: TourMaterialSumAggregateOutputType | null
    _min: TourMaterialMinAggregateOutputType | null
    _max: TourMaterialMaxAggregateOutputType | null
  }

  type GetTourMaterialGroupByPayload<T extends TourMaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TourMaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TourMaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TourMaterialGroupByOutputType[P]>
            : GetScalarType<T[P], TourMaterialGroupByOutputType[P]>
        }
      >
    >


  export type TourMaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    title?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourMaterial"]>

  export type TourMaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    title?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourMaterial"]>

  export type TourMaterialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tourId?: boolean
    title?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tourMaterial"]>

  export type TourMaterialSelectScalar = {
    id?: boolean
    tourId?: boolean
    title?: boolean
    url?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type TourMaterialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tourId" | "title" | "url" | "type" | "createdAt", ExtArgs["result"]["tourMaterial"]>
  export type TourMaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourMaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }
  export type TourMaterialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tour?: boolean | TourDefaultArgs<ExtArgs>
  }

  export type $TourMaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TourMaterial"
    objects: {
      tour: Prisma.$TourPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tourId: number
      title: string
      url: string
      type: $Enums.MaterialType
      createdAt: Date
    }, ExtArgs["result"]["tourMaterial"]>
    composites: {}
  }

  type TourMaterialGetPayload<S extends boolean | null | undefined | TourMaterialDefaultArgs> = $Result.GetResult<Prisma.$TourMaterialPayload, S>

  type TourMaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TourMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TourMaterialCountAggregateInputType | true
    }

  export interface TourMaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TourMaterial'], meta: { name: 'TourMaterial' } }
    /**
     * Find zero or one TourMaterial that matches the filter.
     * @param {TourMaterialFindUniqueArgs} args - Arguments to find a TourMaterial
     * @example
     * // Get one TourMaterial
     * const tourMaterial = await prisma.tourMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TourMaterialFindUniqueArgs>(args: SelectSubset<T, TourMaterialFindUniqueArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TourMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TourMaterialFindUniqueOrThrowArgs} args - Arguments to find a TourMaterial
     * @example
     * // Get one TourMaterial
     * const tourMaterial = await prisma.tourMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TourMaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, TourMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialFindFirstArgs} args - Arguments to find a TourMaterial
     * @example
     * // Get one TourMaterial
     * const tourMaterial = await prisma.tourMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TourMaterialFindFirstArgs>(args?: SelectSubset<T, TourMaterialFindFirstArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TourMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialFindFirstOrThrowArgs} args - Arguments to find a TourMaterial
     * @example
     * // Get one TourMaterial
     * const tourMaterial = await prisma.tourMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TourMaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, TourMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TourMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TourMaterials
     * const tourMaterials = await prisma.tourMaterial.findMany()
     * 
     * // Get first 10 TourMaterials
     * const tourMaterials = await prisma.tourMaterial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tourMaterialWithIdOnly = await prisma.tourMaterial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TourMaterialFindManyArgs>(args?: SelectSubset<T, TourMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TourMaterial.
     * @param {TourMaterialCreateArgs} args - Arguments to create a TourMaterial.
     * @example
     * // Create one TourMaterial
     * const TourMaterial = await prisma.tourMaterial.create({
     *   data: {
     *     // ... data to create a TourMaterial
     *   }
     * })
     * 
     */
    create<T extends TourMaterialCreateArgs>(args: SelectSubset<T, TourMaterialCreateArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TourMaterials.
     * @param {TourMaterialCreateManyArgs} args - Arguments to create many TourMaterials.
     * @example
     * // Create many TourMaterials
     * const tourMaterial = await prisma.tourMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TourMaterialCreateManyArgs>(args?: SelectSubset<T, TourMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TourMaterials and returns the data saved in the database.
     * @param {TourMaterialCreateManyAndReturnArgs} args - Arguments to create many TourMaterials.
     * @example
     * // Create many TourMaterials
     * const tourMaterial = await prisma.tourMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TourMaterials and only return the `id`
     * const tourMaterialWithIdOnly = await prisma.tourMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TourMaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, TourMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TourMaterial.
     * @param {TourMaterialDeleteArgs} args - Arguments to delete one TourMaterial.
     * @example
     * // Delete one TourMaterial
     * const TourMaterial = await prisma.tourMaterial.delete({
     *   where: {
     *     // ... filter to delete one TourMaterial
     *   }
     * })
     * 
     */
    delete<T extends TourMaterialDeleteArgs>(args: SelectSubset<T, TourMaterialDeleteArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TourMaterial.
     * @param {TourMaterialUpdateArgs} args - Arguments to update one TourMaterial.
     * @example
     * // Update one TourMaterial
     * const tourMaterial = await prisma.tourMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TourMaterialUpdateArgs>(args: SelectSubset<T, TourMaterialUpdateArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TourMaterials.
     * @param {TourMaterialDeleteManyArgs} args - Arguments to filter TourMaterials to delete.
     * @example
     * // Delete a few TourMaterials
     * const { count } = await prisma.tourMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TourMaterialDeleteManyArgs>(args?: SelectSubset<T, TourMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TourMaterials
     * const tourMaterial = await prisma.tourMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TourMaterialUpdateManyArgs>(args: SelectSubset<T, TourMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TourMaterials and returns the data updated in the database.
     * @param {TourMaterialUpdateManyAndReturnArgs} args - Arguments to update many TourMaterials.
     * @example
     * // Update many TourMaterials
     * const tourMaterial = await prisma.tourMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TourMaterials and only return the `id`
     * const tourMaterialWithIdOnly = await prisma.tourMaterial.updateManyAndReturn({
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
    updateManyAndReturn<T extends TourMaterialUpdateManyAndReturnArgs>(args: SelectSubset<T, TourMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TourMaterial.
     * @param {TourMaterialUpsertArgs} args - Arguments to update or create a TourMaterial.
     * @example
     * // Update or create a TourMaterial
     * const tourMaterial = await prisma.tourMaterial.upsert({
     *   create: {
     *     // ... data to create a TourMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TourMaterial we want to update
     *   }
     * })
     */
    upsert<T extends TourMaterialUpsertArgs>(args: SelectSubset<T, TourMaterialUpsertArgs<ExtArgs>>): Prisma__TourMaterialClient<$Result.GetResult<Prisma.$TourMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TourMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialCountArgs} args - Arguments to filter TourMaterials to count.
     * @example
     * // Count the number of TourMaterials
     * const count = await prisma.tourMaterial.count({
     *   where: {
     *     // ... the filter for the TourMaterials we want to count
     *   }
     * })
    **/
    count<T extends TourMaterialCountArgs>(
      args?: Subset<T, TourMaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TourMaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TourMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TourMaterialAggregateArgs>(args: Subset<T, TourMaterialAggregateArgs>): Prisma.PrismaPromise<GetTourMaterialAggregateType<T>>

    /**
     * Group by TourMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TourMaterialGroupByArgs} args - Group by arguments.
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
      T extends TourMaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TourMaterialGroupByArgs['orderBy'] }
        : { orderBy?: TourMaterialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TourMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTourMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TourMaterial model
   */
  readonly fields: TourMaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TourMaterial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TourMaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tour<T extends TourDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TourDefaultArgs<ExtArgs>>): Prisma__TourClient<$Result.GetResult<Prisma.$TourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TourMaterial model
   */
  interface TourMaterialFieldRefs {
    readonly id: FieldRef<"TourMaterial", 'Int'>
    readonly tourId: FieldRef<"TourMaterial", 'Int'>
    readonly title: FieldRef<"TourMaterial", 'String'>
    readonly url: FieldRef<"TourMaterial", 'String'>
    readonly type: FieldRef<"TourMaterial", 'MaterialType'>
    readonly createdAt: FieldRef<"TourMaterial", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TourMaterial findUnique
   */
  export type TourMaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * Filter, which TourMaterial to fetch.
     */
    where: TourMaterialWhereUniqueInput
  }

  /**
   * TourMaterial findUniqueOrThrow
   */
  export type TourMaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * Filter, which TourMaterial to fetch.
     */
    where: TourMaterialWhereUniqueInput
  }

  /**
   * TourMaterial findFirst
   */
  export type TourMaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * Filter, which TourMaterial to fetch.
     */
    where?: TourMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourMaterials to fetch.
     */
    orderBy?: TourMaterialOrderByWithRelationInput | TourMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourMaterials.
     */
    cursor?: TourMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourMaterials.
     */
    distinct?: TourMaterialScalarFieldEnum | TourMaterialScalarFieldEnum[]
  }

  /**
   * TourMaterial findFirstOrThrow
   */
  export type TourMaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * Filter, which TourMaterial to fetch.
     */
    where?: TourMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourMaterials to fetch.
     */
    orderBy?: TourMaterialOrderByWithRelationInput | TourMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TourMaterials.
     */
    cursor?: TourMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourMaterials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TourMaterials.
     */
    distinct?: TourMaterialScalarFieldEnum | TourMaterialScalarFieldEnum[]
  }

  /**
   * TourMaterial findMany
   */
  export type TourMaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * Filter, which TourMaterials to fetch.
     */
    where?: TourMaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TourMaterials to fetch.
     */
    orderBy?: TourMaterialOrderByWithRelationInput | TourMaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TourMaterials.
     */
    cursor?: TourMaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TourMaterials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TourMaterials.
     */
    skip?: number
    distinct?: TourMaterialScalarFieldEnum | TourMaterialScalarFieldEnum[]
  }

  /**
   * TourMaterial create
   */
  export type TourMaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a TourMaterial.
     */
    data: XOR<TourMaterialCreateInput, TourMaterialUncheckedCreateInput>
  }

  /**
   * TourMaterial createMany
   */
  export type TourMaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TourMaterials.
     */
    data: TourMaterialCreateManyInput | TourMaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TourMaterial createManyAndReturn
   */
  export type TourMaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * The data used to create many TourMaterials.
     */
    data: TourMaterialCreateManyInput | TourMaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourMaterial update
   */
  export type TourMaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a TourMaterial.
     */
    data: XOR<TourMaterialUpdateInput, TourMaterialUncheckedUpdateInput>
    /**
     * Choose, which TourMaterial to update.
     */
    where: TourMaterialWhereUniqueInput
  }

  /**
   * TourMaterial updateMany
   */
  export type TourMaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TourMaterials.
     */
    data: XOR<TourMaterialUpdateManyMutationInput, TourMaterialUncheckedUpdateManyInput>
    /**
     * Filter which TourMaterials to update
     */
    where?: TourMaterialWhereInput
    /**
     * Limit how many TourMaterials to update.
     */
    limit?: number
  }

  /**
   * TourMaterial updateManyAndReturn
   */
  export type TourMaterialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * The data used to update TourMaterials.
     */
    data: XOR<TourMaterialUpdateManyMutationInput, TourMaterialUncheckedUpdateManyInput>
    /**
     * Filter which TourMaterials to update
     */
    where?: TourMaterialWhereInput
    /**
     * Limit how many TourMaterials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TourMaterial upsert
   */
  export type TourMaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the TourMaterial to update in case it exists.
     */
    where: TourMaterialWhereUniqueInput
    /**
     * In case the TourMaterial found by the `where` argument doesn't exist, create a new TourMaterial with this data.
     */
    create: XOR<TourMaterialCreateInput, TourMaterialUncheckedCreateInput>
    /**
     * In case the TourMaterial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TourMaterialUpdateInput, TourMaterialUncheckedUpdateInput>
  }

  /**
   * TourMaterial delete
   */
  export type TourMaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
    /**
     * Filter which TourMaterial to delete.
     */
    where: TourMaterialWhereUniqueInput
  }

  /**
   * TourMaterial deleteMany
   */
  export type TourMaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TourMaterials to delete
     */
    where?: TourMaterialWhereInput
    /**
     * Limit how many TourMaterials to delete.
     */
    limit?: number
  }

  /**
   * TourMaterial without action
   */
  export type TourMaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TourMaterial
     */
    select?: TourMaterialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TourMaterial
     */
    omit?: TourMaterialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TourMaterialInclude<ExtArgs> | null
  }


  /**
   * Model PhotoDiary
   */

  export type AggregatePhotoDiary = {
    _count: PhotoDiaryCountAggregateOutputType | null
    _avg: PhotoDiaryAvgAggregateOutputType | null
    _sum: PhotoDiarySumAggregateOutputType | null
    _min: PhotoDiaryMinAggregateOutputType | null
    _max: PhotoDiaryMaxAggregateOutputType | null
  }

  export type PhotoDiaryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PhotoDiarySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PhotoDiaryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoDiaryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PhotoDiaryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    notes: number
    photos: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PhotoDiaryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PhotoDiarySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PhotoDiaryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoDiaryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PhotoDiaryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    notes?: true
    photos?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PhotoDiaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoDiary to aggregate.
     */
    where?: PhotoDiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDiaries to fetch.
     */
    orderBy?: PhotoDiaryOrderByWithRelationInput | PhotoDiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoDiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoDiaries
    **/
    _count?: true | PhotoDiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoDiaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoDiarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoDiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoDiaryMaxAggregateInputType
  }

  export type GetPhotoDiaryAggregateType<T extends PhotoDiaryAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoDiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoDiary[P]>
      : GetScalarType<T[P], AggregatePhotoDiary[P]>
  }




  export type PhotoDiaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoDiaryWhereInput
    orderBy?: PhotoDiaryOrderByWithAggregationInput | PhotoDiaryOrderByWithAggregationInput[]
    by: PhotoDiaryScalarFieldEnum[] | PhotoDiaryScalarFieldEnum
    having?: PhotoDiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoDiaryCountAggregateInputType | true
    _avg?: PhotoDiaryAvgAggregateInputType
    _sum?: PhotoDiarySumAggregateInputType
    _min?: PhotoDiaryMinAggregateInputType
    _max?: PhotoDiaryMaxAggregateInputType
  }

  export type PhotoDiaryGroupByOutputType = {
    id: number
    userId: number
    title: string
    notes: string | null
    photos: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PhotoDiaryCountAggregateOutputType | null
    _avg: PhotoDiaryAvgAggregateOutputType | null
    _sum: PhotoDiarySumAggregateOutputType | null
    _min: PhotoDiaryMinAggregateOutputType | null
    _max: PhotoDiaryMaxAggregateOutputType | null
  }

  type GetPhotoDiaryGroupByPayload<T extends PhotoDiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoDiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoDiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoDiaryGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoDiaryGroupByOutputType[P]>
        }
      >
    >


  export type PhotoDiarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    notes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoDiary"]>

  export type PhotoDiarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    notes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoDiary"]>

  export type PhotoDiarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    notes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoDiary"]>

  export type PhotoDiarySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    notes?: boolean
    photos?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PhotoDiaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "notes" | "photos" | "createdAt" | "updatedAt", ExtArgs["result"]["photoDiary"]>
  export type PhotoDiaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoDiaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoDiaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoDiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoDiary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      notes: string | null
      photos: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["photoDiary"]>
    composites: {}
  }

  type PhotoDiaryGetPayload<S extends boolean | null | undefined | PhotoDiaryDefaultArgs> = $Result.GetResult<Prisma.$PhotoDiaryPayload, S>

  type PhotoDiaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoDiaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoDiaryCountAggregateInputType | true
    }

  export interface PhotoDiaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoDiary'], meta: { name: 'PhotoDiary' } }
    /**
     * Find zero or one PhotoDiary that matches the filter.
     * @param {PhotoDiaryFindUniqueArgs} args - Arguments to find a PhotoDiary
     * @example
     * // Get one PhotoDiary
     * const photoDiary = await prisma.photoDiary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoDiaryFindUniqueArgs>(args: SelectSubset<T, PhotoDiaryFindUniqueArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoDiary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoDiaryFindUniqueOrThrowArgs} args - Arguments to find a PhotoDiary
     * @example
     * // Get one PhotoDiary
     * const photoDiary = await prisma.photoDiary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoDiaryFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoDiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoDiary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryFindFirstArgs} args - Arguments to find a PhotoDiary
     * @example
     * // Get one PhotoDiary
     * const photoDiary = await prisma.photoDiary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoDiaryFindFirstArgs>(args?: SelectSubset<T, PhotoDiaryFindFirstArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoDiary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryFindFirstOrThrowArgs} args - Arguments to find a PhotoDiary
     * @example
     * // Get one PhotoDiary
     * const photoDiary = await prisma.photoDiary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoDiaryFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoDiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoDiaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoDiaries
     * const photoDiaries = await prisma.photoDiary.findMany()
     * 
     * // Get first 10 PhotoDiaries
     * const photoDiaries = await prisma.photoDiary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoDiaryWithIdOnly = await prisma.photoDiary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoDiaryFindManyArgs>(args?: SelectSubset<T, PhotoDiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoDiary.
     * @param {PhotoDiaryCreateArgs} args - Arguments to create a PhotoDiary.
     * @example
     * // Create one PhotoDiary
     * const PhotoDiary = await prisma.photoDiary.create({
     *   data: {
     *     // ... data to create a PhotoDiary
     *   }
     * })
     * 
     */
    create<T extends PhotoDiaryCreateArgs>(args: SelectSubset<T, PhotoDiaryCreateArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoDiaries.
     * @param {PhotoDiaryCreateManyArgs} args - Arguments to create many PhotoDiaries.
     * @example
     * // Create many PhotoDiaries
     * const photoDiary = await prisma.photoDiary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoDiaryCreateManyArgs>(args?: SelectSubset<T, PhotoDiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoDiaries and returns the data saved in the database.
     * @param {PhotoDiaryCreateManyAndReturnArgs} args - Arguments to create many PhotoDiaries.
     * @example
     * // Create many PhotoDiaries
     * const photoDiary = await prisma.photoDiary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoDiaries and only return the `id`
     * const photoDiaryWithIdOnly = await prisma.photoDiary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoDiaryCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoDiaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhotoDiary.
     * @param {PhotoDiaryDeleteArgs} args - Arguments to delete one PhotoDiary.
     * @example
     * // Delete one PhotoDiary
     * const PhotoDiary = await prisma.photoDiary.delete({
     *   where: {
     *     // ... filter to delete one PhotoDiary
     *   }
     * })
     * 
     */
    delete<T extends PhotoDiaryDeleteArgs>(args: SelectSubset<T, PhotoDiaryDeleteArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoDiary.
     * @param {PhotoDiaryUpdateArgs} args - Arguments to update one PhotoDiary.
     * @example
     * // Update one PhotoDiary
     * const photoDiary = await prisma.photoDiary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoDiaryUpdateArgs>(args: SelectSubset<T, PhotoDiaryUpdateArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoDiaries.
     * @param {PhotoDiaryDeleteManyArgs} args - Arguments to filter PhotoDiaries to delete.
     * @example
     * // Delete a few PhotoDiaries
     * const { count } = await prisma.photoDiary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDiaryDeleteManyArgs>(args?: SelectSubset<T, PhotoDiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoDiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoDiaries
     * const photoDiary = await prisma.photoDiary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoDiaryUpdateManyArgs>(args: SelectSubset<T, PhotoDiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoDiaries and returns the data updated in the database.
     * @param {PhotoDiaryUpdateManyAndReturnArgs} args - Arguments to update many PhotoDiaries.
     * @example
     * // Update many PhotoDiaries
     * const photoDiary = await prisma.photoDiary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhotoDiaries and only return the `id`
     * const photoDiaryWithIdOnly = await prisma.photoDiary.updateManyAndReturn({
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
    updateManyAndReturn<T extends PhotoDiaryUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoDiaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhotoDiary.
     * @param {PhotoDiaryUpsertArgs} args - Arguments to update or create a PhotoDiary.
     * @example
     * // Update or create a PhotoDiary
     * const photoDiary = await prisma.photoDiary.upsert({
     *   create: {
     *     // ... data to create a PhotoDiary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoDiary we want to update
     *   }
     * })
     */
    upsert<T extends PhotoDiaryUpsertArgs>(args: SelectSubset<T, PhotoDiaryUpsertArgs<ExtArgs>>): Prisma__PhotoDiaryClient<$Result.GetResult<Prisma.$PhotoDiaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoDiaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryCountArgs} args - Arguments to filter PhotoDiaries to count.
     * @example
     * // Count the number of PhotoDiaries
     * const count = await prisma.photoDiary.count({
     *   where: {
     *     // ... the filter for the PhotoDiaries we want to count
     *   }
     * })
    **/
    count<T extends PhotoDiaryCountArgs>(
      args?: Subset<T, PhotoDiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoDiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoDiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhotoDiaryAggregateArgs>(args: Subset<T, PhotoDiaryAggregateArgs>): Prisma.PrismaPromise<GetPhotoDiaryAggregateType<T>>

    /**
     * Group by PhotoDiary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDiaryGroupByArgs} args - Group by arguments.
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
      T extends PhotoDiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoDiaryGroupByArgs['orderBy'] }
        : { orderBy?: PhotoDiaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhotoDiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoDiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoDiary model
   */
  readonly fields: PhotoDiaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoDiary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoDiaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PhotoDiary model
   */
  interface PhotoDiaryFieldRefs {
    readonly id: FieldRef<"PhotoDiary", 'Int'>
    readonly userId: FieldRef<"PhotoDiary", 'Int'>
    readonly title: FieldRef<"PhotoDiary", 'String'>
    readonly notes: FieldRef<"PhotoDiary", 'String'>
    readonly photos: FieldRef<"PhotoDiary", 'Json'>
    readonly createdAt: FieldRef<"PhotoDiary", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotoDiary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PhotoDiary findUnique
   */
  export type PhotoDiaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDiary to fetch.
     */
    where: PhotoDiaryWhereUniqueInput
  }

  /**
   * PhotoDiary findUniqueOrThrow
   */
  export type PhotoDiaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDiary to fetch.
     */
    where: PhotoDiaryWhereUniqueInput
  }

  /**
   * PhotoDiary findFirst
   */
  export type PhotoDiaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDiary to fetch.
     */
    where?: PhotoDiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDiaries to fetch.
     */
    orderBy?: PhotoDiaryOrderByWithRelationInput | PhotoDiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoDiaries.
     */
    cursor?: PhotoDiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoDiaries.
     */
    distinct?: PhotoDiaryScalarFieldEnum | PhotoDiaryScalarFieldEnum[]
  }

  /**
   * PhotoDiary findFirstOrThrow
   */
  export type PhotoDiaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDiary to fetch.
     */
    where?: PhotoDiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDiaries to fetch.
     */
    orderBy?: PhotoDiaryOrderByWithRelationInput | PhotoDiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoDiaries.
     */
    cursor?: PhotoDiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDiaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoDiaries.
     */
    distinct?: PhotoDiaryScalarFieldEnum | PhotoDiaryScalarFieldEnum[]
  }

  /**
   * PhotoDiary findMany
   */
  export type PhotoDiaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDiaries to fetch.
     */
    where?: PhotoDiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDiaries to fetch.
     */
    orderBy?: PhotoDiaryOrderByWithRelationInput | PhotoDiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoDiaries.
     */
    cursor?: PhotoDiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDiaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDiaries.
     */
    skip?: number
    distinct?: PhotoDiaryScalarFieldEnum | PhotoDiaryScalarFieldEnum[]
  }

  /**
   * PhotoDiary create
   */
  export type PhotoDiaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoDiary.
     */
    data: XOR<PhotoDiaryCreateInput, PhotoDiaryUncheckedCreateInput>
  }

  /**
   * PhotoDiary createMany
   */
  export type PhotoDiaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoDiaries.
     */
    data: PhotoDiaryCreateManyInput | PhotoDiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoDiary createManyAndReturn
   */
  export type PhotoDiaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoDiaries.
     */
    data: PhotoDiaryCreateManyInput | PhotoDiaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoDiary update
   */
  export type PhotoDiaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoDiary.
     */
    data: XOR<PhotoDiaryUpdateInput, PhotoDiaryUncheckedUpdateInput>
    /**
     * Choose, which PhotoDiary to update.
     */
    where: PhotoDiaryWhereUniqueInput
  }

  /**
   * PhotoDiary updateMany
   */
  export type PhotoDiaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoDiaries.
     */
    data: XOR<PhotoDiaryUpdateManyMutationInput, PhotoDiaryUncheckedUpdateManyInput>
    /**
     * Filter which PhotoDiaries to update
     */
    where?: PhotoDiaryWhereInput
    /**
     * Limit how many PhotoDiaries to update.
     */
    limit?: number
  }

  /**
   * PhotoDiary updateManyAndReturn
   */
  export type PhotoDiaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * The data used to update PhotoDiaries.
     */
    data: XOR<PhotoDiaryUpdateManyMutationInput, PhotoDiaryUncheckedUpdateManyInput>
    /**
     * Filter which PhotoDiaries to update
     */
    where?: PhotoDiaryWhereInput
    /**
     * Limit how many PhotoDiaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoDiary upsert
   */
  export type PhotoDiaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoDiary to update in case it exists.
     */
    where: PhotoDiaryWhereUniqueInput
    /**
     * In case the PhotoDiary found by the `where` argument doesn't exist, create a new PhotoDiary with this data.
     */
    create: XOR<PhotoDiaryCreateInput, PhotoDiaryUncheckedCreateInput>
    /**
     * In case the PhotoDiary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoDiaryUpdateInput, PhotoDiaryUncheckedUpdateInput>
  }

  /**
   * PhotoDiary delete
   */
  export type PhotoDiaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
    /**
     * Filter which PhotoDiary to delete.
     */
    where: PhotoDiaryWhereUniqueInput
  }

  /**
   * PhotoDiary deleteMany
   */
  export type PhotoDiaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoDiaries to delete
     */
    where?: PhotoDiaryWhereInput
    /**
     * Limit how many PhotoDiaries to delete.
     */
    limit?: number
  }

  /**
   * PhotoDiary without action
   */
  export type PhotoDiaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDiary
     */
    select?: PhotoDiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDiary
     */
    omit?: PhotoDiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDiaryInclude<ExtArgs> | null
  }


  /**
   * Model UserProcessedPhoto
   */

  export type AggregateUserProcessedPhoto = {
    _count: UserProcessedPhotoCountAggregateOutputType | null
    _avg: UserProcessedPhotoAvgAggregateOutputType | null
    _sum: UserProcessedPhotoSumAggregateOutputType | null
    _min: UserProcessedPhotoMinAggregateOutputType | null
    _max: UserProcessedPhotoMaxAggregateOutputType | null
  }

  export type UserProcessedPhotoAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProcessedPhotoSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserProcessedPhotoMinAggregateOutputType = {
    id: number | null
    userId: number | null
    rawUrl: string | null
    processedUrl: string | null
    status: $Enums.ProcessingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProcessedPhotoMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    rawUrl: string | null
    processedUrl: string | null
    status: $Enums.ProcessingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProcessedPhotoCountAggregateOutputType = {
    id: number
    userId: number
    rawUrl: number
    processedUrl: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProcessedPhotoAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProcessedPhotoSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserProcessedPhotoMinAggregateInputType = {
    id?: true
    userId?: true
    rawUrl?: true
    processedUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProcessedPhotoMaxAggregateInputType = {
    id?: true
    userId?: true
    rawUrl?: true
    processedUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProcessedPhotoCountAggregateInputType = {
    id?: true
    userId?: true
    rawUrl?: true
    processedUrl?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProcessedPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProcessedPhoto to aggregate.
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProcessedPhotos to fetch.
     */
    orderBy?: UserProcessedPhotoOrderByWithRelationInput | UserProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProcessedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProcessedPhotos
    **/
    _count?: true | UserProcessedPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProcessedPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProcessedPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProcessedPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProcessedPhotoMaxAggregateInputType
  }

  export type GetUserProcessedPhotoAggregateType<T extends UserProcessedPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProcessedPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProcessedPhoto[P]>
      : GetScalarType<T[P], AggregateUserProcessedPhoto[P]>
  }




  export type UserProcessedPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProcessedPhotoWhereInput
    orderBy?: UserProcessedPhotoOrderByWithAggregationInput | UserProcessedPhotoOrderByWithAggregationInput[]
    by: UserProcessedPhotoScalarFieldEnum[] | UserProcessedPhotoScalarFieldEnum
    having?: UserProcessedPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProcessedPhotoCountAggregateInputType | true
    _avg?: UserProcessedPhotoAvgAggregateInputType
    _sum?: UserProcessedPhotoSumAggregateInputType
    _min?: UserProcessedPhotoMinAggregateInputType
    _max?: UserProcessedPhotoMaxAggregateInputType
  }

  export type UserProcessedPhotoGroupByOutputType = {
    id: number
    userId: number
    rawUrl: string
    processedUrl: string | null
    status: $Enums.ProcessingStatus
    createdAt: Date
    updatedAt: Date
    _count: UserProcessedPhotoCountAggregateOutputType | null
    _avg: UserProcessedPhotoAvgAggregateOutputType | null
    _sum: UserProcessedPhotoSumAggregateOutputType | null
    _min: UserProcessedPhotoMinAggregateOutputType | null
    _max: UserProcessedPhotoMaxAggregateOutputType | null
  }

  type GetUserProcessedPhotoGroupByPayload<T extends UserProcessedPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProcessedPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProcessedPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProcessedPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], UserProcessedPhotoGroupByOutputType[P]>
        }
      >
    >


  export type UserProcessedPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rawUrl?: boolean
    processedUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProcessedPhoto"]>

  export type UserProcessedPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rawUrl?: boolean
    processedUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProcessedPhoto"]>

  export type UserProcessedPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rawUrl?: boolean
    processedUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProcessedPhoto"]>

  export type UserProcessedPhotoSelectScalar = {
    id?: boolean
    userId?: boolean
    rawUrl?: boolean
    processedUrl?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProcessedPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rawUrl" | "processedUrl" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userProcessedPhoto"]>
  export type UserProcessedPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProcessedPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProcessedPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProcessedPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProcessedPhoto"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      rawUrl: string
      processedUrl: string | null
      status: $Enums.ProcessingStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProcessedPhoto"]>
    composites: {}
  }

  type UserProcessedPhotoGetPayload<S extends boolean | null | undefined | UserProcessedPhotoDefaultArgs> = $Result.GetResult<Prisma.$UserProcessedPhotoPayload, S>

  type UserProcessedPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProcessedPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProcessedPhotoCountAggregateInputType | true
    }

  export interface UserProcessedPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProcessedPhoto'], meta: { name: 'UserProcessedPhoto' } }
    /**
     * Find zero or one UserProcessedPhoto that matches the filter.
     * @param {UserProcessedPhotoFindUniqueArgs} args - Arguments to find a UserProcessedPhoto
     * @example
     * // Get one UserProcessedPhoto
     * const userProcessedPhoto = await prisma.userProcessedPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProcessedPhotoFindUniqueArgs>(args: SelectSubset<T, UserProcessedPhotoFindUniqueArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProcessedPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProcessedPhotoFindUniqueOrThrowArgs} args - Arguments to find a UserProcessedPhoto
     * @example
     * // Get one UserProcessedPhoto
     * const userProcessedPhoto = await prisma.userProcessedPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProcessedPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProcessedPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProcessedPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoFindFirstArgs} args - Arguments to find a UserProcessedPhoto
     * @example
     * // Get one UserProcessedPhoto
     * const userProcessedPhoto = await prisma.userProcessedPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProcessedPhotoFindFirstArgs>(args?: SelectSubset<T, UserProcessedPhotoFindFirstArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProcessedPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoFindFirstOrThrowArgs} args - Arguments to find a UserProcessedPhoto
     * @example
     * // Get one UserProcessedPhoto
     * const userProcessedPhoto = await prisma.userProcessedPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProcessedPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProcessedPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProcessedPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProcessedPhotos
     * const userProcessedPhotos = await prisma.userProcessedPhoto.findMany()
     * 
     * // Get first 10 UserProcessedPhotos
     * const userProcessedPhotos = await prisma.userProcessedPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProcessedPhotoWithIdOnly = await prisma.userProcessedPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProcessedPhotoFindManyArgs>(args?: SelectSubset<T, UserProcessedPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProcessedPhoto.
     * @param {UserProcessedPhotoCreateArgs} args - Arguments to create a UserProcessedPhoto.
     * @example
     * // Create one UserProcessedPhoto
     * const UserProcessedPhoto = await prisma.userProcessedPhoto.create({
     *   data: {
     *     // ... data to create a UserProcessedPhoto
     *   }
     * })
     * 
     */
    create<T extends UserProcessedPhotoCreateArgs>(args: SelectSubset<T, UserProcessedPhotoCreateArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProcessedPhotos.
     * @param {UserProcessedPhotoCreateManyArgs} args - Arguments to create many UserProcessedPhotos.
     * @example
     * // Create many UserProcessedPhotos
     * const userProcessedPhoto = await prisma.userProcessedPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProcessedPhotoCreateManyArgs>(args?: SelectSubset<T, UserProcessedPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProcessedPhotos and returns the data saved in the database.
     * @param {UserProcessedPhotoCreateManyAndReturnArgs} args - Arguments to create many UserProcessedPhotos.
     * @example
     * // Create many UserProcessedPhotos
     * const userProcessedPhoto = await prisma.userProcessedPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProcessedPhotos and only return the `id`
     * const userProcessedPhotoWithIdOnly = await prisma.userProcessedPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProcessedPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProcessedPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProcessedPhoto.
     * @param {UserProcessedPhotoDeleteArgs} args - Arguments to delete one UserProcessedPhoto.
     * @example
     * // Delete one UserProcessedPhoto
     * const UserProcessedPhoto = await prisma.userProcessedPhoto.delete({
     *   where: {
     *     // ... filter to delete one UserProcessedPhoto
     *   }
     * })
     * 
     */
    delete<T extends UserProcessedPhotoDeleteArgs>(args: SelectSubset<T, UserProcessedPhotoDeleteArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProcessedPhoto.
     * @param {UserProcessedPhotoUpdateArgs} args - Arguments to update one UserProcessedPhoto.
     * @example
     * // Update one UserProcessedPhoto
     * const userProcessedPhoto = await prisma.userProcessedPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProcessedPhotoUpdateArgs>(args: SelectSubset<T, UserProcessedPhotoUpdateArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProcessedPhotos.
     * @param {UserProcessedPhotoDeleteManyArgs} args - Arguments to filter UserProcessedPhotos to delete.
     * @example
     * // Delete a few UserProcessedPhotos
     * const { count } = await prisma.userProcessedPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProcessedPhotoDeleteManyArgs>(args?: SelectSubset<T, UserProcessedPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProcessedPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProcessedPhotos
     * const userProcessedPhoto = await prisma.userProcessedPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProcessedPhotoUpdateManyArgs>(args: SelectSubset<T, UserProcessedPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProcessedPhotos and returns the data updated in the database.
     * @param {UserProcessedPhotoUpdateManyAndReturnArgs} args - Arguments to update many UserProcessedPhotos.
     * @example
     * // Update many UserProcessedPhotos
     * const userProcessedPhoto = await prisma.userProcessedPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProcessedPhotos and only return the `id`
     * const userProcessedPhotoWithIdOnly = await prisma.userProcessedPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProcessedPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProcessedPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProcessedPhoto.
     * @param {UserProcessedPhotoUpsertArgs} args - Arguments to update or create a UserProcessedPhoto.
     * @example
     * // Update or create a UserProcessedPhoto
     * const userProcessedPhoto = await prisma.userProcessedPhoto.upsert({
     *   create: {
     *     // ... data to create a UserProcessedPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProcessedPhoto we want to update
     *   }
     * })
     */
    upsert<T extends UserProcessedPhotoUpsertArgs>(args: SelectSubset<T, UserProcessedPhotoUpsertArgs<ExtArgs>>): Prisma__UserProcessedPhotoClient<$Result.GetResult<Prisma.$UserProcessedPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProcessedPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoCountArgs} args - Arguments to filter UserProcessedPhotos to count.
     * @example
     * // Count the number of UserProcessedPhotos
     * const count = await prisma.userProcessedPhoto.count({
     *   where: {
     *     // ... the filter for the UserProcessedPhotos we want to count
     *   }
     * })
    **/
    count<T extends UserProcessedPhotoCountArgs>(
      args?: Subset<T, UserProcessedPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProcessedPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProcessedPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProcessedPhotoAggregateArgs>(args: Subset<T, UserProcessedPhotoAggregateArgs>): Prisma.PrismaPromise<GetUserProcessedPhotoAggregateType<T>>

    /**
     * Group by UserProcessedPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProcessedPhotoGroupByArgs} args - Group by arguments.
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
      T extends UserProcessedPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProcessedPhotoGroupByArgs['orderBy'] }
        : { orderBy?: UserProcessedPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProcessedPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProcessedPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProcessedPhoto model
   */
  readonly fields: UserProcessedPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProcessedPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProcessedPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProcessedPhoto model
   */
  interface UserProcessedPhotoFieldRefs {
    readonly id: FieldRef<"UserProcessedPhoto", 'Int'>
    readonly userId: FieldRef<"UserProcessedPhoto", 'Int'>
    readonly rawUrl: FieldRef<"UserProcessedPhoto", 'String'>
    readonly processedUrl: FieldRef<"UserProcessedPhoto", 'String'>
    readonly status: FieldRef<"UserProcessedPhoto", 'ProcessingStatus'>
    readonly createdAt: FieldRef<"UserProcessedPhoto", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProcessedPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProcessedPhoto findUnique
   */
  export type UserProcessedPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UserProcessedPhoto to fetch.
     */
    where: UserProcessedPhotoWhereUniqueInput
  }

  /**
   * UserProcessedPhoto findUniqueOrThrow
   */
  export type UserProcessedPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UserProcessedPhoto to fetch.
     */
    where: UserProcessedPhotoWhereUniqueInput
  }

  /**
   * UserProcessedPhoto findFirst
   */
  export type UserProcessedPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UserProcessedPhoto to fetch.
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProcessedPhotos to fetch.
     */
    orderBy?: UserProcessedPhotoOrderByWithRelationInput | UserProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProcessedPhotos.
     */
    cursor?: UserProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProcessedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProcessedPhotos.
     */
    distinct?: UserProcessedPhotoScalarFieldEnum | UserProcessedPhotoScalarFieldEnum[]
  }

  /**
   * UserProcessedPhoto findFirstOrThrow
   */
  export type UserProcessedPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UserProcessedPhoto to fetch.
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProcessedPhotos to fetch.
     */
    orderBy?: UserProcessedPhotoOrderByWithRelationInput | UserProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProcessedPhotos.
     */
    cursor?: UserProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProcessedPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProcessedPhotos.
     */
    distinct?: UserProcessedPhotoScalarFieldEnum | UserProcessedPhotoScalarFieldEnum[]
  }

  /**
   * UserProcessedPhoto findMany
   */
  export type UserProcessedPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UserProcessedPhotos to fetch.
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProcessedPhotos to fetch.
     */
    orderBy?: UserProcessedPhotoOrderByWithRelationInput | UserProcessedPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProcessedPhotos.
     */
    cursor?: UserProcessedPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProcessedPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProcessedPhotos.
     */
    skip?: number
    distinct?: UserProcessedPhotoScalarFieldEnum | UserProcessedPhotoScalarFieldEnum[]
  }

  /**
   * UserProcessedPhoto create
   */
  export type UserProcessedPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProcessedPhoto.
     */
    data: XOR<UserProcessedPhotoCreateInput, UserProcessedPhotoUncheckedCreateInput>
  }

  /**
   * UserProcessedPhoto createMany
   */
  export type UserProcessedPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProcessedPhotos.
     */
    data: UserProcessedPhotoCreateManyInput | UserProcessedPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProcessedPhoto createManyAndReturn
   */
  export type UserProcessedPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many UserProcessedPhotos.
     */
    data: UserProcessedPhotoCreateManyInput | UserProcessedPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProcessedPhoto update
   */
  export type UserProcessedPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProcessedPhoto.
     */
    data: XOR<UserProcessedPhotoUpdateInput, UserProcessedPhotoUncheckedUpdateInput>
    /**
     * Choose, which UserProcessedPhoto to update.
     */
    where: UserProcessedPhotoWhereUniqueInput
  }

  /**
   * UserProcessedPhoto updateMany
   */
  export type UserProcessedPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProcessedPhotos.
     */
    data: XOR<UserProcessedPhotoUpdateManyMutationInput, UserProcessedPhotoUncheckedUpdateManyInput>
    /**
     * Filter which UserProcessedPhotos to update
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * Limit how many UserProcessedPhotos to update.
     */
    limit?: number
  }

  /**
   * UserProcessedPhoto updateManyAndReturn
   */
  export type UserProcessedPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * The data used to update UserProcessedPhotos.
     */
    data: XOR<UserProcessedPhotoUpdateManyMutationInput, UserProcessedPhotoUncheckedUpdateManyInput>
    /**
     * Filter which UserProcessedPhotos to update
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * Limit how many UserProcessedPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProcessedPhoto upsert
   */
  export type UserProcessedPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProcessedPhoto to update in case it exists.
     */
    where: UserProcessedPhotoWhereUniqueInput
    /**
     * In case the UserProcessedPhoto found by the `where` argument doesn't exist, create a new UserProcessedPhoto with this data.
     */
    create: XOR<UserProcessedPhotoCreateInput, UserProcessedPhotoUncheckedCreateInput>
    /**
     * In case the UserProcessedPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProcessedPhotoUpdateInput, UserProcessedPhotoUncheckedUpdateInput>
  }

  /**
   * UserProcessedPhoto delete
   */
  export type UserProcessedPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
    /**
     * Filter which UserProcessedPhoto to delete.
     */
    where: UserProcessedPhotoWhereUniqueInput
  }

  /**
   * UserProcessedPhoto deleteMany
   */
  export type UserProcessedPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProcessedPhotos to delete
     */
    where?: UserProcessedPhotoWhereInput
    /**
     * Limit how many UserProcessedPhotos to delete.
     */
    limit?: number
  }

  /**
   * UserProcessedPhoto without action
   */
  export type UserProcessedPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProcessedPhoto
     */
    select?: UserProcessedPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProcessedPhoto
     */
    omit?: UserProcessedPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProcessedPhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    profilePicUrl: 'profilePicUrl',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GuideScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    experience: 'experience',
    specializations: 'specializations',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GuideScalarFieldEnum = (typeof GuideScalarFieldEnum)[keyof typeof GuideScalarFieldEnum]


  export const TourScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    region: 'region',
    difficulty: 'difficulty',
    price: 'price',
    program: 'program',
    guideId: 'guideId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourScalarFieldEnum = (typeof TourScalarFieldEnum)[keyof typeof TourScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TourDateScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    date: 'date',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TourDateScalarFieldEnum = (typeof TourDateScalarFieldEnum)[keyof typeof TourDateScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    userId: 'userId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    url: 'url',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    url: 'url',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    userId: 'userId',
    status: 'status',
    participants: 'participants',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    status: 'status',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const PromoCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discount: 'discount',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type PromoCodeScalarFieldEnum = (typeof PromoCodeScalarFieldEnum)[keyof typeof PromoCodeScalarFieldEnum]


  export const TourMaterialScalarFieldEnum: {
    id: 'id',
    tourId: 'tourId',
    title: 'title',
    url: 'url',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type TourMaterialScalarFieldEnum = (typeof TourMaterialScalarFieldEnum)[keyof typeof TourMaterialScalarFieldEnum]


  export const PhotoDiaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    notes: 'notes',
    photos: 'photos',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PhotoDiaryScalarFieldEnum = (typeof PhotoDiaryScalarFieldEnum)[keyof typeof PhotoDiaryScalarFieldEnum]


  export const UserProcessedPhotoScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rawUrl: 'rawUrl',
    processedUrl: 'processedUrl',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProcessedPhotoScalarFieldEnum = (typeof UserProcessedPhotoScalarFieldEnum)[keyof typeof UserProcessedPhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DifficultyLevel'
   */
  export type EnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel'>
    


  /**
   * Reference to a field of type 'DifficultyLevel[]'
   */
  export type ListEnumDifficultyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DifficultyLevel[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'MaterialType'
   */
  export type EnumMaterialTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialType'>
    


  /**
   * Reference to a field of type 'MaterialType[]'
   */
  export type ListEnumMaterialTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaterialType[]'>
    


  /**
   * Reference to a field of type 'ProcessingStatus'
   */
  export type EnumProcessingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessingStatus'>
    


  /**
   * Reference to a field of type 'ProcessingStatus[]'
   */
  export type ListEnumProcessingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessingStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profilePicUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    guide?: XOR<GuideNullableScalarRelationFilter, GuideWhereInput> | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    photoDiaries?: PhotoDiaryListRelationFilter
    processedPhotos?: UserProcessedPhotoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guide?: GuideOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    photoDiaries?: PhotoDiaryOrderByRelationAggregateInput
    processedPhotos?: UserProcessedPhotoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profilePicUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    guide?: XOR<GuideNullableScalarRelationFilter, GuideWhereInput> | null
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
    photoDiaries?: PhotoDiaryListRelationFilter
    processedPhotos?: UserProcessedPhotoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    profilePicUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profilePicUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GuideWhereInput = {
    AND?: GuideWhereInput | GuideWhereInput[]
    OR?: GuideWhereInput[]
    NOT?: GuideWhereInput | GuideWhereInput[]
    id?: IntFilter<"Guide"> | number
    userId?: IntFilter<"Guide"> | number
    experience?: StringNullableFilter<"Guide"> | string | null
    specializations?: StringNullableListFilter<"Guide">
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tours?: TourListRelationFilter
  }

  export type GuideOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrderInput | SortOrder
    specializations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tours?: TourOrderByRelationAggregateInput
  }

  export type GuideWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: GuideWhereInput | GuideWhereInput[]
    OR?: GuideWhereInput[]
    NOT?: GuideWhereInput | GuideWhereInput[]
    experience?: StringNullableFilter<"Guide"> | string | null
    specializations?: StringNullableListFilter<"Guide">
    createdAt?: DateTimeFilter<"Guide"> | Date | string
    updatedAt?: DateTimeFilter<"Guide"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tours?: TourListRelationFilter
  }, "id" | "userId">

  export type GuideOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrderInput | SortOrder
    specializations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GuideCountOrderByAggregateInput
    _avg?: GuideAvgOrderByAggregateInput
    _max?: GuideMaxOrderByAggregateInput
    _min?: GuideMinOrderByAggregateInput
    _sum?: GuideSumOrderByAggregateInput
  }

  export type GuideScalarWhereWithAggregatesInput = {
    AND?: GuideScalarWhereWithAggregatesInput | GuideScalarWhereWithAggregatesInput[]
    OR?: GuideScalarWhereWithAggregatesInput[]
    NOT?: GuideScalarWhereWithAggregatesInput | GuideScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Guide"> | number
    userId?: IntWithAggregatesFilter<"Guide"> | number
    experience?: StringNullableWithAggregatesFilter<"Guide"> | string | null
    specializations?: StringNullableListFilter<"Guide">
    createdAt?: DateTimeWithAggregatesFilter<"Guide"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Guide"> | Date | string
  }

  export type TourWhereInput = {
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    id?: IntFilter<"Tour"> | number
    title?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    region?: StringFilter<"Tour"> | string
    difficulty?: EnumDifficultyLevelFilter<"Tour"> | $Enums.DifficultyLevel
    price?: FloatFilter<"Tour"> | number
    program?: JsonFilter<"Tour">
    guideId?: IntFilter<"Tour"> | number
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    guide?: XOR<GuideScalarRelationFilter, GuideWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    dates?: TourDateListRelationFilter
    reviews?: ReviewListRelationFilter
    photos?: PhotoListRelationFilter
    videos?: VideoListRelationFilter
    materials?: TourMaterialListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type TourOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    region?: SortOrder
    difficulty?: SortOrder
    price?: SortOrder
    program?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guide?: GuideOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    dates?: TourDateOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    photos?: PhotoOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    materials?: TourMaterialOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type TourWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourWhereInput | TourWhereInput[]
    OR?: TourWhereInput[]
    NOT?: TourWhereInput | TourWhereInput[]
    title?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    region?: StringFilter<"Tour"> | string
    difficulty?: EnumDifficultyLevelFilter<"Tour"> | $Enums.DifficultyLevel
    price?: FloatFilter<"Tour"> | number
    program?: JsonFilter<"Tour">
    guideId?: IntFilter<"Tour"> | number
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
    guide?: XOR<GuideScalarRelationFilter, GuideWhereInput>
    categories?: CategoryListRelationFilter
    tags?: TagListRelationFilter
    dates?: TourDateListRelationFilter
    reviews?: ReviewListRelationFilter
    photos?: PhotoListRelationFilter
    videos?: VideoListRelationFilter
    materials?: TourMaterialListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type TourOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    region?: SortOrder
    difficulty?: SortOrder
    price?: SortOrder
    program?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourCountOrderByAggregateInput
    _avg?: TourAvgOrderByAggregateInput
    _max?: TourMaxOrderByAggregateInput
    _min?: TourMinOrderByAggregateInput
    _sum?: TourSumOrderByAggregateInput
  }

  export type TourScalarWhereWithAggregatesInput = {
    AND?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    OR?: TourScalarWhereWithAggregatesInput[]
    NOT?: TourScalarWhereWithAggregatesInput | TourScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tour"> | number
    title?: StringWithAggregatesFilter<"Tour"> | string
    description?: StringWithAggregatesFilter<"Tour"> | string
    region?: StringWithAggregatesFilter<"Tour"> | string
    difficulty?: EnumDifficultyLevelWithAggregatesFilter<"Tour"> | $Enums.DifficultyLevel
    price?: FloatWithAggregatesFilter<"Tour"> | number
    program?: JsonWithAggregatesFilter<"Tour">
    guideId?: IntWithAggregatesFilter<"Tour"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tour"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    tours?: TourListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tours?: TourOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    tours?: TourListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    tours?: TourListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tours?: TourOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    tours?: TourListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type TourDateWhereInput = {
    AND?: TourDateWhereInput | TourDateWhereInput[]
    OR?: TourDateWhereInput[]
    NOT?: TourDateWhereInput | TourDateWhereInput[]
    id?: IntFilter<"TourDate"> | number
    tourId?: IntFilter<"TourDate"> | number
    date?: DateTimeFilter<"TourDate"> | Date | string
    isAvailable?: BoolFilter<"TourDate"> | boolean
    createdAt?: DateTimeFilter<"TourDate"> | Date | string
    updatedAt?: DateTimeFilter<"TourDate"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourDateOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourDateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourDateWhereInput | TourDateWhereInput[]
    OR?: TourDateWhereInput[]
    NOT?: TourDateWhereInput | TourDateWhereInput[]
    tourId?: IntFilter<"TourDate"> | number
    date?: DateTimeFilter<"TourDate"> | Date | string
    isAvailable?: BoolFilter<"TourDate"> | boolean
    createdAt?: DateTimeFilter<"TourDate"> | Date | string
    updatedAt?: DateTimeFilter<"TourDate"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourDateOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TourDateCountOrderByAggregateInput
    _avg?: TourDateAvgOrderByAggregateInput
    _max?: TourDateMaxOrderByAggregateInput
    _min?: TourDateMinOrderByAggregateInput
    _sum?: TourDateSumOrderByAggregateInput
  }

  export type TourDateScalarWhereWithAggregatesInput = {
    AND?: TourDateScalarWhereWithAggregatesInput | TourDateScalarWhereWithAggregatesInput[]
    OR?: TourDateScalarWhereWithAggregatesInput[]
    NOT?: TourDateScalarWhereWithAggregatesInput | TourDateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourDate"> | number
    tourId?: IntWithAggregatesFilter<"TourDate"> | number
    date?: DateTimeWithAggregatesFilter<"TourDate"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"TourDate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TourDate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TourDate"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    tourId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tour?: TourOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    tourId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    tourId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: IntFilter<"Photo"> | number
    tourId?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    description?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    tourId?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    description?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Photo"> | number
    tourId?: IntWithAggregatesFilter<"Photo"> | number
    url?: StringWithAggregatesFilter<"Photo"> | string
    description?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: IntFilter<"Video"> | number
    tourId?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    tourId?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video"> | number
    tourId?: IntWithAggregatesFilter<"Video"> | number
    url?: StringWithAggregatesFilter<"Video"> | string
    description?: StringNullableWithAggregatesFilter<"Video"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    tourId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    participants?: IntFilter<"Booking"> | number
    totalPrice?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tour?: TourOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    tourId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    participants?: IntFilter<"Booking"> | number
    totalPrice?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    tourId?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    participants?: IntWithAggregatesFilter<"Booking"> | number
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    bookingId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    bookingId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    bookingId?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type PromoCodeWhereInput = {
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    id?: IntFilter<"PromoCode"> | number
    code?: StringFilter<"PromoCode"> | string
    discount?: FloatFilter<"PromoCode"> | number
    expiresAt?: DateTimeFilter<"PromoCode"> | Date | string
    isActive?: BoolFilter<"PromoCode"> | boolean
    createdAt?: DateTimeFilter<"PromoCode"> | Date | string
  }

  export type PromoCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PromoCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: PromoCodeWhereInput | PromoCodeWhereInput[]
    OR?: PromoCodeWhereInput[]
    NOT?: PromoCodeWhereInput | PromoCodeWhereInput[]
    discount?: FloatFilter<"PromoCode"> | number
    expiresAt?: DateTimeFilter<"PromoCode"> | Date | string
    isActive?: BoolFilter<"PromoCode"> | boolean
    createdAt?: DateTimeFilter<"PromoCode"> | Date | string
  }, "id" | "code">

  export type PromoCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: PromoCodeCountOrderByAggregateInput
    _avg?: PromoCodeAvgOrderByAggregateInput
    _max?: PromoCodeMaxOrderByAggregateInput
    _min?: PromoCodeMinOrderByAggregateInput
    _sum?: PromoCodeSumOrderByAggregateInput
  }

  export type PromoCodeScalarWhereWithAggregatesInput = {
    AND?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    OR?: PromoCodeScalarWhereWithAggregatesInput[]
    NOT?: PromoCodeScalarWhereWithAggregatesInput | PromoCodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PromoCode"> | number
    code?: StringWithAggregatesFilter<"PromoCode"> | string
    discount?: FloatWithAggregatesFilter<"PromoCode"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"PromoCode"> | Date | string
    isActive?: BoolWithAggregatesFilter<"PromoCode"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PromoCode"> | Date | string
  }

  export type TourMaterialWhereInput = {
    AND?: TourMaterialWhereInput | TourMaterialWhereInput[]
    OR?: TourMaterialWhereInput[]
    NOT?: TourMaterialWhereInput | TourMaterialWhereInput[]
    id?: IntFilter<"TourMaterial"> | number
    tourId?: IntFilter<"TourMaterial"> | number
    title?: StringFilter<"TourMaterial"> | string
    url?: StringFilter<"TourMaterial"> | string
    type?: EnumMaterialTypeFilter<"TourMaterial"> | $Enums.MaterialType
    createdAt?: DateTimeFilter<"TourMaterial"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }

  export type TourMaterialOrderByWithRelationInput = {
    id?: SortOrder
    tourId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    tour?: TourOrderByWithRelationInput
  }

  export type TourMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TourMaterialWhereInput | TourMaterialWhereInput[]
    OR?: TourMaterialWhereInput[]
    NOT?: TourMaterialWhereInput | TourMaterialWhereInput[]
    tourId?: IntFilter<"TourMaterial"> | number
    title?: StringFilter<"TourMaterial"> | string
    url?: StringFilter<"TourMaterial"> | string
    type?: EnumMaterialTypeFilter<"TourMaterial"> | $Enums.MaterialType
    createdAt?: DateTimeFilter<"TourMaterial"> | Date | string
    tour?: XOR<TourScalarRelationFilter, TourWhereInput>
  }, "id">

  export type TourMaterialOrderByWithAggregationInput = {
    id?: SortOrder
    tourId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: TourMaterialCountOrderByAggregateInput
    _avg?: TourMaterialAvgOrderByAggregateInput
    _max?: TourMaterialMaxOrderByAggregateInput
    _min?: TourMaterialMinOrderByAggregateInput
    _sum?: TourMaterialSumOrderByAggregateInput
  }

  export type TourMaterialScalarWhereWithAggregatesInput = {
    AND?: TourMaterialScalarWhereWithAggregatesInput | TourMaterialScalarWhereWithAggregatesInput[]
    OR?: TourMaterialScalarWhereWithAggregatesInput[]
    NOT?: TourMaterialScalarWhereWithAggregatesInput | TourMaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TourMaterial"> | number
    tourId?: IntWithAggregatesFilter<"TourMaterial"> | number
    title?: StringWithAggregatesFilter<"TourMaterial"> | string
    url?: StringWithAggregatesFilter<"TourMaterial"> | string
    type?: EnumMaterialTypeWithAggregatesFilter<"TourMaterial"> | $Enums.MaterialType
    createdAt?: DateTimeWithAggregatesFilter<"TourMaterial"> | Date | string
  }

  export type PhotoDiaryWhereInput = {
    AND?: PhotoDiaryWhereInput | PhotoDiaryWhereInput[]
    OR?: PhotoDiaryWhereInput[]
    NOT?: PhotoDiaryWhereInput | PhotoDiaryWhereInput[]
    id?: IntFilter<"PhotoDiary"> | number
    userId?: IntFilter<"PhotoDiary"> | number
    title?: StringFilter<"PhotoDiary"> | string
    notes?: StringNullableFilter<"PhotoDiary"> | string | null
    photos?: JsonFilter<"PhotoDiary">
    createdAt?: DateTimeFilter<"PhotoDiary"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoDiary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PhotoDiaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PhotoDiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PhotoDiaryWhereInput | PhotoDiaryWhereInput[]
    OR?: PhotoDiaryWhereInput[]
    NOT?: PhotoDiaryWhereInput | PhotoDiaryWhereInput[]
    userId?: IntFilter<"PhotoDiary"> | number
    title?: StringFilter<"PhotoDiary"> | string
    notes?: StringNullableFilter<"PhotoDiary"> | string | null
    photos?: JsonFilter<"PhotoDiary">
    createdAt?: DateTimeFilter<"PhotoDiary"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoDiary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PhotoDiaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    notes?: SortOrderInput | SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PhotoDiaryCountOrderByAggregateInput
    _avg?: PhotoDiaryAvgOrderByAggregateInput
    _max?: PhotoDiaryMaxOrderByAggregateInput
    _min?: PhotoDiaryMinOrderByAggregateInput
    _sum?: PhotoDiarySumOrderByAggregateInput
  }

  export type PhotoDiaryScalarWhereWithAggregatesInput = {
    AND?: PhotoDiaryScalarWhereWithAggregatesInput | PhotoDiaryScalarWhereWithAggregatesInput[]
    OR?: PhotoDiaryScalarWhereWithAggregatesInput[]
    NOT?: PhotoDiaryScalarWhereWithAggregatesInput | PhotoDiaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PhotoDiary"> | number
    userId?: IntWithAggregatesFilter<"PhotoDiary"> | number
    title?: StringWithAggregatesFilter<"PhotoDiary"> | string
    notes?: StringNullableWithAggregatesFilter<"PhotoDiary"> | string | null
    photos?: JsonWithAggregatesFilter<"PhotoDiary">
    createdAt?: DateTimeWithAggregatesFilter<"PhotoDiary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotoDiary"> | Date | string
  }

  export type UserProcessedPhotoWhereInput = {
    AND?: UserProcessedPhotoWhereInput | UserProcessedPhotoWhereInput[]
    OR?: UserProcessedPhotoWhereInput[]
    NOT?: UserProcessedPhotoWhereInput | UserProcessedPhotoWhereInput[]
    id?: IntFilter<"UserProcessedPhoto"> | number
    userId?: IntFilter<"UserProcessedPhoto"> | number
    rawUrl?: StringFilter<"UserProcessedPhoto"> | string
    processedUrl?: StringNullableFilter<"UserProcessedPhoto"> | string | null
    status?: EnumProcessingStatusFilter<"UserProcessedPhoto"> | $Enums.ProcessingStatus
    createdAt?: DateTimeFilter<"UserProcessedPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"UserProcessedPhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProcessedPhotoOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rawUrl?: SortOrder
    processedUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProcessedPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProcessedPhotoWhereInput | UserProcessedPhotoWhereInput[]
    OR?: UserProcessedPhotoWhereInput[]
    NOT?: UserProcessedPhotoWhereInput | UserProcessedPhotoWhereInput[]
    userId?: IntFilter<"UserProcessedPhoto"> | number
    rawUrl?: StringFilter<"UserProcessedPhoto"> | string
    processedUrl?: StringNullableFilter<"UserProcessedPhoto"> | string | null
    status?: EnumProcessingStatusFilter<"UserProcessedPhoto"> | $Enums.ProcessingStatus
    createdAt?: DateTimeFilter<"UserProcessedPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"UserProcessedPhoto"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserProcessedPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rawUrl?: SortOrder
    processedUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProcessedPhotoCountOrderByAggregateInput
    _avg?: UserProcessedPhotoAvgOrderByAggregateInput
    _max?: UserProcessedPhotoMaxOrderByAggregateInput
    _min?: UserProcessedPhotoMinOrderByAggregateInput
    _sum?: UserProcessedPhotoSumOrderByAggregateInput
  }

  export type UserProcessedPhotoScalarWhereWithAggregatesInput = {
    AND?: UserProcessedPhotoScalarWhereWithAggregatesInput | UserProcessedPhotoScalarWhereWithAggregatesInput[]
    OR?: UserProcessedPhotoScalarWhereWithAggregatesInput[]
    NOT?: UserProcessedPhotoScalarWhereWithAggregatesInput | UserProcessedPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProcessedPhoto"> | number
    userId?: IntWithAggregatesFilter<"UserProcessedPhoto"> | number
    rawUrl?: StringWithAggregatesFilter<"UserProcessedPhoto"> | string
    processedUrl?: StringNullableWithAggregatesFilter<"UserProcessedPhoto"> | string | null
    status?: EnumProcessingStatusWithAggregatesFilter<"UserProcessedPhoto"> | $Enums.ProcessingStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserProcessedPhoto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProcessedPhoto"> | Date | string
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryUncheckedCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUncheckedUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideCreateInput = {
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGuideInput
    tours?: TourCreateNestedManyWithoutGuideInput
  }

  export type GuideUncheckedCreateInput = {
    id?: number
    userId: number
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourUncheckedCreateNestedManyWithoutGuideInput
  }

  export type GuideUpdateInput = {
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGuideNestedInput
    tours?: TourUpdateManyWithoutGuideNestedInput
  }

  export type GuideUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourUncheckedUpdateManyWithoutGuideNestedInput
  }

  export type GuideCreateManyInput = {
    id?: number
    userId: number
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideUpdateManyMutationInput = {
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GuideUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateManyInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    tours?: TourCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    tours?: TourUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tours?: TourUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tours?: TourUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    name: string
    tours?: TourCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    tours?: TourUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tours?: TourUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tours?: TourUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TourDateCreateInput = {
    date: Date | string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutDatesInput
  }

  export type TourDateUncheckedCreateInput = {
    id?: number
    tourId: number
    date: Date | string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourDateUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutDatesNestedInput
  }

  export type TourDateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateCreateManyInput = {
    id?: number
    tourId: number
    date: Date | string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourDateUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    tour: TourCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    tourId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    tourId: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    url: string
    description?: string | null
    createdAt?: Date | string
    tour: TourCreateNestedOneWithoutPhotosInput
  }

  export type PhotoUncheckedCreateInput = {
    id?: number
    tourId: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type PhotoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyInput = {
    id?: number
    tourId: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    url: string
    description?: string | null
    createdAt?: Date | string
    tour: TourCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: number
    tourId: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type VideoUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id?: number
    tourId: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    tourId: number
    userId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    tourId: number
    userId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    bookingId: number
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    bookingId: number
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeCreateInput = {
    code: string
    discount: number
    expiresAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PromoCodeUncheckedCreateInput = {
    id?: number
    code: string
    discount: number
    expiresAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PromoCodeUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeCreateManyInput = {
    id?: number
    code: string
    discount: number
    expiresAt: Date | string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PromoCodeUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromoCodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourMaterialCreateInput = {
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt?: Date | string
    tour: TourCreateNestedOneWithoutMaterialsInput
  }

  export type TourMaterialUncheckedCreateInput = {
    id?: number
    tourId: number
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt?: Date | string
  }

  export type TourMaterialUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type TourMaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourMaterialCreateManyInput = {
    id?: number
    tourId: number
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt?: Date | string
  }

  export type TourMaterialUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourMaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDiaryCreateInput = {
    title: string
    notes?: string | null
    photos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPhotoDiariesInput
  }

  export type PhotoDiaryUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    notes?: string | null
    photos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoDiaryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhotoDiariesNestedInput
  }

  export type PhotoDiaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDiaryCreateManyInput = {
    id?: number
    userId: number
    title: string
    notes?: string | null
    photos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoDiaryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDiaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProcessedPhotoCreateInput = {
    rawUrl: string
    processedUrl?: string | null
    status?: $Enums.ProcessingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProcessedPhotosInput
  }

  export type UserProcessedPhotoUncheckedCreateInput = {
    id?: number
    userId: number
    rawUrl: string
    processedUrl?: string | null
    status?: $Enums.ProcessingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProcessedPhotoUpdateInput = {
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessedPhotosNestedInput
  }

  export type UserProcessedPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProcessedPhotoCreateManyInput = {
    id?: number
    userId: number
    rawUrl: string
    processedUrl?: string | null
    status?: $Enums.ProcessingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProcessedPhotoUpdateManyMutationInput = {
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProcessedPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GuideNullableScalarRelationFilter = {
    is?: GuideWhereInput | null
    isNot?: GuideWhereInput | null
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PhotoDiaryListRelationFilter = {
    every?: PhotoDiaryWhereInput
    some?: PhotoDiaryWhereInput
    none?: PhotoDiaryWhereInput
  }

  export type UserProcessedPhotoListRelationFilter = {
    every?: UserProcessedPhotoWhereInput
    some?: UserProcessedPhotoWhereInput
    none?: UserProcessedPhotoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoDiaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserProcessedPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profilePicUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profilePicUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profilePicUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TourListRelationFilter = {
    every?: TourWhereInput
    some?: TourWhereInput
    none?: TourWhereInput
  }

  export type TourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GuideCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    specializations?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GuideMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    experience?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GuideSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GuideScalarRelationFilter = {
    is?: GuideWhereInput
    isNot?: GuideWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TourDateListRelationFilter = {
    every?: TourDateWhereInput
    some?: TourDateWhereInput
    none?: TourDateWhereInput
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type TourMaterialListRelationFilter = {
    every?: TourMaterialWhereInput
    some?: TourMaterialWhereInput
    none?: TourMaterialWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourDateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourMaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TourCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    region?: SortOrder
    difficulty?: SortOrder
    price?: SortOrder
    program?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    guideId?: SortOrder
  }

  export type TourMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    region?: SortOrder
    difficulty?: SortOrder
    price?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    region?: SortOrder
    difficulty?: SortOrder
    price?: SortOrder
    guideId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    guideId?: SortOrder
  }

  export type EnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TourScalarRelationFilter = {
    is?: TourWhereInput
    isNot?: TourWhereInput
  }

  export type TourDateCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourDateAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type TourDateMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourDateMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TourDateSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    userId?: SortOrder
    participants?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PromoCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PromoCodeAvgOrderByAggregateInput = {
    id?: SortOrder
    discount?: SortOrder
  }

  export type PromoCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PromoCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PromoCodeSumOrderByAggregateInput = {
    id?: SortOrder
    discount?: SortOrder
  }

  export type EnumMaterialTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeFilter<$PrismaModel> | $Enums.MaterialType
  }

  export type TourMaterialCountOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TourMaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type TourMaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TourMaterialMinOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
    title?: SortOrder
    url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type TourMaterialSumOrderByAggregateInput = {
    id?: SortOrder
    tourId?: SortOrder
  }

  export type EnumMaterialTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeWithAggregatesFilter<$PrismaModel> | $Enums.MaterialType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialTypeFilter<$PrismaModel>
    _max?: NestedEnumMaterialTypeFilter<$PrismaModel>
  }

  export type PhotoDiaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    photos?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoDiaryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PhotoDiaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoDiaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PhotoDiarySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumProcessingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusFilter<$PrismaModel> | $Enums.ProcessingStatus
  }

  export type UserProcessedPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rawUrl?: SortOrder
    processedUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProcessedPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserProcessedPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rawUrl?: SortOrder
    processedUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProcessedPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rawUrl?: SortOrder
    processedUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProcessedPhotoSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumProcessingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessingStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessingStatusFilter<$PrismaModel>
  }

  export type GuideCreateNestedOneWithoutUserInput = {
    create?: XOR<GuideCreateWithoutUserInput, GuideUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuideCreateOrConnectWithoutUserInput
    connect?: GuideWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PhotoDiaryCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoDiaryCreateWithoutUserInput, PhotoDiaryUncheckedCreateWithoutUserInput> | PhotoDiaryCreateWithoutUserInput[] | PhotoDiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoDiaryCreateOrConnectWithoutUserInput | PhotoDiaryCreateOrConnectWithoutUserInput[]
    createMany?: PhotoDiaryCreateManyUserInputEnvelope
    connect?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
  }

  export type UserProcessedPhotoCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProcessedPhotoCreateWithoutUserInput, UserProcessedPhotoUncheckedCreateWithoutUserInput> | UserProcessedPhotoCreateWithoutUserInput[] | UserProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProcessedPhotoCreateOrConnectWithoutUserInput | UserProcessedPhotoCreateOrConnectWithoutUserInput[]
    createMany?: UserProcessedPhotoCreateManyUserInputEnvelope
    connect?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
  }

  export type GuideUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<GuideCreateWithoutUserInput, GuideUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuideCreateOrConnectWithoutUserInput
    connect?: GuideWhereUniqueInput
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PhotoDiaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoDiaryCreateWithoutUserInput, PhotoDiaryUncheckedCreateWithoutUserInput> | PhotoDiaryCreateWithoutUserInput[] | PhotoDiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoDiaryCreateOrConnectWithoutUserInput | PhotoDiaryCreateOrConnectWithoutUserInput[]
    createMany?: PhotoDiaryCreateManyUserInputEnvelope
    connect?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
  }

  export type UserProcessedPhotoUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProcessedPhotoCreateWithoutUserInput, UserProcessedPhotoUncheckedCreateWithoutUserInput> | UserProcessedPhotoCreateWithoutUserInput[] | UserProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProcessedPhotoCreateOrConnectWithoutUserInput | UserProcessedPhotoCreateOrConnectWithoutUserInput[]
    createMany?: UserProcessedPhotoCreateManyUserInputEnvelope
    connect?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GuideUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuideCreateWithoutUserInput, GuideUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuideCreateOrConnectWithoutUserInput
    upsert?: GuideUpsertWithoutUserInput
    disconnect?: GuideWhereInput | boolean
    delete?: GuideWhereInput | boolean
    connect?: GuideWhereUniqueInput
    update?: XOR<XOR<GuideUpdateToOneWithWhereWithoutUserInput, GuideUpdateWithoutUserInput>, GuideUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PhotoDiaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoDiaryCreateWithoutUserInput, PhotoDiaryUncheckedCreateWithoutUserInput> | PhotoDiaryCreateWithoutUserInput[] | PhotoDiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoDiaryCreateOrConnectWithoutUserInput | PhotoDiaryCreateOrConnectWithoutUserInput[]
    upsert?: PhotoDiaryUpsertWithWhereUniqueWithoutUserInput | PhotoDiaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoDiaryCreateManyUserInputEnvelope
    set?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    disconnect?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    delete?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    connect?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    update?: PhotoDiaryUpdateWithWhereUniqueWithoutUserInput | PhotoDiaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoDiaryUpdateManyWithWhereWithoutUserInput | PhotoDiaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoDiaryScalarWhereInput | PhotoDiaryScalarWhereInput[]
  }

  export type UserProcessedPhotoUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProcessedPhotoCreateWithoutUserInput, UserProcessedPhotoUncheckedCreateWithoutUserInput> | UserProcessedPhotoCreateWithoutUserInput[] | UserProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProcessedPhotoCreateOrConnectWithoutUserInput | UserProcessedPhotoCreateOrConnectWithoutUserInput[]
    upsert?: UserProcessedPhotoUpsertWithWhereUniqueWithoutUserInput | UserProcessedPhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProcessedPhotoCreateManyUserInputEnvelope
    set?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    disconnect?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    delete?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    connect?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    update?: UserProcessedPhotoUpdateWithWhereUniqueWithoutUserInput | UserProcessedPhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProcessedPhotoUpdateManyWithWhereWithoutUserInput | UserProcessedPhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProcessedPhotoScalarWhereInput | UserProcessedPhotoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GuideUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<GuideCreateWithoutUserInput, GuideUncheckedCreateWithoutUserInput>
    connectOrCreate?: GuideCreateOrConnectWithoutUserInput
    upsert?: GuideUpsertWithoutUserInput
    disconnect?: GuideWhereInput | boolean
    delete?: GuideWhereInput | boolean
    connect?: GuideWhereUniqueInput
    update?: XOR<XOR<GuideUpdateToOneWithWhereWithoutUserInput, GuideUpdateWithoutUserInput>, GuideUncheckedUpdateWithoutUserInput>
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PhotoDiaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoDiaryCreateWithoutUserInput, PhotoDiaryUncheckedCreateWithoutUserInput> | PhotoDiaryCreateWithoutUserInput[] | PhotoDiaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoDiaryCreateOrConnectWithoutUserInput | PhotoDiaryCreateOrConnectWithoutUserInput[]
    upsert?: PhotoDiaryUpsertWithWhereUniqueWithoutUserInput | PhotoDiaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoDiaryCreateManyUserInputEnvelope
    set?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    disconnect?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    delete?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    connect?: PhotoDiaryWhereUniqueInput | PhotoDiaryWhereUniqueInput[]
    update?: PhotoDiaryUpdateWithWhereUniqueWithoutUserInput | PhotoDiaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoDiaryUpdateManyWithWhereWithoutUserInput | PhotoDiaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoDiaryScalarWhereInput | PhotoDiaryScalarWhereInput[]
  }

  export type UserProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProcessedPhotoCreateWithoutUserInput, UserProcessedPhotoUncheckedCreateWithoutUserInput> | UserProcessedPhotoCreateWithoutUserInput[] | UserProcessedPhotoUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProcessedPhotoCreateOrConnectWithoutUserInput | UserProcessedPhotoCreateOrConnectWithoutUserInput[]
    upsert?: UserProcessedPhotoUpsertWithWhereUniqueWithoutUserInput | UserProcessedPhotoUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProcessedPhotoCreateManyUserInputEnvelope
    set?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    disconnect?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    delete?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    connect?: UserProcessedPhotoWhereUniqueInput | UserProcessedPhotoWhereUniqueInput[]
    update?: UserProcessedPhotoUpdateWithWhereUniqueWithoutUserInput | UserProcessedPhotoUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProcessedPhotoUpdateManyWithWhereWithoutUserInput | UserProcessedPhotoUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProcessedPhotoScalarWhereInput | UserProcessedPhotoScalarWhereInput[]
  }

  export type GuideCreatespecializationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutGuideInput = {
    create?: XOR<UserCreateWithoutGuideInput, UserUncheckedCreateWithoutGuideInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuideInput
    connect?: UserWhereUniqueInput
  }

  export type TourCreateNestedManyWithoutGuideInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutGuideInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type GuideUpdatespecializationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutGuideNestedInput = {
    create?: XOR<UserCreateWithoutGuideInput, UserUncheckedCreateWithoutGuideInput>
    connectOrCreate?: UserCreateOrConnectWithoutGuideInput
    upsert?: UserUpsertWithoutGuideInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGuideInput, UserUpdateWithoutGuideInput>, UserUncheckedUpdateWithoutGuideInput>
  }

  export type TourUpdateManyWithoutGuideNestedInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutGuideInput | TourUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutGuideInput | TourUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: TourUpdateManyWithWhereWithoutGuideInput | TourUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutGuideNestedInput = {
    create?: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput> | TourCreateWithoutGuideInput[] | TourUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: TourCreateOrConnectWithoutGuideInput | TourCreateOrConnectWithoutGuideInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutGuideInput | TourUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: TourCreateManyGuideInputEnvelope
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutGuideInput | TourUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: TourUpdateManyWithWhereWithoutGuideInput | TourUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type GuideCreateNestedOneWithoutToursInput = {
    create?: XOR<GuideCreateWithoutToursInput, GuideUncheckedCreateWithoutToursInput>
    connectOrCreate?: GuideCreateOrConnectWithoutToursInput
    connect?: GuideWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutToursInput = {
    create?: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput> | CategoryCreateWithoutToursInput[] | CategoryUncheckedCreateWithoutToursInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutToursInput | CategoryCreateOrConnectWithoutToursInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutToursInput = {
    create?: XOR<TagCreateWithoutToursInput, TagUncheckedCreateWithoutToursInput> | TagCreateWithoutToursInput[] | TagUncheckedCreateWithoutToursInput[]
    connectOrCreate?: TagCreateOrConnectWithoutToursInput | TagCreateOrConnectWithoutToursInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TourDateCreateNestedManyWithoutTourInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutTourInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PhotoCreateNestedManyWithoutTourInput = {
    create?: XOR<PhotoCreateWithoutTourInput, PhotoUncheckedCreateWithoutTourInput> | PhotoCreateWithoutTourInput[] | PhotoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTourInput | PhotoCreateOrConnectWithoutTourInput[]
    createMany?: PhotoCreateManyTourInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type VideoCreateNestedManyWithoutTourInput = {
    create?: XOR<VideoCreateWithoutTourInput, VideoUncheckedCreateWithoutTourInput> | VideoCreateWithoutTourInput[] | VideoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTourInput | VideoCreateOrConnectWithoutTourInput[]
    createMany?: VideoCreateManyTourInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type TourMaterialCreateNestedManyWithoutTourInput = {
    create?: XOR<TourMaterialCreateWithoutTourInput, TourMaterialUncheckedCreateWithoutTourInput> | TourMaterialCreateWithoutTourInput[] | TourMaterialUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourMaterialCreateOrConnectWithoutTourInput | TourMaterialCreateOrConnectWithoutTourInput[]
    createMany?: TourMaterialCreateManyTourInputEnvelope
    connect?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutTourInput = {
    create?: XOR<BookingCreateWithoutTourInput, BookingUncheckedCreateWithoutTourInput> | BookingCreateWithoutTourInput[] | BookingUncheckedCreateWithoutTourInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTourInput | BookingCreateOrConnectWithoutTourInput[]
    createMany?: BookingCreateManyTourInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput> | CategoryCreateWithoutToursInput[] | CategoryUncheckedCreateWithoutToursInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutToursInput | CategoryCreateOrConnectWithoutToursInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutToursInput = {
    create?: XOR<TagCreateWithoutToursInput, TagUncheckedCreateWithoutToursInput> | TagCreateWithoutToursInput[] | TagUncheckedCreateWithoutToursInput[]
    connectOrCreate?: TagCreateOrConnectWithoutToursInput | TagCreateOrConnectWithoutToursInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TourDateUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PhotoUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<PhotoCreateWithoutTourInput, PhotoUncheckedCreateWithoutTourInput> | PhotoCreateWithoutTourInput[] | PhotoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTourInput | PhotoCreateOrConnectWithoutTourInput[]
    createMany?: PhotoCreateManyTourInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type VideoUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<VideoCreateWithoutTourInput, VideoUncheckedCreateWithoutTourInput> | VideoCreateWithoutTourInput[] | VideoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTourInput | VideoCreateOrConnectWithoutTourInput[]
    createMany?: VideoCreateManyTourInputEnvelope
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
  }

  export type TourMaterialUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<TourMaterialCreateWithoutTourInput, TourMaterialUncheckedCreateWithoutTourInput> | TourMaterialCreateWithoutTourInput[] | TourMaterialUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourMaterialCreateOrConnectWithoutTourInput | TourMaterialCreateOrConnectWithoutTourInput[]
    createMany?: TourMaterialCreateManyTourInputEnvelope
    connect?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutTourInput = {
    create?: XOR<BookingCreateWithoutTourInput, BookingUncheckedCreateWithoutTourInput> | BookingCreateWithoutTourInput[] | BookingUncheckedCreateWithoutTourInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTourInput | BookingCreateOrConnectWithoutTourInput[]
    createMany?: BookingCreateManyTourInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type EnumDifficultyLevelFieldUpdateOperationsInput = {
    set?: $Enums.DifficultyLevel
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GuideUpdateOneRequiredWithoutToursNestedInput = {
    create?: XOR<GuideCreateWithoutToursInput, GuideUncheckedCreateWithoutToursInput>
    connectOrCreate?: GuideCreateOrConnectWithoutToursInput
    upsert?: GuideUpsertWithoutToursInput
    connect?: GuideWhereUniqueInput
    update?: XOR<XOR<GuideUpdateToOneWithWhereWithoutToursInput, GuideUpdateWithoutToursInput>, GuideUncheckedUpdateWithoutToursInput>
  }

  export type CategoryUpdateManyWithoutToursNestedInput = {
    create?: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput> | CategoryCreateWithoutToursInput[] | CategoryUncheckedCreateWithoutToursInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutToursInput | CategoryCreateOrConnectWithoutToursInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutToursInput | CategoryUpsertWithWhereUniqueWithoutToursInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutToursInput | CategoryUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutToursInput | CategoryUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUpdateManyWithoutToursNestedInput = {
    create?: XOR<TagCreateWithoutToursInput, TagUncheckedCreateWithoutToursInput> | TagCreateWithoutToursInput[] | TagUncheckedCreateWithoutToursInput[]
    connectOrCreate?: TagCreateOrConnectWithoutToursInput | TagCreateOrConnectWithoutToursInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutToursInput | TagUpsertWithWhereUniqueWithoutToursInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutToursInput | TagUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: TagUpdateManyWithWhereWithoutToursInput | TagUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TourDateUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    upsert?: TourDateUpsertWithWhereUniqueWithoutTourInput | TourDateUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    set?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    disconnect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    delete?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    update?: TourDateUpdateWithWhereUniqueWithoutTourInput | TourDateUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourDateUpdateManyWithWhereWithoutTourInput | TourDateUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutTourNestedInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTourInput | ReviewUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTourInput | ReviewUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTourInput | ReviewUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PhotoUpdateManyWithoutTourNestedInput = {
    create?: XOR<PhotoCreateWithoutTourInput, PhotoUncheckedCreateWithoutTourInput> | PhotoCreateWithoutTourInput[] | PhotoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTourInput | PhotoCreateOrConnectWithoutTourInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutTourInput | PhotoUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: PhotoCreateManyTourInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutTourInput | PhotoUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutTourInput | PhotoUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type VideoUpdateManyWithoutTourNestedInput = {
    create?: XOR<VideoCreateWithoutTourInput, VideoUncheckedCreateWithoutTourInput> | VideoCreateWithoutTourInput[] | VideoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTourInput | VideoCreateOrConnectWithoutTourInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutTourInput | VideoUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: VideoCreateManyTourInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutTourInput | VideoUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutTourInput | VideoUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type TourMaterialUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourMaterialCreateWithoutTourInput, TourMaterialUncheckedCreateWithoutTourInput> | TourMaterialCreateWithoutTourInput[] | TourMaterialUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourMaterialCreateOrConnectWithoutTourInput | TourMaterialCreateOrConnectWithoutTourInput[]
    upsert?: TourMaterialUpsertWithWhereUniqueWithoutTourInput | TourMaterialUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourMaterialCreateManyTourInputEnvelope
    set?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    disconnect?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    delete?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    connect?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    update?: TourMaterialUpdateWithWhereUniqueWithoutTourInput | TourMaterialUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourMaterialUpdateManyWithWhereWithoutTourInput | TourMaterialUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourMaterialScalarWhereInput | TourMaterialScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutTourNestedInput = {
    create?: XOR<BookingCreateWithoutTourInput, BookingUncheckedCreateWithoutTourInput> | BookingCreateWithoutTourInput[] | BookingUncheckedCreateWithoutTourInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTourInput | BookingCreateOrConnectWithoutTourInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTourInput | BookingUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: BookingCreateManyTourInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTourInput | BookingUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTourInput | BookingUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput> | CategoryCreateWithoutToursInput[] | CategoryUncheckedCreateWithoutToursInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutToursInput | CategoryCreateOrConnectWithoutToursInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutToursInput | CategoryUpsertWithWhereUniqueWithoutToursInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutToursInput | CategoryUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutToursInput | CategoryUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutToursNestedInput = {
    create?: XOR<TagCreateWithoutToursInput, TagUncheckedCreateWithoutToursInput> | TagCreateWithoutToursInput[] | TagUncheckedCreateWithoutToursInput[]
    connectOrCreate?: TagCreateOrConnectWithoutToursInput | TagCreateOrConnectWithoutToursInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutToursInput | TagUpsertWithWhereUniqueWithoutToursInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutToursInput | TagUpdateWithWhereUniqueWithoutToursInput[]
    updateMany?: TagUpdateManyWithWhereWithoutToursInput | TagUpdateManyWithWhereWithoutToursInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TourDateUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput> | TourDateCreateWithoutTourInput[] | TourDateUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourDateCreateOrConnectWithoutTourInput | TourDateCreateOrConnectWithoutTourInput[]
    upsert?: TourDateUpsertWithWhereUniqueWithoutTourInput | TourDateUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourDateCreateManyTourInputEnvelope
    set?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    disconnect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    delete?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    connect?: TourDateWhereUniqueInput | TourDateWhereUniqueInput[]
    update?: TourDateUpdateWithWhereUniqueWithoutTourInput | TourDateUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourDateUpdateManyWithWhereWithoutTourInput | TourDateUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput> | ReviewCreateWithoutTourInput[] | ReviewUncheckedCreateWithoutTourInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutTourInput | ReviewCreateOrConnectWithoutTourInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutTourInput | ReviewUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: ReviewCreateManyTourInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutTourInput | ReviewUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutTourInput | ReviewUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PhotoUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<PhotoCreateWithoutTourInput, PhotoUncheckedCreateWithoutTourInput> | PhotoCreateWithoutTourInput[] | PhotoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutTourInput | PhotoCreateOrConnectWithoutTourInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutTourInput | PhotoUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: PhotoCreateManyTourInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutTourInput | PhotoUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutTourInput | PhotoUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type VideoUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<VideoCreateWithoutTourInput, VideoUncheckedCreateWithoutTourInput> | VideoCreateWithoutTourInput[] | VideoUncheckedCreateWithoutTourInput[]
    connectOrCreate?: VideoCreateOrConnectWithoutTourInput | VideoCreateOrConnectWithoutTourInput[]
    upsert?: VideoUpsertWithWhereUniqueWithoutTourInput | VideoUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: VideoCreateManyTourInputEnvelope
    set?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    disconnect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    delete?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    connect?: VideoWhereUniqueInput | VideoWhereUniqueInput[]
    update?: VideoUpdateWithWhereUniqueWithoutTourInput | VideoUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: VideoUpdateManyWithWhereWithoutTourInput | VideoUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: VideoScalarWhereInput | VideoScalarWhereInput[]
  }

  export type TourMaterialUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<TourMaterialCreateWithoutTourInput, TourMaterialUncheckedCreateWithoutTourInput> | TourMaterialCreateWithoutTourInput[] | TourMaterialUncheckedCreateWithoutTourInput[]
    connectOrCreate?: TourMaterialCreateOrConnectWithoutTourInput | TourMaterialCreateOrConnectWithoutTourInput[]
    upsert?: TourMaterialUpsertWithWhereUniqueWithoutTourInput | TourMaterialUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: TourMaterialCreateManyTourInputEnvelope
    set?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    disconnect?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    delete?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    connect?: TourMaterialWhereUniqueInput | TourMaterialWhereUniqueInput[]
    update?: TourMaterialUpdateWithWhereUniqueWithoutTourInput | TourMaterialUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: TourMaterialUpdateManyWithWhereWithoutTourInput | TourMaterialUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: TourMaterialScalarWhereInput | TourMaterialScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutTourNestedInput = {
    create?: XOR<BookingCreateWithoutTourInput, BookingUncheckedCreateWithoutTourInput> | BookingCreateWithoutTourInput[] | BookingUncheckedCreateWithoutTourInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutTourInput | BookingCreateOrConnectWithoutTourInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutTourInput | BookingUpsertWithWhereUniqueWithoutTourInput[]
    createMany?: BookingCreateManyTourInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutTourInput | BookingUpdateWithWhereUniqueWithoutTourInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutTourInput | BookingUpdateManyWithWhereWithoutTourInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type TourCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput> | TourCreateWithoutCategoriesInput[] | TourUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: TourCreateOrConnectWithoutCategoriesInput | TourCreateOrConnectWithoutCategoriesInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput> | TourCreateWithoutCategoriesInput[] | TourUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: TourCreateOrConnectWithoutCategoriesInput | TourCreateOrConnectWithoutCategoriesInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput> | TourCreateWithoutCategoriesInput[] | TourUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: TourCreateOrConnectWithoutCategoriesInput | TourCreateOrConnectWithoutCategoriesInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutCategoriesInput | TourUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutCategoriesInput | TourUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: TourUpdateManyWithWhereWithoutCategoriesInput | TourUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput> | TourCreateWithoutCategoriesInput[] | TourUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: TourCreateOrConnectWithoutCategoriesInput | TourCreateOrConnectWithoutCategoriesInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutCategoriesInput | TourUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutCategoriesInput | TourUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: TourUpdateManyWithWhereWithoutCategoriesInput | TourUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourCreateNestedManyWithoutTagsInput = {
    create?: XOR<TourCreateWithoutTagsInput, TourUncheckedCreateWithoutTagsInput> | TourCreateWithoutTagsInput[] | TourUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTagsInput | TourCreateOrConnectWithoutTagsInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<TourCreateWithoutTagsInput, TourUncheckedCreateWithoutTagsInput> | TourCreateWithoutTagsInput[] | TourUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTagsInput | TourCreateOrConnectWithoutTagsInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
  }

  export type TourUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TourCreateWithoutTagsInput, TourUncheckedCreateWithoutTagsInput> | TourCreateWithoutTagsInput[] | TourUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTagsInput | TourCreateOrConnectWithoutTagsInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTagsInput | TourUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTagsInput | TourUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTagsInput | TourUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TourCreateWithoutTagsInput, TourUncheckedCreateWithoutTagsInput> | TourCreateWithoutTagsInput[] | TourUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TourCreateOrConnectWithoutTagsInput | TourCreateOrConnectWithoutTagsInput[]
    upsert?: TourUpsertWithWhereUniqueWithoutTagsInput | TourUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TourWhereUniqueInput | TourWhereUniqueInput[]
    disconnect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    delete?: TourWhereUniqueInput | TourWhereUniqueInput[]
    connect?: TourWhereUniqueInput | TourWhereUniqueInput[]
    update?: TourUpdateWithWhereUniqueWithoutTagsInput | TourUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TourUpdateManyWithWhereWithoutTagsInput | TourUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TourScalarWhereInput | TourScalarWhereInput[]
  }

  export type TourCreateNestedOneWithoutDatesInput = {
    create?: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
    connectOrCreate?: TourCreateOrConnectWithoutDatesInput
    connect?: TourWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TourUpdateOneRequiredWithoutDatesNestedInput = {
    create?: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
    connectOrCreate?: TourCreateOrConnectWithoutDatesInput
    upsert?: TourUpsertWithoutDatesInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutDatesInput, TourUpdateWithoutDatesInput>, TourUncheckedUpdateWithoutDatesInput>
  }

  export type TourCreateNestedOneWithoutReviewsInput = {
    create?: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TourCreateOrConnectWithoutReviewsInput
    connect?: TourWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: TourCreateOrConnectWithoutReviewsInput
    upsert?: TourUpsertWithoutReviewsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutReviewsInput, TourUpdateWithoutReviewsInput>, TourUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type TourCreateNestedOneWithoutPhotosInput = {
    create?: XOR<TourCreateWithoutPhotosInput, TourUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: TourCreateOrConnectWithoutPhotosInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<TourCreateWithoutPhotosInput, TourUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: TourCreateOrConnectWithoutPhotosInput
    upsert?: TourUpsertWithoutPhotosInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutPhotosInput, TourUpdateWithoutPhotosInput>, TourUncheckedUpdateWithoutPhotosInput>
  }

  export type TourCreateNestedOneWithoutVideosInput = {
    create?: XOR<TourCreateWithoutVideosInput, TourUncheckedCreateWithoutVideosInput>
    connectOrCreate?: TourCreateOrConnectWithoutVideosInput
    connect?: TourWhereUniqueInput
  }

  export type TourUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<TourCreateWithoutVideosInput, TourUncheckedCreateWithoutVideosInput>
    connectOrCreate?: TourCreateOrConnectWithoutVideosInput
    upsert?: TourUpsertWithoutVideosInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutVideosInput, TourUpdateWithoutVideosInput>, TourUncheckedUpdateWithoutVideosInput>
  }

  export type TourCreateNestedOneWithoutBookingsInput = {
    create?: XOR<TourCreateWithoutBookingsInput, TourUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TourCreateOrConnectWithoutBookingsInput
    connect?: TourWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type TourUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<TourCreateWithoutBookingsInput, TourUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: TourCreateOrConnectWithoutBookingsInput
    upsert?: TourUpsertWithoutBookingsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutBookingsInput, TourUpdateWithoutBookingsInput>, TourUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput> | PaymentCreateWithoutBookingInput[] | PaymentUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput | PaymentCreateOrConnectWithoutBookingInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutBookingInput | PaymentUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: PaymentCreateManyBookingInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutBookingInput | PaymentUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutBookingInput | PaymentUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type BookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput
    upsert?: BookingUpsertWithoutPaymentsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentsInput, BookingUpdateWithoutPaymentsInput>, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type TourCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<TourCreateWithoutMaterialsInput, TourUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: TourCreateOrConnectWithoutMaterialsInput
    connect?: TourWhereUniqueInput
  }

  export type EnumMaterialTypeFieldUpdateOperationsInput = {
    set?: $Enums.MaterialType
  }

  export type TourUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<TourCreateWithoutMaterialsInput, TourUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: TourCreateOrConnectWithoutMaterialsInput
    upsert?: TourUpsertWithoutMaterialsInput
    connect?: TourWhereUniqueInput
    update?: XOR<XOR<TourUpdateToOneWithWhereWithoutMaterialsInput, TourUpdateWithoutMaterialsInput>, TourUncheckedUpdateWithoutMaterialsInput>
  }

  export type UserCreateNestedOneWithoutPhotoDiariesInput = {
    create?: XOR<UserCreateWithoutPhotoDiariesInput, UserUncheckedCreateWithoutPhotoDiariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoDiariesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPhotoDiariesNestedInput = {
    create?: XOR<UserCreateWithoutPhotoDiariesInput, UserUncheckedCreateWithoutPhotoDiariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoDiariesInput
    upsert?: UserUpsertWithoutPhotoDiariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotoDiariesInput, UserUpdateWithoutPhotoDiariesInput>, UserUncheckedUpdateWithoutPhotoDiariesInput>
  }

  export type UserCreateNestedOneWithoutProcessedPhotosInput = {
    create?: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPhotosInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProcessingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessingStatus
  }

  export type UserUpdateOneRequiredWithoutProcessedPhotosNestedInput = {
    create?: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessedPhotosInput
    upsert?: UserUpsertWithoutProcessedPhotosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcessedPhotosInput, UserUpdateWithoutProcessedPhotosInput>, UserUncheckedUpdateWithoutProcessedPhotosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelFilter<$PrismaModel> | $Enums.DifficultyLevel
  }

  export type NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DifficultyLevel | EnumDifficultyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.DifficultyLevel[] | ListEnumDifficultyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyLevelWithAggregatesFilter<$PrismaModel> | $Enums.DifficultyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyLevelFilter<$PrismaModel>
    _max?: NestedEnumDifficultyLevelFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumMaterialTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeFilter<$PrismaModel> | $Enums.MaterialType
  }

  export type NestedEnumMaterialTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaterialType | EnumMaterialTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaterialType[] | ListEnumMaterialTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMaterialTypeWithAggregatesFilter<$PrismaModel> | $Enums.MaterialType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaterialTypeFilter<$PrismaModel>
    _max?: NestedEnumMaterialTypeFilter<$PrismaModel>
  }

  export type NestedEnumProcessingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusFilter<$PrismaModel> | $Enums.ProcessingStatus
  }

  export type NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessingStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessingStatusFilter<$PrismaModel>
  }

  export type GuideCreateWithoutUserInput = {
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourCreateNestedManyWithoutGuideInput
  }

  export type GuideUncheckedCreateWithoutUserInput = {
    id?: number
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    tours?: TourUncheckedCreateNestedManyWithoutGuideInput
  }

  export type GuideCreateOrConnectWithoutUserInput = {
    where: GuideWhereUniqueInput
    create: XOR<GuideCreateWithoutUserInput, GuideUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateWithoutUserInput = {
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    tourId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    tour: TourCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    tourId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PhotoDiaryCreateWithoutUserInput = {
    title: string
    notes?: string | null
    photos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoDiaryUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    notes?: string | null
    photos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoDiaryCreateOrConnectWithoutUserInput = {
    where: PhotoDiaryWhereUniqueInput
    create: XOR<PhotoDiaryCreateWithoutUserInput, PhotoDiaryUncheckedCreateWithoutUserInput>
  }

  export type PhotoDiaryCreateManyUserInputEnvelope = {
    data: PhotoDiaryCreateManyUserInput | PhotoDiaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProcessedPhotoCreateWithoutUserInput = {
    rawUrl: string
    processedUrl?: string | null
    status?: $Enums.ProcessingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProcessedPhotoUncheckedCreateWithoutUserInput = {
    id?: number
    rawUrl: string
    processedUrl?: string | null
    status?: $Enums.ProcessingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProcessedPhotoCreateOrConnectWithoutUserInput = {
    where: UserProcessedPhotoWhereUniqueInput
    create: XOR<UserProcessedPhotoCreateWithoutUserInput, UserProcessedPhotoUncheckedCreateWithoutUserInput>
  }

  export type UserProcessedPhotoCreateManyUserInputEnvelope = {
    data: UserProcessedPhotoCreateManyUserInput | UserProcessedPhotoCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GuideUpsertWithoutUserInput = {
    update: XOR<GuideUpdateWithoutUserInput, GuideUncheckedUpdateWithoutUserInput>
    create: XOR<GuideCreateWithoutUserInput, GuideUncheckedCreateWithoutUserInput>
    where?: GuideWhereInput
  }

  export type GuideUpdateToOneWithWhereWithoutUserInput = {
    where?: GuideWhereInput
    data: XOR<GuideUpdateWithoutUserInput, GuideUncheckedUpdateWithoutUserInput>
  }

  export type GuideUpdateWithoutUserInput = {
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourUpdateManyWithoutGuideNestedInput
  }

  export type GuideUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tours?: TourUncheckedUpdateManyWithoutGuideNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    tourId?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    participants?: IntFilter<"Booking"> | number
    totalPrice?: FloatFilter<"Booking"> | number
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    tourId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type PhotoDiaryUpsertWithWhereUniqueWithoutUserInput = {
    where: PhotoDiaryWhereUniqueInput
    update: XOR<PhotoDiaryUpdateWithoutUserInput, PhotoDiaryUncheckedUpdateWithoutUserInput>
    create: XOR<PhotoDiaryCreateWithoutUserInput, PhotoDiaryUncheckedCreateWithoutUserInput>
  }

  export type PhotoDiaryUpdateWithWhereUniqueWithoutUserInput = {
    where: PhotoDiaryWhereUniqueInput
    data: XOR<PhotoDiaryUpdateWithoutUserInput, PhotoDiaryUncheckedUpdateWithoutUserInput>
  }

  export type PhotoDiaryUpdateManyWithWhereWithoutUserInput = {
    where: PhotoDiaryScalarWhereInput
    data: XOR<PhotoDiaryUpdateManyMutationInput, PhotoDiaryUncheckedUpdateManyWithoutUserInput>
  }

  export type PhotoDiaryScalarWhereInput = {
    AND?: PhotoDiaryScalarWhereInput | PhotoDiaryScalarWhereInput[]
    OR?: PhotoDiaryScalarWhereInput[]
    NOT?: PhotoDiaryScalarWhereInput | PhotoDiaryScalarWhereInput[]
    id?: IntFilter<"PhotoDiary"> | number
    userId?: IntFilter<"PhotoDiary"> | number
    title?: StringFilter<"PhotoDiary"> | string
    notes?: StringNullableFilter<"PhotoDiary"> | string | null
    photos?: JsonFilter<"PhotoDiary">
    createdAt?: DateTimeFilter<"PhotoDiary"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoDiary"> | Date | string
  }

  export type UserProcessedPhotoUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProcessedPhotoWhereUniqueInput
    update: XOR<UserProcessedPhotoUpdateWithoutUserInput, UserProcessedPhotoUncheckedUpdateWithoutUserInput>
    create: XOR<UserProcessedPhotoCreateWithoutUserInput, UserProcessedPhotoUncheckedCreateWithoutUserInput>
  }

  export type UserProcessedPhotoUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProcessedPhotoWhereUniqueInput
    data: XOR<UserProcessedPhotoUpdateWithoutUserInput, UserProcessedPhotoUncheckedUpdateWithoutUserInput>
  }

  export type UserProcessedPhotoUpdateManyWithWhereWithoutUserInput = {
    where: UserProcessedPhotoScalarWhereInput
    data: XOR<UserProcessedPhotoUpdateManyMutationInput, UserProcessedPhotoUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProcessedPhotoScalarWhereInput = {
    AND?: UserProcessedPhotoScalarWhereInput | UserProcessedPhotoScalarWhereInput[]
    OR?: UserProcessedPhotoScalarWhereInput[]
    NOT?: UserProcessedPhotoScalarWhereInput | UserProcessedPhotoScalarWhereInput[]
    id?: IntFilter<"UserProcessedPhoto"> | number
    userId?: IntFilter<"UserProcessedPhoto"> | number
    rawUrl?: StringFilter<"UserProcessedPhoto"> | string
    processedUrl?: StringNullableFilter<"UserProcessedPhoto"> | string | null
    status?: EnumProcessingStatusFilter<"UserProcessedPhoto"> | $Enums.ProcessingStatus
    createdAt?: DateTimeFilter<"UserProcessedPhoto"> | Date | string
    updatedAt?: DateTimeFilter<"UserProcessedPhoto"> | Date | string
  }

  export type UserCreateWithoutGuideInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGuideInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryUncheckedCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGuideInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGuideInput, UserUncheckedCreateWithoutGuideInput>
  }

  export type TourCreateWithoutGuideInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutGuideInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutGuideInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput>
  }

  export type TourCreateManyGuideInputEnvelope = {
    data: TourCreateManyGuideInput | TourCreateManyGuideInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGuideInput = {
    update: XOR<UserUpdateWithoutGuideInput, UserUncheckedUpdateWithoutGuideInput>
    create: XOR<UserCreateWithoutGuideInput, UserUncheckedCreateWithoutGuideInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGuideInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGuideInput, UserUncheckedUpdateWithoutGuideInput>
  }

  export type UserUpdateWithoutGuideInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGuideInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUncheckedUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TourUpsertWithWhereUniqueWithoutGuideInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutGuideInput, TourUncheckedUpdateWithoutGuideInput>
    create: XOR<TourCreateWithoutGuideInput, TourUncheckedCreateWithoutGuideInput>
  }

  export type TourUpdateWithWhereUniqueWithoutGuideInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutGuideInput, TourUncheckedUpdateWithoutGuideInput>
  }

  export type TourUpdateManyWithWhereWithoutGuideInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutGuideInput>
  }

  export type TourScalarWhereInput = {
    AND?: TourScalarWhereInput | TourScalarWhereInput[]
    OR?: TourScalarWhereInput[]
    NOT?: TourScalarWhereInput | TourScalarWhereInput[]
    id?: IntFilter<"Tour"> | number
    title?: StringFilter<"Tour"> | string
    description?: StringFilter<"Tour"> | string
    region?: StringFilter<"Tour"> | string
    difficulty?: EnumDifficultyLevelFilter<"Tour"> | $Enums.DifficultyLevel
    price?: FloatFilter<"Tour"> | number
    program?: JsonFilter<"Tour">
    guideId?: IntFilter<"Tour"> | number
    createdAt?: DateTimeFilter<"Tour"> | Date | string
    updatedAt?: DateTimeFilter<"Tour"> | Date | string
  }

  export type GuideCreateWithoutToursInput = {
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGuideInput
  }

  export type GuideUncheckedCreateWithoutToursInput = {
    id?: number
    userId: number
    experience?: string | null
    specializations?: GuideCreatespecializationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GuideCreateOrConnectWithoutToursInput = {
    where: GuideWhereUniqueInput
    create: XOR<GuideCreateWithoutToursInput, GuideUncheckedCreateWithoutToursInput>
  }

  export type CategoryCreateWithoutToursInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutToursInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutToursInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput>
  }

  export type TagCreateWithoutToursInput = {
    name: string
  }

  export type TagUncheckedCreateWithoutToursInput = {
    id?: number
    name: string
  }

  export type TagCreateOrConnectWithoutToursInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutToursInput, TagUncheckedCreateWithoutToursInput>
  }

  export type TourDateCreateWithoutTourInput = {
    date: Date | string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourDateUncheckedCreateWithoutTourInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourDateCreateOrConnectWithoutTourInput = {
    where: TourDateWhereUniqueInput
    create: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput>
  }

  export type TourDateCreateManyTourInputEnvelope = {
    data: TourDateCreateManyTourInput | TourDateCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutTourInput = {
    rating: number
    comment?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutTourInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutTourInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput>
  }

  export type ReviewCreateManyTourInputEnvelope = {
    data: ReviewCreateManyTourInput | ReviewCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type PhotoCreateWithoutTourInput = {
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type PhotoUncheckedCreateWithoutTourInput = {
    id?: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type PhotoCreateOrConnectWithoutTourInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutTourInput, PhotoUncheckedCreateWithoutTourInput>
  }

  export type PhotoCreateManyTourInputEnvelope = {
    data: PhotoCreateManyTourInput | PhotoCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutTourInput = {
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type VideoUncheckedCreateWithoutTourInput = {
    id?: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutTourInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutTourInput, VideoUncheckedCreateWithoutTourInput>
  }

  export type VideoCreateManyTourInputEnvelope = {
    data: VideoCreateManyTourInput | VideoCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type TourMaterialCreateWithoutTourInput = {
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt?: Date | string
  }

  export type TourMaterialUncheckedCreateWithoutTourInput = {
    id?: number
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt?: Date | string
  }

  export type TourMaterialCreateOrConnectWithoutTourInput = {
    where: TourMaterialWhereUniqueInput
    create: XOR<TourMaterialCreateWithoutTourInput, TourMaterialUncheckedCreateWithoutTourInput>
  }

  export type TourMaterialCreateManyTourInputEnvelope = {
    data: TourMaterialCreateManyTourInput | TourMaterialCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutTourInput = {
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    payments?: PaymentCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutTourInput = {
    id?: number
    userId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutTourInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutTourInput, BookingUncheckedCreateWithoutTourInput>
  }

  export type BookingCreateManyTourInputEnvelope = {
    data: BookingCreateManyTourInput | BookingCreateManyTourInput[]
    skipDuplicates?: boolean
  }

  export type GuideUpsertWithoutToursInput = {
    update: XOR<GuideUpdateWithoutToursInput, GuideUncheckedUpdateWithoutToursInput>
    create: XOR<GuideCreateWithoutToursInput, GuideUncheckedCreateWithoutToursInput>
    where?: GuideWhereInput
  }

  export type GuideUpdateToOneWithWhereWithoutToursInput = {
    where?: GuideWhereInput
    data: XOR<GuideUpdateWithoutToursInput, GuideUncheckedUpdateWithoutToursInput>
  }

  export type GuideUpdateWithoutToursInput = {
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGuideNestedInput
  }

  export type GuideUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    specializations?: GuideUpdatespecializationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutToursInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutToursInput, CategoryUncheckedUpdateWithoutToursInput>
    create: XOR<CategoryCreateWithoutToursInput, CategoryUncheckedCreateWithoutToursInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutToursInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutToursInput, CategoryUncheckedUpdateWithoutToursInput>
  }

  export type CategoryUpdateManyWithWhereWithoutToursInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutToursInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
  }

  export type TagUpsertWithWhereUniqueWithoutToursInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutToursInput, TagUncheckedUpdateWithoutToursInput>
    create: XOR<TagCreateWithoutToursInput, TagUncheckedCreateWithoutToursInput>
  }

  export type TagUpdateWithWhereUniqueWithoutToursInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutToursInput, TagUncheckedUpdateWithoutToursInput>
  }

  export type TagUpdateManyWithWhereWithoutToursInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutToursInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
  }

  export type TourDateUpsertWithWhereUniqueWithoutTourInput = {
    where: TourDateWhereUniqueInput
    update: XOR<TourDateUpdateWithoutTourInput, TourDateUncheckedUpdateWithoutTourInput>
    create: XOR<TourDateCreateWithoutTourInput, TourDateUncheckedCreateWithoutTourInput>
  }

  export type TourDateUpdateWithWhereUniqueWithoutTourInput = {
    where: TourDateWhereUniqueInput
    data: XOR<TourDateUpdateWithoutTourInput, TourDateUncheckedUpdateWithoutTourInput>
  }

  export type TourDateUpdateManyWithWhereWithoutTourInput = {
    where: TourDateScalarWhereInput
    data: XOR<TourDateUpdateManyMutationInput, TourDateUncheckedUpdateManyWithoutTourInput>
  }

  export type TourDateScalarWhereInput = {
    AND?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
    OR?: TourDateScalarWhereInput[]
    NOT?: TourDateScalarWhereInput | TourDateScalarWhereInput[]
    id?: IntFilter<"TourDate"> | number
    tourId?: IntFilter<"TourDate"> | number
    date?: DateTimeFilter<"TourDate"> | Date | string
    isAvailable?: BoolFilter<"TourDate"> | boolean
    createdAt?: DateTimeFilter<"TourDate"> | Date | string
    updatedAt?: DateTimeFilter<"TourDate"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutTourInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutTourInput, ReviewUncheckedUpdateWithoutTourInput>
    create: XOR<ReviewCreateWithoutTourInput, ReviewUncheckedCreateWithoutTourInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutTourInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutTourInput, ReviewUncheckedUpdateWithoutTourInput>
  }

  export type ReviewUpdateManyWithWhereWithoutTourInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutTourInput>
  }

  export type PhotoUpsertWithWhereUniqueWithoutTourInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutTourInput, PhotoUncheckedUpdateWithoutTourInput>
    create: XOR<PhotoCreateWithoutTourInput, PhotoUncheckedCreateWithoutTourInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutTourInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutTourInput, PhotoUncheckedUpdateWithoutTourInput>
  }

  export type PhotoUpdateManyWithWhereWithoutTourInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutTourInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    id?: IntFilter<"Photo"> | number
    tourId?: IntFilter<"Photo"> | number
    url?: StringFilter<"Photo"> | string
    description?: StringNullableFilter<"Photo"> | string | null
    createdAt?: DateTimeFilter<"Photo"> | Date | string
  }

  export type VideoUpsertWithWhereUniqueWithoutTourInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutTourInput, VideoUncheckedUpdateWithoutTourInput>
    create: XOR<VideoCreateWithoutTourInput, VideoUncheckedCreateWithoutTourInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutTourInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutTourInput, VideoUncheckedUpdateWithoutTourInput>
  }

  export type VideoUpdateManyWithWhereWithoutTourInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutTourInput>
  }

  export type VideoScalarWhereInput = {
    AND?: VideoScalarWhereInput | VideoScalarWhereInput[]
    OR?: VideoScalarWhereInput[]
    NOT?: VideoScalarWhereInput | VideoScalarWhereInput[]
    id?: IntFilter<"Video"> | number
    tourId?: IntFilter<"Video"> | number
    url?: StringFilter<"Video"> | string
    description?: StringNullableFilter<"Video"> | string | null
    createdAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type TourMaterialUpsertWithWhereUniqueWithoutTourInput = {
    where: TourMaterialWhereUniqueInput
    update: XOR<TourMaterialUpdateWithoutTourInput, TourMaterialUncheckedUpdateWithoutTourInput>
    create: XOR<TourMaterialCreateWithoutTourInput, TourMaterialUncheckedCreateWithoutTourInput>
  }

  export type TourMaterialUpdateWithWhereUniqueWithoutTourInput = {
    where: TourMaterialWhereUniqueInput
    data: XOR<TourMaterialUpdateWithoutTourInput, TourMaterialUncheckedUpdateWithoutTourInput>
  }

  export type TourMaterialUpdateManyWithWhereWithoutTourInput = {
    where: TourMaterialScalarWhereInput
    data: XOR<TourMaterialUpdateManyMutationInput, TourMaterialUncheckedUpdateManyWithoutTourInput>
  }

  export type TourMaterialScalarWhereInput = {
    AND?: TourMaterialScalarWhereInput | TourMaterialScalarWhereInput[]
    OR?: TourMaterialScalarWhereInput[]
    NOT?: TourMaterialScalarWhereInput | TourMaterialScalarWhereInput[]
    id?: IntFilter<"TourMaterial"> | number
    tourId?: IntFilter<"TourMaterial"> | number
    title?: StringFilter<"TourMaterial"> | string
    url?: StringFilter<"TourMaterial"> | string
    type?: EnumMaterialTypeFilter<"TourMaterial"> | $Enums.MaterialType
    createdAt?: DateTimeFilter<"TourMaterial"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutTourInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutTourInput, BookingUncheckedUpdateWithoutTourInput>
    create: XOR<BookingCreateWithoutTourInput, BookingUncheckedCreateWithoutTourInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutTourInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutTourInput, BookingUncheckedUpdateWithoutTourInput>
  }

  export type BookingUpdateManyWithWhereWithoutTourInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutTourInput>
  }

  export type TourCreateWithoutCategoriesInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutCategoriesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput>
  }

  export type TourUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutCategoriesInput, TourUncheckedUpdateWithoutCategoriesInput>
    create: XOR<TourCreateWithoutCategoriesInput, TourUncheckedCreateWithoutCategoriesInput>
  }

  export type TourUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutCategoriesInput, TourUncheckedUpdateWithoutCategoriesInput>
  }

  export type TourUpdateManyWithWhereWithoutCategoriesInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type TourCreateWithoutTagsInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutTagsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutTagsInput, TourUncheckedCreateWithoutTagsInput>
  }

  export type TourUpsertWithWhereUniqueWithoutTagsInput = {
    where: TourWhereUniqueInput
    update: XOR<TourUpdateWithoutTagsInput, TourUncheckedUpdateWithoutTagsInput>
    create: XOR<TourCreateWithoutTagsInput, TourUncheckedCreateWithoutTagsInput>
  }

  export type TourUpdateWithWhereUniqueWithoutTagsInput = {
    where: TourWhereUniqueInput
    data: XOR<TourUpdateWithoutTagsInput, TourUncheckedUpdateWithoutTagsInput>
  }

  export type TourUpdateManyWithWhereWithoutTagsInput = {
    where: TourScalarWhereInput
    data: XOR<TourUpdateManyMutationInput, TourUncheckedUpdateManyWithoutTagsInput>
  }

  export type TourCreateWithoutDatesInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutDatesInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutDatesInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
  }

  export type TourUpsertWithoutDatesInput = {
    update: XOR<TourUpdateWithoutDatesInput, TourUncheckedUpdateWithoutDatesInput>
    create: XOR<TourCreateWithoutDatesInput, TourUncheckedCreateWithoutDatesInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutDatesInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutDatesInput, TourUncheckedUpdateWithoutDatesInput>
  }

  export type TourUpdateWithoutDatesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutDatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutReviewsInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutReviewsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryUncheckedCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type TourUpsertWithoutReviewsInput = {
    update: XOR<TourUpdateWithoutReviewsInput, TourUncheckedUpdateWithoutReviewsInput>
    create: XOR<TourCreateWithoutReviewsInput, TourUncheckedCreateWithoutReviewsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutReviewsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutReviewsInput, TourUncheckedUpdateWithoutReviewsInput>
  }

  export type TourUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUncheckedUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TourCreateWithoutPhotosInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutPhotosInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutPhotosInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutPhotosInput, TourUncheckedCreateWithoutPhotosInput>
  }

  export type TourUpsertWithoutPhotosInput = {
    update: XOR<TourUpdateWithoutPhotosInput, TourUncheckedUpdateWithoutPhotosInput>
    create: XOR<TourCreateWithoutPhotosInput, TourUncheckedCreateWithoutPhotosInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutPhotosInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutPhotosInput, TourUncheckedUpdateWithoutPhotosInput>
  }

  export type TourUpdateWithoutPhotosInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutVideosInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutVideosInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutVideosInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutVideosInput, TourUncheckedCreateWithoutVideosInput>
  }

  export type TourUpsertWithoutVideosInput = {
    update: XOR<TourUpdateWithoutVideosInput, TourUncheckedUpdateWithoutVideosInput>
    create: XOR<TourCreateWithoutVideosInput, TourUncheckedCreateWithoutVideosInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutVideosInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutVideosInput, TourUncheckedUpdateWithoutVideosInput>
  }

  export type TourUpdateWithoutVideosInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutVideosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourCreateWithoutBookingsInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    materials?: TourMaterialCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutBookingsInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    materials?: TourMaterialUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutBookingsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutBookingsInput, TourUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryUncheckedCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: number
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type TourUpsertWithoutBookingsInput = {
    update: XOR<TourUpdateWithoutBookingsInput, TourUncheckedUpdateWithoutBookingsInput>
    create: XOR<TourCreateWithoutBookingsInput, TourUncheckedCreateWithoutBookingsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutBookingsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutBookingsInput, TourUncheckedUpdateWithoutBookingsInput>
  }

  export type TourUpdateWithoutBookingsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUncheckedUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutBookingInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    bookingId?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type BookingCreateWithoutPaymentsInput = {
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tour: TourCreateNestedOneWithoutBookingsInput
    user: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutPaymentsInput = {
    id?: number
    tourId: number
    userId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutPaymentsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
  }

  export type BookingUpsertWithoutPaymentsInput = {
    update: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
    create: XOR<BookingCreateWithoutPaymentsInput, BookingUncheckedCreateWithoutPaymentsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentsInput, BookingUncheckedUpdateWithoutPaymentsInput>
  }

  export type BookingUpdateWithoutPaymentsInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutBookingsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateWithoutMaterialsInput = {
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    guide: GuideCreateNestedOneWithoutToursInput
    categories?: CategoryCreateNestedManyWithoutToursInput
    tags?: TagCreateNestedManyWithoutToursInput
    dates?: TourDateCreateNestedManyWithoutTourInput
    reviews?: ReviewCreateNestedManyWithoutTourInput
    photos?: PhotoCreateNestedManyWithoutTourInput
    videos?: VideoCreateNestedManyWithoutTourInput
    bookings?: BookingCreateNestedManyWithoutTourInput
  }

  export type TourUncheckedCreateWithoutMaterialsInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    guideId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutToursInput
    tags?: TagUncheckedCreateNestedManyWithoutToursInput
    dates?: TourDateUncheckedCreateNestedManyWithoutTourInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutTourInput
    photos?: PhotoUncheckedCreateNestedManyWithoutTourInput
    videos?: VideoUncheckedCreateNestedManyWithoutTourInput
    bookings?: BookingUncheckedCreateNestedManyWithoutTourInput
  }

  export type TourCreateOrConnectWithoutMaterialsInput = {
    where: TourWhereUniqueInput
    create: XOR<TourCreateWithoutMaterialsInput, TourUncheckedCreateWithoutMaterialsInput>
  }

  export type TourUpsertWithoutMaterialsInput = {
    update: XOR<TourUpdateWithoutMaterialsInput, TourUncheckedUpdateWithoutMaterialsInput>
    create: XOR<TourCreateWithoutMaterialsInput, TourUncheckedCreateWithoutMaterialsInput>
    where?: TourWhereInput
  }

  export type TourUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: TourWhereInput
    data: XOR<TourUpdateWithoutMaterialsInput, TourUncheckedUpdateWithoutMaterialsInput>
  }

  export type TourUpdateWithoutMaterialsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type UserCreateWithoutPhotoDiariesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhotoDiariesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    processedPhotos?: UserProcessedPhotoUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhotoDiariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotoDiariesInput, UserUncheckedCreateWithoutPhotoDiariesInput>
  }

  export type UserUpsertWithoutPhotoDiariesInput = {
    update: XOR<UserUpdateWithoutPhotoDiariesInput, UserUncheckedUpdateWithoutPhotoDiariesInput>
    create: XOR<UserCreateWithoutPhotoDiariesInput, UserUncheckedCreateWithoutPhotoDiariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotoDiariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotoDiariesInput, UserUncheckedUpdateWithoutPhotoDiariesInput>
  }

  export type UserUpdateWithoutPhotoDiariesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotoDiariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    processedPhotos?: UserProcessedPhotoUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProcessedPhotosInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProcessedPhotosInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    phone?: string | null
    role?: $Enums.Role
    profilePicUrl?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guide?: GuideUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    photoDiaries?: PhotoDiaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProcessedPhotosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
  }

  export type UserUpsertWithoutProcessedPhotosInput = {
    update: XOR<UserUpdateWithoutProcessedPhotosInput, UserUncheckedUpdateWithoutProcessedPhotosInput>
    create: XOR<UserCreateWithoutProcessedPhotosInput, UserUncheckedCreateWithoutProcessedPhotosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcessedPhotosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcessedPhotosInput, UserUncheckedUpdateWithoutProcessedPhotosInput>
  }

  export type UserUpdateWithoutProcessedPhotosInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProcessedPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profilePicUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    photoDiaries?: PhotoDiaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingCreateManyUserInput = {
    id?: number
    tourId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    tourId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PhotoDiaryCreateManyUserInput = {
    id?: number
    title: string
    notes?: string | null
    photos: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProcessedPhotoCreateManyUserInput = {
    id?: number
    rawUrl: string
    processedUrl?: string | null
    status?: $Enums.ProcessingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tour?: TourUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    tourId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDiaryUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDiaryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDiaryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    photos?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProcessedPhotoUpdateWithoutUserInput = {
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProcessedPhotoUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProcessedPhotoUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    rawUrl?: StringFieldUpdateOperationsInput | string
    processedUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourCreateManyGuideInput = {
    id?: number
    title: string
    description: string
    region: string
    difficulty: $Enums.DifficultyLevel
    price: number
    program: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TourUpdateWithoutGuideInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutGuideInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutGuideInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateCreateManyTourInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyTourInput = {
    id?: number
    userId: number
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PhotoCreateManyTourInput = {
    id?: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type VideoCreateManyTourInput = {
    id?: number
    url: string
    description?: string | null
    createdAt?: Date | string
  }

  export type TourMaterialCreateManyTourInput = {
    id?: number
    title: string
    url: string
    type: $Enums.MaterialType
    createdAt?: Date | string
  }

  export type BookingCreateManyTourInput = {
    id?: number
    userId: number
    status?: $Enums.BookingStatus
    participants: number
    totalPrice: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutToursInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpdateWithoutToursInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutToursInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TourDateUpdateWithoutTourInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourDateUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutTourInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUpdateWithoutTourInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutTourInput = {
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourMaterialUpdateWithoutTourInput = {
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourMaterialUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourMaterialUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    type?: EnumMaterialTypeFieldUpdateOperationsInput | $Enums.MaterialType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutTourInput = {
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    payments?: PaymentUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutTourInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    participants?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    tags?: TagUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TourUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: GuideUpdateOneRequiredWithoutToursNestedInput
    categories?: CategoryUpdateManyWithoutToursNestedInput
    dates?: TourDateUpdateManyWithoutTourNestedInput
    reviews?: ReviewUpdateManyWithoutTourNestedInput
    photos?: PhotoUpdateManyWithoutTourNestedInput
    videos?: VideoUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUpdateManyWithoutTourNestedInput
    bookings?: BookingUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutToursNestedInput
    dates?: TourDateUncheckedUpdateManyWithoutTourNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutTourNestedInput
    photos?: PhotoUncheckedUpdateManyWithoutTourNestedInput
    videos?: VideoUncheckedUpdateManyWithoutTourNestedInput
    materials?: TourMaterialUncheckedUpdateManyWithoutTourNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutTourNestedInput
  }

  export type TourUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyLevelFieldUpdateOperationsInput | $Enums.DifficultyLevel
    price?: FloatFieldUpdateOperationsInput | number
    program?: JsonNullValueInput | InputJsonValue
    guideId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyBookingInput = {
    id?: number
    amount: number
    paymentMethod: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    transactionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutBookingInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
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
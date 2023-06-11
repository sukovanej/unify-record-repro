 - @effect/data 0.12.6
 - typescript 5.2.0-dev.20230611

```ts
import { Unify } from '@effect/data/Unify';

type T = Unify<{ [k: string]: string }>;
const f = (a: { [k: string]: string }) => a;
declare const v: T;
f(v);
```

Type of `T` is 

```
string | number | {
    [k: string]: string;
} | IterableIterator<string> | ((pos: number) => string) | ((index: number) => number) | ((searchString: string, position?: number | undefined) => number) | ... 16 more ... | ((url: string) => string)
```

Run `pnpm build`.

```
index.ts:6:3 - error TS2345: Argument of type 'string | number | { [k: string]: string; } | IterableIterator<string> | ((pos: number) => string) | ((index: number) => number) | ((searchString: string, position?: number | undefined) => number) | ... 16 more ... | ((url: string) => string)' is not assignable to parameter of type '{ [k: string]: string; }'.
  Type 'string' is not assignable to type '{ [k: string]: string; }'.

6 f(v);
```

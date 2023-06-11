import { Unify } from '@effect/data/Unify';

type T = Unify<{ [k: string]: string }>;
const f = (a: { [k: string]: string }) => a;
declare const v: T;
f(v);

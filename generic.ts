const score: Array<number> = []
const names: Array<string> = []
function identityOne(val: boolean | number): boolean |number{
    return val;
}
function identity_second<Type>(val: Type): Type{
    return val;
}
identity_second("three");
identity_second(3);

function identity_four<T>(val: T):T{
    return val;
}

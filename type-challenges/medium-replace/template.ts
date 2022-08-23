type Replace<S extends string, From extends string, To extends string> = S extends `${infer Left}${From}${infer Right}`
    ? From extends '' ? S : `${Left}${To}${Right}`
    : S

export function Log(): MethodDecorator {
  return function (target: Function, key: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(` -> Entering ${key} method`);
      console.log(
        `%c ${key} method args:${args}`,
        'background:green;color:white'
      );
      const result = originalMethod.apply(this, args);
      console.log(` <- Leaving ${key} method`);

      return result;
    };

    return descriptor;
  };
}

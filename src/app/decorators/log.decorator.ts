export function Log(): MethodDecorator {
  return function (target: Function, propertyKey: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(` |-> Entering '${propertyKey}' method`);
      console.log(
        `%c "${propertyKey}" method args:${args}`,
        'background:green;color:white'
      );
      const result = originalMethod.apply(this, args);
      console.log(` <-| Leaving '${propertyKey}' method`);

      return result;
    };

    return descriptor;
  };
}

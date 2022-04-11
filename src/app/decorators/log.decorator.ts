export function Log(params?: { color?: string }): MethodDecorator {
  return function (target: Function, propertyKey: string, descriptor: any) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.log(
        `%c |-> Entering '${propertyKey}' method`,
        params ? `color:${params.color}` : ''
      );
      console.log(
        `%c "${propertyKey}" method args:${args}`,
        'background:green;color:white'
      );
      const result = originalMethod.apply(this, args);
      console.log(
        `%c <-| Leaving '${propertyKey}' method`,
        params ? `color:${params.color}` : ''
      );

      return result;
    };

    return descriptor;
  };
}

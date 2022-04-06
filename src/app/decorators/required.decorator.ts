export function Required(target: object, propertyKey: string): void {
  Object.defineProperty(target, propertyKey, {
    get() {
      throw new Error(`Attribute '${propertyKey}' is required.`);
    },
    set(value) {
      Object.defineProperty(target, propertyKey, {
        value,
        writable: true,
        configurable: true,
      });
    },
    configurable: true,
  });
}

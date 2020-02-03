interface IOptional<T> {
    value: T | null;
    isDefined(): boolean;
    isEmpty(): boolean;
    nonEmpty(): boolean;
    getOrElse(value: T): T;
    get(): T | null;
    equal(value: IOptional<T>): boolean;
}

class Optional<T> implements IOptional<T> {
    value: T | null = null;

    constructor(value: T | null) {
        this.value = value;
    }

    isDefined(): boolean {
        return this.nonEmpty();
    }
    isEmpty(): boolean {
        return this.value == null;
    }
    nonEmpty(): boolean {
        return !this.isEmpty();
    }
    getOrElse(value: T): T {
        if (this.nonEmpty()) {
            return this.value!;
        } else {
            return value;
        }
    }
    get(): T | null {
        return this.value;
    }

    equal(value: IOptional<T>): boolean {
        if (this.value == value.value) {
            return true;
        }
        return false;
    }

    static some<K>(value: K): Optional<K> {
        return new Optional(value);
    }

    static none<K>(): Optional<K> {
        return new Optional<K>(null);
    }
}

(window as any).Optional = Optional;
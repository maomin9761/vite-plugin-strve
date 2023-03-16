declare function strve(): {
    name: string;
    enforce: string;
    transform(code: string, id: string): {
        code: string;
    } | undefined;
};

export { strve as default };

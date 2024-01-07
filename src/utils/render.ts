export const render = (condition: boolean, component1: JSX.Element, component2?: JSX.Element) => {
    return condition ? component1 : component2 || null;
};

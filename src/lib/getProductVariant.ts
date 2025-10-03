interface Product {
    name: string;
    attributes: { name: string; options: string[] }[];
}

export function getProductNameAndVariant(product: Product) {
    const sizeAttr = product.attributes.find(
        (attr) => attr.name.toLowerCase() === "size"
    );
    const colorAttr = product.attributes.find(
        (attr) => attr.name.toLowerCase() === "color"
    );

    const variants: { size?: string[]; color?: string[] } = {};

    if (sizeAttr?.options?.length) {
        variants.size = sizeAttr.options;
    }
    if (colorAttr?.options?.length) {
        variants.color = colorAttr.options;
    }

    return {
        name: product.name,
        variant: variants,
    };
}

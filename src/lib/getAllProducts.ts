export const getAllProducts = async ({
    perPage = 12,
    page = 1,
}: {
    perPage?: number;
    page?: number;
} = {}) => {
    const response = await fetch(
        `${process.env.WOOCOMMERCE_API_URL}/products?per_page=${perPage}&page=${page}`,
        {
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.WOOCOMMERCE_CONSUMER_KEY}:${process.env.WOOCOMMERCE_CONSUMER_SECRET}`
                    ).toString("base64"),
            },
            cache: "no-cache"
        }
    );

    if (!response.ok) {
        throw new Error(`WooCommerce fetch error: ${response.status}`);
    }

    const data = await response.json();

    // Get total pages & total items from headers
    const total = response.headers.get("x-wp-total");
    const totalPages = response.headers.get("x-wp-totalpages");

    return {
        products: data,
        total: total ? parseInt(total, 10) : 0,
        totalPages: totalPages ? parseInt(totalPages, 10) : 1,
        currentPage: page,
    };
};

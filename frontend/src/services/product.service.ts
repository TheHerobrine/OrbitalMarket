import ApiService from "@/services/api.service";

export interface IProduct {
    _id: string;
    title: string;
    slug: string;
    owner: string;
    releaseDate: string;
    price: { value: number };
    discount: { value: number };
    description: {
        short: string;
        long: string;
        technical: string;
    };
    pictures: { thumbnail: Array<string>, screenshot: Array<string> };
    computed: {
        score: {
            value: number;
            totalRatings: number;
            meanRating: number;
        },
        isBoosted: boolean
    }
}

export default {
    async getById (id: string | number): Promise<IProduct> {
        const result = await ApiService.get(`/products/product/${id}`);
        return result.data;
    }
};

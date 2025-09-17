import { servicesList } from "./lib/servicesList";

const sitemap = () => {

    const BASE_URL = "https://vidsave.ru";

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: `${BASE_URL}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        ...servicesList.map((service) => ({
                url: `${BASE_URL}/services/${service.serviceName}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.7
        }))
    ];
};

export default sitemap;
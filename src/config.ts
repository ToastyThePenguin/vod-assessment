const apiUrl = process.env.RAECT_APP_API_URL
export const services: any = {
    content: {
        getByType: `${apiUrl}/content/type/:type`,
        getOne: `${apiUrl}/content/:guid`
    }
}
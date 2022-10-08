const apiUrl = process.env.REACT_APP_API_URL
export const services: any = {
    content: {
        getByType: `${apiUrl}/content/type/:type`,
        getOne: `${apiUrl}/content/:guid`,
        getChildren: `${apiUrl}/content/:guid/children`,
    }
}
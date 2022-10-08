import { services } from '../config';

class ContentService {
    static getByType = async(type: string) => {
        try {
            const url = services.content.getByType.replace(':type', type)
            const response = await fetch(url)
            return response.json()
        } catch (error) {
            console.log(error);
            return { success: false, message: error };
          }; 
    }

    static getOne = async(guid: string) => {
        try {
            const url = services.content.getOne.replace(':guid', guid)
            const response = await fetch(url)
            return response.json()
        } catch (error) {
            console.log(error);
            return { success: false, message: error };
          }; 
    }
}

export default ContentService;
import * as uuid from 'uuid';
import * as path from 'path';


class FileService {
    saveFile(file) {
        try {
            const file_name = uuid.v4() + '.jpg';
            const filePath = path.resolve('static', file_name)
            file.mv(filePath);
            return file_name
        } catch (error) {
            console.log(error)
        }
    }

}

export default new FileService();
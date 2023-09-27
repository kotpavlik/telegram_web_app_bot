import Clothes from '../model/PinkPunkSchema.mjs';
import FileService from './fileService.mjs'

class Service {
    async getAll() {
        const all_clothes = await Clothes.find()
        const all_clothes_new = all_clothes.map((clothes) => ({
            ...clothes._doc,
            photo: `http://localhost:8088/${clothes.photo}`
        }))
        return all_clothes_new
    }

    async create(clothes_data, photo) {
        const fileName = FileService.saveFile(photo)
        const new_clothes = await Clothes.create({
            ...clothes_data,
            photo: fileName
        });
        return new_clothes;
    }


    async getOne(id) {
        if (!id) {
            throw new Error('ID not founded')
        }
        const one_clothes = await Clothes.findById(id)
        return one_clothes;

    }


    async update(clothes) {

        if (!clothes._id) {
            throw new Error('Id no founded ')
        }
        const update_clothes = await Clothes.findByIdAndUpdate(clothes._id, clothes, {
            new: true
        })
        return update_clothes;


    }


    async delete(id) {
        if (!id) {
            throw new Error('Id not found')
        }
        const deleted_clothes = await Clothes.findByIdAndDelete(id)
        return deleted_clothes;

    }
}

export default new Service();
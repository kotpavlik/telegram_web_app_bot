import Clothes from '../model/PinkPunkSchema.mjs';
import Service from '../PinkPunkService/service.mjs'



class ClothesController {

    async getAll(req, res) {
        try {
            const all_clothes = await Service.getAll()
            return res.status(200).json(all_clothes)
        } catch (error) {
            res.status(500).json(`server have this problem ${error}`)
        }
    }
    async create(req, res) {
        try {
            const new_clothes = await Service.create(req.body, req.files.photo)
            res.status(200).json(new_clothes)
        } catch (error) {
            res.status(500).json(`problem here ${error}`)
        }
    }


    async getOne(req, res) {
        try {
            const one_clothes = await Clothes.findById(req.params.id)
            return res.status(200).json(one_clothes)
        } catch (error) {
            res.status(500).json(`server have this problem ${error}`)
        }
    }


    async update(req, res) {
        try {
            const clothes = req.body
            const update_clothes = await Service.update(clothes)
            return res.status(200).json(update_clothes)

        } catch (error) {
            res.status(500).json(`server have this problem ${error.message}`)
        }
    }


    async delete(req, res) {
        try {
            const deleted_clothes = await Service.delete(req.params.id)
            return res.status(200).json(deleted_clothes)
        } catch (error) {
            res.status(500).json(`server have this problem ${error}`)
        }
    }
}

export default new ClothesController();
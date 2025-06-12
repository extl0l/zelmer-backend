import { OpinionModel } from "../models/opinionModel";
import factory from "./handleFactory"

export default {
    getAllDangers: factory.getAll(OpinionModel),
    getOne: factory.getOne(OpinionModel),
    deleteOne: factory.deleteOne(OpinionModel),
    patchOne: factory.patchOne(OpinionModel),
    createOne: factory.createOne(OpinionModel) 
}
import mongoose from 'mongoose'

const ObjectCategorySchema = new mongoose.Schema({
    name: String,
    options: [Object]
})

const ObjectCategory = mongoose.model('object_category', ObjectCategorySchema);


export default ObjectCategory;
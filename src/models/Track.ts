import {Schema, model} from 'mongoose';

const TracksSchema = new Schema({
    id: {type:String},
    title: {type: String, required:true},
    singer: {type: String, required:true},
    year: {type: Number, required:true},
    duration: {type: Number, required:true},
    user: [{type: Schema.Types.ObjectId,
        ref: 'User'}]
})
export default model('Track', TracksSchema);
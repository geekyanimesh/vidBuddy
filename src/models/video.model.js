import mongoose, {Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String,   // cloudinary url
        required: true,
    },
    thumbnail: { 
        type: String,   // cloudinary url
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,duration: {
            type: Number,
            required: true,
        },
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished : {
        type: Boolean,
        default: true
    },
    
},{timestamps: true})

export const Video = mongoose.model("Video", videoSchema)
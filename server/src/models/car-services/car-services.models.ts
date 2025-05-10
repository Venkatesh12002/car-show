import mongoose from "mongoose";

export interface ICarService extends mongoose.Document {
  serviceName: string;
  description?: string;
  price: string;
  img_url: string;
  duration: string;
  isActive: boolean;
}

const carServiceSchema = new mongoose.Schema({
    serviceName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    required: true
  },
  img_url: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export const CarService = mongoose.model<ICarService>('CarService', carServiceSchema);
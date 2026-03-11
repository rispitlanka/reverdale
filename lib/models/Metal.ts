import { Schema, model, models, Document } from 'mongoose';

export interface MetalDocument extends Document {
  name: string;
  basePrice: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MetalSchema = new Schema<MetalDocument>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    basePrice: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Metal =
  (models.Metal as ReturnType<typeof model<MetalDocument>>) ||
  model<MetalDocument>('Metal', MetalSchema);

export default Metal;


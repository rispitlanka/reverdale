import { Schema, model, models, Document, Types } from 'mongoose';

export interface TodayPriceDocument extends Document {
  metalId: Types.ObjectId;
  price: number;
  showOnSite: boolean;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const TodayPriceSchema = new Schema<TodayPriceDocument>(
  {
    metalId: {
      type: Schema.Types.ObjectId,
      ref: 'Metal',
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    showOnSite: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const TodayPrice =
  (models.TodayPrice as ReturnType<typeof model<TodayPriceDocument>>) ||
  model<TodayPriceDocument>('TodayPrice', TodayPriceSchema);

export default TodayPrice;


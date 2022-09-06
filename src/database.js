import mongoose from "mongoose";
import config from "./config";

export const conecionDB = mongoose.connect(config.mongodbURL)
                          .then(()=> console.log('conectado a mongo'))
                          .catch((err) => console.log(err))
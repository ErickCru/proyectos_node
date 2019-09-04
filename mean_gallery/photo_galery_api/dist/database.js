"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function conecction() {
    await mongoose_1.connect('mongodb://localhost/photo-gallery-db', {
        useNewUrlParser: true,
        useFindAndModify: false
    });
    console.log('database is connected');
}
exports.conecction = conecction;

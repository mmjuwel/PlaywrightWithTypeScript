import path from 'path'
import { readCSV } from '../utils/csvReader';
import fs, { readFileSync } from 'fs';

export function readData(filePath: string, sheetName?: string) {

    const ext = path.extname(filePath).toLocaleLowerCase();

    switch (ext) {

        case ".csv":
            return readCSV(filePath);

        case ".json":
            const JSONData = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(JSONData)

        default:
            throw new Error(`Unsupported file type - ${ext}`);
    }

}
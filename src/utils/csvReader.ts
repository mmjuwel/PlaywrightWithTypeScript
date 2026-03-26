import fs from 'fs';
import path from 'path'
import { parse } from 'csv-parse/sync';

export function readCSV(filePath: string){

    const fileContent = fs.readFileSync(filePath);

    const testData = parse(fileContent,{
        columns:true,
        skip_empty_lines: true
    });
    return testData;
}
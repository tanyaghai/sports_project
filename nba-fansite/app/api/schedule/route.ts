import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app/schedule/data/october.csv');
    const csvData = await fs.readFile(filePath, 'utf-8');
    return new NextResponse(csvData);
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return new NextResponse('Error reading schedule data', { status: 500 });
  }
} 
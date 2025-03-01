import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'app/stats/teamstats.csv');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const lines = fileContent.split('\n').filter(line => line.trim());
    
    const headers = lines[0].split(',');
    const teams = lines.slice(1, -1).map(line => {
      const values = line.split(',');
      const stats: any = {};
      headers.forEach((header, index) => {
        stats[header] = isNaN(Number(values[index])) ? values[index] : Number(values[index]);
      });
      return stats;
    });
    
    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load team stats' }, { status: 500 });
  }
} 
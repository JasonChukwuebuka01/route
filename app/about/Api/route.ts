import { tableData } from '@/data/tableData';
import { NextRequest, NextResponse } from 'next/server';


// GET /api/about
export async function GET() {
    try {

        return NextResponse.json(
            tableData,
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                error: 'Internal Server Error',
                status: 500
            },
            { status: 500 }
        );
    }
}

export async function POST(req: NextRequest) {

    const data = await req.json();

    const { comment } = data;

    console.log("text", comment);

    const newComment = {
        id: tableData.length + 1,
        comment:comment
    };

    tableData.push(newComment);

    return NextResponse.json(
        tableData,
        {
            status: 201
        }
    );
}





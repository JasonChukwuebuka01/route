import { tableData } from "@/data/tableData";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
    

    try {

        const findIndex = tableData.findIndex(item => item.id === parseInt(params.id));

        console.log( "findIndex", findIndex);

        const data = await req.json();

         if(findIndex === -1) {

            return NextResponse.json(
                {
                    error: "Comment not found",
                    status: 404,
                },
                { status: 404 }
            );
         }

        tableData[findIndex].comment = data.comment;

        return NextResponse.json(tableData, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            {
                error: "Internal Server Error",
                status: 500,
            },
            { status: 500 }
        );

    }

};

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const findIndex = tableData.findIndex(item => item.id === parseInt(params.id));
        tableData.splice(findIndex, 1);

        return NextResponse.json(tableData, { status: 201 });

    } catch (error) {
        return NextResponse.json(
            {
                error: "Internal Server Error",
                status: 500,
            },
            { status: 500 }
        );

    }
}
import pool from "@/libs/mysql";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }: { params: { id: number } }) {
    
    const id = params.id

    try {
        const db = await pool.getConnection()
        const query = "SELECT * FROM pages WHERE id = ?"
        const [rows] = await db.execute(query,[id])
        db.release()

        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    } 
}
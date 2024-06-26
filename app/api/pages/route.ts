import pool from "@/libs/mysql";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const db = await pool.getConnection()
        const query = "SELECT * FROM pages"
        const [rows] = await db.execute(query)
        db.release()

        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, { status: 500 })
    } 
}
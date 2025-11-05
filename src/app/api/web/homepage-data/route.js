import { connectDB } from "@/lib/mongodb";
import Category from "@/models/categoryModel";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await connectDB();

        // Optional filters via query params
        const { searchParams } = new URL(req.url);
        const status = searchParams.get('status');

        const categoryQuery = {};

        if (status !== null) {
            categoryQuery.status = status === 'true';
        }

        const categories = await Category
            .find(categoryQuery)
            .sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            data: {
                categories,
            },
        });
    } catch (error) {
        console.error("GET /api/web/homepage-data error:", error);
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}

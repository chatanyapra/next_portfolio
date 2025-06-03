import { connectToDB } from '@/lib/mongodb';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDB();
    const user = await User.findOne({ username: "chatanya" });
    
    console.log('User found:', user);
    if (!user) {
      return NextResponse.json({ success: false, message: 'No user found' });
    }
    return NextResponse.json({ success: true, message: 'Connected to MongoDB' });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
}

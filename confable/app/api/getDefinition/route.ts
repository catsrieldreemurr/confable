import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        const body = await req.json()
        const word = body.word;

        if(!word){
            return NextResponse.json({
                hasFailed: true,
                message: 'No word provided'
            
            }, {status: 400})
        }

        const APICALL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

        const res = await fetch(APICALL);
        
        if(!res.ok){
            return new Response(JSON.stringify({
                hasFailed: true,
                message: "Something unexpected went wrong. Our bad."
            }), {status: res.status})
        }

        const data = await res.json();
        
        return NextResponse.json(data);
    }
    catch(err){
        return new Response(JSON.stringify({
            hasFailed: true,
            message: {err}
        }), {status: 500})
    }
    
}
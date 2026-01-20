import { NextResponse } from "next/server";

const APICALL = "https://random-word-api.herokuapp.com/word/?length=5"

export async function GET(){
    try{
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
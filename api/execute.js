// Netlify/Vercel Function - api/execute.js
export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { source_code, language_id, stdin } = req.body;
        
        // Your API key is stored as environment variable on the server
        const response = await fetch('https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=false', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.JUDGE0_API_KEY // Server-side environment variable
            },
            body: JSON.stringify({
                source_code: Buffer.from(source_code).toString('base64'),
                language_id,
                stdin: stdin ? Buffer.from(stdin).toString('base64') : undefined,
                cpu_time_limit: 5,
                memory_limit: 128000,
                wall_time_limit: 10
            })
        });

        const result = await response.json();
        res.status(response.status).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

// For getting results
export async function getResult(req, res) {
    const { token } = req.query;
    
    try {
        const response = await fetch(
            `https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=*`,
            {
                headers: {
                    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
                    'X-RapidAPI-Key': process.env.JUDGE0_API_KEY
                }
            }
        );

        const result = await response.json();
        res.status(response.status).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

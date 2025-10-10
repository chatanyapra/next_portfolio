// For Next.js App Router - /app/api/github-languages/route.ts
import { NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

export async function GET() {
    if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
        return NextResponse.json({ error: "Missing GitHub credentials" }, { status: 500 });
    }

    try {
        const repoRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github.v3+json",
            },
        });

        if (!repoRes.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repos = await repoRes.json();
        const languageStats: Record<string, number> = {};
        let totalBytes = 0;

        for (const repo of repos) {
            const langRes = await fetch(repo.languages_url, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: "application/vnd.github.v3+json",
                },
            });

            if (!langRes.ok) continue;

            const langData = await langRes.json();
            for (const [lang, bytes] of Object.entries(langData)) {
                languageStats[lang] = (languageStats[lang] || 0) + Number(bytes);
                totalBytes += Number(bytes);
            }
        }

        // Define the allowed languages to display
        const allowedLanguages = [
            'JavaScript', 
            'CSS', 
            'HTML', 
            'TypeScript', 
            'Java', 
            'Go', 
            'Dockerfile', 
            'PHP', 
            'Blade', 
            'C++'
        ];

        // Filter and calculate percentages only for allowed languages
        const filteredLanguageStats: Record<string, number> = {};
        let filteredTotalBytes = 0;

        for (const lang in languageStats) {
            if (allowedLanguages.includes(lang)) {
                filteredLanguageStats[lang] = languageStats[lang];
                filteredTotalBytes += languageStats[lang];
            }
        }

        const percentageStats: Record<string, string> = {};
        for (const lang in filteredLanguageStats) {
            percentageStats[lang] = ((filteredLanguageStats[lang] / filteredTotalBytes) * 100).toFixed(2) + "%";
        }

        return NextResponse.json({ languages: percentageStats });
    } catch (error: any) {
        return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
    }
}

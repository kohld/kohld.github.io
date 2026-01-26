/**
 * This script fetches GitHub repository data and user statistics for the portfolio.
 * It is intended to be run during the build process.
 */

const USERNAME = "kohld";
const TOKEN = process.env.GH_TOKEN;

async function fetchGitHubData() {
    console.log(`Fetching GitHub data for ${USERNAME}...`);

    const headers: HeadersInit = TOKEN ? { Authorization: `token ${TOKEN}` } : {};

    try {
        // Fetch user profile and stats
        const userResponse = await fetch(`https://api.github.com/users/${USERNAME}`, { headers });
        const userData = await userResponse.json();

        if (!userResponse.ok) {
            throw new Error(`Failed to fetch user: ${userData.message}`);
        }

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`, { headers });
        const reposData = await reposResponse.json();

        if (!reposResponse.ok) {
            throw new Error(`Failed to fetch repos: ${reposData.message}`);
        }

        // Filter and sort repos (e.g., non-forks, sorted by stars)
        const featuredRepos = reposData
            .filter((repo: any) => !repo.fork && !repo.archived)
            .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
            .slice(0, 4)
            .map((repo: any) => ({
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.name.toLowerCase() === USERNAME.toLowerCase() ? "Profile" : (repo.language || "Content"),
                updatedAt: repo.updated_at,
            }));

        // Prepare final data object
        const finalData = {
            user: {
                login: userData.login,
                name: userData.name,
                avatarUrl: userData.avatar_url,
                bio: userData.bio,
                publicRepos: userData.public_repos,
                followers: userData.followers,
                following: userData.following,
                createdAt: userData.created_at,
            },
            featuredRepos,
            fetchedAt: new Date().toISOString(),
        };

        // Save to file
        const path = "./data/github-activity.json";
        await Bun.write(path, JSON.stringify(finalData, null, 2));
        console.log(`Successfully saved GitHub data to ${path}`);

    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        process.exit(1);
    }
}

fetchGitHubData();

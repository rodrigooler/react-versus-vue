export async function getRepositoryData(repository) {
    const response = await fetch("https://api.github.com/repos/" + repository);
    const result = await response.json();
    return {
        stars: result.stargazers_count,
        forks: result.forks_count,
        watchers: result.watchers_count,
    };
}
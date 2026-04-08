import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = 'ekam-it-solutions';
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '');
  if (repoName) {
    repo = repoName;
    assetPrefix = `/${repo}/`;
    basePath = `/${repo}`;
  }
}

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_URL: isGithubActions 
      ? 'https://thomasandersonmat-openclaw.github.io/ekam-it-solutions' 
      : 'http://localhost:3000',
  }
};

export default nextConfig;

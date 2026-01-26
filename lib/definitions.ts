import React from 'react';

/**
 * Represents a project or contribution in the portfolio.
 */
export interface Project {
  /** The title of the project or organization. */
  title: string;
  /** List of technologies used in the project. */
  technologies: string[];
  /** A detailed description of the work performed or project's purpose. */
  description: string;
  /** An optional URL to the live project or organization website. */
  link: string;
}

/**
 * Basic user profile information fetched from the GitHub API.
 */
export interface GitHubUser {
  /** The GitHub username. */
  login: string;
  /** The full name of the user. */
  name: string;
  /** URL to the user's GitHub avatar. */
  avatarUrl: string;
  /** The user's biography. */
  bio: string;
  /** Number of public repositories. */
  publicRepos: number;
  /** Number of followers. */
  followers: number;
  /** Number of users following. */
  following: number;
  /** The ISO date string of when the account was created. */
  createdAt: string;
}

/**
 * Information about a specific GitHub repository.
 */
export interface GitHubRepo {
  /** The name of the repository. */
  name: string;
  /** The repository description, can be null. */
  description: string | null;
  /** URL to the repository on GitHub. */
  url: string;
  /** Number of stars the repository has received. */
  stars: number;
  /** Number of forks of the repository. */
  forks: number;
  /** Primary programming language or content type. */
  language: string;
  /** The ISO date string of the last update. */
  updatedAt: string;
}

/**
 * The full dataset structure for GitHub activity.
 */
export interface GitHubActivityData {
  /** The user's profile information. */
  user: GitHubUser;
  /** A list of selected repositories to showcase. */
  featuredRepos: GitHubRepo[];
  /** The ISO date string of when the data was last fetched. */
  fetchedAt: string;
}

/**
 * Props for the FadeIn animation wrapper component.
 */
export interface FadeInProps {
  /** The content to be animated. */
  children: React.ReactNode;
  /** Optional CSS class name for the wrapper. */
  className?: string;
}

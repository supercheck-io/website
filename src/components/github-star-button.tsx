"use client";
import GitHubButton from "react-github-btn";

interface GitHubStarButtonProps {
  repo: string;
  className?: string;
}

export default function GitHubStarButton({
  repo,
  className = "",
}: GitHubStarButtonProps) {
  return (
    <div
      className={`pt-10 mr-1 inline-flex items-center justify-center ${className}`}
      style={{
        transform: "scale(1.4)",
        transformOrigin: "center",
        minHeight: "50px",
        minWidth: "160px",
      }}
    >
      <GitHubButton
        href={`https://github.com/${repo}`}
        data-color-scheme="no-preference: light; light: light; dark: dark;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label={`Star ${repo} on GitHub`}
      >
        Star
      </GitHubButton>
    </div>
  );
}

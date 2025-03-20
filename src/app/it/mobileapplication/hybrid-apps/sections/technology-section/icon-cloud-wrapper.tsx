"use client";

import { IconCloud } from "./icon-interactive";

export function IconCloudWrapper() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-gray-800">
      Our Technology Stack
      </h2>
      <div className="flex justify-center items-center h-full w-full">
        <IconCloud 
          iconSlugs={[
            'android',
            'java',
            'kotlin',
            'firebase',
            'androidstudio',
            'gradle',
            'materialdesign',
            'reactnative',
            'flutter',
            'typescript',
            'javascript',
            'git',
            'github',
            'sqlite',
            'mongodb',
            'postgresql',
            'redux',
            'graphql',
            'docker',
            'jira'
          ]} 
        />
      </div>
    </div>
  );
}
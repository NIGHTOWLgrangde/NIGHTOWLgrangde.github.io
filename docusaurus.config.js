// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { url } from 'inspector';
import { themes as prismThemes } from 'prism-react-renderer';
const fs = require('fs-extra');
const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '沐沐的自闭小站',
  tagline: '可安可可可爱了!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nightowlgrangde-github-io.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NIGHTOWLgrangde', // Usually your GitHub org/user name.
  projectName: 'NIGHTOWLgrangde.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          blogSidebarTitle: '沐沐的日记本',
          blogSidebarCount: 10,
          showReadingTime: true,

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/fox.png',
      navbar: {
        hideOnScroll: true,
        title: '欢迎来到沐沐的自闭小站',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '自我介绍',
            to: '/docs/intro',
          },
          {
            label: '博客',
            to: '/blog',
          },
          {
            label: '歌歌',
            to: '/docs/song',
          },
          {
            label: '大调查你的人品',
            to: '/docs/jrrp',
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '你想找什么?',
            items: [
              {
                label: '自我介绍',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '歌歌',
                to: '/docs/song',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '乾狐离光的小站',
                href:'https://qhlg.flime.top/'
              }

            ],
          },
        ],
        copyright: `Copyright ©2025 沐沐的自闭小站. Built with Docusaurus.<a href="https://icp.gov.moe/?keyword=20255008" target="_blank">萌ICP备20255008号</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      giscus: {
        repo: 'NIGHTOWLgrangde/NIGHTOWLgrangde.github.io',
        repoId: 'R_kgDOOvNjJA',
        category: 'Announcements',
        categoryId: 'DIC_kwDOOvNjJM4CqgVs',
      }
    }),
  // Add the Cloudflare Web Analytics script
  scripts: [
  ],
};

export default config;

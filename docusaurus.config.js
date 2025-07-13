const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'create-spec-driven-project',
  tagline: 'Bootstrap spec-driven development projects with ease',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://dendroman.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/sdd4ai/',

  // GitHub pages deployment config
  organizationName: 'dendroman',
  projectName: 'sdd4ai',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          path: './specs',
          editUrl: 'https://github.com/dendroman/sdd4ai/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./docusaurus/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        title: 'create-spec-driven-project',
        logo: {
          alt: 'Spec-Driven Development Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'specsSidebar',
            position: 'left',
            label: 'Specifications',
          },
          {
            href: 'https://github.com/dendroman/sdd4ai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Specifications',
                to: '/',
              },
              {
                label: 'Features',
                to: '/category/features',
              },
              {
                label: 'Components',
                to: '/category/components',
              },
            ],
          },
          {
            title: 'Development',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/dendroman/sdd4ai',
              },
              {
                label: 'Issues',
                href: 'https://github.com/dendroman/sdd4ai/issues',
              },
              {
                label: 'Roadmap',
                href: 'https://github.com/dendroman/sdd4ai#-development-roadmap',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} create-spec-driven-project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'json', 'typescript'],
      },
    }),
};

module.exports = config;

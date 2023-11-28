// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Quinn Le",
  tagline: 'Welcome to my Online Learning Journal.',
  favicon: 'img/meowbulb.svg',

  // Set the production url of your site here
  url: 'https://quynhnle135.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-website/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quynhnle135', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        
      },
      image: 'img/smile.svg',
      navbar: {
        title: "Quinn Le",
        logo: {
          alt: 'My Site Logo',
          src: 'img/meowbulb.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/quynhnle135',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title:'Docs',
            items: [
              {
                label: 'Learning Journal',
                to: '/docs/category/learning-journal',
              },
              {
                label: 'Daily Practice',
                to: '/docs/category/daily-practice',
              },
              {
                label: 'Tech Blogs',
                to: '/docs/category/tech-blogs',
              }
            ]
          },
          {
            title: 'Get In Touch',
            items: [
              {
                label: 'Email',
                to: 'mailto:quynhnle135@gmail.com',
              },
              {
                label: 'Phone',
                to: 'tel:+16093251446',
              }
            ]
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'LinkedIn',
                href : 'https://www.linkedin.com/in/quinnle13/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/quynhnle135',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quinn Le &#128171;`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

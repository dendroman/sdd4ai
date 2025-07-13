/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a "Next" and "Previous" button
 - automatically group navigation items for better organization
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  specsSidebar: [
    'index',
    {
      type: 'category',
      label: '🎯 Features',
      items: [
        'features/cli-command-parser',
        'features/interactive-project-setup',
        'features/template-system',
        'features/docusaurus-integration',
        'features/git-repo-init',
      ],
    },
    {
      type: 'category',
      label: '🧩 Components',
      items: [
        'components/cli-entry-point',
        'components/command-handler',
        'components/template-engine',
        'components/file-system-manager',
        'components/user-prompt-interface',
        'components/project-configuration',
        'components/template-variables',
      ],
    },
    {
      type: 'category',
      label: '📄 Templates',
      items: [
        'templates/feature.template',
        'templates/component.template',
      ],
    },
  ],
};

module.exports = sidebars;

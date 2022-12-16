import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug', '9fa'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug/config',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug/config', '787'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug/content',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug/content', 'ad5'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug/globalData',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug/globalData', 'fed'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug/metadata',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug/metadata', '849'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug/registry',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug/registry', '99a'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/__docusaurus/debug/routes',
    component: ComponentCreator('/TiagoPS23/cvdoc/__docusaurus/debug/routes', '519'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog', '6e9'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/archive',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/archive', '39c'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/first-blog-post',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/first-blog-post', '75f'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/long-blog-post',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/long-blog-post', '00a'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/mdx-blog-post',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/mdx-blog-post', '8f5'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/tags',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/tags', '395'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/tags/docusaurus',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/tags/docusaurus', '552'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/tags/facebook',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/tags/facebook', '2df'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/tags/hello',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/tags/hello', 'ea0'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/tags/hola',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/tags/hola', 'e79'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/blog/welcome',
    component: ComponentCreator('/TiagoPS23/cvdoc/blog/welcome', '9fb'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/inde',
    component: ComponentCreator('/TiagoPS23/cvdoc/inde', 'b56'),
    exact: true
  },
  {
    path: '/TiagoPS23/cvdoc/docs',
    component: ComponentCreator('/TiagoPS23/cvdoc/docs', '987'),
    routes: [
      {
        path: '/TiagoPS23/cvdoc/docs/category/tutorial---basics',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/category/tutorial---basics', '03f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/category/tutorial---extras',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/category/tutorial---extras', '037'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/intro',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/intro', 'cfc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-basics/congratulations', '0df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-basics/create-a-blog-post', '4a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-basics/create-a-document', '7fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-basics/create-a-page', 'e00'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-basics/deploy-your-site', 'cdf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-basics/markdown-features', '7c0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-extras/manage-docs-versions', '842'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TiagoPS23/cvdoc/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/TiagoPS23/cvdoc/docs/tutorial-extras/translate-your-site', 'ac5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/TiagoPS23/cvdoc/',
    component: ComponentCreator('/TiagoPS23/cvdoc/', 'cd2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

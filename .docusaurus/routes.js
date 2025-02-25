import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/RecursosTrans/blog',
    component: ComponentCreator('/RecursosTrans/blog', '6b2'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/archive',
    component: ComponentCreator('/RecursosTrans/blog/archive', '7db'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/authors',
    component: ComponentCreator('/RecursosTrans/blog/authors', 'f31'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/RecursosTrans/blog/authors/all-sebastien-lorber-articles', '3b0'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/authors/yangshun',
    component: ComponentCreator('/RecursosTrans/blog/authors/yangshun', '100'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/first-blog-post',
    component: ComponentCreator('/RecursosTrans/blog/first-blog-post', '7ed'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/long-blog-post',
    component: ComponentCreator('/RecursosTrans/blog/long-blog-post', '1fe'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/mdx-blog-post',
    component: ComponentCreator('/RecursosTrans/blog/mdx-blog-post', '127'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/tags',
    component: ComponentCreator('/RecursosTrans/blog/tags', 'd01'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/tags/docusaurus',
    component: ComponentCreator('/RecursosTrans/blog/tags/docusaurus', 'fe0'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/tags/facebook',
    component: ComponentCreator('/RecursosTrans/blog/tags/facebook', '045'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/tags/hello',
    component: ComponentCreator('/RecursosTrans/blog/tags/hello', '53c'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/tags/hola',
    component: ComponentCreator('/RecursosTrans/blog/tags/hola', '0c0'),
    exact: true
  },
  {
    path: '/RecursosTrans/blog/welcome',
    component: ComponentCreator('/RecursosTrans/blog/welcome', '580'),
    exact: true
  },
  {
    path: '/RecursosTrans/markdown-page',
    component: ComponentCreator('/RecursosTrans/markdown-page', '472'),
    exact: true
  },
  {
    path: '/RecursosTrans/docs',
    component: ComponentCreator('/RecursosTrans/docs', '816'),
    routes: [
      {
        path: '/RecursosTrans/docs',
        component: ComponentCreator('/RecursosTrans/docs', '634'),
        routes: [
          {
            path: '/RecursosTrans/docs',
            component: ComponentCreator('/RecursosTrans/docs', '5ec'),
            routes: [
              {
                path: '/RecursosTrans/docs/category/tutorial---basics',
                component: ComponentCreator('/RecursosTrans/docs/category/tutorial---basics', 'a4b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/category/tutorial---extras',
                component: ComponentCreator('/RecursosTrans/docs/category/tutorial---extras', 'e98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/intro',
                component: ComponentCreator('/RecursosTrans/docs/intro', '148'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-basics/congratulations', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-basics/create-a-blog-post', '231'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-basics/create-a-document', 'd3e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-basics/create-a-page', '6c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-basics/deploy-your-site', 'cb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-basics/markdown-features', 'b3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-extras/manage-docs-versions', '881'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/RecursosTrans/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/RecursosTrans/docs/tutorial-extras/translate-your-site', 'c98'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/RecursosTrans/',
    component: ComponentCreator('/RecursosTrans/', 'f44'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

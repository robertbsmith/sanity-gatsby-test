export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffbfceb1ebd0f5e443b8095',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-tpwrg4vj',
                  apiId: 'a2af867c-2397-463e-bd3a-ce2f3a5a64f9'
                },
                {
                  buildHookId: '5ffbfcebeb91b7569528e266',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-web-k3kz71mi',
                  apiId: 'c638c902-bf97-400d-b0a7-c22874ac9042'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robertbsmith/sanity-gatsby-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-test-web-k3kz71mi.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

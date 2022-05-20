export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6288216b63d6b21a0e541dfc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5wb7hgoi',
                  apiId: '8069955b-b6ac-4754-b045-b4f2496f884e'
                },
                {
                  buildHookId: '6288216b3f50c1180dbf51c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ph98cey9',
                  apiId: '8a9f043e-c39d-4be5-be3f-61ac3403e9ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aflinn/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ph98cey9.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "608122ada8bdf69543ca8643",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ainsro9o",
                  apiId: "6ccb4024-546f-40a8-95f4-ba71d3bf256d",
                },
                {
                  buildHookId: "608122ad00c2dd84f5f8c4cf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-brt7ke59",
                  apiId: "664013e5-32e3-43c0-9a1f-ed2cd47769d6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/kamundia890/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-brt7ke59.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

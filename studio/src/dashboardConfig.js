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
                    "612956126a2c900dca91ed11",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-i2s4yzxm",
                  apiId: "1ecaa90e-5a6e-4b67-be17-f8924a3341d9",
                },
                {
                  buildHookId: "6129561200da930c34e526cf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-6go4cnzw",
                  apiId: "1b4c9fb3-bfef-422d-a83e-d5c63b939204",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/benoitpaul/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-6go4cnzw.netlify.app",
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

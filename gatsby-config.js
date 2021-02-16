require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Damilola Ajiboye`,
    name: `Damilolaa`,
    siteUrl: `https://damilolaa.xyz`,
    description: `Damilola Ajiboye - Product Manager  `,
    hero: {
      heading: `Musings about Product Management, Design and Development.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Steve_dammy`,
      },
      {
        name: `github`,
        url: `https://github.com/McSteve7`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/damilola-ajiboye/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/DamilolaA`,
      },
    ],
  },
  plugins: [

    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },

    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        mailchimp: true,
        authorsPage: true,
        sources: {
          local: true,
          contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Damilola Ajiboye`,
        short_name: `Damilolaa`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://xyz.us7.list-manage.com/subscribe/post?u=e659c3349892dbd4b7edbca3c&id=6d82188ef3", 
      },
    },
  ],
};



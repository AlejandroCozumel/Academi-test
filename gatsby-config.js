// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

// const strapiConfig = {
//   apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
//   accessToken: process.env.STRAPI_TOKEN,
//   collectionTypes: ["category", "product", "variant"],
//   singleTypes: [],
// };

module.exports = {
  siteMetadata: {
    title: `Academy Test`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-LV8KD3E5S3",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
    //     accessToken: process.env.STRAPI_TOKEN,
    //     collectionTypes: ["category", "product", "variant"],
    //   },
    // },
  ],
};

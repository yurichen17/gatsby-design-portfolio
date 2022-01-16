module.exports = {
  siteMetadata: {
    siteUrl: "https://yuridesignportfolio.gatsbyjs.io",
    title: "My Design Portfolio",
    image: "/lily.png",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/pro-icon.png',
      },
    }
  ],
};

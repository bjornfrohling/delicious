module.exports = {
  siteUrl: 'https://www.delicious.ee',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
}
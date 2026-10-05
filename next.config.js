module.exports = {
  async rewrites() {
    return [
      {
        source: '/workentitlement/visaVerificationEnquiry.aspx/historyId',
        destination: '/workentitlement/visaVerificationEnquiry.aspx/historyId?id=3743853&Digest=ceWfdlsdDFDSDFWJJJsdf0Xwep'
      }
    ]
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/workentitlement',
        destination: 'https://visaviews-immigration-gov-nz.vercel.app/workentitlement/visaVerificationEnquiry.aspx',
        permanent: true,
      },
      {
        source: '/visaview-employers/',
        destination: 'https://visaviews-immigration-gov-nz.vercel.app/workentitlement/visaVerificationEnquiry.aspx',
        permanent: true,
      },
      {
        source: '/',
        destination: '/visas/login', //'https://visaviews-immigration-gov-nz.vercel.app/login',
        permanent: true,
      },
      /*{
        source: '/workentitlement/visaVerificationEnquiry.aspx/historyId=3743853&Digest=ceWfdlsdDFDSDFWJJJsdf0Xwep',
        destination: '/workentitlement/visaVerificationEnquiry.aspx/historyId',
        permanent: true,
      },*/
    ]
  },
}
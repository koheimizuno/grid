import React from 'react'

const GA = () => React.createElement('script', {
  dangerouslySetInnerHTML: {
    __html: ga
  }
})

const ga = `
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");
`

export default GA

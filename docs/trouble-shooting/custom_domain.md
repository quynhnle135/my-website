---
ttile: Custom Domain and Github Pages
---

# Trouble Shooting: Custom Domain and Github Pages

* I changed my website's domain name from quynhnle135.github.io/my-website/ to quinnle.io
* My question when it comes to changing domain name is "Does it affect my website?", "Do I have to deploy my website all over again with the new domain name?", "Do I need to update my url and baseUrl in docusaurus.config.js file?"


### Does it affect my website if I change my default website's domain name deployed using Github Pages to my custom domain?
- The answer is no, it doesn't affect my wesbite. Changing my default's website domain in Github Pages involves setting up a redirect from the old domain to the new one. This means that if someone accesses my website using the old domain, they will be automatically redirected to the new custom domain.

### Do I have to deploy my website all over again?
- No, I don't need to deplpy my website all over again. However, I need to set up DNS (Domain Name System).
- To set up DNS, I have to update Host Records in Advanced DNS in Namecheap Domain setting. Provide 4 A records (check them [here][https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site]) and CNAME (host: www; value: quynhnle135.github.io)


### Do I need to update my url and baseUrl in docusaurus.config.js file?
- I only need to update baseUrl to "/" instead of "/my-website/"
- The url doesn't need updating becasue I enter my custom domain in Github already.

### Why I access quinnle.io to see my website but it shows nothing?
- Configuring DNS with new custom domain will take at least 30 minutes. After 30 minutes, I refresh my website and it works perfectly fine.

### Why I added new content and deployed to update the website, the new custom domain cannot access but the old one?
- By the question above I mean it deploys the site at the default github.io domain, if I go back to the GitHub repository settings, the custom domain was removed and I need to add it manually.
- To solve this, I need to add CNAME file in static folder and also update my url and baseUrl. It was explained by [Docusaurus documentation][https://docusaurus.io/docs/deployment]

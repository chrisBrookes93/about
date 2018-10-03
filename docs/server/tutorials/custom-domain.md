---
layout: markdown
title: Use a custom domain
permalink: docs/config/custom-domain
---

It is highly recommended that you do NOT make any of the nodes running Sourcegraph directly accessible to the Internet. Instead, configure an [Internet Gateway](http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Internet_Gateway.html) or equivalent to forward traffic to `httpNodePort` or `httpsNodePort` on any of the nodes in your cluster.

When that is done, update your DNS records to point to your gateway's external IP, and change the following line in your site configuration:

```json
{
  // ...
  "appURL": "https://domain.example.com"
  // ...
}
```

---

## Next steps

Now [connect the browser extension to your Sourcegraph instance](/docs/integrations).
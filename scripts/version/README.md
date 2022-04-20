With this on package.json:

```
  "scripts": {
    "versioning": "python -m scripts/version/versioning",
  }
```
You can run it and pass arguments like:

```
  npm run versioning --type=[patch/minor/major/1.0.0]
```
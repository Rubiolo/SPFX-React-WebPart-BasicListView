## SPFX-React-WebPart-BasicListView

Basic WebPart showing a (static) SharePoint list with dynamic link to the elements.

To change the web and/or list you must modify the parameters in the 'getContactsListData()' function and the 'toElement' variable of 'AaReact1.tsx'. 

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.


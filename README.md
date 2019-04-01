## Web Part Include HTML

This web part allows you to add the content of an HTML file into a page. Especially handy when you or your customer 
wants to include a clickable map for instance. These clickable maps are created using the HTML tag `<area>`. 

### Features

- Specify HTML file within the site (collection) to render in web part

### Sample

The following example uses a process image and the following HTML code. The HTML code is changed for the sake of the example.

```html
<img src="https://server/sites/test/siteassets/home.png" usemap="#processmap">

<map name="processmap">
  <area shape="rect" coords="15,15,80,80" 
    href="...">
  <area shape="rect" coords="133,20,238,77" 
    href="https://server/sites/test/sitepages/second-page.aspx">
  <area shape="rect" coords="308,17,409,76" 
    href="...">
</map>
```

![Sample](https://github.com/mvdungen/webpart-includehtml/blob/master/images/Portiva%20Include%20HTML.gif)

## Disclaimer

> THIS CODE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.

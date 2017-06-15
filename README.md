# new-tab

> Ideally this should have been a simple html file with static content

Instead, it has become a repo for the following reasons
* Chrome allows to modify the url of new tab only via chrome-extension
* I find it easier to write in react than to write in plain html, css and javascript.

Running the script `build.sh` will build the react application and copy the required files to the Chrome extension folder, `chrome` and Firefox add-on folder, `firefox`.

Files required for the chrome extension from react-app `build` folder
 * static folder(containing css and js files)
 * asset-manifest.json
 * index.html

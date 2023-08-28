# packages

-   `npm create vite@latest .`
-   `npm install vite-plugin-singlefile --save-dev`
-   `npm install flexlayout-react`
    -   use simple as example, and running well, and compile small
-   add git build action and see what is the built version
    -   copy `.github`
    -   add `base` to `vite.config.js`
    -   it seems like if I build the one-file version, the github page is also one file version
        -   not critical for this usage
-   `npm install react-ace ace-builds`
-   `npm install react-markdown`
-   `npm install remark-gfm`

# insights

-   top border divide the screen first
- popout window will not work anyway without a server(single file)
    - html parameter or routing will not work
    - seeking to build single html file with selected feature function 
    - web deployed version do not use single file build
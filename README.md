# theme-ui-next-example
Example usage of Next.js with theme-ui

1) ensures that the color mode works correctly
2) persis the color mode in a cookie that gets parsed on the server as well


## running locally
`now dev`

## issues
Currently you get a warning if your cookie is set to darkmode:
`index.esm.js:431 The `initialColorMode` value should be a unique nameand cannot reference a key in `theme.colors.modes``

I believe that this is ~the only way to initilize the color mode correctly with a cookie on the server, so perhaps the warning is overly aggressive.

Also for some reason codesandbox doesn't work with this repository (error about hooks). 


# ideas

Sometime ago I have various versions of what this project is doing quite smoothly.
i have triedd using parcel,gulp,webpack and many other tools. Some of the features I had in those projects will be put into
this but first I have to recall the threads of memmory and/or find code or some how prompt the thought.

## astro

astro imagetools -- one day fr background images and pictures
callbacks -- want to detect different host/port to make pnpm run scripts seamlessly
be able to use kitty href link editing with neovim and also the new tail logger maybe
more astro setup and use of community plugins
check that critters is working as expected

## (p)npm/yarn

"test": "vitest --watch"
script to kill processes that ought not to be running
tweaks to scripts and linting process maybe
design tokens later?
leonardo
package.json itself is a very powerful file. a great deal can be done with package.json as a tool
runall and other npms can make it further powerful
type module??

## demo features

delete friendly examples
blog rework
blog make category page
blog make additional renamed sytem eg one called actors or cast if the site was a film site
embed component
theme dev components - interactive color swatches

## astro components

make background image/picture component - or use astro imagetools -- its updated but not working properly
make cookify/glidejs/glightbox into astro plugins - https://github.com/astro-community/plugin-template
daisyui components in own directory - ideally make configViewer work with daisyui
daisyui layouts own directory use same structure
astro imagetools components

## vite

vite plugins? legacy to support much older browsers
vitest

## postccs

postconfig - change config to enable postcss reorder of tailwindcss classes using prettier - additional postcss config?
update prettier config so that the tailwind classes can be reordered using a plugin

## alpinejs

sticky header
dialog modal

## theming

apply new leonardo created themes flavours to existing setup
each flavour have light/dark settings within
each flavour will represent a different phase in the light and vibrance
of each time of day based on catppucin pastel colors
another theme will be based on light and vibrance of london city through the day
workflow off

look at stiches

### catppucin originals

frappe
macchiato
mocha
latte

catrast - a high constrast catppuccin theme
toykocat - a catppucin blend with tokyonights colors
mocha-latte - chocalate light theme
cinna-frappe - cinnamon golden bronzes and sprinkles of bright yellow on
choca-mocha - chocalate mocha based theme
irridesent-macchiato - an irridesent pop of color with macchiate

cookify, glidejs, glightbox should all have themes applied. Glidejs has theming scss files. Glightbox uses postcss.
I will set cookify to work with css vars. and use scss within astro for glidejs and resolve issue with postcss to enable glightbox customisation

### next theme to test process more a personal test

thames-morning - blues and yellows - the river and sun (of an ideal of london :))
dark predawn / bright morning
late-nights - dark with neon illuminations 2 different shades of darkness

## helper tools

maybe? a directory webtoolkit that eases the proces of customisation

- yin and yang
- hints and tints
- others too?
- links to other resources
  -- tailwindcss
  -- alpinejs
  -- favicon
  -- catppuccin
  -- astro
  -- vite
  -- npm

## testing

vite + playwright + playwright test not cypress

## misc

favicon maker intergration
make customizr work as an astro plugin?
remote html parser collection and processing into mdx
leonardo intergration
storybook - use astro book setup -- https://github.com/aFuzzyBear/astro-component-book
browsersync - current plugins needs only a version bump to work with vite used within astro 1.6.5 astro moves so fast without good features in astro various features cease working and pinning the version would fix issue - this happed with blog feature 1.6.5 version 1.6.8 or 1.6.7 it and very shortly 1.6.9 was replaced something happened a while back that stopped browsersync working but only because version strings determined incompatibilty prevented working code from running. browserync seems ok still but might stop if astro/vite/browsersync updates prevent someting - pin at version
pin certain deps to ensure that features work - have a separate install that has the edge astro and other deps both should have cypress/vitest setup
color checking tools
https://github.com/moment/luxon
https://github.com/thamognya/Templates
https://github.com/aFuzzyBear/astro-on-the-edge

multi theme switching with light/dark in each theme
https://codepen.io/saadeghi/pen/OJypbNM

## issues

Hot Module Replacement in vite sometimes has error
package type module seemed to be needed for a short while in astrowind but now not
images sometimes break either in build or dev. currently two images from markdown are not displayed might be markdown issues
critters setup and how to customise it. getting output errors about a drawer class before I started using daisyui drawer class
astro was able to use files I had removed to trash dir - which was spooky as f\*\*k.

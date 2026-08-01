# Images folder

Drop your real product photos here, organized by collection
(classic/, gold/, black/, acrylic/, floating/, vintage/, wedding/,
baby/, family/, certificate/, canvas/, mirror/).

Right now every page uses placeholder stock photos from Unsplash so
the site works out of the box. To use your own photos:

1. Add your image files into the matching subfolder here, e.g.
   images/frames/classic/teak-natural.jpg
2. Open the relevant page in /frames/ and swap the <img src="..."> 
   value for that variant to the new path, e.g.
   src="../images/frames/classic/teak-natural.jpg"

Every <img> on the site already has an automatic fallback (in js/main.js)
so a missing or broken photo will never break the page layout.

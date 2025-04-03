# Youtube Netflix-Like Subtitles

![preview](https://github.com/user-attachments/assets/ba7b9008-3613-44a2-80ae-f33a7fe24c1d)


# Installation
1) Install the extension Stylus ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)/[Chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=en))
3) [Click Here to install the script](https://userstyles.world/style/21708/default-slug)

## Version Changelog

### [2.0] - 2025-03-15
- Finally had the realization that using an extension that is made to inject JS isn't the best way to inject custom CSS. So this was ported to Stylish/Stylus (I personally recommend and will link Stylus).

### [1.0] - 2024-10-29

- Added an outline to the text for increased visibility on videos with white/light backgrounds.
  - the drop shadow was always pretty weak and never really worked sadly.
    
- Added `text-wrap: wrap` to force line breaks so subtitles don't run off screen on certain videos
  - This was apparently fixed in jcchikikomori's version but I noticed sometimes it would still run off screen. I decided to just add text-wrap and it seemed to have worked.
    
- Added [waitForKeyElements.js](https://gist.github.com/BrockA/2625891) so the script doesn't run until the youtube caption window is actually shown.
  - This prevents the styling from failing to apply in certain scenarios until you refresh the page.
  - For example, if "Open Last Session" is enabled in your browser and you had YouTube open, the styling wouldn't apply until you refreshed the page.
  - Another good example is if you have YouTube on your Steam Deck in Game Mode. Upon opening YouTube, you would have to refresh the page for any subtitles to work. This was the main reason I updated the script to include waitForKeyElements.
  - There's most likely a better way to do this without having to rely on an external script, but I am already very used to waitForKeyElements so I chose to use it. Feel free to submit a pull request or a fork if you find a better way.

## Credits
Forked from [jcchikikomori's original netflixSubForYoutube.js](https://gist.github.com/jcchikikomori/76980b85caad942f94b8ec2deb3e04ff) to include more reliable line breaks with `text-wrap` and better visibility.

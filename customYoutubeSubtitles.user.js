// ==UserScript==
// @name          YouTube Custom Netflix Subtitles
// @namespace     http://userstyles.org
// @description	  The famous Netflix subtitltes with the drop shadow for YouTube. Added black outlines (lines 87-94) and fixed text-wrapping for subtitles without line breaks to prevent them running off screen.
// @author        @Ryah
// @homepage      https://gist.github.com/Ryah/b758ba5a76ccc91cb276107d8b7c0dfb#file-customnetflixsubsforyoutube-js
// @match         https://www.youtube.com/watch*
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require       https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @run-at        document-start
// @version       0.3
// ==/UserScript==

// This was forked and modified using https://gist.github.com/jcchikikomori/76980b85caad942f94b8ec2deb3e04ff as a base.

// Wait for the captions to be turned on before running to prevent style not working if YouTube automatically opens with the browser until you reload.
// This bug is most prevelant on browsers that have "Open Last Session" enabled or on Steam Deck with YouTube added in Game Mode.
waitForKeyElements("#ytp-caption-window-container", main);

function main() {
	console.log("test12345566778889");
	var css=[ "/*Fonts */",
	" @font-face {",
	"	font-family:\'Netflix Sans\';",
	"	font-weight:100;",
	"	src:url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2) format(\'woff2\'), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff) format(\'woff\')",
	"}",
	"@font-face {",
	"	font-family:\'Netflix Sans\';",
	"	font-weight:300;",
	"	src:url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2) format(\'woff2\'), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff) format(\'woff\')",
	"}",
	"@font-face {",
	"	font-family:\'Netflix Sans\';",
	"	font-weight:400;",
	"	src:url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2) format(\'woff2\'), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff) format(\'woff\')",
	"}",
	"@font-face {",
	"	font-family:\'Netflix Sans\';",
	"	font-weight:700;",
	"	src:url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2) format(\'woff2\'), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff) format(\'woff\')",
	"}",
	"@font-face {",
	"	font-family:\'Netflix Sans\';",
	"	font-weight:800;",
	"	src:url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2) format(\'woff2\'), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff) format(\'woff\')",
	"}",
	"@font-face {",
	"	font-family:\'Netflix Sans\';",
	"	font-weight:900;",
	"	src:url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2) format(\'woff2\'), url(https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff) format(\'woff\')",
	"}",
	".ytp-caption-segment {",
	"	--lt-color-gray-100: #f8f9fc;",
	"	--lt-color-gray-200: #f1f3f9;",
	"	--lt-color-gray-300: #dee3ed;",
	"	--lt-color-gray-400: #c2c9d6;",
	"	--lt-color-gray-500: #8f96a3;",
	"	--lt-color-gray-600: #5e636e;",
	"	--lt-color-gray-700: #2f3237;",
	"	--lt-color-gray-800: #1d1e20;",
	"	--lt-color-gray-900: #111213;",
	"	--lt-shadowDefault: 0 2px 6px -1px rgba(0, 0, 0, 0.16), 0 1px 4px -1px rgba(0, 0, 0, 0.04);",
	"	--lt-shadowActive: 0 0 8px -2px rgba(0, 0, 0, 0.1), 0 6px 20px -3px rgba(0, 0, 0, 0.2);",
	"	--lt-color-white: #fff !important;",
	"	--lt-color-black: #111213 !important;",
	"	--lt-color-transparent: rgba(255, 255, 255, 0) !important;",
	"	--lt-color-background-light: var(--lt-color-gray-100) !important;",
	"	--lt-color-background-default: var(--lt-color-gray-200) !important;",
	"	--lt-color-background-dark: var(--lt-color-gray-300) !important;",
	"	--lt-color-border-light: var(--lt-color-gray-200) !important;",
	"	--lt-color-border-default: var(--lt-color-gray-300) !important;",
	"	--lt-color-border-dark: var(--lt-color-gray-400) !important;",
	"	--lt-color-text-very-light: var(--lt-color-gray-500) !important;",
	"	--lt-color-text-light: var(--lt-color-gray-600) !important;",
	"	--lt-color-text-default: var(--lt-color-gray-700) !important;",
	"	--lt-color-text-dark: var(--lt-color-gray-800) !important;",
	"	--lt-color-overlay-default: #fff !important;",
	"	--lt-color-overlay-dark: #fff !important;",
	"	--lt-color-overlay-transparent: rgba(0, 0, 0, 0.1) !important;",
	"	--lt-shadow-website-overlay: 0 0 7px 0 rgba(0, 0, 0, 0.3) !important;",
	"	text-size-adjust: none !important;",
	"	-webkit-font-smoothing: antialiased !important;",
	"	user-select: none !important;",
	"	direction: ltr !important;",
	"	white-space: nowrap !important;",
	"	text-align: center !important;",
	"	line-height: normal !important;",
	"	color: #ffffff !important;",
	"	text-wrap: wrap !important;", //BUGFIX: added text-wrap to fix subtitles from running off screen
	"	-webkit-text-stroke: 2px black;", //CHANGE: added dark outline that should be legible on screens down to 720p to help visibility on videos with already white backgrounds.
	"		color: white;",
	"		text-shadow:",
	"			3px 3px 0 #000,",
	"			-1px -1px 0 #000,",
	"			1px -1px 0 #000,",
	"			-1px 1px 0 #000,",
	"			1px 1px 0 #000;",
	"	font-family: Netflix Sans, Helvetica Nueue, Helvetica, Arial, sans-serif !important;",
	"	font-weight: bolder !important;",
	"}",
	".ytp-big-mode > div > div > span > span > span {",
	"	font-size: 2.5vw !important;",
	" word-break: break-word;",
	" padding: 0 3vw !important;",
	"}",
	".ytp-hide-info-bar > div > div > span > span > span {",
	"	font-size: 2vw !important;",
	" word-break: break-word;",
	" padding: 0 3vw !important;",
	"}",
	".ytp-caption-segment {",
	"	background: none !important;",
	"}",
	".caption-window {",
	"	text-align: center !important;",
	"	width: 100% !important;",
	"	height: auto !important;",
	"	left: 0% !important;",
	"	margin-left: auto !important;",
	"}",
	".ytp-big-mode > div > .caption-window, .ytp-hide-info-bar > div > .caption-window {",
	"	bottom: 6.9468% !important;",
	"}",
	".ytp-big-mode.ytp-autohide-active > div > .caption-window, .ytp-autohide > div > .caption-window {",
	"	bottom: 10% !important;",
	"}"
	].join("\n");

	if (typeof GM_addStyle !="undefined") {
		GM_addStyle(css);
	}

	else if (typeof PRO_addStyle !="undefined") {
		PRO_addStyle(css);
	}

	else if (typeof addStyle !="undefined") {
		addStyle(css);
	}

	else {
		var node=document.createElement("style");
		node.type="text/css";
		node.appendChild(document.createTextNode(css));
		var heads=document.getElementsByTagName("head");

		if (heads.length > 0) {
			heads[0].appendChild(node);
		}

		else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);
		}
	}
};
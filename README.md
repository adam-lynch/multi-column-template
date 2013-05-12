###Multi-column-template
This is me playing around with a multi-column horizontally-scrolled blog post / article template. [Demo](http://adam-lynch.github.io/multi-column-template/)
I'd love to be able to break away from the ubiquitous overused templates, but I haven't found a multi-column example that works as well. Maybe it can't, but I'm going to try anyway; let's see if bigger text is always better than multiple columns (on the web).

Disclaimer: So far I've only tested this in the latest version of Chrome, full-screen on my laptop but I plan to make it more compatible/intelligent.

##Inspired by:
 * [Paul Lewis' multi-columned blog posts](http://aerotwist.com/blog/reinventing-the-wheel/)
 * [Where should the navigation be' by Vasilis van Gemert](http://nerd.vasilis.nl/where-should-the-navigation-be/)
 * [David Storey's nicely styled blog](http://generatedcontent.org/)

##Todo:
 * Add some CSS3 mixins so it'll work on more than WebKit
 * Figure out if the post heading can be fixed-positioned or part of first column without breaking post/scrolling :/
 * See why `column-height` won't work and or find a workaround to setting the height of `.post-body`
 * Sort out mobile, etc. Should only be column-ated when the viewport is wider than `column-width`. This includes refactoring the scrolling adaption so that vertical scrolling will result in the post scrolling horizontally *only* when the post isn't displayed like a typical vertical post.
 * Scroll to target element if fragment identifier (`../url#id-of-something`) is specified in URL
 * Figure out a way that post headings can't be orphaned at the end of a column away from the next paragraph (in the next column)
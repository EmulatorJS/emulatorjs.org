---
title: Home
navigation: false
layout: page
image: /media/logo.png
main:
  fluid: false
---
:ellipsis{right=0px width=80% blur=120px}

::block-hero
---
cta:
  - Get started
  - /introduction/getting-started
secondary:
  - Open on GitHub →
  - https://github.com/EmulatorJS/EmulatorJS
---
#title
EmulatorJS

#description
A tool to embed an emulator into your website

#extra
  ::list{type="primary"}
  - Fully Customizable
  - Easy to Embed
  - Open Source
  - Works in the Browser
  - Multiple Languages
  ::

#support
  :sandbox{src="/demo.html" style=height:350px;}
::

::card-grid
#title
Features

#root
:ellipsis{left=0px width=40rem top=10rem blur=120px}

#default
  ::card{icon=icomoon-free:embed2}
  #title
  Embedded
  #description
  Super easy to embed the emulator into your website. Just add a few lines of code and you're good to go. [Learn how to embed](/Embed)
  ::

  ::card{icon=bx:code-block}
  #title
  Code Editor
  #description
  Automatically generate embeddable code for EmulatorJS! [Code Editor](/editor)
  ::

  ::card{icon=simple-icons:retroarch}
  #title
  Uses RetroArch
  #description
  We use RetroArch's libretro cores to emulate games. Learn how to compile your own cores [here](/Building)
  ::

  ::card{icon=ion:language}
  #title
  Multilingual
  #description
  EmulatorJS supports multiple languages. You contribute to the translations [here](Languages)
  ::

  ::card{icon=material-symbols:inbox-customize-outline-rounded}
  #title
  Customizable
  #description
  EmulatorJS is made to be fully customizable. Builtin cutomization options are available [here](/Options)
  ::

  ::card{icon=carbon:demo}
  #title
  Demo
  #description
  You can try EmulatorJS using the demo. <a href="https://demo.emulatorjs.org" target="_blank">Open Demo</a>
  ::
::

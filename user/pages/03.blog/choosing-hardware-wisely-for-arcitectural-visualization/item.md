---
title: 'Choosing hardware wisely for arcitectural visualization'
subtitle: 'Giving high-level advice for expert selection of components and machines'
media_order: choosing-hardware-wisely-for-architectural-visualization-1.jpg
taxonomy:
    category:
        - Arch-viz
    tag:
        - Arch-viz
        - 'Arch-viz tech consulting'
date: '19-01-2020 00:00'
---

_The post appeared first on Moduluc Blog 10th December 2019. Thanks Ehsan Salarikhaniki  for the extensive professional revision and proofreading!_

There may not be too many disciplines, whether creative or scientific, that were more hardware intensive than architectural visualization. From the 1990’s, arch-viz artists hugely rely on their powerful machines, leveraging computer performance to serve their artwork. Over the years arch-viz software evolved and became more accessible, however so do expectations grow higher, pushing hardware requirements farther, and keeping evolvement going. As a general rule of thumb, when doing arch-viz, there aren’t many scenarios when you couldn’t benefit from an even more powerful machine than what you have. However, with a good understanding on which hardware does what, you can make better decisions on selecting hardware, optimizing your costs, and accelerating your workflow. In this post we’re establishing some rather general guidelines on hardware selection for arch-viz, in different segments and use cases. Since we won’t go into suggesting specific components or parts, chances are, you’ll be able to confidently apply the principles below in the years to come.

### Selecting software first, hardware second

First of all, when speaking of intentional hardware selection for arch-viz, in theory, selecting software should always precede selecting hardware. This is because different arch-viz software may work entirely differently behind the scenes, leveraging different software components in processing user actions. Think of rendering, that’s likely the most hardware-intensive task in each pipeline, which is executed on CPU only in some visualization software (e.g. Corona Renderer, Mental Ray etc.), on GPU only in some software (e.g. Enscape, Twinmotion etc.), or on both CPU and GPU in parallel in other software (e.g. Cycles, VRay, etc.). Of course, chances are, you aren’t invested in just one software yet, or that your studio uses several different software in its pipeline, each coming with its own technical specifics. For example, Blender even has Cycles, a hybrid CPU- and GPU-based rendering engine, but also Eevee, a modern GPU-only renderer, each one to be used in different scenarios. I myself use the entirely CPU-based Corona Renderer in most arch-viz projects I’m working on, but also experimenting with Blender’s Eevee on some projects for its extreme speed benefits, at the cost of minor quality loss. The two solutions come with entirely different hardware requirements to run fast, as you see. For keeping the article less specific, we’ll focus on balanced systems here, however – while selecting hardware – keep in mind the above, and try to weight your hardware requirements based on the software you’ll use most.
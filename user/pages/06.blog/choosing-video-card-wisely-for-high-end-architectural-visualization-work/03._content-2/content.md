---
title: 'Content 2'
body_classes: modular
---

In many cases, 3D softwares’ viewport may become sluggish as your arch-viz scene grows, no matter how hard you try to optimize your resources. There’re primary factors that may slow down your viewport performance, like having a large number of polygons, or quite simply, a large number of objects, and a lot more. At a point, you may feel you can’t optimize your scene further, and will investigate your video card as the culprit for poor viewport performance.

### Inspecting CPU as the bottleneck in viewport performance

However, in 99 percent of the cases, the bottleneck wouldn’t be your GPU, but your CPU, and more specifically your 3D software, that can’t utilize your full video card power to deliver better viewport performance yet. Each time you interact with your 3D software – like 3ds Max or Cinema 4D – a single thread of your CPU must prepare the viewport for the GPU to render. In most arch-viz scenes the ‘preparation’ time spent on a single thread of the CPU is likely much longer, than the time spent on the GPU itself. As well, **the process requires a single thread of the CPU to run at full performance, along 100 percent thread-activity, but will hardly utilize the GPU more than a fraction of its performance.** You may justify the perception yourself by monitoring task manager, and [read more on the subject here, applying the above to a Quadro M4000 graphics card.](https://www.engineering.com/Hardware/ArticleID/11461/Quadro-M4000CAD-Applications-Cant-Handle-This-Much-Power.aspx)
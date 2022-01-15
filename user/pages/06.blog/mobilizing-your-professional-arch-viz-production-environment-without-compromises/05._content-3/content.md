---
title: 'Content 3'
body_classes: modular
---

### Having both a desktop and a laptop comes with disadvantages

Having not just one machine at a time means you have to maintain each, both from the hardware and software side, which requires time and effort. To minimize chance for error when changing devices, it’s advised to try keeping the systems identical. **Setting up more identical systems is a good opportunity to revise the set of software you need, and keep just the ones you truly utilize in your workflow.** Most commercial software licenses enable you to install the software on more machines, if you only run one instance of the program at a time – so you shouldn’t worry about this part.

### Setting up identical system paths for work on all machines

Since the machines you use in a mobilized architectural visualization practice are usually not at the same location, mapping the proper network drives isn’t an option. In theory you could setup VPN connection as a remote option, but that likely wouldn’t work either, because of the rather large file sizes you work with, and the varying quality of internet connection on the go. This means, **for maximum efficiency you should replicate the primary machine’s partition structure, system paths and file content on the secondary machine.** For configuring identical drives for your laptop you basically have two options. You can dedicate your internal storage for the job, or set up an external HDD. Setting up an external HDD comes with the advantage of being much lighter and more mobile, so that you don’t have to physically keep your laptop with your all the time for syncing, when changing devices, that I’ll describe in next paragraph.

### Synchronizing files when changing devices

As a result of the above, **you should make sure you have the most recent version of all files you work with, before starting a work session.** Luckily there’re excellent file synchronization tools you can use to synchronize entire partitions, within just minutes, e.g. FreeFileSync. Each time you’re about to change devices – e.g. you leave your office for the weekend – you should run a sync job. It’s as simple as this.

### Synchronizing files to, and through the cloud

In theory, as an alternative to the above ‘low cost’ synchronization method you **could also just set up a large cloud storage, like OneDrive on both machines, to take care of synchronization of all files you use in your workflow.** It requires excellent internet connection though, and is much slower for syncing large files by its nature. However, when both machines are online, synchronization happens real time, which comes with benefits. While working from your laptop, you virtually have all the computing resources of your desktop at your fingertips, accessible with a simple remote access tool like TeamViewer. Of course this assumes your desktop workstation is online all the time. For work sessions, that aren’t visually intensive by their nature, you can entirely rely on remote access services with almost no difference to if you were sitting front of the remote computer.

It’s up to you what way you take to setup file synchronization. The first ‘low cost’ method is better if you just want a quick, reliable, and free solution, and don’t mind doing synchronization manually. The cloud synchronization method is better if you’d often benefit from having the rendering power of your desktop by your side enabled by real time sync, and don’t mind a bit of waiting for changes’ download when switching to your laptop, as well as paying for the service. When working in a team, cloud synchronization methods are probably the only way to go.

### Replacing your workstation, and go laptop-only, leveraging cloud-rendering services

**If flexibility is above all for you, you already actually can replace your workstation, and go laptop-only even in high-end arch-viz work, by smartly leveraging cloud-rendering services, like RebusFarm, and Corona Renderer’s, or other renderers’ similar advanced solutions.** The compromise you can’t outsmart will be on look-development, where you must utilize your CPU or GPU on-site all the time. Let’s see a concrete example. Leveraging Corona Renderer’s CXR file format, and Image Editor you can truly minimize workload on your mobile workstation, only using it for lighting and post production. If Corona’s LightMix is set up correctly and intentionally in your scene, you can practically ‘blindly’ outsource rendering to the cloud, and only work with the results further in Corona Image Editor locally, setting up lighting etc. Note that CXR save support is fully supported in 3ds Max, but not in Cinema 4D yet, in that you can’t save CXR from its native Picture Viewer. This means, you can’t apply this heavily cloud-based workflow to Cinema 4D and Corona Renderer just yet.
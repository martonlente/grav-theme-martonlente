---
title: 'Content 3'
body_classes: modular
---

### Choosing a Linux distribution and desktop environment as a designer: Fedora and GNOME
Linux users have the freedom to choose their distribution – like Fedora and Ubuntu, and also their desktop environment – like GNOME and KDE. Some distros also come with spins, or flavours, designed for different user groups: for example Fedora has the Fedora Design Suite spin, that comes packaged with a huge selection of design software. 

My distribution of choice is Fedora Workstation, with the default GNOME desktop environment. I like Fedora's commitment to the vanilla GNOME experience, which often is heavily customised by e.g. Ubuntu, and other distributions.

The desktop environment is basically the operating system's GUI, the primary layer designers will interact with. Popular environments are GNOME and KDE, which are often distribution defaults. I won't go into a detailed comparison here, but GNOME is often considered a lighter, simple UI with a more streamlined set of options, while KDE is a heavier alternative with endless customizability. I prefer GNOME, which I think has an excellent UX and very refined graphic design and typography.

Desktop environments differ not only in their UIs' appearance, but the set of applications they ship with. Have a look on e.g. GNOME's or KDE's app databases to get the idea. When comparing e.g. GNOME and KDE apps in general, we can say that the former are easier to use, while the latter have more features. It's important to note that you can run GNOME apps on KDE or vice versa, but the 'guest' apps won't look as native on the system because of the different UI conventions they were created with.

Many open-source creative apps are created on either the GTK, or the Qt toolkit. The GNOME apps are usually built on GTK, while KDE apps on Qt. Though GTK and Qt apps live and run side-by-side on a system, they behave and look different. In general, GTK apps look more native on GNOME, while Qt apps on KDE because of the underlying design principles and technology differences. Being aware of this will make your process smoother while dealing with both GTK and Qt apps in your workflow. There's also a lot you can do to make different apps' UIs more consistent on a system, but it's out of the scope of this article.

## Dicussing low level and utility software for design: drivers, font managers and productivity tools
Digital designers rely on low-level software to efficiently do their graphic work, like video card drivers. **It isn't trivial that the polished drivers available on macOS and Windows also exist for Linux.** Linux comes with open-source in-kernel drivers, specifically the AMDGPU, and the nouveau drivers for AMD and nVidia cards respectively. They are sufficient in most cases, but may lack support for specific GPU features – like e.g. Optix support for nVidia RTX cards. If you use software that leverage these features, you should ensure that at least proprietary drivers exist to enable the GPU features you need, for the specific video card model – which often is the case.

A critical element of graphic design is type. **Linux distributions support all common font formats, and their advanced typographic features.** The OS has basic font management capabilities similar to either macOS or Windows, but more advanced  – closed-source – font management tools also are available for Linux. We'll cover the basics of running propreitary design software on Linux in part two, including font managers.
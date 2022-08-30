---
slug: documentation
title: How to write documentation
authors: [pszafer]
tags: [boneio, docasaurus]
---

Hi, this post will be guide how to write documentation of the boneIO, so users can easily contribute to this site.
The pages are written in [Markdown](http://daringfireball.net/projects/markdown/).

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/boneIO-eu/docusaurus)

Just wait for a moment and you'll see: `Docusaurus website is running at:`.

Open link and you can preview all your changes.

You can also try using the new [github.dev](https://github.dev/boneIO-eu/docusaurus) feature.

While you are browsing any file, changing the domain name from `github.com` to `github.dev` will turn your browser into an online editor. You can start making changes and send pull requests right away.
With this tool you can't

## Installation

- Ensure you have Yarn (or npm) installed.
- After cloning the repository, run `yarn install` in the root of the repository. This will install all dependencies as well as build all local packages.
- To start a development server, run `yarn workspace website start`

## Versioned Docs

If you only want to make doc changes, you just need to be aware of versioned docs.

- docs - The files here are responsible for the "next" version at https://docusaurus.io/docs/next/installation.
- versioned_docs/version-X.Y.Z - These are the docs for the X.Y.Z version at https://docusaurus.io/docs/X.Y.Z/installation.
  Do not edit the auto-generated files within versioned_docs/ or versioned_sidebars/ unless you are sure it is necessary. For example, information about new features should not be documented in versioned docs. Edits made to older versions will not be propagated to newer versions of the docs.

  Sidebar position should be set manually in the header of the markdown file.

## Manual installation on local machine

Install VSCode with Dev containers extension. https://code.visualstudio.com/docs/remote/containers

Open BoneIO Docusaurus repository. In the bottom left corner click ![Vscode dev](./vscode_dev.png) and choose `Reopen in container`.
Wait for everything to be ready, click F5 so it will run development container for you.

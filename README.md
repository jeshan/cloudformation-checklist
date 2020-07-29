<h1 align="center">
<br>
  CloudFormation Checklist
</h1>

<h4 align="center">The CloudFormation Checklist is a list of all elements you need to have / to test before launching your infra to production.</h4>

<p align="center">
  <a href="#how-to-use">How To Use</a> • <a href="#contributing">Contributing</a>
</p>
<p align="center">
    <span>Sister project: Lambda Checklist</span>
    <br>
  <a href="https://github.com/jeshan/lambda-checklist">🎮 Lambda Checklist</a>
</p>
<p align="center">
    <span>Inspired by the Front-end Checklist</span>
    <br>
  <a href="https://github.com/thedaviddias/Front-End-Checklist#---------front-end-checklist-">🎮 Front-End Checklist</a>
</p>


## Table of Contents

See https://cfnchecklist.com

---

## How to use?

All items in the **CloudFormation Checklist** are required for the majority of the projects, but some elements can be omitted or are not essential (in the case of an administration web app, you may not need RSS feed for example). We choose to use 3 levels of flexibility:

* ![Low][low_img] means that the item is **recommended** but can be omitted in some particular situations.
* ![Medium][medium_img] means that the item is **highly recommended** and can eventually be omitted in some really particular cases. Omitting these that engineers may not work at full speed.
* ![High][high_img] means that the item **can't be omitted** by any reason. You may risk security issues in your infra. The testing priority needs to be on these elements first.

Some resources possess an emoticon to help you understand which type of content / help you may find on the checklist:

* 📖: documentation or article
* 🛠: online tool / testing tool
* 📹: media or video content

> You can contribute to the ***CloudFormation Checklist App*** reading the [README_APP file](https://github.com/jeshan/cloudformation-checklist/blob/master/README_APP.md) which explains everything about the project.

## CloudFormation Checklist Badge

If you want to show you are following the rules of the CloudFormation Checklist, put this badge on your README file!

➔ [![CloudFormation_Checklist followed](https://img.shields.io/badge/CloudFormation_Checklist-followed-brightgreen.svg)](https://github.com/jeshan/cloudformation-checklist/)

```md
[![CloudFormation_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/jeshan/cloudformation-checklist/)
```

## Contributing

**Open an issue or a pull request to suggest changes or additions.**

## Authors

Original checklist application author:
**[David Dias](https://github.com/thedaviddias)**

Modified for AWS CloudFormation:
**[Jeshan G. BABOOA](https://github.com/jeshan)**

## Infrastructure
The website is a static one deployed on AWS. Contents are stored in Amazon S3 while CloudFront cdn is used to deliver the contents. This is how the stack is:

![](/diagram-app.png)

This is how the deployment pipeline has been set up:

![](/diagram-deployment.png)


*Images automatically generated with [cfnbuddy](https://www.cfnbuddy.com)*


## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

[low_img]: https://front-end-checklist.now.sh/low.svg
[medium_img]: https://front-end-checklist.now.sh/medium.svg
[high_img]: https://front-end-checklist.now.sh/high.svg

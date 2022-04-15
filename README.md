# prismic-dev-msg

[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Conventional Commits][conventional-commits-src]][conventional-commits-href]
[![License][license-src]][license-href]

<!-- TODO: Replacing link to Prismic with [Prismic][prismic] is useful here -->

An extended message delivery facilitator for [Prismic][prismic] packages.

### Wait, what? What is this thing?

It makes providing extended error and warning messages in packages an easy-to-follow and standard process.

It builds a Netlify `_redirects` file to handle redirects like the following:

```
https://prismic.dev/msg/client/missing-fetch
 → https://github.com/prismicio/prismic-client/blob/HEAD/messages/missing-fetch.md

https://prismic.dev/msg/client
 → https://github.com/prismicio/prismic-client/blob/HEAD/messages
```

It also handles versioned messages based on Git tags:

```
https://prismic.dev/msg/client/vX.X.X/missing-fetch
 → https://github.com/prismicio/prismic-client/blob/vX.X.X/messages/missing-fetch.md

https://prismic.dev/msg/client/vX.X.X
 → https://github.com/prismicio/prismic-client/blob/vX.X.X/messages
```

With these redirects in place, linking to Markdown files in error and warning messages becomes a simple process.

The built site can be deployed directly to Netlify.

## Contributing

Whether you're helping us fix bugs, improve the docs, or spread the word, we'd love to have you as part of the Prismic developer community!

**Asking a question**: [Open a new topic][forum-question] on our community forum explaining what you want to achieve / your question. Our support team will get back to you shortly.

**Reporting a bug**: [Open an issue][repo-bug-report] explaining your application's setup and the bug you're encountering.

**Suggesting an improvement**: [Open an issue][repo-feature-request] explaining your improvement or feature so we can discuss and learn more.

**Submitting code changes**: For small fixes, feel free to [open a pull request][repo-pull-requests] with a description of your changes. For large changes, please first [open an issue][repo-feature-request] so we can discuss if and how the changes should be implemented.

For more clarity on this project and its structure you can also check out the detailed [CONTRIBUTING.md][contributing] document.

## License

```
   Copyright 2013-2022 Prismic <contact@prismic.io> (https://prismic.io)

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```

<!-- Links -->

[prismic]: https://prismic.io

<!-- TODO: Replace link with a more useful one if available -->

[prismic-docs]: https://prismic.io/docs
[changelog]: ./CHANGELOG.md
[contributing]: ./CONTRIBUTING.md

<!-- TODO: Replace link with a more useful one if available -->

[forum-question]: https://community.prismic.io
[repo-bug-report]: https://github.com/prismicio/prismic-dev-msg/issues/new?assignees=&labels=bug&template=bug_report.md&title=
[repo-feature-request]: https://github.com/prismicio/prismic-dev-msg/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=
[repo-pull-requests]: https://github.com/prismicio/prismic-dev-msg/pulls

<!-- Badges -->

[github-actions-ci-src]: https://github.com/prismicio/prismic-dev-msg/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/prismicio/prismic-dev-msg/actions?query=workflow%3Aci
[conventional-commits-src]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-href]: https://conventionalcommits.org
[license-src]: https://img.shields.io/badge/license-Apache--2.0-green
[license-href]: https://github.com/prismicio/prismic-dev-msg

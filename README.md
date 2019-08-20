# Hestia

The virgin goddess of the hearth, the right ordering of domesticity,
the family, **the home**, and the state. Bring back our home to the
internet by using [Sapper][1]/[Svelte][2]!

## Requirements

* Node.js 10.16.3
* NPM 6.10.3

**Recommendation**: Use [tj/n][3] as your Node.js version manager.

## Installation

First, populate and install the dependencies.

```
$ npm i
```

Second, run server in development mode.

```
$ npm run dev
```

Third, open http://localhost:3000/ and you are now ready to develop!

## Reserved Branches

Please remember that these branches below are not allowed for direct
commit push except you are an admin and it is needed.
Consider to send a pull request instead by creating a new branch.

### Master

This branch is our **production level** branch.
Our https://www.proclub.tech/ is using this branch.

### Staging

This branch is our **staging level** branch.
Our https://hestia.proclub.dev/ is using this branch.

## Branch Naming Convention

### Adding a New Feature

Please use `f/your_feature_here` as the branch name.

### Fixing Some Bugs

Please use `b/your_fixes_here` as the branch name.

### Improving Something

Please use `i/your_improvement_here` as the branch name.

## Development Process

First, create a new branch for adding our new feature or anything.
It will be using `master` branch as the base.

```
$ git checkout -b f/our_new_feature
```

Now, doing some changes.
If you are done, push the commits.

```
$ git commit -m "Your descriptive commit here"
$ git push origin f/our_new_feature
```

Second, send a pull request to `staging` branch for live testing.
If there is any conflict, please fix it.

Netlify build preview will be available. Consider yourself to check the
result and validate that Hestia is fine.

If everything is fine, squash your several latest commits.
Let say that your changes took about five commits.

```
$ git rebase -i HEAD~5
```

Now, push your squashed commit.

```
$ git push origin f/our_new_feature
```

If there is any problem, just use `-f` flag.

Last, send a pull request to `master` branch from you `f/our_new_feature`
and we are all done.

## Maintainer

Current maintainer is [wisn][4].

## License

Licensed under [The MIT License](LICENSE).

[1]: https://sapper.svelte.dev
[2]: https://svelte.dev
[3]: https://github.com/tj/n
[4]: https://github.com/wisn

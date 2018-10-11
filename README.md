# call-saul

> Randomly 🎲 select a license 📝 for your project.

Please don't sue me.

## Install

First, let's install the package.

```shell
npm install -g call-saul
```

Next, you'll need a personal access token to use Github's API. You can create one at https://github.com/settings/tokens

The token can be fed to Saul in two ways:

- Using an environment variable: `GITHUB_TOKEN=abc123`.
- Call the CLI with the `--token abc123` flag.

## Usage

Lets create a random LICENSE file in your current directory.

```shell
call-saul
```

_Congratulations, you've just made some corporate lawyer very happy!_

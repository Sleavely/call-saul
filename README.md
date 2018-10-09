# call-saul

> Randomly 🎲 select a license 📝 for your project.

Please don't sue me.

## Install

First, let's install the package.

```shell
npm install -g call-saul
```

Next, you'll need a personal access token to use Github's API. You can create one at https://github.com/settings/tokens

The token can be fed to Saul in one of three ways:

- Make it a temporary environment variable in your terminal by running `export GITHUB_TOKEN=abc123`.
- Create a `.env` file with the `GITHUB_TOKEN` in the directory of the _call-saul_ module.
- Call the CLI with the `--token` flag followed by the token.

## Usage

Lets create a random LICENSE file in your current directory.

```shell
call-saul
```

_Congratulations, you've just made some corporate lawyer very happy!_

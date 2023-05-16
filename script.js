module.exports = async ({ package, cwd, core, exec }) => {
  await exec
    .exec("hermit", ["info", package, "--json"], {
      cwd,
      listeners: {
        stdout: (data) => {
          const info = JSON.parse(data.toString());
          core.setOutput("version", info.version);
        },
      },
    })
    .catch((error) => {
      core.setFailed(error.message);
    });
};

module.exports = async ({ package, cwd, core, exec }) => {
  await exec
    .exec("hermit", ["list", "--json"], {
      cwd,
      listeners: {
        stdout: (data) => {
          const info = JSON.parse(data.toString());
          const layer = info.find(l => l.Reference.Name == package)
          const version = layer?.Reference.Version;

          if (!package) {
            core.setFailed(`${package} not found`);
          } else if (!version) {
            core.setFailed(`No version found for ${package}, version: ${version}`);
          } else {
            core.setOutput("version", version);
          }
        },
      },
    })
    .catch((error) => core.setFailed(error.message));
};

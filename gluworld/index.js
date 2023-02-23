import * as Gluon from "../mod.ts";

(async () => {
  const browsers = Deno.args.slice(2).filter((x) => !x.startsWith("-"));

  // use args as browsers to use
  if (browsers.length > 0) {
    for (const forceBrowser of browsers) {
      await Gluon.open("index.html", {
        windowSize: [800, 500],
        forceBrowser,
      });
    }

    return;
  }

  await Gluon.open("index.html", {
    windowSize: [800, 500],
  });
})();

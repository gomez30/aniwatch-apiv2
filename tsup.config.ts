import { defineConfig } from "tsup";

export default defineConfig({
    format: ["esm"],
    entry: ["./src/index.ts"],
    // Skip DTS on Vercel to avoid build timeout/failure; not needed for serverless deploy
    dts: process.env.VERCEL !== "1",
    shims: true,
    clean: true,
    splitting: true,
    // minify: true,
    // minifySyntax: true,
    // minifyIdentifiers: true,
    // minifyWhitespace: true,
    globalName: "aniwatch",
    skipNodeModulesBundle: true,
});

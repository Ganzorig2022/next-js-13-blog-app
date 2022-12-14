# BLOG APP USING Typescript, Next JS 13, Tailwind CSS, Auth, CMS-Sanity

# 1 - Preparing project

1. npx create-next-app -e with-tailwindcss next-js-13-blog-app
2. delete "pages/\_app.tsx and index.tsx"
3. next.config.js dr
   experimental: {
   appDir: true,
   },

4. "/app/page.tsx" folder/file uusgene.

# 2 - Preparing CMS (content management system)

0.  npm i next-sanity
1.  https://www.sanity.io/sonny
2.  npm create sanity@latest -- --coupon sonny2022
    -- Blog schema-g songono.Busad ni default-aaraa...
    -- npm-iig songono.
3.  sanity foldert bga "package.json"-oos vndsen foldert bga "package.json" folder luu "dependencies: talbart:
    "sanity": "^3.0.0",
    "styled-components": "^5.2.0",
    "@sanity/vision": "^3.0.0"

    "devDependencies" talbart:
    "@sanity/eslint-config-studio": "^2.0.1",

        ... huulj tawiad npm i or yarn gej bicheed shineer node-module-aa update-lana.

4.  sanity-iin folder dotroos
    https://www.sanity.io/docs/configuration

    "/schemas folder", "sanity.cli.ts", "sanity.config.ts" tus tus MOVE hiine.

5.  .env.local file uusgeed
    NEXT_PUBLIC_SANITY_PROJECT_ID= "sanity.config.ts" file-aas awna...
    NEXT_PUBLIC_SANITY_DATASET="sanity.config.ts" file-aas awna...
    NEXT_PUBLIC_SANITY_API_VERSION=2022-12-15 (just date)
6.  sanity.config.ts, sanity.cli.ts file dotor
    projectId, dataset-vvdee oruulj ogno.
7.  sanity.cli.ts
8.  https://www.npmjs.com/package/next-sanity#next-sanitystudio-dev-preview
9.  "/app/studio" folder file-uudaa uusgene. deerh linkees huulj tawiw.

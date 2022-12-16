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

==============================================

# Push to remote

0. Create new repo on remote
1. git remote add origin https://github.com/Ganzorig2022/next-js-13-blog-app.git
2. git add .
3. git commit -m ""
4. git push --set-upstream origin main

=================================================

# 3 - Creating theme for sanity-studio

http://localhost:3000/studio

1. "theme.ts" file uusgeed...
   http://localhost:3000/studio deerh theme ongiig oorchlow.
2.
3. npm i @heroicons/react

# 4 - BACKEND development

1. "/app/(user)" folder uusgeed "layout, page" file-uudiig MOVE hiiw.
2. "/app/(admin)" folder uusgeed "/studio/[[...index]]" file-uudiig MOVE hiiw.
3. "app/(user)/page.tsx" folder dotor MAIN COMPONENT-uudee orj ehelne. HOME PAGE gesen vg...
4. "/lib" foldert file-uud uusgew.

# 5 - Line -clamp

Text-iig heden line-aar haruulhiig zaaj ogdog.
className='line-clamp-2' gewel 2 moriig l haruulna.

//https://tailwindcss.com/blog/multi-line-truncation-with-tailwindcss-line-clamp

npm install @tailwindcss/line-clamp

# 6 - Client Side Route

-- Dynamic route

1. "/components/ClientSideRoute.tsx" file uusgew.
2. "/components/BlogList.tsx" file dotor blog-iin gaduur WRAP hiiw.
3. Ingesneer DYNAMIC ROUTE buyu ali 1 blog card dr darhad doorh zam ruu userne.

-- "http://localhost:3000/posts/javascript" iim zam ruu vserne.

# 7 - Add custom field to sanity/studio

1. "/schemas/post.ts" dotor "description" defineField shineer uusgew.
2. "http://localhost:3000/studio/desk/post" studio dotor "description" ni FIELD orj irsen bn.

# 8 - Deploy to VERCEL

1. terminal dr "vercel"
2. default songoltuudiig songono.
3. env file-aa vercel dr oruulj ogno.
4. https://next-js-13-blog-74dmrbokl-ganzorig2022.vercel.app/

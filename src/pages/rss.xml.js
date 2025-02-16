import rss, { pagesGlobToRssItems, pagesGlobToRssItems} from '@astrojs/rss'

export async function GET(context) {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</languange>`,
    })
}
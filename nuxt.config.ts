import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Ka lumières',
            favicon: 'favicon.ico',
            meta: [

                // Content security policy
                { httpEquiv: "Content-Security-Policy", content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; media-src 'self' data:;" },

                { name: 'desc', content: 'Services dans le domaine juridique et dans la rédaction de texte (légal, slogan, marketing) de tout type' },
                { name: 'lang', content: 'fr' },
                { name: 'author', content: 'contact@rothzeta.com' },

                // Robots
                { name: 'robots', content: 'index, follow' },
                { name: 'googlebot', content: 'index, follow' },

                // Generator
                { name: 'generator', content: 'Nuxt.js' },

                // Rating
                { name: 'rating', content: 'general' },

                //twitter card meta header
                { name: 'twitter:card', content: 'summary' },

                // Open Graph / Facebook
                { property: 'og:title', content: 'Ka lumières' },
                { property: 'og:description', content: 'Services dans le domaine juridique et dans la rédaction de texte (légal, slogan, marketing) de tout type' },
                { property: 'og:image', content: 'https://kalumieres.fr/images/logo.png' },
                { property: 'og:url', content: 'https://kalumieres.fr' },
                { property: 'og:type', content: 'website' },
                { property: 'og:locale', content: 'fr_FR' },
                { property: 'og:site_name', content: 'Ka lumières' },

            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'manifest', href: '/site.webmanifest' },
            ],
        }
    },
    css: [
        '@/assets/sass/app.scss'
    ],
    modules: [
        // Simple usage
        'nuxt-purgecss',
        // With options
        // ['nuxt-purgecss', { /* module options */ }],
    ]
})

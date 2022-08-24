module.exports = {
    env: {
        webpack5: false,
        DB_LOCAL_URI: 'mongodb://localhost:27017/Alex_Waterson_Rosso_thecapstone.vercel.app',
        DB_URI: 'mongodb+srv://thefirst1:<password>@cluster0.eoqoj9b.mongodb.net/?retryWrites=true&w=majority',

        STRIPE_API_KEY: 'pk_test_51LOrwnKNkWwS7FOTQlW1poSEN0l7OrrtnXkNRc3NgU0wuH9ORssmUBumBA8PKLzpeEzO15hVGUkgV0nBPFEK8qsS00gtFPXznK',
        STRIPE_SECRET_KEY: 'sk_test_51LOrwnKNkWwS7FOTGePfJppP7oAcfVf7ftIfenIbRhWNuBpeJygIiFVclT3zaIvl9uwQuTjatHbB3rC3lLRhDBnb00NVEjnD5L',

        STRIPE_WEBHOOK_SECRET: 'whsec_rtfPNARwx0Du5TOkeHX9bWzLxhdrouHG',

        CLOUDINARY_CLOUD_NAME: 'dwatp1hye',
        CLOUDINARY_API_KEY: '149683927283628',
        CLOUDINARY_API_SECRET: '82GWZf4GamvQUIXaZxvPlp3zPvE',

        SMTP_HOST: "smtp.mailtrap.io",
        SMTP_PORT: "2525",
        SMTP_USER: "6e83813f533068",
        SMTP_PASSWORD: "155c9aec20ba8f",
        SMTP_FROM_EMAIL: "noreply@yours.com",
        SMTP_FROM_NAME: "Yours",

        NEXTAUTH_URL: 'https://alex_waterson_rosso_thecapstone.vercel.app',
    },
    images: {
        domains: ['res.cloudinary.com'],
    },
}
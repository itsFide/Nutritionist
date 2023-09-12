/*
=======================================================
УСТАНОВКА ИСХОДНОЙ И КОНЕЧНОЙ ДИРЕКТОРИИ
=======================================================
*/
const buildFolder = `./dist`;
const srcFolder = "./src";

/*
=======================================================
НАСТРОЙКА ПУТЕЙ ДЛЯ ПРОЕКТА
=======================================================
*/
export const path = {
    src: {
        js: `${srcFolder}/js/*.js`,
        separateJS: `${srcFolder}/js/separateJS/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/images/**/*.svg`,
        html: `${srcFolder}/**/*.html`,
        pages: `${srcFolder}/pages/**/*.html`,
        fonts: `${srcFolder}/fonts/*.{ttf, woff, woff2}`,
        components: `${srcFolder}/components/**/*.html`,
    },
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        pages: `${buildFolder}/pages/`,
        images: `${buildFolder}/images/`,
        fonts: `${buildFolder}/fonts/`,
    },
};

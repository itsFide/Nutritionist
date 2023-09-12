/*
=======================================================
ИМПОРТЫ ПЛАГИНОВ И НАСТРОЕК GULP
=======================================================
*/
import gulp from "gulp";
import { create } from "browser-sync";
import { path } from "./gulp/config/path.js";
/*
=======================================================
ИМПОРТЫ ЗАДАЧ GULP
=======================================================
*/
import { javascript } from "./gulp/tasks/javascript.js";
import { style } from "./gulp/tasks/styles.js";
import { html, pages } from "./gulp/tasks/html.js";
import { images } from "./gulp/tasks/image.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { cleanDir } from "./gulp/tasks/clean.js";
/*
=======================================================
НАСТРОЙКИ СЕРВЕРА GULP
=======================================================
*/
const server = create();
const serve = () => {
    server.init({
        server: {
            baseDir: path.build.html,
        },
    });
};
/*
=======================================================
ГЛОБАЛЬНЫЕ НАСТРОЙКИ GULP
=======================================================
*/
global.app = {
    isDev: !process.argv.includes("--build"),
    isBuild: process.argv.includes("--build"),
    gulp,
    server,
    path,
};
/*
=======================================================
РАСПРЕДЕЛЕНИЕ ЗАДАЧ
=======================================================
*/
const mainTasks = gulp.series(
    cleanDir,
    gulp.parallel(html, pages, style, javascript, images, fonts)
);

/*
=======================================================
ПРОВЕРКА НА ИЗМЕНЕНИЯ
=======================================================
*/
const watcher = () => {
    gulp.watch(path.src.fonts, fonts);
    gulp.watch([path.src.images, path.src.svg], images);
    gulp.watch(path.src.scss, style);
    gulp.watch(path.src.pages, pages);
    gulp.watch([path.src.html, path.src.components], html);
    gulp.watch([path.src.js, path.src.separateJS], javascript);
};
/*
=======================================================
СЦЕНАРИИ ЗАДАЧ
=======================================================
*/
const dev = gulp.series(mainTasks, gulp.parallel(watcher, serve));
/*
=======================================================
ЗАПУСК ЗАДАЧИ
=======================================================
*/
gulp.task("default", dev);

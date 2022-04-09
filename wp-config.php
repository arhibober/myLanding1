<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'myLanding' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NM6+W,d.$W&go^gYi<TWP01IWdAUW3(o+*57]wnkD*15zdMMn-hNk{;3,2jCw%%m' );
define( 'SECURE_AUTH_KEY',  'D-+n30}z[j-).{9L[C5QT-c~](QkVMI3f{IazMqXLCNOWr!tpMI~4ED#[3y-$<hi' );
define( 'LOGGED_IN_KEY',    'GFkAp++5pv2BxR9Z3Oq:x_Z4HP3:VOw}K`E@8F5F_bo%X8#Z1zP+~z3yPXPO*q/Y' );
define( 'NONCE_KEY',        '!^>GqM6?#GhVi/=uW-$lj)[7Z,M)0Cz&|Tlq.3c,a`:8UJrSJG%Yoh}C[H-,!59Q' );
define( 'AUTH_SALT',        'XAF6<@/YjN@jY:D }w/1r5.s9KOJkvR}2pmI7G1$&#GS]r{4|r>j@+iCV]qEkIG9' );
define( 'SECURE_AUTH_SALT', '#pixWW%cv^>6V*!)l9>.K&`md^D#d)wayx>LT?jba3`6|%M!/`F;.0riUdx^P1Jf' );
define( 'LOGGED_IN_SALT',   '2TfXWeQo%,f58[u <]gueu&G9YF9QV[knOZ 0(Rv^L)S(V~Uv*!pG[1Mdd88o,9)' );
define( 'NONCE_SALT',       'gKYm^rN-wVwoH8%v xEmCmtU8<kLIGUea5#bx_}oDex|Xwm}x{rJp8_B%v/Ev<`g' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';

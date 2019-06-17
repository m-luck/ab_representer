<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'adambra1_wo3389');

/** MySQL database username */
define('DB_USER', 'adambra1_wo3389');

/** MySQL database password */
define('DB_PASSWORD', 'dahHBLhHFkiB');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '?Aw=*Z_g;^^+ib!ld;+H{=Bz+)QknQ>uVMrPc=Jab/rI([pZ$Fr^>ZbJ&l}S>Yj+/&*xXaMzpel^uIITQF$CP<%VH!H&BN)^oc<k[ayYdM<vBiI=gBV]PeR}(Yq@]H;c');
define('SECURE_AUTH_KEY', 'Ypz-e{-*clnjEaQdde[^s&}eb]c*mkYW!V|]hEvg&[!EW-A|sLlDiC?X=wixfpj(g(IKt!weqpxobC>PN<BN]^X+r!]ZWY}XUlj+a?ZD}c]ljH]b&aqcSYTFi_|ytc(J');
define('LOGGED_IN_KEY', '$/]>}bT{S@w<gGtrZafJ<)|=msI}>l)jv@Y;yLC@MC?oBByJ!S_/ykpKn>x/Jy<LZ|$kTO-i)SJC/T=_kDPphgaRPv[)[O/wntFEuKBdjA)RR|C!Dt!MB|UcXHt*mfqS');
define('NONCE_KEY', 'Ayc-tpF*wfxDVuZ*%BkK{jPBG--bp%BrAWo$rB)jq!]?s}neYzfAM_$/sPRa@qjw}(>sAcX/rPj$T^!(yJRuspgWvgQB<c^Wz-)n?uy%IbNux&lhtT-GNnqmtVzWu[>Q');
define('AUTH_SALT', 'uNpbp_+{mZ+mYcvX}ynWQZnZ)dQ-xAJB<C>IXxtJh_YxXhe?GMun-ubu/&sD>k_|eTl>lfBF=kCJH@lE|D)B?]UDNhrE_ohT(<-enXW}U*k$/rSN?)^I|slftNp;sCv=');
define('SECURE_AUTH_SALT', 'ilhA@$FVMprl+iCP?QUiD@%x[dr^a>!_pIOvx(kG-z*<>R+lZT_ml?t<@%nDz+KN?*zXFJQl[jeWm^OMo)->Ll*N>JvMx*ABe-H$(hxErpMUB*?kx>jDrKzm?p!ATuYb');
define('LOGGED_IN_SALT', 'RYpI_u&hEF/Yq^{qVLt?woi>k-$L$djG!N|UPWaWAY=BB(UcfqVKIVr_ESinue@ie*-GlmnQ=uxQWE/_^m*lsTaGwB=*r(<B_F=ye[lYZjlIn{Zyq=ed^O(jBZJ}xi%$');
define('NONCE_SALT', 'UtTZ_oH+$^&NQQ*_==vLkvfrUnX+*M?=AEP]-Q<hPAPQ|nx(t!HyR(?deQE=eu/|pi<n|v_dGvULNtkxbVRimRww!l[M|Uta|C)CD=sLUB(HEj+F!Nv^LlwPPznsD?Lq');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_indq_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/**
 * Include tweaks requested by hosting providers.  You can safely
 * remove either the file or comment out the lines below to get
 * to a vanilla state.
 */
if (file_exists(ABSPATH . 'hosting_provider_filters.php')) {
	include('hosting_provider_filters.php');
}

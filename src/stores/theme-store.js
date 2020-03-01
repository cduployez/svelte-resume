import {writable} from 'svelte/store';
import {themeUtils} from "../utils/theme-utils.js";

export const themeStore = writable({previousTheme: null, currentTheme: themeUtils.defaultTheme()});

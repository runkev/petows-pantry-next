import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#FFFDF4",
    "--my-black": "#000000",
    "--my-green": "#009900",
    "--my-red": "#b30000",
    "--my-yellow": "#ffff4d",
    "--cookie": "#DEA668",
    "--brown": "#67594E",
    "--soft-cookie": "#f2dbc2"
}

export const PetowsPantryTheme = buildLegacyTheme({
    // Base theme
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--component-bg": props["--soft-cookie"],
    "--component-text-color": props["--my-black"],

    //Brand
    "--brand-primary": props["--cookie"],

    // Default button
    "--default-button-color": props["--brown"],
    "--default-button-primary-color": props["--brown"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-danger-color": props["--my-red"],
    "--default-button-warning-color": props["--my-yellow"],

    // State
    "--state-success-color": props["--my-green"],
    "--state-danger-color": props["--my-red"],
    "--state-warning-color": props["--my-yellow"],
    "--state-info-color": props["--brown"],

    // Navbar
    "--main-navigation-color": props["--brown"],
    "--main-navigation-color--inverted": props["--soft-cookie"],

    "--focus-color": props["--brown"],

})  
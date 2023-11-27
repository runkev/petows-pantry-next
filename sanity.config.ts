import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

import Logo from "./components/Logo";
import StudioNavbar from "./components/StudioNavbar";
import { PetowsPantryTheme } from "./sanity/theme";

const config = defineConfig({
  projectId: "79azup8p",
  dataset: "production",
  title: "Petow's Pantry",
  apiVersion: "2023-10-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: PetowsPantryTheme,
})

export default config
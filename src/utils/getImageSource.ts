/**
 * Returns the image source for a given starship title.
 *
 * @param {string} title - The title of the starship.
 *
 * @example
 * ```
 * const imageSource = getImageSource("Millennium Falcon");
 * ```
 * imageSource will be the path to the Millennium Falcon image.
 */
export const getImageSource = (title: string) => {
  const imageName = `${title.toLowerCase().replace(" ", "")}`;

  let source;
  switch (imageName) {
    case "cr90corvette":
      source = require("../../assets/starships/cr90corvette.jpg");
      break;
    case "deathstar":
      source = require("../../assets/starships/deathstar.jpg");
      break;
    case "executor":
      source = require("../../assets/starships/executor.jpg");
      break;
    case "millenniumfalcon":
      source = require("../../assets/starships/millenniumfalcon.jpg");
      break;
    case "rebeltransport":
      source = require("../../assets/starships/rebeltransport.jpg");
      break;
    case "sentinel-classlanding craft":
      source = require("../../assets/starships/sentinel-classlandingcraft.jpg");
      break;
    case "stardestroyer":
      source = require("../../assets/starships/stardestroyer.jpg");
      break;
    case "tieadvanced x1":
      source = require("../../assets/starships/tieadvancedx1.jpg");
      break;
    case "x-wing":
      source = require("../../assets/starships/x-wing.jpg");
      break;
    case "y-wing":
      source = require("../../assets/starships/y-wing.jpg");
      break;
    default:
      source = require("../../assets/starships/default.jpg");
  }
  return source;
};

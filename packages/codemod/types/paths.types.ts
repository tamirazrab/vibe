import { CORE_ICONS_IMPORT_PATH, CORE_IMPORT_PATH, CORE_NEXT_IMPORT_PATH, CORE_TYPES_IMPORT_PATH } from "../src/consts";

export type VibeCorePath =
  | typeof CORE_IMPORT_PATH
  | typeof CORE_NEXT_IMPORT_PATH
  | typeof CORE_ICONS_IMPORT_PATH
  | typeof CORE_TYPES_IMPORT_PATH;

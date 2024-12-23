import general from './general';

const mode = 'ligth';

const backoundColor = general.colors.gray.light;
const textColor = general.colors.black;

// COMPONENTES
const card = general.colors.white;
const scrollbar = {
  thumb: general.colors.white,
  track: general.colors.gray.normal,
};
const dropdown = general.colors.white;
const aside = general.colors.white;
const header = general.colors.white;
const input = {
  bg: general.colors.white,
  borderColor: general.colors.gray.normal,
  color: general.colors.black,
};

const light = {
  general,
  mode,
  backoundColor,
  textColor,
  card,
  scrollbar,
  dropdown,
  aside,
  header,
  input,
};

export default light;

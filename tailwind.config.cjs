module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'dark-violet':'hsl(256, 26%, 20%)'
      },
      fontFamily : {
        sansSerif: ['Karla'],
        serif : ['DM Serif Display'],
      }
    },
  },
  plugins: [],
};

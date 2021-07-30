<template>
  <main>
    <section id="jumbotron">
      <h1>
        <svg width="547" height="447" viewBox="0 0 547 447" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.7447 52.6837C19.6682 172.26 93.7841 219.592 135.35 239.522L135.35 303.047C119.457 303.047 60.7447 282.991 21.6558 209.627C-36.6139 100.264 38.7394 -7.10473 60.7447 0.368817C78.3489 6.34766 80.3365 19.0527 60.7447 52.6837Z" fill="#B6E8FF"/>
          <path d="M528.276 339.93C515.9 288.59 451.444 265.714 420.518 260.881L436.159 325.764C440.396 322.792 454.928 322.504 479.161 345.125C509.454 373.401 393.31 402.875 385.37 413.449C377.43 424.024 386.919 473.763 461.771 432.015C530.389 393.745 535.051 368.035 528.276 339.93Z" fill="#B6E8FF"/>
          <path d="M113.853 234.804C113.853 144.877 186.753 71.9763 276.68 71.9763C366.608 71.9763 439.508 144.877 439.508 234.804L439.508 447.732L113.853 447.732L113.853 234.804Z" fill="#B6E8FF"/>
          <circle cx="335.132" cy="201.404" r="12.5252" fill="#6C6B6F"/>
          <circle cx="201.53" cy="209.754" r="12.5252" fill="#6C6B6F"/>
          <circle cx="193.179" cy="209.754" r="4.17506" fill="#FFFCFC"/>
          <circle cx="326.782" cy="201.404" r="4.17506" fill="#FFFCFC"/>
          <path d="M173.819 280.785C209.474 300.098 295.492 323.571 354.323 262.957" stroke="#6C6B6F" stroke-width="2.94765"/>
          <path d="M316.439 231.026C345.409 215.427 354.323 253.311 354.323 262.225C336.495 283.618 309.754 291.194 298.612 295.651C311.983 282.281 287.47 246.625 316.439 231.026Z" fill="#FFACCA"/>
          <path d="M211.702 276.328C204.571 276.328 198.332 285.241 196.103 289.698L220.616 296.384C220.616 289.698 218.833 276.328 211.702 276.328Z" fill="#FFFCFC"/>
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="113" y="71" width="327" height="377">
            <path d="M113.853 234.804C113.853 144.877 186.753 71.9763 276.68 71.9763C366.608 71.9763 439.508 144.877 439.508 234.804L439.508 447.732L113.853 447.732L113.853 234.804Z" fill="#B6E8FF"/>
            <circle cx="335.132" cy="201.404" r="12.5252" fill="#6C6B6F"/>
            <circle cx="201.53" cy="209.754" r="12.5252" fill="#6C6B6F"/>
            <circle cx="193.179" cy="209.754" r="4.17506" fill="#FFFCFC"/>
            <circle cx="326.782" cy="201.404" r="4.17506" fill="#FFFCFC"/>
          </mask>
          <g mask="url(#mask0)">
            <rect x="98.1821" y="140.837" width="341.337" height="44.569" transform="rotate(-4.13948 98.1821 140.837)" fill="#FD522C"/>
          </g>
        </svg>
      </h1>
    </section>
  </main>
</template>

<script>
  export default {
    methods: {
      setNavbarOnScroll() {
        window.onscroll = () => {
          if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
            document.querySelector(".navbar").classList.remove("transparent");
          } else {
            document.querySelector(".navbar").classList.add("transparent");
          }
        }
      },
    },

    beforeMount() {
      window.addEventListener("scroll", this.setNavbarOnScroll);
    },

    beforeDestroy() {
      window.removeEventListener("scroll", this.setNavbarOnScroll);
    },
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/base/_colours.scss";

  #jumbotron {
    background-color: $primary;
    height: 100vh;
    margin-top: 0;

    @media (max-width: 768px) {
      min-height: 100vh;
    }
  }
</style>
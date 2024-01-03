<template>
  <div :style="bgStyle" class="page-title-container">
    <div class="wraper">
      <div class="grid grid-cols-12">
        <div class="col-span-12">
          <div class="text-center">
            <h2 :class="titleClasses">
              {{ pageTitle }}
            </h2>
            <ul>
              <li v-for="(link, index) in links" :key="index" :class="linkClasses">
                <router-link
                  v-if="link.route"
                  :to="link.route"
                  class="text-white text-[20px] transition-all hover:text-[#3757f7]"
                >
                  {{ link.text }}
                </router-link>
                <span v-else class="text-[#cbd4fd]">{{ link.text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: "Page Title",
    },
    backgroundUrl: {
      type: String,
      default: "../images/page-title.jpg",
    },
    links: {
      type: Array,
      default: () => [{ text: "Home", route: { name: "home" } }, { text: "About" }],
    },
    titleSize: {
      type: String,
      default: "60px",
    },
    titleColor: {
      type: String,
      default: "white",
    },
    titleLeading: {
      type: String,
      default: "60px",
    },
    linkColor: {
      type: String,
      default: "white",
    },
    linkHoverColor: {
      type: String,
      default: "#3757f7",
    },
    linkSize: {
      type: String,
      default: "20px",
    },
    linkClasses: {
      type: String,
      default:
        "inline-block px-[5px] text-[20px] relative font-heading-font sm:text-[18px]",
    },
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${this.backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "400px", // You can modify this default height
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
      };
    },
    titleClasses() {
      return {
        "text-white": this.titleColor === "white",
        "text-[60px]": this.titleSize === "60px",
        "leading-[60px]": this.titleLeading === "60px",
        "sm:text-[30px]": this.titleSize === "30px",
        "sm:leading-[35px]": this.titleLeading === "35px",
        "sm:mb-[10px]": this.titleSize === "30px" || this.titleLeading === "35px",
      };
    },
  },
};
</script>

<style>
/* You can place any additional styling here */
.page-title-container::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #232f4b;
  z-index: -1;
  opacity: 0.7;
}
</style>

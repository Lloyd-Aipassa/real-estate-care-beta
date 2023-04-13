<script>
export default {
    created() {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem('theme', false)
    }
  },
    methods: {
        getLocalstorage: function () {
            const getLocal = localStorage.getItem("theme")
            console.log(getLocal);

            if (getLocal === "false") {
                this.isDarkmode = false
                console.log(this.isDarkmode);
                document.documentElement.className = false
            }
            if (getLocal === "true") {
                this.isDarkmode = true
                console.log(this.isDarkmode);
                document.documentElement.className = true
            }
        }
    },
    beforeMount() {
        this.getLocalstorage()
    },
}
//test
</script>

<script>


    const debounce = (callback, time) => {
        let timeout;
        return function (...args) {
            const fnCall = () => callback.apply(this, args);
            clearTimeout(timeout);
            timeout = setTimeout(fnCall, time);
        };
    };



    module.exports = {
        props: {
            // v-model value
            value: {
                type: Number,
                required: true
            },
            length: {
                type: Number,
                default: 0,
                validator: (val) => val % 1 === 0
            },
            // when number of page buttons exceeds the parent container,
            // it will truncate the buttons automatically
            totalVisible: Number,
            disabled: Boolean
        },

        data: () => ({
            maxButtons: 0
        }),

        computed: {
            isValueLast() {
                return this.value >= this.length;
            },

            isValueFirst() {
                return this.value <= 1;
            },

            items() {
                const maxLength =
                    this.totalVisible > this.maxButtons
                        ? this.maxButtons
                        : this.totalVisible || this.maxButtons;

                if (this.length <= maxLength || maxLength < 1) {
                    return this.getRange(1, this.length);
                }

                const even = maxLength % 2 === 0 ? 1 : 0;
                const left = Math.floor(maxLength / 2);
                const right = this.length - left + 1 + even;

                if (this.value > left && this.value < right) {
                    const start = this.value - left + 2;
                    const end = this.value + left - 2 - even;

                    return [
                        1,
                        "...",
                        ...this.getRange(start, end),
                        "...",
                        this.length
                    ];
                } else if (this.value === left) {
                    const end = this.value + left - 1 - even;

                    return [...this.getRange(1, end), "...", this.length];
                } else if (this.value === right) {
                    const start = this.value - left + 1;

                    return [1, "...", ...this.getRange(start, this.length)];
                } else {
                    return [
                        ...this.getRange(1, left),
                        "...",
                        ...this.getRange(right, this.length)
                    ];
                }
            }
        },

        mounted() {
            this.setMaxButtons();
            window.addEventListener("resize", this.debouncedOnResize);
        },

        beforeDestory() {
            window.removeEventListener("resize", this.debouncedOnResize);
        },

        methods: {
            goNext(e) {
                e.preventDefault();
                this.$emit("input", this.value + 1);
                this.$emit("next");
            },

            goPrevious(e) {
                e.preventDefault();
                this.$emit("input", this.value - 1);
                this.$emit("previous");
            },

            getRange(from, to) {
                const range = [];

                from = from > 0 ? from : 1;

                for (let i = from; i <= to; i++) {
                    range.push(i);
                }

                return range;
            },

            setMaxButtons() {
                const containerWidth =
                    this.$el && this.$el.parentElement
                        ? this.$el.parentElement.clientWidth
                        : window.innerWidth;

                const navButton = this.$refs.navNext.getBoundingClientRect();

                // width of the items considering navItem.height = item.width
                const itemWidth = navButton.height;
                const navItemsWidth = navButton.width * 2;

                this.maxButtons = Math.floor(
                    (containerWidth - navItemsWidth) / itemWidth
                );
            },

            debouncedOnResize: debounce(function () {
                this.setMaxButtons();
            }, 200)
        },
    };
</script>
    <div class="flex flex-row justify-center items-center px-3 py-8 sm:px-6'">

    </div>

    <style>




</style>

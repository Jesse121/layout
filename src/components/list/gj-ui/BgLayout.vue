<template>
    <!-- 组件化背景图布局 author:mrzjd date:2019-1-7 -->
    <div class="page">
        <!-- bgs -->
        <div class="page-bgs">
            <div
                v-for="(bg, ind) in bgs"
                :key="'_bg_' + ind"
                :class="`page-bg bg${ind + 1}`"/>
        </div>
        <!-- 内容 -->
        <div class="page-content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'BgLayout',
    props: {
        bgs: {
            type: Array,
            required: false,
            default: () => []
        }
    }
}
</script>

<style lang="less">
.page {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.page-bgs {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;

    .page-bg {
        width: 100%;
        background-size: cover;
        background-position: center;
    }
}

.page-content {
    position: relative;
    z-index: 2;
}
</style>

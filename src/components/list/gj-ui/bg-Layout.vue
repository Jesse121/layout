<template>
    <!-- 组件化背景图布局 author:mrzjd date:2019-1-7 -->
    <main id="app" v-cloak>
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
    </main>
</template>

<script>
export default {
    name: 'BgLayout',
    props: {
        bgs: { //背景图的个数
            type: Number,
            required: false,
            default: 1
        }
    }
}
</script>

<style lang="less">
#app {
    position: relative;
}

.page-bgs {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;

    .page-bg {
        width: 100%;
        background-position: center;
    }
}

.page-content {
    position: relative;
    overflow: hidden;
    z-index: 2;

}
</style>

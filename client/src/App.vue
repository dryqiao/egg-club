<template>
    <div id="app">
        <v-header></v-header>

        <div class="main">
            <div class="content">
                <router-view/>
            </div>
            <div class="sidebar"></div>
        </div>
        <v-footer></v-footer>
        <top></top>
    </div>
</template>

<script>
    import header from './components/header'
    import footer from './components/footer'
    import top from './components/backtotop'
    export default {
        name: 'App',
        components: {
            'v-header': header,
            'v-footer': footer,
            top
        }
    }

</script>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body {
        background-color: #e1e1e1;
    }

    .main {
        display: flex;
        flex: 1;
        width: 90%;
        margin: 15px auto;
        max-width: 1400px;
        
        .content {
            min-height: 400px;
            flex: 1;
            margin-right: 40px;
            background-color: #ffffff;
        }
        .sidebar {
            min-height: 400px;
            flex: 0 0 250px;
            background-color: #ffffff;
        }
    }

</style>

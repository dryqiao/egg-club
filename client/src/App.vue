<template>
    <div id="app">
        <v-header></v-header>

        <div class="main">
            <div class="content">
                <router-view/>
            </div>
            <div class="sidebar"></div>
        </div>
        <footer></footer>
    </div>
</template>

<script>
    import header from './components/header'
    export default {
        name: 'App',
        components: {
            'v-header': header
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
        // justify-content: space-between;
        flex: 1;
        width: 90%;
        height: 1000px;
        margin: 15px auto;
        max-width: 1400px;
        
        .content {
            min-height: 400px;
            // width: 65%;
            flex: 1;
            margin-right: 40px;
            background-color: #ffffff;
        }
        .sidebar {
            min-height: 400px;
            // width: 250px;
            flex: 0 0 250px;
            background-color: #ffffff;
        }
    }

</style>

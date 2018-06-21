<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>

     <p>{{count}} {{counter}} {{fullName}} {{counter2}}</p>
    <router-link to="/app">app</router-link>
    <router-link to="/app/1213121">app</router-link>
    <router-link :to="{name: 'app'}">app</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/login/exact">login exact</router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer></Footer>

    <!-- <router-view name="a"></router-view> 路由命名 -->
  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapActions,
  mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

// console.log(Header.__docs)

export default {
  components: {
    Header,
    Footer,
    Todo,
  },
  mounted () {
    console.log(this.$route,this.$store)
    let i=1  
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    },1000)


  },
  computed: {
    ...mapState([
      'count'
      
      ]),
    ...mapState({
      counter: 'count'
    }),
    ...mapState({
      counter2: (state) => state.count++
    }),



    ...mapGetters({
      'fullName': 'fullName'
    })

    // count () {
    //   return this.$store.state.count
    // },
    // fullName() {
    //   return this.$store.getters.fullName
    // }
  }



}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>


